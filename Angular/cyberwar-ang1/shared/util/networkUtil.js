/*******************************************************************************
 * A set of helper functions for both server and client-side network logic
 ******************************************************************************/
this.NetworkUtil = function(Color, Equality, List) {
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
            if (neighborNode && !List.isLocationInList(neighbor, processedNodes) && (neighborNode.ownerColor == playerColor || Equality.areLocationsLinked(nodeBeingProcessed, neighbor, exploitLinks))) {
              nodesToProcess.push(neighbor);
            }
          });
        }
      }
    }
    return linkedNodes;
  }

  //------------------------------------------------------------------------------
  this.getNeighborsToNetwork = function(serverNodes, networkNodes, playerColor, exploitLinks) {
    var networkNeighbors = [];
    var processedNodes = [];

    // Go through every node on the network
    networkNodes.forEach(networkNode => {
      // Go through each of this node's neighbors
      this.getNeighbors(networkNode).forEach(neighbor => {
        // Ignore neighbors we have already processed and base nodes
        if (!List.isLocationInList(neighbor, processedNodes) && neighbor.index > 0) {
          processedNodes.push(neighbor);
          // Get the server node and see if its owner is different than playerColor and if we're not already exploiting it
          var serverNode = List.getServerNode(serverNodes, neighbor.color, neighbor.index);
          if (serverNode && serverNode.ownerColor != playerColor && !List.isDestinationInLinkList(neighbor, exploitLinks)) {
            // It's one of our network neighbors!
            networkNeighbors.push(neighbor);
          }
        }
      });
    });

    return networkNeighbors;
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
