angular.module('CyberWar')
.directive('history', function(GameSocket, GameState) {
  function link($scope, element, attrs) {
    GameState.addListener(onGameStateChanged);

    // ----------------------------------------------------------------------------
    $scope.$on('$destroy', function() {
      GameState.removeListener(onGameStateChanged);
    });

    // ----------------------------------------------------------------------------
    function onGameStateChanged() {
      $scope.turns = getRange(1, GameState.latestTurnNumber + 1);
    }

    // ----------------------------------------------------------------------------
    $scope.isViewingFirstTurn = function() {
      return GameState.currentTurnNumber == 0;
    }

    // ----------------------------------------------------------------------------
    $scope.isCurrentTurn = function(turnNumber) {
      return GameState.currentTurnNumber == turnNumber;
    }

    // ----------------------------------------------------------------------------
    $scope.isViewingLastTurn = function() {
      return GameState.currentTurnNumber == GameState.latestTurnNumber;
    }

    // ----------------------------------------------------------------------------
    $scope.gotoTurn = function(number) {
      if (0 <= number && number <= GameState.latestTurnNumber) {
        GameState.viewingTurnInHistory(number);
        GameSocket.getTurn(number);
      }
    }

    // ----------------------------------------------------------------------------
    $scope.start = function() {
      $scope.gotoTurn(0);
    }

    // ----------------------------------------------------------------------------
    $scope.previous = function() {
      $scope.gotoTurn(GameState.currentTurnNumber - 1);
    }

    // ----------------------------------------------------------------------------
    $scope.next = function() {
      $scope.gotoTurn(GameState.currentTurnNumber + 1);
    }

    // ----------------------------------------------------------------------------
    $scope.end = function() {
      $scope.gotoTurn(GameState.latestTurnNumber);
    }

    // ----------------------------------------------------------------------------
    function getRange(startNumber, arrayLength) {
      return new Array(arrayLength).fill(0).map((value, index) => startNumber + index);
    }
  }
  return {
    link: link,
    restrict: 'E',
    scope: {
    },
    templateUrl: 'history.html',
  }
});
