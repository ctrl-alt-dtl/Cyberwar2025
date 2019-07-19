angular.module('CyberWar')
.directive('action', function() {
  function link($scope, element, attrs) {
  }
  return {
    link: link,
    restrict: 'E',
    scope: {
      label: '=',
      type: '=',
    },
    templateUrl: 'action.html',
  }
});
