angular.module('CyberWar')
.directive('nodeLink', function() {
  function link($scope, element, attrs) {
  }
  return {
    link: link,
    restrict: 'E',
    scope: {
      link: '=',
    },
    templateUrl: 'node-link.html',
  }
});
