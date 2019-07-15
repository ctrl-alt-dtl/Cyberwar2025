angular.module('CyberWar')
.controller('LoadingController', function($scope) {
  var dotsInterval = setInterval(updateDots, 250);
  var numDots = 0;
  var maxDots = 3;

  // ----------------------------------------------------------------------------
  $scope.$on('$destroy', function() {
    clearInterval(dotsInterval);
  });

  // ----------------------------------------------------------------------------
  function updateDots() {
    $scope.dots = [];
    for (var i = 0; i <= numDots; ++i) {
      $scope.dots.push(i);
    }
    numDots = (numDots + 1) % maxDots;
    $scope.$apply();
  }
});
