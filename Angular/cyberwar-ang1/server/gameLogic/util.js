/*******************************************************************************
 * The main game logic controller that manages the current game state
 ******************************************************************************/
var ActionType = require("../../shared/actionType.js").ActionType;
var Color = require("../../shared/color.js").Color;
var ActionUtil = require("../../shared/util/actionUtil.js").ActionUtil;
var EqualityUtil = require("../../shared/util/equalityUtil.js").EqualityUtil;
var ListUtil = require("../../shared/util/listUtil.js").ListUtil;
var NetworkUtil = require("../../shared/util/networkUtil.js").NetworkUtil;
var PlayerUtil = require("../../shared/util/playerUtil.js").PlayerUtil;
this.Shared = new (require("../../shared/util/sharedUtil.js").SharedUtil)(ActionType, Color, ActionUtil, EqualityUtil, ListUtil, NetworkUtil, PlayerUtil);

//------------------------------------------------------------------------------
this.cloneObject = function(object) {
  if (object != undefined) {
    return JSON.parse(JSON.stringify(object));
  }
  return undefined;
}

//------------------------------------------------------------------------------
// Get the most recent turn of the game
this.getCurrentTurn = function(game) {
  return game.turns[game.turns.length - 1];
}

//------------------------------------------------------------------------------
// Get the second to last turn
this.getPreviousTurn = function(game) {
  if (game.turns.length > 1) {
    return game.turns[game.turns.length - 2];
  }
  return null;
}

//------------------------------------------------------------------------------
// Add a new turn to the game and return it
this.addNewTurn = function(game, turnToCopy) {
  game.turns.push(this.cloneObject(turnToCopy));
  var newTurn = this.getCurrentTurn(game);
  ++newTurn.roundNumber;
  console.log("\n++++++++++++++++ Turn Number: " + newTurn.roundNumber + " ++++++++++++++++\n");

  // Reset player information every round
  newTurn.players.forEach(function(player) {
    player.scannedNodes = [];
    player.scannedExploitLinks = [];
    player.reports = [];
    delete player.investments;
    delete player.orders;
    delete player.implanted;
  });

  return newTurn;
};

//------------------------------------------------------------------------------
this.addReport = function(player, actionType, location, params) {
  player.reports.push({ action: actionType, location: location, params: params });
}

//------------------------------------------------------------------------------
// Convert a string to boolean somewhat reliably.  Handy for parsing ENV
this.str2bool = function(strvalue){
  return (strvalue && typeof strvalue == 'string') ? (strvalue.toLowerCase() == 'true') : (strvalue == true);
};
