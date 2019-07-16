angular.module('CyberWar')
.controller('ObserverSwitchPlayerDialogController', function($scope, $uibModalInstance, color) {
  $scope.color = color;

  // ----------------------------------------------------------------------------
  $scope.ok = function () {
    $uibModalInstance.close();
  };

  // ----------------------------------------------------------------------------
  $scope.cancel = function () {
    $uibModalInstance.dismiss();
  };
});