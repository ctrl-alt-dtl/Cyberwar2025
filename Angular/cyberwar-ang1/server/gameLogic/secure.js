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
        // Add to the strength of the chosen node, but not above its max strength level
        var serverNode = Util.Shared.getServerNode(newTurn.serverNodes, order.node.color, order.node.index);
        serverNode.strength = Math.min(serverNode.strength + Util.Shared.Config.SECURE_STRENGTH, Util.Shared.Config.MAX_NODE_STRENGTH);

        // Add a report of this action to the acting player
        var newTurnPlayer = Util.Shared.findPlayerByName(newTurn.players, player.name);
        Util.addReport(newTurnPlayer, ActionType.SECURE, order.node, { amount: Util.Shared.Config.SECURE_STRENGTH });
      }
    });
  });
}
