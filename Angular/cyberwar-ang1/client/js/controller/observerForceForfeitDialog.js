angular.module('CyberWar')
.controller('ObserverForceForfeitDialogController', function($scope, $uibModalInstance, color) {
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