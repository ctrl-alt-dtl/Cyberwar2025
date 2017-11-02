/*******************************************************************************
 * A set of helper functions for both server and client-side game logic
 ******************************************************************************/
this.SharedUtil = function(_, Color) {
  //------------------------------------------------------------------------------
  this.Config = {
    SERVER_NODES_PER_DOMAIN: 8,
    MAX_RESEARCH_POINTS: 8,
    MAX_RESEARCH_LEVELS: 3,
    MAX_NODE_STRENGTH: 4,
  }

  //------------------------------------------------------------------------------
  this.cloneObject = function(object) {
    if (object != undefined) {
      return JSON.parse(JSON.stringify(object));
    }
    return undefined;
  }

  //------------------------------------------------------------------------------
  // Get the player with the given name from the list of players
  this.findPlayerByName = function(players, playerName) {
    return _.find(players, function(player) { return player.name == playerName; });
  };

  //------------------------------------------------------------------------------
  // Get the player with the given name from the list of players
  this.findPlayerByColor = function(players, color) {
    return _.find(players, function(player) { return player.color == color; });
  };

  //------------------------------------------------------------------------------
  // Has this player taken their turn?
  this.hasPlayerTakenTurn = function(player) {
    return player.investments || player.orders.length > 0;
  }

  //------------------------------------------------------------------------------
  // Get the server node from the given domain color and index
  this.getServerNode = function(serverNodes, color, index) {
    return _.find(serverNodes, function(serverNode) { return serverNode.location.color == color && serverNode.location.index == index; });
  }

  //------------------------------------------------------------------------------
  this.getServerNodeDisplayedColor = function(serverNode, playerColor) {
    if (serverNode.manipulateColor && playerColor != serverNode.ownerColor) {
      return serverNode.manipulateColor;
    }
    return serverNode.ownerColor;
  }

  //------------------------------------------------------------------------------
  this.isSameLocation = function(locationA, locationB) {
    return locationA.color == locationB.color && locationA.index == locationB.index;
  }

  //------------------------------------------------------------------------------
  this.isLocationInLink = function(link, location) {
    return this.isSameLocation(link.nodeA, location) || this.isSameLocation(link.nodeB, location);
  }

  //------------------------------------------------------------------------------
  this.isLocationInLinkList = function(location, linkList) {
    return _.any(linkList, function(link) { return this.isSameLocation(link.nodeA, location) || this.isSameLocation(link.nodeB, location); }, this);
  }

  //------------------------------------------------------------------------------
  this.isLocationInList = function(location, list) {
    return _.any(list, function(listLocation) { return this.isSameLocation(listLocation, location); }, this);
  }

  //------------------------------------------------------------------------------
  this.getNeighbors = function(location) {
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
}
