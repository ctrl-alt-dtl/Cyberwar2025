angular.module('CyberWar')
.controller('ServerStatusController', function($scope, $uibModalInstance, GameState, GameUtil, selectedNode, displayedOwner, displayedStrength, usableSourceNodes, validActions, validColors) {
  $scope.selectedNode = selectedNode;
  $scope.displayedOwner = displayedOwner;
  $scope.displayedStrength = displayedStrength;
  $scope.usableSourceNodes = usableSourceNodes;
  $scope.validActions = validActions;
  $scope.validColors = validColors;
  $scope.selected = { params : {} };

  // ----------------------------------------------------------------------------
  $scope.selectAction = function(action) {
    $scope.selected.action = action;
    $scope.needSource = doesActionNeedSource(action);
    $scope.needColor = action == ActionType.MANIPULATE;

    // Setup source parameter
    if (!$scope.needSource) {
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
    return GameUtil.findPlayerByColor(GameState.currentGameState.players, color).name;
  }

  // ----------------------------------------------------------------------------
  $scope.ok = function () {
    modalInstance.close($scope.selected, $scope.selected);
  };

  // ----------------------------------------------------------------------------
  $scope.cancel = function () {
    modalInstance.dismiss('cancel');
  };

  // ----------------------------------------------------------------------------
  var doesActionNeedSource = function(action) {
    switch (action) {
      case ActionType.ACQUIRE:
      case ActionType.MANIPULATE:
      case ActionType.DENY:
      case ActionType.EXPLOIT:
        return true;
    }
    return false;
  }

  if ($scope.validActions.length > 0) {
    $scope.selectAction($scope.validActions[0]);
  }
});