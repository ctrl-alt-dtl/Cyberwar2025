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
  // A player is "eliminated" when they have been effectively cut off from the main network
  this.isPlayerEliminated = function(gameState, player) {
    // If the player was previously eliminated, they are still eliminated
    if (player.wasEliminated) {
      return true;
    }

    // Get our currently accessible network
    var accessibleNetwork = Network.getAccessibleNetwork(gameState.serverNodes, player.color);
    // Check if we can reach any other base
    if (canReachOtherBase(accessibleNetwork, player.color)) {
      // Check if our current network is completely in our own domain
      var positivelyLinkedNodes = Network.getPositivelyLinkedNodes(player.color, gameState.serverNodes, player.exploitLinks);
      if (isNetworkCompletelyInDomain(positivelyLinkedNodes, player.color)) {
        // Check if we have acquired all the nodes in our domain that we can reach
        var networkNeighbors = Network.getNeighborsToNetwork(gameState.serverNodes, positivelyLinkedNodes);
        if (!hasUnownedNodes(gameState.serverNodes, positivelyLinkedNodes, player.color) &&
            !isNetworkPartiallyInDomain(networkNeighbors, player.color)) {
          // Check if we can afford to leave our domain
          if (!canAffordToLeaveDomain(gameState.roundNumber, networkNeighbors, positivelyLinkedNodes, player.color)) {
            // We have acquired all we can in our domain and can't get out, we are finished
            return true;
          }
          // Otherwise, we can still get to someone else's domain and can still play
        }
        // Otherwise there are more nodes for us to acquire, so we're still playing
      }
      // Otherwise we can still compete with other players for nodes
    }
    // If we can't reach another base, check if we've acquired all the nodes in our accessible network
    else if (!hasUnownedNodes(gameState.serverNodes, accessibleNetwork, player.color)) {
      // We have acquired all we can, we are done
      return true;
    }

    // The player is not eliminated
    return false;
  }

  //------------------------------------------------------------------------------
  // Is there a player base of a different color in the given network?
  var canReachOtherBase = function(network, playerColor) {
    return network.some(location => location.index == 0 && location.color != playerColor);
  }

  //------------------------------------------------------------------------------
  // Is the given network completely in the given player color?
  var isNetworkCompletelyInDomain = function(network, playerColor) {
    return network.every(location => location.color == playerColor);
  }

  //------------------------------------------------------------------------------
  // Is the given network completely in the given player color?
  var isNetworkPartiallyInDomain = function(network, playerColor) {
    return network.some(location => location.color == playerColor);
  }

  //------------------------------------------------------------------------------
  // Can we afford to acquire a node outside of our domain?
  var canAffordToLeaveDomain = function(turnNumber, networkNeighbors, positivelyLinkedNodes, playerColor) {
    // Get all the nodes directly adjacent our domain
    var domainAdjacentLocations = Network.getDomainAdjacentNodes(playerColor);
    // Filter out the ones not in our accessible network
    domainAdjacentLocations = domainAdjacentLocations.filter(location => List.isLocationInList(location, networkNeighbors));
    // Is there one of the remaining nodes we can afford to acquire?
    var currentActionPoints = Action.getCurrentActionPoints(turnNumber, positivelyLinkedNodes);
    return domainAdjacentLocations.some(adjacentLocation => {
      // Find the node in our domain that could acquire this node
      var acquiringLocations = Network.getNeighbors(adjacentLocation).filter(neighbor => neighbor.color == playerColor);
      return acquiringLocations.every(acquiringLocation => Action.getCost(ActionType.ACQUIRE, acquiringLocation, adjacentLocation) <= currentActionPoints);
    });
  }

  //------------------------------------------------------------------------------
  // Look through the list of nodes and see if any are not owned by the given player color
  var hasUnownedNodes = function(serverNodes, locations, playerColor) {
    return locations.some(location => {
      var serverNode = List.getServerNode(serverNodes, location.color, location.index);
      return serverNode && serverNode.ownerColor != playerColor;
    });
  }
}
