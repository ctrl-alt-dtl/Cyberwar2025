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
        // If they both have colors, check if they match
        if (serverNodeAColor && serverNodeBColor) {
          // If both colors match, check if the color is either not our color or is not manipulated to look like our color
          if (serverNodeAColor == serverNodeBColor) {
            // If the color is another player's color or we actually own both nodes, then color it the matching color
            if (serverNodeAColor != GameState.currentPlayerData.color || (serverNodeA.manipulateColor != GameState.currentPlayerData.color && serverNodeB.manipulateColor != GameState.currentPlayerData.color)) {
              lineColor = GameUtil.getColor(serverNodeAColor);
            }
          }
          // If they don't match, check if both nodes are in our network
          else if (GameUtil.List.isLocationInList(serverNodeA.location, GameState.positivelyLinkedNodes) &&
                   GameUtil.List.isLocationInList(serverNodeB.location, GameState.positivelyLinkedNodes)) {
            // If the first node is our color, check if we are exploiting our way to the second color
            if (serverNodeAColor == GameState.currentPlayerData.color &&
              // If we reached this node through an exploit link
              GameUtil.List.isDestinationInLinkList(serverNodeB.location, GameState.currentPlayerData.exploitLinks) &&
              // But this isn't the same link AS that exploit link
              !GameUtil.List.isLinkInLinkList({ nodeA: serverNodeA.location, nodeB: serverNodeB.location }, GameState.currentPlayerData.exploitLinks)) {
              lineColor = GameUtil.getColor(serverNodeAColor);
            }
            // If the second node is our color, check if we are exploiting our way to the second color
            else if (serverNodeBColor == GameState.currentPlayerData.color &&
              // If we reached this node through an exploit link
              GameUtil.List.isDestinationInLinkList(serverNodeA.location, GameState.currentPlayerData.exploitLinks) &&
              // But this isn't the same link AS that exploit link
              !GameUtil.List.isLinkInLinkList({ nodeA: serverNodeB.location, nodeB: serverNodeA.location }, GameState.currentPlayerData.exploitLinks)) {
              lineColor = GameUtil.getColor(serverNodeBColor);
            }
          }
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
