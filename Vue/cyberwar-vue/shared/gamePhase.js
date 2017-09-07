/**
 * File: gamePhase.js
 * Created by: David "Ty" Long
 * Date: 7/17/17
 * Info: Enumeration of the different phases in a game
 */

this.GamePhase = function () {
  this.INVALID = "Invalid";
  this.SETUP = "Setup"; // Choosing which player is assigned what position on the board
  this.MAIN = "Main"; // Main game loop
  this.INITIAL_ORDERS = "Initial"; // First round orders adjudication (might be condensed to just ORDERS_ROUND_2)
  this.ORDERS_ROUND_1 = "PhaseOne"; // This phase is for Secure, Implant, and Exploit effects.
  this.ORDERS_ROUND_2 = "PhaseTwo"; // This phase is for the other effects Acquire, Scan, Expel, Analyze, etc.
  this.ORDERS_RESOLUTION = "Resolution"; //
  this.END = "End"; // Conclusion of the game

}
