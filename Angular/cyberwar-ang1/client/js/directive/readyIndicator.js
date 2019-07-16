angular.module('CyberWar')
.directive('readyIndicator', function(GameState, GameUtil) {
  function link($scope, element, attrs) {
    GameState.addListener(onGameStateChanged);
  
    // ----------------------------------------------------------------------------
    $scope.$on('$destroy', function() {
      GameState.removeListener(onGameStateChanged);
    });

    // ----------------------------------------------------------------------------
    function onGameStateChanged() {
      $scope.players = GameState.currentGameState.players.filter(player => !player.isObserver)
        .map(player => ({ name: player.name, hasTakenTurn: hasTakenTurn(player), isEliminated: isEliminated(player) }));
    }

    // ----------------------------------------------------------------------------
    var hasTakenTurn = function(player) {
      return GameUtil.Player.hasPlayerTakenTurn(player);
    }

    // ----------------------------------------------------------------------------
    var isEliminated = function(player) {
      return GameUtil.Player.isPlayerEliminated(GameState.currentGameState, player);
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
