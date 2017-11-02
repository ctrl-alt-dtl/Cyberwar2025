angular.module('CyberWar')
.directive('submitButton', ['CurrentInvestments', 'CurrentOrders', 'GameSocket', 'GameState', function(CurrentInvestments, CurrentOrders, GameSocket, GameState) {
  function link($scope, element, attrs) {
    //---------------------------------------------------------------------------
    $scope.canSubmit = function() {
      return !GameState.submittedTurn() && (CurrentInvestments.hasInvestments() || CurrentOrders.hasOrders()) && GameState.currentActionPoints >= 0;
    }

    //---------------------------------------------------------------------------
    $scope.submit = function() {
      GameSocket.performAction({ investments: CurrentInvestments.getInvestments(), orders: CurrentOrders.getOrders() });
    }
  }
  return {
    link: link,
    restrict: 'E',
    templateUrl: 'submitButton.html',
  }
}]);