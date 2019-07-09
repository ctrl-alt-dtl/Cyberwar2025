angular.module('CyberWar')
.directive('playerBase', ['GameState', 'GameUtil', function(GameState, GameUtil) {
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
      hex.fill(GameUtil.getColor($scope.color));
      text.text(getBaseText($scope.color));
    }

    // ----------------------------------------------------------------------------
    var createKonvaObjects = function(color) {
      // Create the hex element
      hex = new Konva.Line({
        points: getHexPoints(color),
        fill: grayColor,
        stroke: 'black',
        strokeWidth: 3,
        closed: true,
        id: color + 'Base'
      });

      // Create the text element
      var textPosition = getTextPosition(color);
      text = new Konva.Text({
        x: textPosition.x,
        y: textPosition.y,
        offset: {
          x: base_text_offset_x,
          y: base_text_offset_y
        },
        width: baseTextWidth,
        stroke: 'black',
        strokeWidth: 1,
        fontFamily:'sans-serif',
        fontSize: baseTextSize,
        fontStyle: 'bold',
        fill: '#FFF',
        rotation: getTextRotation(color),
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
          $scope.$apply($scope.callbackFn({ color: color }));
        }
      });
      text.listening(false);
    }

    // ----------------------------------------------------------------------------
    var getHexPoints = function(color) {
      var hexPosition = GameUtil.getHexPosition(color, 0);
      var x1 = hexPosition.x1, y1 = hexPosition.y1, x4 = hexPosition.x2, y4 = hexPosition.y2;
      var x2, y2, x3, y3, x5, y5, x6, y6;
      switch(color) {
        case Color.RED:
          x2 = point_x / 2.36;
          y2 = point_y / 1.217;
          x3 = point_x / 1.74;
          y3 = point_y / 1.217;
          x5 = point_x / 1.74;
          y5 = point_y / 1.15;
          x6 = point_x / 2.36;
          y6 = point_y / 1.15;
          break;
        case Color.ORANGE:
          x2 = point_x / 1.225; // lower left
          y2 = point_y / 1.345; // lower left
          x3 = point_x / 1.119; // lower right
          y3 = point_y / 1.599; // lower right
          x5 = point_x / 1.181; // top right
          y5 = point_y / 1.659; // top right
          x6 = point_x / 1.295; // top left
          y6 = point_y / 1.39; // top left
          break;
        case Color.YELLOW:
          x2 = point_x / 1.119;
          y2 = point_y / 2.69;
          x3 = point_x / 1.22;
          y3 = point_y / 3.9;
          x5 = point_x / 1.292;
          y5 = point_y / 3.59;
          x6 = point_x / 1.178;
          y6 = point_y / 2.525;
          break;
        case Color.GREEN:
          x2 = point_x / 1.735;
          y2 = point_y / 5.7;
          x3 = point_x / 2.35;
          y3 = point_y / 5.7;
          x5 = point_x / 2.35;
          y5 = point_y / 7.75;
          x6 = point_x / 1.735;
          y6 = point_y / 7.75;
          break;
        case Color.BLUE:
          x2 = point_x / 5.58;
          y2 = point_y / 3.93;
          x3 = point_x / 9.6;
          y3 = point_y / 2.68;
          x5 = point_x / 6.6;
          y5 = point_y / 2.52;
          x6 = point_x / 4.41;
          y6 = point_y / 3.59;
          break;
        case Color.PURPLE:
          x2 = point_x / 9.5;
          y2 = point_y / 1.595;
          x3 = point_x / 5.5;
          y3 = point_y / 1.34;
          x5 = point_x / 4.4;
          y5 = point_y / 1.39;
          x6 = point_x / 6.5;
          y6 = point_y / 1.66;
          break;
      }
      return [x1, y1, x2, y2, x3, y3, x4, y4, x5, y5, x6, y6];
    }

    // ----------------------------------------------------------------------------
    var getTextPosition = function(color) {
      switch(color) {
        case Color.RED:
          return { x: BASE_BOARD_WIDTH / 2.1, y: BASE_BOARD_HEIGHT / 1.185 };
        case Color.ORANGE:
          return { x: BASE_BOARD_WIDTH / 1.26, y: BASE_BOARD_HEIGHT / 1.375 };
        case Color.YELLOW:
          return { x: BASE_BOARD_WIDTH / 1.185, y: BASE_BOARD_HEIGHT / 2.89 };
        case Color.GREEN:
          return { x: BASE_BOARD_WIDTH / 1.83, y: BASE_BOARD_HEIGHT / 6.4 };
        case Color.BLUE:
          return { x: BASE_BOARD_WIDTH / 5.35, y: BASE_BOARD_HEIGHT / 3.3 };
        case Color.PURPLE:
          return { x: BASE_BOARD_WIDTH / 6.5, y: BASE_BOARD_HEIGHT / 1.55 };
      }
      return { x: BASE_BOARD_WIDTH * 0.5, y: BASE_BOARD_HEIGHT * 0.5 };
    }

    // ----------------------------------------------------------------------------
    var getTextRotation = function(color) {
      switch(color) {
        case Color.RED:
          return 0;
        case Color.ORANGE:
          return 300;
        case Color.YELLOW:
          return 240;
        case Color.GREEN:
          return 180;
        case Color.BLUE:
          return 120;
        case Color.PURPLE:
          return 60;
      }
      return 0;
    }

    // ----------------------------------------------------------------------------
    var getBaseText = function(color) {
      switch(color) {
        case Color.RED:
          return 'DotEvil';
        case Color.ORANGE:
          return 'CaffeineCowboy';
        case Color.YELLOW:
          return 'BuzzKill';
        case Color.GREEN:
          return 'CuttlePhish';
        case Color.BLUE:
          return 'FrostByte';
        case Color.PURPLE:
          return 'WMDeez';
      }
      return 'Invalid Color';
    }

    createKonvaObjects($scope.color);
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
