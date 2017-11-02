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
      if (order.action == ActionType.SECURE) {
        Util.Shared.getServerNode(newTurn.serverNodes, order.node.color, order.node.index).strength += 1;
      }
    });
  });
}
