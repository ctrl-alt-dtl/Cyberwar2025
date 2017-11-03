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
        var newTurnPlayer = Util.Shared.findPlayerByColor(newTurn.players, player.color);
        var serverNode = Util.Shared.getServerNode(newTurn.serverNodes, order.node.color, order.node.index);
        serverNode.previousStrength = serverNode.strength;
        serverNode.strength = 1;
      }
    });
  });
}

//------------------------------------------------------------------------------
this.cleanup = function(turn) {
  _.each(turn.serverNodes, function(serverNode) {
    if (serverNode.previousStrength) {
      serverNode.strength = serverNode.previousStrength;
      delete serverNode.previousStrength;
    }
  });
}
