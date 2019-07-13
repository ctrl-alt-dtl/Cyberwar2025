angular.module('CyberWar')
.directive('player', function() {
  function link($scope, element, attrs) {
  }
  return {
    link: link,
    restrict: 'E',
    scope: {
      label: '=',
      player: '=',
    },
    templateUrl: 'player.html',
  }
});
