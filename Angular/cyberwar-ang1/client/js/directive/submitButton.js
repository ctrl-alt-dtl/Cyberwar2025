angular.module('CyberWar')
.directive('submitButton', ['GameSocket', 'GameState', function(GameSocket, GameState) {
  function link($scope, element, attrs) {
    //---------------------------------------------------------------------------
    $scope.canSubmit = function() {
      return !GameState.submittedTurn() && GameState.currentActionPoints === 0;
    }

    //---------------------------------------------------------------------------
    $scope.submit = function() {
      GameSocket.performAction({ investments: GameState.currentInvestments });
    }
  }
  return {
    link: link,
    restrict: 'E',
    templateUrl: 'submitButton.html',
  }
}]);