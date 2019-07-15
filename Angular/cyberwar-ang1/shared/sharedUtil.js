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
    SECURE_STRENGTH: 1,
    IMPLANT_STRENGTH: 1,
    IMPLANT_BASE_STRENGTH: 1,
    IMPLANT_BASE_DEFENSE: 4
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
    return _.find(players, function(player) { return !player.isObserver && player.color == color; });
  };

  //------------------------------------------------------------------------------
  // Has this player taken their turn?
  this.hasPlayerTakenTurn = function(player) {
    return player.isObserver || player.implanted || player.investments || player.orders.length > 0;
  }

  //------------------------------------------------------------------------------
  // Has this player taken their turn?
  this.isPlayerEliminated = function(serverNodes, player) {
    var playerBase = this.getServerNode(serverNodes, player.color, 0);
    var neighbors = this.getNeighbors(playerBase.location);
    return !this.getServerNode(serverNodes, neighbors[0].color, neighbors[0].index) && !this.getServerNode(serverNodes, neighbors[1].color, neighbors[1].index);
  }

  //------------------------------------------------------------------------------
  // Get the server node from the given domain color and index
  this.getServerNode = function(serverNodes, color, index) {
    return _.find(serverNodes, function(serverNode) { return serverNode.location.color == color && serverNode.location.index == index; });
  }

  //------------------------------------------------------------------------------
  this.getServerNodeDisplayedColor = function(serverNode, player, positivelyLinkedNodes) {
    // If this is the player's node, they see the real color
    if (player.color == serverNode.ownerColor) {
      return serverNode.ownerColor;
    }
    else {
      // See if they have scanned the node and if so, display the scanned information
      var scannedNode = this.getNodeInList(serverNode, player.scannedNodes)
      if (scannedNode) {
        return scannedNode.ownerColor;
      }
      // Otherwise, if this is part of the player's network or in their domain, show a color
      else if (this.isLocationInList(serverNode.location, positivelyLinkedNodes) || serverNode.location.color == player.color || this.isLocationInLinkList(serverNode.location, player.exploitLinks)) {
        // If the node has a manipulate color, show that
        if (serverNode.manipulateColor) {
          return serverNode.manipulateColor;
        }
        // Otherwise, show the owner's color
        else {
          return serverNode.ownerColor;
        }
      }
    }
    // Otherwise, it's grey
    return '';
  }

  //------------------------------------------------------------------------------
  this.getServerNodeManipulatedColor = function(serverNode, player) {
    // If this node is manipulated
    if (serverNode.manipulateColor) {
      // If the current player owns it, then return the manipulated color
      if (player.color == serverNode.ownerColor) {
        return serverNode.manipulateColor;
      }

      // If the player has scanned the node, then display the scanned information
      var scannedNode = this.getNodeInList(serverNode, player.scannedNodes)
      if (scannedNode) {
        return scannedNode.manipulateColor;
      }
    }

    // Otherwise, it's default
    return '';
  }

  //------------------------------------------------------------------------------
  this.getServerNodeDisplayedText = function(serverNode, player, positivelyLinkedNodes) {
    // If the player owns this node, it is part of the player's network, or in their domain, show the server strength
    if (player.color == serverNode.ownerColor || this.isLocationInList(serverNode.location, positivelyLinkedNodes) || serverNode.location.color == player.color || this.isLocationInLinkList(serverNode.location, player.exploitLinks)) {
      return serverNode.strength;
    }
    // See if they have scanned the node and if so, display the scanned information
    var scannedNode = this.getNodeInList(serverNode, player.scannedNodes)
    if (scannedNode) {
      return scannedNode.strength;
    }
    // Otherwise, it's grey
    return 0;
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
    return _.any(linkList, function(link) { return this.isLocationInLink(link, location); }, this);
  }

  //------------------------------------------------------------------------------
  this.isLocationInNodeList = function(location, nodeList) {
    return _.any(nodeList, function(node) { return this.isSameLocation(node.location, location); }, this);
  }

  //------------------------------------------------------------------------------
  this.areLocationsLinked = function(locationA, locationB, linkList) {
    return _.any(linkList, function(link) { return (this.isSameLocation(link.nodeA, locationA) && this.isSameLocation(link.nodeB, locationB)) || (this.isSameLocation(link.nodeA, locationB) && this.isSameLocation(link.nodeB, locationA)); }, this);
  }

  //------------------------------------------------------------------------------
  this.isLocationInList = function(location, list) {
    return _.any(list, function(listLocation) { return this.isSameLocation(listLocation, location); }, this);
  }

  //------------------------------------------------------------------------------
  this.getNodeInList = function(serverNode, serverNodeList) {
    return _.find(serverNodeList, function(listServerNode) { return this.isSameLocation(listServerNode.location, serverNode.location); }, this);
  }

  // ----------------------------------------------------------------------------
  this.getPositivelyLinkedNodes = function(playerColor, serverNodes, exploitLinks) {
    var playerBase = this.getServerNode(serverNodes, playerColor, 0);
    var linkedNodes = [];
    var processedNodes = [];
    var nodesToProcess = [playerBase.location];
    while(nodesToProcess.length > 0) {
      var nodeBeingProcessed = nodesToProcess.shift();
      if (!this.isLocationInList(nodeBeingProcessed, processedNodes)) {
        processedNodes.push(nodeBeingProcessed);

        // If the current player owns this node or has an exploit link connected to this node, add it to the list and process its neighbors
        var serverNode = this.getServerNode(serverNodes, nodeBeingProcessed.color, nodeBeingProcessed.index);
        if (serverNode) {
          linkedNodes.push(nodeBeingProcessed);
          var neighbors = this.getNeighbors(nodeBeingProcessed);
          _.each(neighbors, function(neighbor) {
            // If this node is owned by the player and hasn't been processed, then process it
            var neighborNode = this.getServerNode(serverNodes, neighbor.color, neighbor.index);
            if (neighborNode && !this.isLocationInList(neighbor, processedNodes) && (neighborNode.ownerColor == playerColor || this.areLocationsLinked(nodeBeingProcessed, neighbor, exploitLinks))) {
              nodesToProcess.push(neighbor);
            }
          }, this);
        }
      }
    }
    return linkedNodes;
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
