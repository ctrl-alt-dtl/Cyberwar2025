angular.module('CyberWar')
.directive('readyIndicator', function(GameState, GameUtil) {
  function link($scope, element, attrs) {
    GameState.addListener(onGameStateChanged);
  
    // ----------------------------------------------------------------------------
    $scope.$on('$destroy', function() {
      GameState.removeListener(onGameStateChanged);
    });

    // ----------------------------------------------------------------------------
    $scope.hasTakenTurn = function(player) {
      return GameUtil.hasPlayerTakenTurn(player);
    }

    // ----------------------------------------------------------------------------
    function onGameStateChanged() {
      $scope.players = GameState.currentGameState.players.filter(player => !player.isObserver);
    }

  }
  return {
    link: link,
    restrict: 'E',
    scope: {
    },
    templateUrl: 'readyIndicator.html',
  }
});
