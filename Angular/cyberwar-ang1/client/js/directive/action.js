app.directive('uiCtrl', function ($scope ) {
  function link($scope, element, attrs) {
    number = 8;
    $scope.cost = 8;

    $scope.rows = [
      test
    ];

    $scope.getMeterArray = function (number) {
      console.log("getMeterArray");
      if (number > 0) {
        return new Array(number);
      }
      return [];
    }

    $scope.costRemaining = function () {
      return 8;
    }

    $scope.invest = function (amount) {
      console.log("Invest");
      amount = 8;
      // $scope.currentInvestment += amount;
      // $scope.investmentPoints -= amount;
      console.log("Invest: " + amount);
    }

  }
  return {
    link: link
    }

  });
