/*******************************************************************************
 * The main game logic controller that manages the current game state
 ******************************************************************************/
var _ = require("underscore");
var Util = require("./util.js");
var ActionType = require("../../shared/actionType.js").ActionType;
var AdjudicationMath = require("../../shared/adjudicationMath.js").AdjudicationMath;

//------------------------------------------------------------------------------
this.performOrders = function(prevTurn, newTurn) {
  _.each(prevTurn.players, function(player) {
    _.each(player.orders, function(order) {
      if (order.action == ActionType.DENY) {
        var attackerNode = Util.Shared.getServerNode(newTurn.serverNodes, order.params.source.color, order.params.source.index);
        var defenderNode = Util.Shared.getServerNode(newTurn.serverNodes, order.node.color, order.node.index);
        performDeny(newTurn, attackerNode, defenderNode);
      }
    });
  });
}

//------------------------------------------------------------------------------
var performDeny = function(turn, attackerNode, defenderNode) {
  console.log('Deny attack: Defender = ' + defenderNode.strength + ' Attacker ('+ attackerNode.color + ') = ' + attackerNode.strength);
  if (AdjudicationMath.captureOddsOneVsOne(attackerNode.strength, defenderNode.strength)) {
    // Remove all exploit links to the node
    _.each(turn.players, function(player) {
      player.exploitLinks = _.reject(player.exploitLinks, function(link) {
        return Util.Shared.isLocationInLink(link, defenderNode.location);
      });
    });

    // Remove all overt links to the node
    turn.overtLinks = _.reject(turn.overtLinks, function(link) {
      return Util.Shared.isLocationInLink(link, defenderNode.location);
    });

    // Remove the server node itself
    turn.serverNodes = _.reject(turn.serverNodes, function(serverNode) {
      return Util.Shared.isSameLocation(serverNode.location, defenderNode.location);
    });
  }
}
