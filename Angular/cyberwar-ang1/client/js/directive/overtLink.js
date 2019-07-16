angular.module('CyberWar')
.directive('overtLink', ['GameState', 'GameUtil', function(GameState, GameUtil) {
  function link($scope, element, attrs) {
    var line;

    GameState.addListener(onGameStateChanged);

    // ----------------------------------------------------------------------------
    $scope.$on('$destroy', function() {
      GameState.removeListener(onGameStateChanged);
      line.remove();
    });

    // ----------------------------------------------------------------------------
    function onGameStateChanged() {
      var serverNodeA = GameUtil.List.getServerNode(GameState.currentGameState.serverNodes, $scope.nodeA.color, $scope.nodeA.index);
      var serverNodeB = GameUtil.List.getServerNode(GameState.currentGameState.serverNodes, $scope.nodeB.color, $scope.nodeB.index);

      // The line is "hidden" by default
      var lineColor = noColor;
      if (serverNodeA && serverNodeB) {
        var serverNodeAColor = GameUtil.getServerNodeDisplayedColor(serverNodeA, GameState.currentPlayerData, GameState.positivelyLinkedNodes);
        var serverNodeBColor = GameUtil.getServerNodeDisplayedColor(serverNodeB, GameState.currentPlayerData, GameState.positivelyLinkedNodes);
        // If they both have colors and they match, use the matching color
        if (serverNodeAColor && serverNodeBColor && serverNodeAColor == serverNodeBColor) {
          lineColor = GameUtil.getColor(serverNodeAColor);
        }
      }
      // Update the line's stroke color
      line.stroke(lineColor);
    }

    // ----------------------------------------------------------------------------
    var createKonvaObjects = function(nodeA, nodeB) {
      // Get the positions of our endpoints
      var nodeAPosition = GameUtil.getHexPosition(nodeA.color, nodeA.index);
      var nodeBPosition = GameUtil.getHexPosition(nodeB.color, nodeB.index);

      // Special case positioning for links from a base
      if (nodeA.index == 0 && nodeB.index == 1) {
        nodeAPosition = { x: nodeAPosition.x1, y: nodeAPosition.y1 };
      }
      else if (nodeA.index == 0 && nodeB.index == 2) {
        nodeAPosition = { x: nodeAPosition.x2, y: nodeAPosition.y2 };
      }
      if (nodeA.index == 2 && nodeB.index == 0) {
        nodeBPosition = { x: nodeBPosition.x2, y: nodeBPosition.y2 };
      }
      else if (nodeA.index == 1 && nodeB.index == 0) {
        nodeBPosition = { x: nodeBPosition.x1, y: nodeBPosition.y1 };
      }

      // Create the Konva line
      line = new Konva.Line({
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
        id: nodeA.color + nodeA.index + ' to ' + nodeB.color + nodeB.index + ' Overt Link',
        listening: false,
      });
      linksGroup.add(line);
    }

    createKonvaObjects($scope.nodeA, $scope.nodeB);
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
