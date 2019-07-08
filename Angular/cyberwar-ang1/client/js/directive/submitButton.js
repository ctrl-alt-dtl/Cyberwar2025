angular.module('CyberWar')
.directive('submitButton', ['CurrentInvestments', 'CurrentOrders', 'GameSocket', 'GameState', function(CurrentInvestments, CurrentOrders, GameSocket, GameState) {
  function link($scope, element, attrs) {
    //---------------------------------------------------------------------------
    $scope.canSubmit = function() {
      return (CurrentInvestments.hasInvestments() || CurrentOrders.hasOrders()) && GameState.currentActionPoints >= 0;
    }

    //---------------------------------------------------------------------------
    $scope.getSubmitText = function() {
      if (!GameState.submittedTurn()) {
        return "Submit Orders";
      }
      return "Edit Orders";
    }

    //---------------------------------------------------------------------------
    $scope.submit = function() {
      if (!GameState.submittedTurn()) {
        GameSocket.performAction({ investments: CurrentInvestments.getInvestments(), orders: CurrentOrders.getOrders() });
      }
      else {
        GameSocket.performAction({ orders: [] });
      }
    }
  }
  return {
    link: link,
    restrict: 'E',
    templateUrl: 'submitButton.html',
  }
}]);