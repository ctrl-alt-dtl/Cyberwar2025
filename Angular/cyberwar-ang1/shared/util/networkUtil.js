/*******************************************************************************
 * A set of helper functions for both server and client-side network logic
 ******************************************************************************/
this.NetworkUtil = function(Color, List) {
  // ----------------------------------------------------------------------------
  this.getAccessibleNetwork = function(serverNodes, playerColor) {
    var playerBase = List.getServerNode(serverNodes, playerColor, 0);
    var linkedNodes = [];
    var processedNodes = [];
    var nodesToProcess = [playerBase.location];
    while(nodesToProcess.length > 0) {
      var nodeBeingProcessed = nodesToProcess.shift();
      // If we haven't processed this node before, add it to the list
      if (!List.isLocationInList(nodeBeingProcessed, processedNodes)) {
        processedNodes.push(nodeBeingProcessed);
        linkedNodes.push(nodeBeingProcessed);

        // Don't process neighbors for enemy bases since you can't go through them
        if (nodeBeingProcessed.index != 0 || nodeBeingProcessed.color == playerColor) {
          // Get all the neighbors of the node being processed
          var neighbors = this.getNeighbors(nodeBeingProcessed);
          neighbors.forEach(neighbor => {
            // If the neighbor node still exists and we haven't processed it already, then process it
            var neighborNode = List.getServerNode(serverNodes, neighbor.color, neighbor.index);
            if (neighborNode && !List.isLocationInList(neighbor, processedNodes)) {
              nodesToProcess.push(neighbor);
            }
          });
        }
      }
    }
    return linkedNodes;
  }

  // ----------------------------------------------------------------------------
  this.getPositivelyLinkedNodes = function(playerColor, serverNodes, exploitLinks) {
    var playerBase = List.getServerNode(serverNodes, playerColor, 0);
    var linkedNodes = [];
    var processedNodes = [];
    var nodesToProcess = [playerBase.location];
    while(nodesToProcess.length > 0) {
      var nodeBeingProcessed = nodesToProcess.shift();
      if (!List.isLocationInList(nodeBeingProcessed, processedNodes)) {
        processedNodes.push(nodeBeingProcessed);

        // If the current player owns this node or has an exploit link connected to this node, add it to the list and process its neighbors
        var serverNode = List.getServerNode(serverNodes, nodeBeingProcessed.color, nodeBeingProcessed.index);
        if (serverNode) {
          linkedNodes.push(nodeBeingProcessed);
          var neighbors = this.getNeighbors(nodeBeingProcessed);
          neighbors.forEach(neighbor => {
            // If this node is owned by the player and hasn't been processed, then process it
            var neighborNode = List.getServerNode(serverNodes, neighbor.color, neighbor.index);
            if (neighborNode && !List.isLocationInList(neighbor, processedNodes) && (neighborNode.ownerColor == playerColor || List.areLocationsLinked(nodeBeingProcessed, neighbor, exploitLinks))) {
              nodesToProcess.push(neighbor);
            }
          });
        }
      }
    }
    return linkedNodes;
  }

  //------------------------------------------------------------------------------
  this.getNeighborsToNetwork = function(serverNodes, networkNodes) {
    var networkNeighbors = [];
    var processedNodes = [];

    // Go through every node on the network
    networkNodes.forEach(networkNode => {
      // Go through each of this node's neighbors
      this.getNeighbors(networkNode).forEach(neighbor => {
        // Ignore neighbors we have already processed and base nodes
        if (!List.isLocationInList(neighbor, processedNodes) && neighbor.index > 0) {
          processedNodes.push(neighbor);
          // Ignore neighbors in our network
          if (!List.isLocationInList(neighbor, networkNodes)) {
            // Get the server node to see if the node still exists
            var serverNode = List.getServerNode(serverNodes, neighbor.color, neighbor.index);
            if (serverNode) {
              // It's one of our network neighbors!
              networkNeighbors.push(neighbor);
            }
          }
        }
      });
    });

    return networkNeighbors;
  }

  //------------------------------------------------------------------------------
  this.getDomainAdjacentNodes = function(playerColor) {
    var neighbors = [];
    // Add our clockwise neighbor nodes
    var clockwiseNeighborColor = getClockwiseNeighbor(playerColor);
    neighbors.push({ color: clockwiseNeighborColor, index: 2 });
    neighbors.push({ color: clockwiseNeighborColor, index: 5 });
    neighbors.push({ color: clockwiseNeighborColor, index: 7 });

    // Add the tier one nodes
    Object.values(Color).forEach(color => {
      if (color != playerColor) {
        neighbors.push({ color: color, index: 8 });
      }
    });

    // Add our counterclockwise neighbor nodes
    var counterwiseNeighborColor = getCounterClockwiseNeighbor(playerColor);
    neighbors.push({ color: counterwiseNeighborColor, index: 1 });
    neighbors.push({ color: counterwiseNeighborColor, index: 3 });
    neighbors.push({ color: counterwiseNeighborColor, index: 6 });

    return neighbors;
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
