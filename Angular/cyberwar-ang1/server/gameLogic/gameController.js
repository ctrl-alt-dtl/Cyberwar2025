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
    _.times(Config.SERVER_NODES_PER_DOMAIN + 1, function(index) {
      firstTurn.serverNodes.push({ location: { color: color, index: index } });
    });
  });

  // Setup all the overt links
  firstTurn.overtLinks = getOvertLinks(firstTurn.serverNodes);

  newGame.turns.push(firstTurn);
};

//------------------------------------------------------------------------------
// Update the game state using the given actions
this.performAction = function(game, playerColor, action) {
  var currentTurn = Util.getCurrentTurn(game);
  var actingPlayer = Util.Shared.findPlayerByColor(currentTurn.players, playerColor);
  actingPlayer.investments = action.investments;
  if (allPlayersSubmittedTurns(currentTurn)) {
    var newTurn = Util.addNewTurn(game, currentTurn);
    Adjudicator.adjudicateTurn(currentTurn, newTurn);
  }
};

//------------------------------------------------------------------------------
var allPlayersSubmittedTurns = function(turn) {
  return _.every(turn.players, function(player) {
    return Util.Shared.hasPlayerTakenTurn(player);
  });
}

//------------------------------------------------------------------------------
var getOvertLinks = function(serverNodes) {
  var overtLinks = [];
  var processedNodes = [];
  var nodesToProcess = [serverNodes[0].location];
  while(nodesToProcess.length > 0) {
    var nodeBeingProcessed = nodesToProcess.shift();
    if (!isLocationInList(nodeBeingProcessed, processedNodes)) {
      processedNodes.push(nodeBeingProcessed);
      var neighbors = getNeighbors(nodeBeingProcessed);
      _.each(neighbors, function(neighbor) {
        if (!isLocationInList(neighbor, processedNodes)) {
          overtLinks.push({ nodeA: nodeBeingProcessed, nodeB: neighbor });
          nodesToProcess.push(neighbor);
        }
      });
    }
  }
  return overtLinks;
}

//------------------------------------------------------------------------------
var isLocationInList = function(location, list) {
  return _.any(list, function(listLocation) { return listLocation.color == location.color && listLocation.index == location.index; });
}

//------------------------------------------------------------------------------
var getNeighbors = function(location) {
  var neighbors = [];
  switch(location.index) {
    case 0:
      neighbors.push({ color: location.color, index: 1 });
      neighbors.push({ color: location.color, index: 2 });
      break;
    case 1:
      neighbors.push({ color: getClockwiseNeighbor(location.color), index: 2 });
      neighbors.push({ color: location.color, index: 3 });
      neighbors.push({ color: location.color, index: 0 });
      break;
    case 2:
      neighbors.push({ color: location.color, index: 0 });
      neighbors.push({ color: location.color, index: 5 });
      neighbors.push({ color: getCounterClockwiseNeighbor(location.color), index: 1 });
      break;
    case 3:
      neighbors.push({ color: location.color, index: 1 });
      neighbors.push({ color: getClockwiseNeighbor(location.color), index: 5 });
      neighbors.push({ color: location.color, index: 6 });
      neighbors.push({ color: location.color, index: 4 });
      break;
    case 4:
      neighbors.push({ color: location.color, index: 3 });
      neighbors.push({ color: location.color, index: 6 });
      neighbors.push({ color: location.color, index: 7 });
      neighbors.push({ color: location.color, index: 5 });
      break;
    case 5:
      neighbors.push({ color: location.color, index: 4 });
      neighbors.push({ color: location.color, index: 7 });
      neighbors.push({ color: getCounterClockwiseNeighbor(location.color), index: 3 });
      neighbors.push({ color: location.color, index: 2 });
      break;
    case 6:
      neighbors.push({ color: location.color, index: 3 });
      neighbors.push({ color: getClockwiseNeighbor(location.color), index: 7 });
      neighbors.push({ color: location.color, index: 8 });
      neighbors.push({ color: location.color, index: 7 });
      neighbors.push({ color: location.color, index: 4 });
      break;
    case 7:
      neighbors.push({ color: location.color, index: 4 });
      neighbors.push({ color: location.color, index: 6 });
      neighbors.push({ color: location.color, index: 8 });
      neighbors.push({ color: getCounterClockwiseNeighbor(location.color), index: 6 });
      neighbors.push({ color: location.color, index: 5 });
      break;
    case 8:
      neighbors.push({ color: location.color, index: 6 });
      neighbors.push({ color: getClockwiseNeighbor(location.color), index: 8 });
      neighbors.push({ color: getClockwiseNeighbor(getClockwiseNeighbor(location.color)), index: 8 });
      neighbors.push({ color: getOppositeNeighbor(location.color), index: 8 });
      neighbors.push({ color: getCounterClockwiseNeighbor(getCounterClockwiseNeighbor(location.color)), index: 8 });
      neighbors.push({ color: getCounterClockwiseNeighbor(location.color), index: 8 });
      neighbors.push({ color: location.color, index: 7 });
      break;
  }
  return neighbors;
}

//------------------------------------------------------------------------------
var getClockwiseNeighbor = function(color) {
  switch (color) {
    case Color.RED:
      return Color.PURPLE;
    case Color.ORANGE:
      return Color.RED;
    case Color.YELLOW:
      return Color.ORANGE;
    case Color.GREEN:
      return Color.YELLOW;
    case Color.BLUE:
      return Color.GREEN;
    case Color.PURPLE:
      return Color.BLUE;
  }
  return color;
}

//------------------------------------------------------------------------------
var getCounterClockwiseNeighbor = function(color) {
  switch (color) {
    case Color.RED:
      return Color.ORANGE;
    case Color.ORANGE:
      return Color.YELLOW;
    case Color.YELLOW:
      return Color.GREEN;
    case Color.GREEN:
      return Color.BLUE;
    case Color.BLUE:
      return Color.PURPLE;
    case Color.PURPLE:
      return Color.RED;
  }
  return color;
}

//------------------------------------------------------------------------------
var getOppositeNeighbor = function(color) {
  switch (color) {
    case Color.RED:
      return Color.GREEN;
    case Color.ORANGE:
      return Color.BLUE;
    case Color.YELLOW:
      return Color.PURPLE;
    case Color.GREEN:
      return Color.RED;
    case Color.BLUE:
      return Color.ORANGE;
    case Color.PURPLE:
      return Color.YELLOW;
  }
  return color;
}
