angular.module('CyberWar')
.directive('submitButton', function(CurrentInvestments, CurrentOrders, GameSocket, GameState) {
  function link($scope, element, attrs) {
    //---------------------------------------------------------------------------
    $scope.hasSubmitButton = function() {
      return !GameState.isObserver() && GameState.currentTurnNumber == GameState.latestTurnNumber;
    }

    //---------------------------------------------------------------------------
    $scope.canSubmit = function() {
      return (CurrentInvestments.hasInvestments() || CurrentOrders.hasOrders()) && GameState.currentActionPoints >= 0;
    }

    //---------------------------------------------------------------------------
    $scope.getSubmitText = function() {
      // If we haven't submitted our turn then tell them to submit orders
      if (!GameState.submittedTurn()) {
        return "Submit Orders";
      }
      // If we have submitted our turn, we can edit our orders
      return "Edit Orders";
    }

    //---------------------------------------------------------------------------
    $scope.submit = function() {
      if (!GameState.submittedTurn()) {
        GameSocket.performAction({ investments: CurrentInvestments.getInvestments(), orders: CurrentOrders.getOrders() });
      }
      else {
        GameState.unsubmittedTurn();
        GameSocket.performAction({ orders: [] });
      }
    }
  }
  return {
    link: link,
    restrict: 'E',
    templateUrl: 'submitButton.html',
  }
});