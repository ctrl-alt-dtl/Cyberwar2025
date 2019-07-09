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
      var params = '';
      if (order.params.source) {
        params += ' from ' + order.params.source.color + ' ' + order.params.source.index;
      }
      if (order.params.color) {
        params += ' as ' + order.params.color;
      }
      return params;
    }

    //---------------------------------------------------------------------------
    $scope.canCancel = function() {
      return !GameState.isObserver() && !GameState.submittedTurn();
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