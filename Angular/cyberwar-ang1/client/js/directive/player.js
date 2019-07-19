angular.module('CyberWar')
.directive('player', function(GameState, GameUtil) {
  function link($scope, element, attrs) {
    $scope.player = GameUtil.List.findPlayerByColor(GameState.currentGameState.players, $scope.color);
  }
  return {
    link: link,
    restrict: 'E',
    scope: {
      label: '=',
      color: '='
    },
    templateUrl: 'player.html',
  }
});
