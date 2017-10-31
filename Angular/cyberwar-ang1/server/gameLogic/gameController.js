/*******************************************************************************
 * The main game logic controller that manages the current game state
 ******************************************************************************/
var _ = require("underscore");
var Adjudicator = require("./adjudicator.js");
var Util = require("./util.js");
var Color = require("../../shared/color.js").Color;

//------------------------------------------------------------------------------
// Setup the initial state of the game
this.initializeNewGame = function(newGame) {
  var firstTurn = { players: [] };
  // Add all players to the game
  _.each(Color, function(color) {
    firstTurn.players.push({ name: color, color: color, research: {} });
  });
  newGame.turns.push(firstTurn);
};

//------------------------------------------------------------------------------
// Update the game state using the given actions
this.performAction = function(game, playerColor, action) {
  var currentTurn = Util.getCurrentTurn(game);
  var actingPlayer = Util.Shared.findPlayerByColor(currentTurn.players, playerColor);
  actingPlayer.investments = action.investments;
  if (allPlayersSubmittedTurns(currentTurn)) {
    var newTurn = Util.addNewTurn(game, currentTurn);
    Adjudicator.adjudicateTurn(currentTurn, newTurn);
  }
};

//------------------------------------------------------------------------------
var allPlayersSubmittedTurns = function(turn) {
  return _.every(turn.players, function(player) {
    return player.investments;
  });
}
