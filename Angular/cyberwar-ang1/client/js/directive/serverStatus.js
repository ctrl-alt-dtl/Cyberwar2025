angular.module('CyberWar')
.controller('ServerStatusController', function($scope, $uibModalInstance, selectedNode, validActions, validColors) {
  $scope.selectedNode = selectedNode;
  $scope.validActions = validActions;
  if ($scope.validActions.length > 0) {
    $scope.selected = {
      action: $scope.validActions[0]
    };
  }
  $scope.validColors = validColors;

  // ----------------------------------------------------------------------------
  $scope.selectAction = function(action) {
    $scope.selected.action = action;
    $scope.needColor = action == ActionType.MANIPULATE;
    if (!$scope.needColor) {
      delete $scope.selected.color;
    }
    else if ($scope.validColors.length > 0) {
      $scope.selected.color = $scope.validColors[0];
    }
  }

  // ----------------------------------------------------------------------------
  $scope.selectColor = function(color) {
    $scope.selected.color = color;
  }

  // ----------------------------------------------------------------------------
  $scope.ok = function () {
    modalInstance.close($scope.selected, $scope.selected);
  };

  // ----------------------------------------------------------------------------
  $scope.cancel = function () {
    modalInstance.dismiss('cancel');
  };
});