angular.module('CyberWar')
.directive('reports', function(GameState) {
  function link($scope, element, attrs) {
    GameState.addListener(onGameStateChanged);

    // ----------------------------------------------------------------------------
    $scope.$on('$destroy', function() {
      GameState.removeListener(onGameStateChanged);
    });

    // ----------------------------------------------------------------------------
    function onGameStateChanged() {
      // TODO: Combine secures at same location
      // TODO: Combine attacks on same location by same player
      // TODO: Make aqcuires and denies where the current player was the target look different
      $scope.reports = GameState.currentPlayerData.reports;
    }
  }
  return {
    link: link,
    restrict: 'E',
    scope: {
    },
    templateUrl: 'reports.html',
  }
});
