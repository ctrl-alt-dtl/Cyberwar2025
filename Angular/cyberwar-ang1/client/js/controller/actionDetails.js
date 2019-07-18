angular.module('CyberWar')
.controller('ActionDetailsDialogController', function($scope, actionType, description) {
  $scope.actionType = actionType;
  $scope.description = description;
});
