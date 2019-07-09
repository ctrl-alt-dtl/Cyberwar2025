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
  var actingPlayer = Util.Shared.findPlayerByName(currentTurn.players, playerName);
  actingPlayer.investments = action.investments;
  actingPlayer.orders = action.orders;
  if (allPlayersSubmittedTurns(currentTurn)) {
    var newTurn = Util.addNewTurn(game, currentTurn);
    Adjudicator.adjudicateTurn(currentTurn, newTurn);
  }
};

//------------------------------------------------------------------------------
// Change the given observer player's color
this.setObserverColor = function(game, playerName, color) {
  var currentTurn = Util.getCurrentTurn(game);
  var actingPlayer = Util.Shared.findPlayerByName(currentTurn.players, playerName);
  if (actingPlayer.isObserver) {
    actingPlayer.color = color;
  }
}

//------------------------------------------------------------------------------
var allPlayersSubmittedTurns = function(turn) {
  return _.every(turn.players, function(player) {
    // Check to see if this player was eliminated
    return Util.Shared.isPlayerEliminated(turn.serverNodes, player) || Util.Shared.hasPlayerTakenTurn(player);
  });
}

//------------------------------------------------------------------------------
var getOvertLinks = function(serverNodes) {
  var overtLinks = [];
  var processedNodes = [];
  var nodesToProcess = [serverNodes[0].location];
  while(nodesToProcess.length > 0) {
    var nodeBeingProcessed = nodesToProcess.shift();
    if (!Util.Shared.isLocationInList(nodeBeingProcessed, processedNodes)) {
      processedNodes.push(nodeBeingProcessed);
      var neighbors = Util.Shared.getNeighbors(nodeBeingProcessed);
      _.each(neighbors, function(neighbor) {
        if (!Util.Shared.isLocationInList(neighbor, processedNodes)) {
          overtLinks.push({ nodeA: nodeBeingProcessed, nodeB: neighbor });
          nodesToProcess.push(neighbor);
        }
      });
    }
  }
  return overtLinks;
}
