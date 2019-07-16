angular.module('CyberWar')
.controller('canvasCtrl', function($scope, $uibModal, ChatState, CurrentOrders, GameSocket, GameState, GameUtil){
  GameState.addListener(onGameStateChanged);
  $scope.Color = Color;
  $scope.nodesPerDomain = new Array(GameUtil.Config.SERVER_NODES_PER_DOMAIN);
  var modalInstance;

  // ----------------------------------------------------------------------------
  $scope.$on('$destroy', function() {
    GameState.removeListener(onGameStateChanged);
  });

  // ----------------------------------------------------------------------------
  $scope.$watch('redraw', function(redraw) {
    if (redraw) {
      $scope.redraw = false;
    }
    else {
      redrawStage();
    }
  });

  // ----------------------------------------------------------------------------
  $scope.playerBaseClicked = function(color) {
    if (!GameState.currentPlayerData.isObserver) {
      $scope.serverNodeClicked(color, 0);

      // Notify the chat service that we have private chat showing for this player
      ChatState.setViewingPrivateChat(color);
      // When the modal dialog is closed, clear the private chat setting
      modalInstance.closed.then(() => ChatState.setViewingPrivateChat());
    }
    else {
      showObserverSwitchPlayerDialog(color);
    }
  }

  // ----------------------------------------------------------------------------
  $scope.serverNodeClicked = function(color, index) {
    var selectedNode = GameUtil.List.getServerNode(GameState.currentGameState.serverNodes, color, index);
    var usableSourceNodes = getUsableAdjacentNodes(selectedNode);
    var validActions = getValidActions(selectedNode, usableSourceNodes);
    var validColors = getValidColors();
    modalInstance = $uibModal.open({
      animation: true,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'serverStatus.html',
      controller: 'ServerStatusController',
      scope: $scope,
      resolve: {
        selectedNode: function() {
          return selectedNode;
        },
        displayedOwner: function() {
          return GameUtil.getServerNodeDisplayedColor(selectedNode, GameState.currentPlayerData, GameState.positivelyLinkedNodes);
        },
        manipulateOwner: function() {
          return GameUtil.getServerNodeManipulatedColor(selectedNode, GameState.currentPlayerData);
        },
        displayedStrength: function() {
          return GameUtil.getServerNodeDisplayedText(selectedNode, GameState.currentPlayerData, GameState.positivelyLinkedNodes);
        },
        usableSourceNodes: function () {
          return usableSourceNodes;
        },
        validActions: function () {
          return validActions;
        },
        validColors: function () {
          return validColors;
        }
      }
    });

    modalInstance.result.then(
      // Dialog accepted
      function (selection) {
        selectAction(selectedNode, selection.action, JSON.parse(angular.toJson(selection.params)));
      },
      // Dialog canceled
      function () {
      }
    );
  }

  // ----------------------------------------------------------------------------
  $scope.exploitLinkClicked = function(nodeA, nodeB) {
    modalInstance = $uibModal.open({
      animation: true,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'exploitLinkDialog.html',
      controller: 'ExploitLinkDialogController',
      resolve: {
        nodeA: function() {
          return nodeA;
        },
        nodeB: function() {
          return nodeB;
        }
      }
    });

    modalInstance.result.then(
      // Dialog accepted
      function () {
      },
      // Dialog canceled
      function () {
      }
    );
  }

  // ----------------------------------------------------------------------------
  function onGameStateChanged() {
    drawBoard(GameState.currentPlayerData);
    $scope.overtLinks = GameState.currentGameState.overtLinks;
    $scope.redraw = true;
  }

  // ----------------------------------------------------------------------------
  var showObserverSwitchPlayerDialog = function(color) {
    modalInstance = $uibModal.open({
      animation: true,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'observerSwitchPlayerDialog.html',
      controller: 'ObserverSwitchPlayerDialogController',
      resolve: {
        color: function() {
          return color;
        }
      }
    });

    modalInstance.result.then(
      // Dialog accepted
      function () {
        GameSocket.setObserverColor(color);
      },
      // Dialog canceled
      function () {
      }
    );
  }

  // ----------------------------------------------------------------------------
  var selectAction = function(selectedNode, action, params) {
    GameState.addOrder({ node: selectedNode.location, action: action, params: params, cost: GameUtil.Action.getCost(action, params.source, selectedNode.location) });
  }

  // ----------------------------------------------------------------------------
  var getValidActions = function(node, usableSourceNodes) {
    var validActions = [];
    _.each(ActionType, function(actionType) {
      if (isActionTypeValidForNode(actionType, node, usableSourceNodes)) {
        validActions.push(actionType);
      }
    });
    return validActions;
  }

  // ----------------------------------------------------------------------------
  var isActionTypeValidForNode = function(actionType, node, usableSourceNodes) {
    if (!GameState.hasSubmittedTurn()) {
      var researchType = getResearchType(actionType);
      if (researchType && GameUtil.Action.isActionUnlocked(GameState.currentPlayerData.research[researchType], actionType) &&
        hasValidUsableSourceNodes(actionType, usableSourceNodes) && canPlayerAffordAction(actionType)) {
        switch (actionType) {
          case ActionType.SECURE:
            return canSecureNode(node);
          case ActionType.EXPEL:
            return canExpelNode(node);
          case ActionType.ANALYZE:
            return canAnalyzeNode(node);
          case ActionType.ACQUIRE:
            return canAcquireNode(node);
          case ActionType.MANIPULATE:
            return canManipulateNode(node);
          case ActionType.DENY:
            return canDenyNode(node);
          case ActionType.SCAN:
            return canScanNode(node);
          case ActionType.EXPLOIT:
            return canExploitNode(node);
          case ActionType.IMPLANT:
            return canImplantNode(node);
        }
      }
    }
    return false;
  }

  // ----------------------------------------------------------------------------
  // Get the research type of this action
  var getResearchType = function(actionType) {
    switch(actionType) {
      case ActionType.SECURE:
      case ActionType.EXPEL:
      case ActionType.ANALYZE:
        return ResearchType.CND;
      case ActionType.ACQUIRE:
      case ActionType.MANIPULATE:
      case ActionType.DENY:
        return ResearchType.CNA;
      case ActionType.SCAN:
      case ActionType.EXPLOIT:
      case ActionType.IMPLANT:
        return ResearchType.CNE;
    }
    return '';
  }

  // ----------------------------------------------------------------------------
  var canSecureNode = function(node) {
    // Players can only secure server nodes they own that aren't at max strength yet
    return doesPlayerOwnNode(node) && isInPlayersNetwork(node) && !isPlayerBase(node) && !isNodeAtMaxStrength(node);
  }

  // ----------------------------------------------------------------------------
  var canExpelNode = function(node) {
    // Players can only expel server nodes they own
    return doesPlayerOwnNode(node) && isInPlayersNetwork(node) && !isPlayerBase(node);
  }

  // ----------------------------------------------------------------------------
  var canAnalyzeNode = function(node) {
    // Players can only scan their own nodes or exploited nodes
    return isInPlayersNetwork(node);
  }

  // ----------------------------------------------------------------------------
  var canAcquireNode = function(node) {
    // Players can only acquire adjacent server nodes they don't own
    return !doesPlayerOwnNode(node) && !isPlayerBase(node) && isAdjacentToNetwork(node);
  }

  // ----------------------------------------------------------------------------
  var canManipulateNode = function(node) {
    // Players can manipulate any node they can acquire
    return canAcquireNode(node);
  }

  // ----------------------------------------------------------------------------
  var canDenyNode = function(node) {
    // Players can deny nodes they can acquire
    return canAcquireNode(node);
  }

  // ----------------------------------------------------------------------------
  var canScanNode = function(node) {
    // Players can scan server nodes they own or adjacent server nodes
    return !isPlayerBase(node) && (isInPlayersNetwork(node) || isAdjacentToNetwork(node));
  }

  // ----------------------------------------------------------------------------
  var canExploitNode = function(node) {
    // Players can exploit any nodes they can acquire
    return canAcquireNode(node);
  }

  // ----------------------------------------------------------------------------
  var canImplantNode = function(node) {
    // Players can implant nodes they can acquire or an opponent base adjacent to the network
    return canAcquireNode(node) || (isPlayerBase(node) && !isPlayerImplanted(node) && !isInPlayersNetwork(node) && isAdjacentToNetwork(node));
  }

  // ----------------------------------------------------------------------------
  var doesPlayerOwnNode = function(node) {
    // return node.ownerColor == GameState.currentPlayerData.color;
    return node.ownerColor == GameState.currentPlayerData.color;
  }

  // ----------------------------------------------------------------------------
  var isInPlayersNetwork = function(node) {
    // return node.ownerColor == GameState.currentPlayerData.color;
    return GameUtil.List.isLocationInList(node.location, GameState.positivelyLinkedNodes);
  }

  // ----------------------------------------------------------------------------
  var hasValidUsableSourceNodes = function(actionType, usableSourceNodes) {
    switch (actionType) {
      case ActionType.ACQUIRE:
      case ActionType.MANIPULATE:
      case ActionType.DENY:
      case ActionType.EXPLOIT:
        // These actions require at least one valid source node
        return usableSourceNodes[actionType].length > 0;
    }
    // All other actions require no source nodes
    return usableSourceNodes[actionType].length == 0;
  }

  // ----------------------------------------------------------------------------
  var canPlayerAffordAction = function(actionType) {
    return GameUtil.Action.getCost(actionType) <= GameState.currentActionPoints;
  }

  // ----------------------------------------------------------------------------
  var canPlayerAffordActionFromSource = function(actionType, sourceLocation, destinationLocation) {
    return GameUtil.Action.getCost(actionType, sourceLocation, destinationLocation) <= GameState.currentActionPoints;
  }

  // ----------------------------------------------------------------------------
  var isNodeAtMaxStrength = function(node) {
    var totalNodeStrength = node.strength;
    _.each(CurrentOrders.getOrders(), function(order) {
      if (order.action == ActionType.SECURE && GameUtil.Equality.isSameLocation(order.node, node.location)) {
        ++totalNodeStrength;
      }
    });
    return totalNodeStrength == GameUtil.Config.MAX_NODE_STRENGTH;
  }

  // ----------------------------------------------------------------------------
  var isPlayerBase = function(node) {
    return node.location.index == 0;
  }

  // ----------------------------------------------------------------------------
  var isPlayerImplanted = function(node) {
    return GameUtil.List.findPlayerByColor(GameState.currentGameState.players, node.location.color).implanted;
  }

  // ----------------------------------------------------------------------------
  var isAdjacentToNetwork = function(node) {
    return _.any(GameUtil.Network.getNeighbors(node.location), function(neighbor) { return GameUtil.List.isLocationInList(neighbor, GameState.positivelyLinkedNodes); });
  }

  // ----------------------------------------------------------------------------
  var getUsableAdjacentNodes = function(node) {
    var adjacentNodes = {};
    Object.values(ActionType).forEach(actionType => {
      // Get all the possible adjacent nodes we could use for the node
      var usableAdjacentLocations = getUsableAdjacentNodesForAction(node, actionType);
      usableAdjacentLocations = usableAdjacentLocations.filter(usableAdjacentLocation => {
        // Only allow nodes in our network
        return isInPlayersNetwork({ location: usableAdjacentLocation }) &&
        // Only allow nodes we can afford that action from
        canPlayerAffordActionFromSource(actionType, usableAdjacentLocation, node.location) &&
        // Only allow nodes we aren't already using
        !isUsingSourceNode(usableAdjacentLocation);
      });
      adjacentNodes[actionType] = usableAdjacentLocations;
    });
    return adjacentNodes;
  }

  // ----------------------------------------------------------------------------
  var isUsingSourceNode = function(sourceLocation) {
    return CurrentOrders.getOrders().some(order => order.params && order.params.source && GameUtil.Equality.isSameLocation(order.params.source, sourceLocation));
  }

  // ----------------------------------------------------------------------------
  var getUsableAdjacentNodesForAction = function(destinationNode, actionType) {
    switch(actionType) {
      // You can acquire/manipulate from any owned neighbor or from the node itself if the player has exploited it
      case ActionType.ACQUIRE:
      case ActionType.MANIPULATE:
        var nodes = getOwnedNeighborNodes(destinationNode);
        if (destinationNode.ownerColor != GameState.currentPlayerData.color &&
          GameUtil.List.isDestinationInLinkList(destinationNode.location, GameState.currentPlayerData.exploitLinks)) {
          nodes.unshift(destinationNode.location);
        }
        return nodes;
      // You can deny a node from any owned neighbor node
      case ActionType.DENY:
        return getOwnedNeighborNodes(destinationNode);
      // You can exploit it from any owned neighbor node where you don't already have that exploit link
      case ActionType.EXPLOIT:
        var nodes = getOwnedNeighborNodes(destinationNode);
        return nodes.filter(sourceLocation => !GameUtil.List.isLinkInLinkList({ nodeA: sourceLocation, nodeB: destinationNode.location }, GameState.currentPlayerData.exploitLinks));
    }
    // Other actions don't need source nodes
    return [];
  }

  // ----------------------------------------------------------------------------
  var getOwnedNeighborNodes = function(node) {
    var ownedNeighbors = [];
    _.each(GameUtil.Network.getNeighbors(node.location), function(neighbor) {
      var serverNode = GameUtil.List.getServerNode(GameState.currentGameState.serverNodes, neighbor.color, neighbor.index);
      if (serverNode && (serverNode.ownerColor == GameState.currentPlayerData.color || GameUtil.List.isLocationInLinkList(neighbor, GameState.currentPlayerData.exploitLinks))) {
        ownedNeighbors.push(neighbor);
      }
    });
    return ownedNeighbors;
  }

  // ----------------------------------------------------------------------------
  var getValidColors = function() {
    var validColors = [];
    _.each(Color, function(color) {
      if (color != GameState.currentPlayerData.color) {
        validColors.push(color);
      }
    });
    return validColors;
  }
});
