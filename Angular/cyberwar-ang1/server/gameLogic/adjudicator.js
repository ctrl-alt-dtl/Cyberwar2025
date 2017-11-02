/*******************************************************************************
 * The main game logic controller that manages the current game state
 ******************************************************************************/
var Attacks = require("./attacks.js");
var Investments = require("./investments.js");
var Secure = require("./secure.js");

//------------------------------------------------------------------------------
// Setup the initial state of the game
this.adjudicateTurn = function(prevTurn, newTurn) {
  Investments.applyInvestments(prevTurn, newTurn);
  Secure.performOrders(prevTurn, newTurn);
  Attacks.performAttacks(prevTurn, newTurn);
};
