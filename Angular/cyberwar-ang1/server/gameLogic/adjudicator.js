/*******************************************************************************
 * The main game logic controller that manages the current game state
 ******************************************************************************/
var _ = require("underscore");
var Util = require("./util.js");
var Color = require("../../shared/color.js").Color;
var ResearchType = require("../../shared/researchType.js").ResearchType;

//------------------------------------------------------------------------------
// Setup the initial state of the game
this.adjudicateTurn = function(prevTurn, newTurn) {
  applyInvestments(prevTurn, newTurn);
};

//------------------------------------------------------------------------------
var applyInvestments = function(prevTurn, newTurn) {
  _.each(prevTurn.players, function(prevPlayer) {
    var currentPlayer = Util.Shared.findPlayerByColor(newTurn.players, prevPlayer.color);
    _.each(ResearchType, function(researchType) {
      currentPlayer.research[researchType] = prevPlayer.research[researchType] + prevPlayer.investments[researchType];
    });
  });
}
