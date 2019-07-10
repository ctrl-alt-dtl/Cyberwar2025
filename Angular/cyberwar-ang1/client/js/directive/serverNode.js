angular.module('CyberWar')
.directive('serverNode', ['GameState', 'GameUtil', function(GameState, GameUtil) {
  function link($scope, element, attrs) {
    GameState.addListener(onGameStateChanged);

    var hex, text;

    // ----------------------------------------------------------------------------
    $scope.$on('$destroy', function() {
      GameState.removeListener(onGameStateChanged);
      hex.remove();
      text.remove();
    });

    // ----------------------------------------------------------------------------
    function onGameStateChanged() {
      var serverNode = GameUtil.getServerNode(GameState.currentGameState.serverNodes, $scope.color, $scope.index);
      if (serverNode) {
        hex.fill(GameUtil.getColor(GameUtil.getServerNodeDisplayedColor(serverNode, GameState.currentPlayerData, GameState.positivelyLinkedNodes)));
        text.text(GameUtil.getServerNodeDisplayedText(serverNode, GameState.currentPlayerData, GameState.positivelyLinkedNodes));
      }
      else {
        hex.fill('black');
        text.text('X');
        hex.off('mouseover');
        hex.off('mouseout');
        hex.off('click');
      }
      text.rotation(-DOMAIN_LAYER_BOARD_ROTATION);
    }

    // ----------------------------------------------------------------------------
    var createKonvaObjects = function(color, index) {
      var hexPosition = GameUtil.getHexPosition(color, index);

      // Create the hex element
      hex = new Konva.RegularPolygon({
        x: hexPosition.x,
        y: hexPosition.y,
        sides: 6,
        radius: radius,
        fill: grayColor,
        stroke: 'black',
        strokeWidth: 5,
        rotation: 90,
        id: color + index + 'Hex'
      });

      // Create the text element
      text = new Konva.Text({
        //text: nodeValOne,
        x: hexPosition.x,
        y: hexPosition.y,
        offset: {
          x: text_offset_x,
          y: text_offset_y
        },
        width: serverTextWidth,
        stroke: 'black',
        strokeWidth: 1,
        fontFamily: 'sans-serif',
        fontSize: serverTextSize,
        fill: '#FFF',
        visible: textVisible,
        rotation: -DOMAIN_LAYER_BOARD_ROTATION
      });
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
          $scope.$apply($scope.callbackFn({ color: color, index: index }));
        }
      });
      text.listening(false);
    }

    createKonvaObjects($scope.color, $scope.index);
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
