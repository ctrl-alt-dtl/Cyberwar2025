angular.module('CyberWar')
.controller('canvasCtrl', ['$scope', '$uibModal', 'GameState', 'GameUtil', function($scope, $uibModal, GameState, GameUtil){
  GameState.addListener(onGameStateChanged);
  $scope.Color = Color;
  $scope.nodesPerDomain = new Array(GameUtil.Config.SERVER_NODES_PER_DOMAIN);
  var positivelyLinkedNodes = [];

  // ----------------------------------------------------------------------------
  $scope.$on('$destroy', function() {
    GameState.removeListener(onGameStateChanged);
  });

  // ----------------------------------------------------------------------------
  $scope.playerBaseClicked = function(color) {
    $scope.serverNodeClicked(color, 0);
  }

  // ----------------------------------------------------------------------------
  $scope.serverNodeClicked = function(color, index) {
    var selectedNode = GameUtil.getServerNode(GameState.currentGameState.serverNodes, color, index);
    var validActions = getValidActions(selectedNode);
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
        validActions: function () {
          return validActions;
        },
        validColors: function () {
          return validColors;
        },
      }
    });

    modalInstance.result.then(function (selection) {
      selectAction(selectedNode, selection.action, selection.color);
    }, function () {
    });
  }

  // ----------------------------------------------------------------------------
  function onGameStateChanged() {
    drawBoard(GameState.currentPlayerData);
    $scope.overtLinks = GameState.currentGameState.overtLinks;
    //$scope.exploitLinks = GameState.currentGameState.overtLinks;
    positivelyLinkedNodes = getPositivelyLinkedNodes(GameState.currentPlayerData.color);
  }

  // ----------------------------------------------------------------------------
  var getPositivelyLinkedNodes = function(playerColor) {
    var playerBase = GameUtil.getServerNode(GameState.currentGameState.serverNodes, playerColor, 0);
    var linkedNodes = [playerBase.location];
    var processedNodes = [];
    var nodesToProcess = [playerBase];
    while(nodesToProcess.length > 0) {
      var nodeBeingProcessed = nodesToProcess.shift();
      if (!GameUtil.isLocationInList(nodeBeingProcessed, processedNodes)) {
        processedNodes.push(nodeBeingProcessed);
        var neighbors = GameUtil.getNeighbors(nodeBeingProcessed);
        _.each(neighbors, function(neighbor) {
          var serverNode = GameUtil.getServerNode(GameState.currentGameState.serverNodes, neighbor.color, neighbor.index);
          // If this node is owned by the player and hasn't been processed, then process it
          if (serverNode.ownerColor == playerColor && !GameUtil.isLocationInList(neighbor, processedNodes)) {
            linkedNodes.push(nodeBeingProcessed);
            nodesToProcess.push(neighbor);
          }
        });
      }
    }
    return linkedNodes;
  }

  // ----------------------------------------------------------------------------
  var selectAction = function(selectedNode, action, color) {
    console.log("Selected: " + action + (color ? " " + color : "") + " Node " + selectedNode.location.color + " " + selectedNode.location.index);
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
    var researchType = getResearchType(actionType);
    var actionLevel = getActionLevel(actionType)
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
    // Every node is valid
    return true;
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
    // Can acquire or your own server node
    // Players can deny nodes they can acquire or server nodes they own
    return canAcquireNode(node) || (doesPlayerOwnNode(node) && !isPlayerBase(node));
  }

  // ----------------------------------------------------------------------------
  var canScanNode = function(node) {
    // Your own or adjacent
    // Players can scan server nodes they own or adjacent server nodes
    return !isPlayerBase(node) && (doesPlayerOwnNode(node) || isAdjacentToNetwork(node));
  }

  // ----------------------------------------------------------------------------
  var canExploitNode = function(node) {
    // Players can exploit any nodes they can acquire
    return canAcquireNode(node) && !isPlayerBase(node);
  }

  // ----------------------------------------------------------------------------
  var canImplantNode = function(node) {
    // Acquire or base
    // Players can implant nodes they can acquire or an opponent base
    return canAcquireNode(node) || (isPlayerBase(node) && !doesPlayerOwnNode(node));
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
    return node.strength == GameUtil.Config.MAX_NODE_STRENGTH;
  }

  // ----------------------------------------------------------------------------
  var isPlayerBase = function(node) {
    return node.index == 0;
  }

  // ----------------------------------------------------------------------------
  var isAdjacentToNetwork = function(node) {
    var neighbors = GameUtil.getNeighbors(node.location);
    return _.any(neighbors, function(neighbor) { return GameUtil.isLocationInList(neighbor, positivelyLinkedNodes); });
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
