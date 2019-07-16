/*******************************************************************************
 * A set of helper functions for both server and client-side player logic
 ******************************************************************************/
this.PlayerUtil = function(ActionType, Action, List, Network) {
  //------------------------------------------------------------------------------
  // Has this player taken their turn?
  this.hasPlayerTakenTurn = function(player) {
    // A player has taken their turn if they are an observer, they have been implanted, they have investments, or they have orders
    return player.isObserver || player.implanted || player.investments || player.orders.length > 0;
  }

  //------------------------------------------------------------------------------
  // A player is "eliminated" when there are no more nodes they can acquire
  this.isPlayerEliminated = function(gameState, player) {
    // Get the player's network
    var positivelyLinkedNodes = Network.getPositivelyLinkedNodes(player.color, gameState.serverNodes, player.exploitLinks);

    // If not, then see if we can acquire any neighboring nodes
    var neighboringNodes = Network.getNeighborsToNetwork(gameState.serverNodes, positivelyLinkedNodes, player.color, player.exploitLinks);
    // If there are neighboring nodes, we might still have things to do
    if (neighboringNodes.length > 0) {
      // If we don't have any nodes on our network we could acquire, then check to see if we can afford to acquire another node
      if (!hasUnownedNodes(gameState.serverNodes, positivelyLinkedNodes, player.color)) {
        var currentActionPoints = Action.getCurrentActionPoints(gameState.roundNumber, positivelyLinkedNodes);
        var cheapestAcquireCost = getCheapestAcquireCost(positivelyLinkedNodes, neighboringNodes);

        // If we can't afford our cheapest option, then we are finished
        if (currentActionPoints < cheapestAcquireCost) {
          return true;
        }
      }
    }
    // There is nothing left for us to acquire, we are finished
    else {
      return true;
    }

    // The player is not eliminated
    return false;
  }

  //------------------------------------------------------------------------------
  // Look through the list of nodes and see if any are not owned by the given player color
  var hasUnownedNodes = function(serverNodes, locations, playerColor) {
    return locations.some(location => {
      var serverNode = List.getServerNode(serverNodes, location.color, location.index);
      return serverNode && serverNode.ownerColor != playerColor;
    });
  }

  //------------------------------------------------------------------------------
  // Go through the list of neighboring nodes and see which one would be the cheapest for us to acquire
  var getCheapestAcquireCost = function(positivelyLinkedNodes, neighboringNodes) {
    return neighboringNodes.reduce((cheapestOverallCost, nodeToAcquire) => {
      var currentCheapestCost = positivelyLinkedNodes.reduce((cheapestCost, acquiringNode) => {
        // If this node can acquire the node we want, then get the cost
        var neighbors = Network.getNeighbors(nodeToAcquire);
        if (List.isLocationInList(acquiringNode, neighbors)) {
          // If the cost is less than the cheapest so far, then return the new cheapest
          var costToAcquire = Action.getCost(ActionType.ACQUIRE, acquiringNode, nodeToAcquire);
          if (costToAcquire < cheapestCost) {
            return costToAcquire;
          }
        }

        // This is still the cheapest cost so far
        return cheapestCost;
      }, Number.MAX_SAFE_INTEGER);
      if (currentCheapestCost < cheapestOverallCost) {
        return currentCheapestCost;
      }
      return cheapestOverallCost;
    }, Number.MAX_SAFE_INTEGER);
  }
}
