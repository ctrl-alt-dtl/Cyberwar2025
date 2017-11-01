angular.module('CyberWar')
.directive('playerBase', ['GameUtil', function(GameUtil) {
  function link($scope, element, attrs) {
    // ----------------------------------------------------------------------------
    var createKonvaObjects = function(color) {
      // Create the hex element
      var hex = new Konva.Line({
        points: getHexPoints(color),
        fill: GameUtil.getColor(color),
        stroke: 'black',
        strokeWidth: 2,
        closed: true,
        id: color + 'Base'
      });

      // Create the text element
      var textPosition = getTextPosition(color);
      var text = new Konva.Text({
        text: getBaseText(color),
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
          x2 = point_x / 2.42;
          y2 = point_y / 1.154;
          x3 = point_x / 1.705;
          y3 = point_y / 1.154;
          x5 = point_x / 1.705;
          y5 = point_y / 1.1;
          x6 = point_x / 2.42;
          y6 = point_y / 1.1;
          break;
        case Color.ORANGE:
          x2 = point_x / 1.44;
          y2 = point_y / 1.28;
          x3 = point_x / 1.28;
          y3 = point_y / 1.715;
          x5 = point_x / 1.237;
          y5 = point_y / 1.652;
          x6 = point_x / 1.387;
          y6 = point_y / 1.24;
          break;
        case Color.YELLOW:
          x2 = point_x / 1.28;
          y2 = point_y / 2.4;
          x3 = point_x / 1.44;
          y3 = point_y / 4.647;
          x5 = point_x / 1.387;
          y5 = point_y / 5.15;
          x6 = point_x / 1.237;
          y6 = point_y / 2.53;
          break;
        case Color.GREEN:
          x2 = point_x / 1.705;
          y2 = point_y / 7.5;
          x3 = point_x / 2.42;
          y3 = point_y / 7.5;
          x5 = point_x / 2.42;
          y5 = point_y / 11;
          x6 = point_x / 1.705;
          y6 = point_y / 11;
          break;
        case Color.BLUE:
          x2 = point_x / 3.28;
          y2 = point_y / 4.65;
          x3 = point_x / 4.57;
          y3 = point_y / 2.4;
          x5 = point_x / 5.26;
          y5 = point_y / 2.52;
          x6 = point_x / 3.6;
          y6 = point_y / 5.15;
          break;
        case Color.PURPLE:
          x2 = point_x / 4.6;
          y2 = point_y / 1.715;
          x3 = point_x / 3.28;
          y3 = point_y / 1.28;
          x5 = point_x / 3.595;
          y5 = point_y / 1.24;
          x6 = point_x / 5.23;
          y6 = point_y / 1.652;
          break;
      }
      return [x1, y1, x2, y2, x3, y3, x4, y4, x5, y5, x6, y6];
    }

    // ----------------------------------------------------------------------------
    var getTextPosition = function(color) {
      switch(color) {
        case Color.RED:
          return { x: BASE_BOARD_WIDTH / 2.1, y: BASE_BOARD_HEIGHT / 1.135 };
        case Color.ORANGE:
          return { x: BASE_BOARD_WIDTH / 1.41, y: BASE_BOARD_HEIGHT / 1.29 };
        case Color.YELLOW:
          return { x: BASE_BOARD_WIDTH / 1.315, y: BASE_BOARD_HEIGHT / 2.91 };
        case Color.GREEN:
          return { x: BASE_BOARD_WIDTH / 1.8, y: BASE_BOARD_HEIGHT / 8.4 };
        case Color.BLUE:
          return { x: BASE_BOARD_WIDTH / 3.65, y: BASE_BOARD_HEIGHT / 3.75 };
        case Color.PURPLE:
          return { x: BASE_BOARD_WIDTH / 4.22, y: BASE_BOARD_HEIGHT / 1.52 };
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
