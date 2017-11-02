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
    $scope.paramsToString = function(order) {
      if (order.action == ActionType.ACQUIRE) {
        return ' from ' + order.params.source.color + ' ' + order.params.source.index;
      }
      if (order.action == ActionType.MANIPULATE) {
        return ' as ' + order.params.color;
      }
      return '';
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