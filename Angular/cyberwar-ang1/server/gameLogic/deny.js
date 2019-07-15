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
        if (attackerNode && defenderNode) {
          performDeny(player, prevTurn, newTurn, attackerNode, defenderNode);
        }
      }
    });
  });
}

//------------------------------------------------------------------------------
var performDeny = function(player, prevTurn, newTurn, attackerNode, defenderNode) {
  var success = false;

  console.log('Deny attack: Defender = ' + defenderNode.strength + ' Attacker ('+ attackerNode.color + ') = ' + attackerNode.strength);
  if (AdjudicationMath.captureOddsOneVsOne(defenderNode.strength, attackerNode.strength)) {
    success = true;

    // Remove all exploit links to the node
    _.each(newTurn.players, function(player) {
      player.exploitLinks = _.reject(player.exploitLinks, function(link) {
        return Util.Shared.isLocationInLink(link, defenderNode.location);
      });
    });

    // Remove all overt links to the node
    newTurn.overtLinks = _.reject(newTurn.overtLinks, function(link) {
      return Util.Shared.isLocationInLink(link, defenderNode.location);
    });

    // Mark the node for deletion after all actions have been processed
    defenderNode.denied = true;

    // Add a report for whoever owned this node that their node was denied
    var previousOwner = Util.Shared.findPlayerByColor(newTurn.players, defenderNode.ownerColor);
    if (previousOwner) {
      var reportParams = {
        // Add the attacked player to the report
        attackedPlayer: previousOwner.name,
        // Report the defense strength
        defenderStrength: defenderNode.strength
      };
      Util.addReport(previousOwner, ActionType.DENY, defenderNode.location, reportParams);
    }
  }

  // Add a report of this action to the acting player
  var prevTurnPlayer = Util.Shared.findPlayerByName(prevTurn.players, player.name);
  var newTurnPlayer = Util.Shared.findPlayerByName(newTurn.players, player.name);
  var previousOwner = Util.Shared.findPlayerByColor(newTurn.players, defenderNode.ownerColor);
  var previouslyScannedNode = Util.Shared.isLocationInNodeList(defenderNode.location, prevTurnPlayer.scannedNodes);
  var reportParams = {
    // The node the deny attack came from
    attackerNode: attackerNode.location,
    // If there was a previous owner of this node, add that to the report
    attackedPlayer: previousOwner ? previousOwner.name : undefined,
    // Report the strength of the attack
    attackStrength: attackerNode.strength,
    // Report the defense strength if this node was scanned previously
    defenderStrength: previouslyScannedNode ? defenderNode.strength : undefined,
    // Report whether this was a success or not
    success: success
  };
  Util.addReport(newTurnPlayer, ActionType.DENY, defenderNode.location, reportParams);
}

//------------------------------------------------------------------------------
// Actually remove any nodes that were denied this turn from the list of server nodes
this.cleanup = function(newTurn) {
  newTurn.serverNodes = newTurn.serverNodes.filter(node => !node.denied);
}
