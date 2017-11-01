angular.module('CyberWar')
.directive('ordersList', ['CurrentOrders', 'GameState', function(CurrentOrders, GameState) {
  function link($scope, element, attrs) {
    CurrentOrders.addListener(onOrdersChanged);

    // ----------------------------------------------------------------------------
    $scope.$on('$destroy', function() {
      CurrentOrders.removeListener(onOrdersChanged);
    });

    // ----------------------------------------------------------------------------
    function onOrdersChanged() {
      $scope.orders = CurrentOrders.getOrders();
    }

    //---------------------------------------------------------------------------
    $scope.canCancel = function() {
      return !GameState.submittedTurn();
    }

    //---------------------------------------------------------------------------
    $scope.cancel = function(index) {
      if ($scope.canCancel()) {
        GameState.removeOrder(index);
      }
    }
  }
  return {
    link: link,
    restrict: 'E',
    templateUrl: 'ordersList.html',
  }
}]);