/*******************************************************************************
 * The main game logic controller that manages the current game state
 ******************************************************************************/
var _ = require("underscore");
var Util = require("./util.js");
var ActionType = require("../../shared/actionType.js").ActionType;
var AdjudicationMath = require("../../shared/adjudicationMath.js").AdjudicationMath;

//------------------------------------------------------------------------------
this.performOrders = function(prevTurn, newTurn) {
  _.each(prevTurn.players, function(player) {
    _.each(player.orders, function(order) {
      if (order.action == ActionType.IMPLANT) {
        // Find the node and drop its strength down to the right amount
        var serverNode = Util.Shared.getServerNode(newTurn.serverNodes, order.node.color, order.node.index);
        // Implants work differently for non-base server nodes vs base nodes
        if (order.node.index > 0) {
          implantServerNode(newTurn, player, serverNode);
        }
        else {
          implantBaseNode(newTurn, player, serverNode);
        }
      }
    });
  });
}

//------------------------------------------------------------------------------
// Implant only lasts this one turn, so restore all nodes back to their original strength
this.cleanup = function(turn) {
  _.each(turn.serverNodes, function(serverNode) {
    if (serverNode.previousStrength) {
      serverNode.strength = serverNode.previousStrength;
      delete serverNode.previousStrength;
    }
  });

  // If somehow all players' bases were implanted this turn, then reverse that and make it so all players failed their implants
  if (areAllPlayersImplanted(turn)) {
    turn.players.forEach(player => {
      delete player.implanted;

      // Remove any reports for this player's implants at bases this turn
      player.reports = player.reports.filter(report => report.action != ActionType.IMPLANT || report.location.index != 0);
    });
  }
}

//------------------------------------------------------------------------------
// Drop the server node's strength for the turn
var implantServerNode = function(newTurn, player, serverNode) {
  serverNode.previousStrength = serverNode.strength;
  serverNode.strength = Util.Shared.Config.IMPLANT_STRENGTH;

  // Add a report of this action to the acting player
  var newTurnPlayer = Util.Shared.findPlayerByName(newTurn.players, player.name);
  Util.addReport(newTurnPlayer, ActionType.IMPLANT, serverNode.location);
}

//------------------------------------------------------------------------------
// If the implant is successful, then mark the player as being implanted
var implantBaseNode = function(newTurn, player, serverNode) {
  var success = false;

  // Every base implant is a fixed chance of succeeding
  console.log('Server Base Implant attack: Defender = ' + Util.Shared.Config.IMPLANT_BASE_DEFENSE + ' Attacker ('+ player.color + ') = ' + Util.Shared.Config.IMPLANT_BASE_STRENGTH);
  if (AdjudicationMath.captureOddsOneVsOne(Util.Shared.Config.IMPLANT_BASE_DEFENSE, Util.Shared.Config.IMPLANT_BASE_STRENGTH)) {
    success = true;

    var serverNodeOwner = Util.Shared.findPlayerByColor(newTurn.players, serverNode.ownerColor);
    serverNodeOwner.implanted = true;

    // Add a report of this action to the acting player and the attacked player
    Util.addReport(serverNodeOwner, ActionType.IMPLANT, serverNode.location);
  }

  // Add a report of this action to the acting player and the attacked player
  var newTurnPlayer = Util.Shared.findPlayerByName(newTurn.players, player.name);
  Util.addReport(newTurnPlayer, ActionType.IMPLANT, serverNode.location, { success: success });
}

//------------------------------------------------------------------------------
// Are all the players implanted?
var areAllPlayersImplanted = function(turn) {
  return turn.players.every(player => player.isObserver || player.implanted);
}