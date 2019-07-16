/*******************************************************************************
 * The main game logic controller that manages the current game state
 ******************************************************************************/
var _ = require("underscore");
var Adjudicator = require("./adjudicator.js");
var Util = require("./util.js");
var Config = Util.Shared.Config;
var Color = require("../../shared/color.js").Color;

//------------------------------------------------------------------------------
// Setup the initial state of the game
this.initializeNewGame = function(newGame) {
  var firstTurn = { players: [], serverNodes: [], overtLinks: [] };

  _.each(Color, function(color) {
    // Setup player for this color
    firstTurn.players.push({ name: color, color: color, research: {} });

    // Setup all server nodes for this domain
    firstTurn.serverNodes.push({ location: { color: color, index: 0}, ownerColor: color, strength: 1 }); // Player base
    _.times(Config.SERVER_NODES_PER_DOMAIN, function(index) {
      firstTurn.serverNodes.push({ location: { color: color, index: index + 1 } });
    });
  });

  // Add an observer player
  firstTurn.players.push({ name: "Observer", color: Color.RED, research: {}, isObserver: true });

  // Setup all the overt links
  firstTurn.overtLinks = getOvertLinks(firstTurn.serverNodes);

  newGame.turns.push(firstTurn);
};

//------------------------------------------------------------------------------
// Update the game state using the given actions
this.performAction = function(game, playerName, action) {
  var currentTurn = Util.getCurrentTurn(game);
  var actingPlayer = Util.Shared.List.findPlayerByName(currentTurn.players, playerName);
  actingPlayer.investments = action.investments;
  actingPlayer.orders = action.orders;
  if (allPlayersSubmittedTurns(currentTurn)) {
    var newTurn = Util.addNewTurn(game, currentTurn);
    Adjudicator.adjudicateTurn(currentTurn, newTurn);
  }
};

//------------------------------------------------------------------------------
// Change the given observer player's color for every turn in the game (so history works with changing colors)
this.setObserverColor = function(game, playerName, color) {
  game.turns.forEach(turn => {
    var actingPlayer = Util.Shared.List.findPlayerByName(turn.players, playerName);
    if (actingPlayer.isObserver) {
      actingPlayer.color = color;
    }
  });
}

//------------------------------------------------------------------------------
// Change what the observer is viewing of the board
this.toggleObserverBoardView = function(game, playerName, showFullBoard) {
  game.turns.forEach(turn => {
    var actingPlayer = Util.Shared.List.findPlayerByName(turn.players, playerName);
    if (actingPlayer.isObserver) {
      // Clear out the player's scanned information
      actingPlayer.scannedNodes = [];
      actingPlayer.scannedExploitLinks = [];

      // If we are showing the full board, put every node and exploit link in the player's scanned lists
      if (showFullBoard) {
        actingPlayer.scannedNodes = turn.serverNodes.map(serverNode => serverNode);
        turn.players.forEach(player => player.exploitLinks.forEach(exploitLink => actingPlayer.scannedExploitLinks.push(exploitLink)));
      }
    }
  });
}

//------------------------------------------------------------------------------
var allPlayersSubmittedTurns = function(turn) {
  return _.every(turn.players, function(player) {
    // Check to see if this player was eliminated or has taken their turn
    return Util.Shared.Player.isPlayerEliminated(turn, player) || Util.Shared.Player.hasPlayerTakenTurn(player);
  });
}

//------------------------------------------------------------------------------
var getOvertLinks = function(serverNodes) {
  var overtLinks = [];
  var processedNodes = [];
  var nodesToProcess = [serverNodes[0].location];
  while(nodesToProcess.length > 0) {
    var nodeBeingProcessed = nodesToProcess.shift();
    if (!Util.Shared.List.isLocationInList(nodeBeingProcessed, processedNodes)) {
      processedNodes.push(nodeBeingProcessed);
      var neighbors = Util.Shared.Network.getNeighbors(nodeBeingProcessed);
      _.each(neighbors, function(neighbor) {
        if (!Util.Shared.List.isLocationInList(neighbor, processedNodes)) {
          overtLinks.push({ nodeA: nodeBeingProcessed, nodeB: neighbor });
          nodesToProcess.push(neighbor);
        }
      });
    }
  }
  return overtLinks;
}
