angular.module('CyberWar')
.directive('serverNode', ['GameState', 'GameUtil', function(GameState, GameUtil) {
  function link($scope, element, attrs) {
    GameState.addListener(onGameStateChanged);

    var hex = GameUtil.getHex($scope.color, $scope.index);
    var text = GameUtil.getHexText($scope.color, $scope.index);
    domainsGroup.add(hex, text);

    // ----------------------------------------------------------------------------
    $scope.$on('$destroy', function() {
      GameState.removeListener(onGameStateChanged);
    });

    function onGameStateChanged() {
      var serverNode = GameUtil.getServerNode(GameState.currentGameState.serverNodes, $scope.color, $scope.index);
      hex.fill(GameUtil.getColor(serverNode.ownerColor));
      text.text(serverNode.strength);
      domainsGroup.draw();
    }

    // add event handling
    hex.on('mouseover', function () {
      document.body.style.cursor = 'pointer';
    });
    hex.on('mouseout', function () {
      document.body.style.cursor = 'default';
    });
    hex.on('click', function () {
      if ($scope.callbackFn) {
        $scope.$apply($scope.callbackFn({ color: $scope.color, index: $scope.index }));
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
      index: '='
    },
  }
}]);
