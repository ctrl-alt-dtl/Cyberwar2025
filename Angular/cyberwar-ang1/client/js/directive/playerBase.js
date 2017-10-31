angular.module('CyberWar')
.directive('playerBase', ['GameUtil', function(GameUtil) {
  function link($scope, element, attrs) {

    // add base to the domain
    var hex = GameUtil.getHex($scope.color, 0);
    var text = GameUtil.getHexText($scope.color, 0);
    hex.fill(GameUtil.getColor($scope.color));
    domainsGroup.add(hex, text);

    // add event handling
    hex.on('mouseover', function () {
      document.body.style.cursor = 'pointer';
    });
    hex.on('mouseout', function () {
      document.body.style.cursor = 'default';
    });

    hex.on('click', function () {
      if ($scope.callbackFn) {
        $scope.$apply($scope.callbackFn({ color: $scope.color }));
      }
    });
    text.listening(false);
  }
  return {
    link: link,
    restrict: 'E',
    scope: {
      callbackFn: '&',
      color: '=',
    },
  }
}]);
