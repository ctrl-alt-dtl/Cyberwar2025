angular.module('CyberWar')
.controller('ObserverSwitchPlayerDialogController', function($scope, $uibModalInstance, color) {
  $scope.color = color;

  // ----------------------------------------------------------------------------
  $scope.ok = function () {
    modalInstance.close();
  };

  // ----------------------------------------------------------------------------
  $scope.cancel = function () {
    modalInstance.dismiss();
  };
});