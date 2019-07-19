angular.module('CyberWar')
.directive('node', function() {
  function link($scope, element, attrs) {
  }
  return {
    link: link,
    restrict: 'E',
    scope: {
      label: '=',
      node: '=',
    },
    templateUrl: 'node.html',
  }
});
