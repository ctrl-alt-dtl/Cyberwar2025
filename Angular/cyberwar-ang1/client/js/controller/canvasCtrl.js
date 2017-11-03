angular.module('CyberWar')
.controller('canvasCtrl', ['$scope', '$uibModal', 'CurrentOrders', 'GameState', 'GameUtil', function($scope, $uibModal, CurrentOrders, GameState, GameUtil){
  GameState.addListener(onGameStateChanged);
  $scope.Color = Color;
  $scope.nodesPerDomain = new Array(GameUtil.Config.SERVER_NODES_PER_DOMAIN);

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
    $scope.serverNodeClicked(color, 0);
  }

  // ----------------------------------------------------------------------------
  $scope.serverNodeClicked = function(color, index) {
    var selectedNode = GameUtil.getServerNode(GameState.currentGameState.serverNodes, color, index);
    var validActions = getValidActions(selectedNode);
    var usableSourceNodes = rejectUsedSourceNodes(getUsableAdjacentNodes(selectedNode));
    var validColors = getValidColors(selectedNode);
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
        displayedOwner: function () {
          return GameUtil.getServerNodeDisplayedColor(selectedNode, GameState.currentPlayerData, GameState.positivelyLinkedNodes);
        },
        displayedStrength: function () {
          return GameUtil.getServerNodeDisplayedText(selectedNode, GameState.currentPlayerData, GameState.positivelyLinkedNodes);
        },
        validActions: function () {
          return validActions;
        },
        usableSourceNodes: function () {
          return usableSourceNodes;
        },
        validColors: function () {
          return validColors;
        },
      }
    });

    modalInstance.result.then(function (selection) {
      selectAction(selectedNode, selection.action, JSON.parse(angular.toJson(selection.params)));
    }, function () {
    });
  }

  // ----------------------------------------------------------------------------
  function onGameStateChanged() {
    drawBoard(GameState.currentPlayerData);
    $scope.overtLinks = GameState.currentGameState.overtLinks;
    $scope.exploitLinks = GameState.currentPlayerData.exploitLinks.concat(GameState.currentPlayerData.scannedExploitLinks);
    $scope.redraw = true;
  }

  // ----------------------------------------------------------------------------
  var selectAction = function(selectedNode, action, params) {
    GameState.addOrder({ node: selectedNode.location, action: action, params: params, cost: getActionLevel(action) + getInterDomainCost(selectedNode.location, params) });
  }

  // ----------------------------------------------------------------------------
  var getValidActions = function(node) {
    var validActions = [];
    _.each(ActionType, function(actionType) {
      if (isActionTypeValidForNode(actionType, node)) {
        validActions.push(actionType);
      }
    });
    return validActions;
  }

  // ----------------------------------------------------------------------------
  var isActionTypeValidForNode = function(actionType, node) {
    if (!GameState.submittedTurn()) {
      var researchType = getResearchType(actionType);
      var actionLevel = getActionLevel(actionType);
      if (researchType && actionLevel > 0 && isActionUnlocked(researchType, actionLevel) && canPlayerAffordAction(actionLevel)) {
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
        return ResearchType.CNO;
      case ActionType.SCAN:
      case ActionType.EXPLOIT:
      case ActionType.IMPLANT:
        return ResearchType.CNE;
    }
    return '';
  }

  // ----------------------------------------------------------------------------
  // Get the action level of this action
  var getActionLevel = function(actionType) {
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
  var getInterDomainCost = function(destination, actionParams) {
    var source = actionParams.source;
    if (source) {
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

  // ----------------------------------------------------------------------------
  var canSecureNode = function(node) {
    // Players can only secure server nodes they own that aren't at max strength yet
    return doesPlayerOwnNode(node) && !isPlayerBase(node) && !isNodeAtMaxStrength(node);
  }

  // ----------------------------------------------------------------------------
  var canExpelNode = function(node) {
    // Players can only expel server nodes they own
    return doesPlayerOwnNode(node) && !isPlayerBase(node);
  }

  // ----------------------------------------------------------------------------
  var canAnalyzeNode = function(node) {
    // Players can only scan their own nodes or exploited nodes
    return doesPlayerOwnNode(node) || GameUtil.isLocationInLinkList(node.location, GameState.currentPlayerData.exploitLinks);
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
    // Players can deny nodes they can acquire or server nodes they own
    return canAcquireNode(node) || (doesPlayerOwnNode(node) && !isPlayerBase(node));
  }

  // ----------------------------------------------------------------------------
  var canScanNode = function(node) {
    // Players can scan server nodes they own or adjacent server nodes
    return !isPlayerBase(node) && (doesPlayerOwnNode(node) || isAdjacentToNetwork(node));
  }

  // ----------------------------------------------------------------------------
  var canExploitNode = function(node) {
    // Players can exploit any nodes they can acquire unless they have already exploited it
    return canAcquireNode(node) && !GameUtil.isLocationInLinkList(node.location, GameState.currentPlayerData.exploitLinks);
  }

  // ----------------------------------------------------------------------------
  var canImplantNode = function(node) {
    // Players can implant nodes they can acquire or an opponent base adjacent to the network
    return canAcquireNode(node) || (isPlayerBase(node) && !doesPlayerOwnNode(node) && isAdjacentToNetwork(node));
  }

  // ----------------------------------------------------------------------------
  var isActionUnlocked = function(researchType, level) {
    var researchPerLevel = GameUtil.Config.MAX_RESEARCH_POINTS / (GameUtil.Config.MAX_RESEARCH_LEVELS - 1);
    var levelUnlocked = (GameState.currentPlayerData.research[researchType] / researchPerLevel) + 1;
    return level <= levelUnlocked;
  }

  // ----------------------------------------------------------------------------
  var doesPlayerOwnNode = function(node) {
    return node.ownerColor == GameState.currentPlayerData.color;
  }

  // ----------------------------------------------------------------------------
  var canPlayerAffordAction = function(level) {
    return level <= GameState.currentActionPoints;
  }

  // ----------------------------------------------------------------------------
  var isNodeAtMaxStrength = function(node) {
    var totalNodeStrength = node.strength;
    _.each(CurrentOrders.getOrders(), function(order) {
      if (order.action == ActionType.SECURE && GameUtil.isSameLocation(order.node, node.location)) {
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
  var isAdjacentToNetwork = function(node) {
    return _.any(GameUtil.getNeighbors(node.location), function(neighbor) { return GameUtil.isLocationInList(neighbor, GameState.positivelyLinkedNodes); });
  }

  // ----------------------------------------------------------------------------
  var getUsableAdjacentNodes = function(node) {
    var adjacentNodes = [];

    _.each(GameUtil.getNeighbors(node.location), function(neighbor) {
      var serverNode = GameUtil.getServerNode(GameState.currentGameState.serverNodes, neighbor.color, neighbor.index);
      if (serverNode && (serverNode.ownerColor == GameState.currentPlayerData.color || GameUtil.isLocationInLinkList(neighbor, GameState.currentPlayerData.exploitLinks))) {
        adjacentNodes.push(neighbor);
      }
    });

    return adjacentNodes;
  }

  // ----------------------------------------------------------------------------
  var rejectUsedSourceNodes = function(sourceNodes) {
    // Reject any nodes who are being used as a source node in current orders
    return _.reject(sourceNodes, function(node) {
      return node.index != 0 && _.any(CurrentOrders.getOrders(), function(order) {
        return order.params && order.params.source && GameUtil.isSameLocation(order.params.source, node);
      });
    });
  }

  // ----------------------------------------------------------------------------
  var getValidColors = function(node) {
    var validColors = [];
    _.each(Color, function(color) {
      if (color != GameState.currentPlayerData.color && color != node.ownerColor) {
        validColors.push(color);
      }
    });
    return validColors;
  }
}]);
