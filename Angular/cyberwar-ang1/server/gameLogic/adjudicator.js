/*******************************************************************************
 * The main game logic controller that manages the current game state
 ******************************************************************************/
var Attacks = require("./attacks.js");
var Deny = require("./deny.js");
var Expel = require("./expel.js");
var Exploit = require("./exploit.js");
var Investments = require("./investments.js");
var Secure = require("./secure.js");

//------------------------------------------------------------------------------
// Setup the initial state of the game
this.adjudicateTurn = function(prevTurn, newTurn) {
  Investments.applyInvestments(prevTurn, newTurn);
  Secure.performOrders(prevTurn, newTurn);
  Expel.performOrders(prevTurn, newTurn);
  Attacks.performAttacks(prevTurn, newTurn);
  Exploit.performOrders(prevTurn, newTurn);
  Deny.performOrders(prevTurn, newTurn);
};
