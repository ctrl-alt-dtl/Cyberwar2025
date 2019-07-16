/*******************************************************************************
 * A set of helper functions for both server and client-side action logic
 ******************************************************************************/
this.ActionUtil = function(ActionType) {
  //---------------------------------------------------------------------------
  this.getCurrentActionPoints = function(turnNumber, positivelyLinkedNodes) {
    // Everyone gets 3 points on the first turn
    if (turnNumber === 0) {
      return 3;
    }

    // After that it's one for every acquired or exploited node
    var calculatedAP = positivelyLinkedNodes.length - 1;
    if (positivelyLinkedNodes.length > 1) {
      // Should be a 1; however, if players do not acquire two nodes at the very start, give them two APs to
      // catch up.
      return Math.max(calculatedAP, 2);
    }

    // If player loses all node links. Reinstate 1 AP to allow for player to recontinue game. HAIL MARY RULE!
    // This is a temporary rule just to allow play to continue for teaching. I need to address the knock out mechanic
    // in the server.
    return 2;
  }

  //---------------------------------------------------------------------------
  this.getCost = function(actionType, source, destination) {
    return this.getActionLevel(actionType) + getInterDomainCost(source, destination)
  }

  // ----------------------------------------------------------------------------
  // Get the action level of this action
  this.getActionLevel = function(actionType) {
    switch(actionType) {
      case ActionType.SECURE:
      case ActionType.ACQUIRE:
      case ActionType.SCAN:
        return 1;
      case ActionType.EXPEL:
      case ActionType.MANIPULATE:
      case ActionType.EXPLOIT:
        return 2;
      case ActionType.ANALYZE:
      case ActionType.DENY:
      case ActionType.IMPLANT:
        return 3;
    }
    return -1;
  }

  // ----------------------------------------------------------------------------
  var getInterDomainCost = function(source, destination) {
    if (source && destination) {
      if (source.color != destination.color) {
        return getNodeTier(source.index);
      }
    }
    return 0;
  }

  // ----------------------------------------------------------------------------
  var getNodeTier = function(nodeIndex) {
    switch (nodeIndex) {
      case 1:
      case 2:
        return 4;
      case 3:
      case 4:
      case 5:
        return 3;
      case 6:
      case 7:
        return 2;
      case 8:
        return 1;
    }
    return 0;
  }
}
