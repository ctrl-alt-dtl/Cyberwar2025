/*******************************************************************************
 * The main game logic controller that manages the current game state
 ******************************************************************************/
var _ = require("underscore");
var Color = require("../../shared/color.js").Color;

//------------------------------------------------------------------------------
// Setup the initial state of the game
this.initializeNewGame = function(newGame) {
  var firstTurn = { players: [] };
  // Add all players to the game
  _.each(Color, function(color) {
    firstTurn.players.push({ name: color, color: color });
  });
  newGame.turns.push(firstTurn);
};

//------------------------------------------------------------------------------
// Update the game state using the given actions
this.updateGameState = function(game, playerName, submittedTurn) {
  //switch (submittedTurn.phase) {
  //  case GamePhase.SETUP:
  //    return Setup.updateGameState(game, playerName, submittedTurn);
  //  case GamePhase.MAIN:
  //    return Main.updateGameState(game, playerName, submittedTurn);
  //}
  //return false;
  return true;
};
