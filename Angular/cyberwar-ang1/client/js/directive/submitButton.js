angular.module('CyberWar')
.directive('submitButton', function(CurrentInvestments, CurrentOrders, GameSocket, GameState) {
  function link($scope, element, attrs) {
    //---------------------------------------------------------------------------
    $scope.hasSubmitButton = function() {
      return !GameState.isObserver() && GameState.currentTurnNumber == GameState.latestTurnNumber;
    }

    //---------------------------------------------------------------------------
    $scope.canSubmit = function() {
      return (CurrentInvestments.hasInvestments() || CurrentOrders.hasOrders()) && GameState.currentActionPoints >= 0 && !GameState.isImplanted();
    }

    //---------------------------------------------------------------------------
    $scope.getSubmitText = function() {
      // If we have been eliminated, then tell them the game is over for us
      if (GameState.isEliminated()) {
        return "Game Over";
      }
      // If we haven't submitted our turn then tell them to submit orders
      if (!GameState.hasSubmittedTurn()) {
        return "Submit Orders";
      }
      // If we have submitted our turn and weren't implanted, we can edit our orders
      if (!GameState.isImplanted()) {
        return "Edit Orders";
      }
      // We have nothing to do but wait for other players to take their turns
      return "Wait";
    }

    //---------------------------------------------------------------------------
    $scope.submit = function() {
      if (!GameState.hasSubmittedTurn()) {
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