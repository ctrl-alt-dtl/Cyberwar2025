/*******************************************************************************
 * The main game logic controller that manages the current game state
 ******************************************************************************/
var Attacks = require("./attacks.js");
var Investments = require("./investments.js");

//------------------------------------------------------------------------------
// Setup the initial state of the game
this.adjudicateTurn = function(prevTurn, newTurn) {
  Investments.applyInvestments(prevTurn, newTurn);
  Attacks.performAttacks(prevTurn, newTurn);
};
