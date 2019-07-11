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
      if (order.action == ActionType.EXPEL) {
        // Remove all exploit links to this node
        var removedLinkInformation = [];
        _.each(newTurn.players, function(newTurnPlayer) {
          if (newTurnPlayer.color != player.color) {
            var newLinks = _.reject(newTurnPlayer.exploitLinks, (link) => Util.Shared.isLocationInLink(link, order.node));
            if (newLinks.length != newTurnPlayer.exploitLinks.length) {
              removedLinkInformation.push({ owner: newTurnPlayer.color, numRemoved: newTurnPlayer.exploitLinks.length - newLinks.length });
              Util.addReport(newTurnPlayer, ActionType.EXPEL, order.node, { attackedPlayer: newTurnPlayer.name });
            }
            newTurnPlayer.exploitLinks = newLinks;
          }
        });

        // Add a report of this action to the acting player
        var newTurnPlayer = Util.Shared.findPlayerByName(newTurn.players, player.name);
        Util.addReport(newTurnPlayer, ActionType.EXPEL, order.node, Util.Shared.isLocationInNodeList(order.node, player.scannedNodes) ? { removedLinks: removedLinkInformation } : undefined);
      }
    });
  });
}
