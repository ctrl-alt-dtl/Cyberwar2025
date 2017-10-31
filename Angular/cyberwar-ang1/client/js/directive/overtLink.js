angular.module('CyberWar')
.directive('overtLink', ['GameState', 'GameUtil', function(GameState, GameUtil) {
  function link($scope, element, attrs) {
    GameState.addListener(onGameStateChanged);

    // Get the positions of our endpoints
    var nodeAPosition = GameUtil.getHexPosition($scope.nodeA.color, $scope.nodeA.index);
    var nodeBPosition = GameUtil.getHexPosition($scope.nodeB.color, $scope.nodeB.index);

    // Special case positioning for links from a base
    if ($scope.nodeA.index == 0 && $scope.nodeB.index == 1) {
      nodeAPosition = { x: nodeAPosition.x1, y: nodeAPosition.y1 };
    }
    else if ($scope.nodeA.index == 0 && $scope.nodeB.index == 2) {
      nodeAPosition = { x: nodeAPosition.x2, y: nodeAPosition.y2 };
    }
    if ($scope.nodeA.index == 2 && $scope.nodeB.index == 0) {
      nodeBPosition = { x: nodeBPosition.x2, y: nodeBPosition.y2 };
    }
    else if ($scope.nodeA.index == 1 && $scope.nodeB.index == 0) {
      nodeBPosition = { x: nodeBPosition.x1, y: nodeBPosition.y1 };
    }

    // Create the Konva line
    var line = new Konva.Line({
      points: [
        nodeAPosition.x,
        nodeAPosition.y,
        nodeBPosition.x,
        nodeBPosition.y
      ],
      stroke: grayColor,
      strokeWidth: mainLinksStroke,
      lineCap: 'round',
      lineJoin: 'round',
      visible: lineVisible,
      id: $scope.nodeA.color + $scope.nodeA.index + ' to ' + $scope.nodeB.color + $scope.nodeB.index + ' Link',
    });
    linksGroup.add(line);

    // ----------------------------------------------------------------------------
    $scope.$on('$destroy', function() {
      GameState.removeListener(onGameStateChanged);
      line.remove();
    });

    function onGameStateChanged() {
      var serverNodeA = GameUtil.getServerNode(GameState.currentGameState.serverNodes, $scope.nodeA.color, $scope.nodeA.index);
      var serverNodeB = GameUtil.getServerNode(GameState.currentGameState.serverNodes, $scope.nodeB.color, $scope.nodeB.index);
      if (serverNodeA.ownerColor == serverNodeB.ownerColor && serverNodeA.ownerColor != '') {
        line.stroke(GameUtil.getColor(serverNodeA.ownerColor));
      }
      else {
        line.stroke(noColor);
      }
      linksGroup.draw();
    }
    onGameStateChanged();
  }
  return {
    link: link,
    restrict: 'E',
    scope: {
      callbackFn: '&',
      nodeA: '=',
      nodeB: '='
    },
  }
}]);
