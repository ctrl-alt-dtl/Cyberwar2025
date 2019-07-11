/*******************************************************************************
 * The main game logic controller that manages the current game state
 ******************************************************************************/
var _ = require("underscore");
var Util = require("./util.js");
var ActionType = require("../../shared/actionType.js").ActionType;

//------------------------------------------------------------------------------
this.performOrders = function(prevTurn, newTurn) {
  _.each(prevTurn.players, function(player) {
    _.each(player.orders, function(order) {
      if (order.action == ActionType.IMPLANT) {
        // Find the node and drop its strength down to the right amount
        var serverNode = Util.Shared.getServerNode(newTurn.serverNodes, order.node.color, order.node.index);
        serverNode.previousStrength = serverNode.strength;
        serverNode.strength = Util.Shared.Config.IMPLANT_STRENGTH;

        // Add a report of this action to the acting player
        var newTurnPlayer = Util.Shared.findPlayerByName(newTurn.players, player.name);
        Util.addReport(newTurnPlayer, ActionType.IMPLANT, order.node);
      }
    });
  });
}

//------------------------------------------------------------------------------
// Implant only lasts this one turn, so restore all nodes back to their original strength
this.cleanup = function(turn) {
  _.each(turn.serverNodes, function(serverNode) {
    if (serverNode.previousStrength) {
      serverNode.strength = serverNode.previousStrength;
      delete serverNode.previousStrength;
    }
  });
}
