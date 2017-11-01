angular.module('CyberWar')
.directive('ordersAdjudicationList', function($rootScope) {
  return {
    restrict: 'A',
    link: function (scope) {
      $rootScope.orders = [];

      $rootScope.addOrder = function () {
        $rootScope.orders.push({'title': $rootScope.newOrder, 'done': false})
        $rootScope.newOrder = ''
      }

      $rootScope.deleteOrder = function (index) {
        $rootScope.orders.splice(index, 1);
      }
    }
  }
});