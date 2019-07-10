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
      var visibleTurnNumberRange = 5;
      $scope.turnNumbers = getRangeWindow(0, GameState.latestTurnNumber, GameState.currentTurnNumber, visibleTurnNumberRange);
      $scope.lastTurnNumber = GameState.latestTurnNumber;
    }

    // ----------------------------------------------------------------------------
    $scope.isViewingFirstTurn = function() {
      return GameState.currentTurnNumber == 0;
    }

    // ----------------------------------------------------------------------------
    $scope.isValidTurn = function(turnNumber) {
      return 0 <= turnNumber && turnNumber <= $scope.lastTurnNumber;
    }

    // ----------------------------------------------------------------------------
    $scope.isVisibleTurnNumber = function(turnNumber) {
      return $scope.turnNumbers && $scope.turnNumbers.includes(turnNumber);
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
    $scope.gotoTurn = function(turnNumber) {
      if (0 <= turnNumber && turnNumber <= GameState.latestTurnNumber) {
        GameState.viewingTurnInHistory(turnNumber);
        GameSocket.getTurn(turnNumber);
      }
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
    function getRange(startNumber, arrayLength) {
      return new Array(arrayLength).fill(0).map((value, index) => startNumber + index);
    }

    // ----------------------------------------------------------------------------
    // Create an array of [validNumberCount] index numbers that are between
    // [leftmostNumber] and [rightmostNumber] and with [centerNumber] as the middle (if possible)
    // Example 1: (0, 10, 5, 5)  => [3, 4, 5, 6,  7]
    // Example 2: (0, 10, 0, 5)  => [0, 1, 2, 3,  4]
    // Example 3: (0, 10, 10, 5) => [6, 7, 8, 9, 10]
    function getRangeWindow(leftmostNumber, rightmostNumber, centerNumber, validNumberCount) {
      // Our range will start left of our center by half of our range
      var startNumber = centerNumber - Math.floor(validNumberCount / 2.0);
      // Push our starting number further down if we would go past our rightmostNumber
      startNumber -= Math.max(0, ((startNumber + validNumberCount) - (rightmostNumber + 1)));
      // Make sure our start number doesn't go lower than our leftmostNumber
      startNumber = Math.max(startNumber, leftmostNumber);
      // Return a range of numbers whose length won't go past our rightmostNumber
      return getRange(startNumber, Math.min((rightmostNumber + 1) - startNumber, validNumberCount));
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
