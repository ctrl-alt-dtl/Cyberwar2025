angular.module('CyberWar')
.controller('ServerStatusController', function($scope, $uibModalInstance, GameState, GameUtil, selectedNode, displayedOwner, manipulateOwner, displayedStrength, usableSourceNodes, validActions, validColors) {
  $scope.selectedNode = selectedNode;
  $scope.displayedOwner = displayedOwner;
  $scope.manipulateOwner = manipulateOwner;
  $scope.displayedStrength = displayedStrength;
  $scope.validActions = validActions;
  $scope.validColors = validColors;
  $scope.selected = { params : {} };

  // ----------------------------------------------------------------------------
  $scope.selectAction = function(action) {
    $scope.selected.action = action;
    $scope.usableSourceNodes = usableSourceNodes[action];
    $scope.needColor = action == ActionType.MANIPULATE;

    // Setup source parameter
    if ($scope.usableSourceNodes.length == 0) {
      delete $scope.selected.params.source;
    }
    else if ($scope.usableSourceNodes.length > 0) {
      $scope.selected.params.source = $scope.usableSourceNodes[0];
    }

    // Setup color parameter
    if (!$scope.needColor) {
      delete $scope.selected.params.color;
    }
    else if ($scope.validColors.length > 0) {
      $scope.selected.params.color = $scope.validColors[0];
    }

    $scope.updateActionCost();
  }

  // ----------------------------------------------------------------------------
  $scope.updateActionCost = function() {
    $scope.actionCost = GameUtil.Action.getCost($scope.selected.action, $scope.selected.params ? $scope.selected.params.source : undefined, $scope.selectedNode.location);
  }

  // ----------------------------------------------------------------------------
  $scope.canMakeOrder = function() {
    return $scope.selected.action && (!$scope.needSource || $scope.selected.params.source) &&
      (!$scope.needColor || $scope.selected.params.color);
  }

  // ----------------------------------------------------------------------------
  $scope.shouldShowChat = function(color) {
    return $scope.getChatToName(color) != GameState.currentPlayerData.name;
  }

  // ----------------------------------------------------------------------------
  $scope.getChatToName = function(color) {
    return GameUtil.List.findPlayerByColor(GameState.currentGameState.players, color).name;
  }

  // ----------------------------------------------------------------------------
  $scope.ok = function () {
    $uibModalInstance.close($scope.selected, $scope.selected);
  };

  // ----------------------------------------------------------------------------
  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };

  if ($scope.validActions.length > 0) {
    $scope.selectAction($scope.validActions[0]);
  }
});