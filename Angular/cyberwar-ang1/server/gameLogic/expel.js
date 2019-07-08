/*******************************************************************************
 * The main game logic controller that manages the current game state
 ******************************************************************************/
var _ = require("underscore");
var Util = require("./util.js");
var ActionType = require("../../shared/actionType.js").ActionType;
var AdjudicationMath = require("../../shared/adjudicationMath.js").AdjudicationMath;

//------------------------------------------------------------------------------
this.performOrders = function(prevTurn, newTurn) {
  _.each(prevTurn.players, function(actingPlayer) {
    _.each(actingPlayer.orders, function(order) {
      if (order.action == ActionType.EXPEL) {
        var newTurnPlayer = Util.Shared.findPlayerByName(newTurn.players, actingPlayer.name);
        _.each(newTurn.players, function(newTurnPlayer) {
          if (newTurnPlayer.color != actingPlayer.color) {
            newTurnPlayer.exploitLinks = _.reject(newTurnPlayer.exploitLinks, function(link) {
              return Util.Shared.isLocationInLink(link, order.node);
            });
          }
        });
      }
    });
  });
}
