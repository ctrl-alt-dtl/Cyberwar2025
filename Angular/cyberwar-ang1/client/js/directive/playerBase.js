angular.module('CyberWar')
.directive('playerBase', function(ChatState, GameState, GameUtil) {
  function link($scope, element, attrs) {
    ChatState.addListener(onChatMessageReceived);
    GameState.addListener(onGameStateChanged);

    var hex, text, chatNotify, midX, midY;

    // ----------------------------------------------------------------------------
    $scope.$on('$destroy', function() {
      ChatState.removeListener(onChatMessageReceived);
      GameState.removeListener(onGameStateChanged);
      hex.remove();
      text.remove();
    });

    // ----------------------------------------------------------------------------
    function onChatMessageReceived(message) {
      if (GameState.currentGameState && GameState.currentPlayerData) {
        // If we have a new message that is to the current player and from this base,
        // show our chat notification, unless we are currently looking at the chat for this base
        var basePlayerName = GameUtil.findPlayerByColor(GameState.currentGameState.players, $scope.color).name;
        if (message.isNew &&
          message.to == GameState.currentPlayerData.name &&
          message.from == basePlayerName &&
          !ChatState.isViewingPrivateChat($scope.color)) {
          toggleChatNotification(true);
        }
      }
    }

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
        //TODO: Uncomment
        //stroke: 'black',
        strokeWidth: 4,
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

      // Chat Notification Toast Position
      chatNotify = new Konva.Group({
        visible: false
      });

      var chatNotifyRect = new Konva.Rect({
        x: getHexMidPointX(color),
        y: getHexMidPointY(color),
        offset: {
          x: notification_rect_offset_x,
          y: notification_rect_offset_y
        },
        width: 130,
        height: 35,
        fill: '#434343',
        stroke: 'black',
        strokeWidth: 2,
        rotation: getTextRotation(color)
      });

      var chatNotifyText = new Konva.Text({
        x: getHexMidPointX(color),
        y: getHexMidPointY(color),
        offset: {
          x: notification_text_offset_x,
          y: notification_text_offset_y
        },
        text: "New Message",
        fontSize: 20,
        fontFamily: 'Calibri',
        fill: 'white',
        width: 120,
        rotation: getTextRotation(color)
      });

      chatNotify.add(chatNotifyRect, chatNotifyText);

      domainsGroup.add(chatNotify, hex, text);

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
        // Always hide the chat notification when we click on this node
        toggleChatNotification(false);
      });
      text.listening(false);
    }

    // ----------------------------------------------------------------------------
    var toggleChatNotification = function(showNotification) {
      chatNotify.visible(showNotification);
      redrawStage();
    }

    // ----------------------------------------------------------------------------
    // Don't make fun of my redundant midX/midY code... this was a WIP in a pinch. This could be done more efficiently.
    var getHexMidPointX = function (color) {
      var hexMidPoint = GameUtil.getHexPosition(color, 0);
      var x1 = hexMidPoint.x1
      var x2 = hexMidPoint.x2
      return midX = (x1 + x2) / 2;
    }
    // ----------------------------------------------------------------------------
    var getHexMidPointY = function (color) {
      var hexMidPoint = GameUtil.getHexPosition(color, 0);
      var y1 = hexMidPoint.y1
      var y2 = hexMidPoint.y2
      return midY = (y1 + y2) / 2;
    }

    // ----------------------------------------------------------------------------
    var getHexPoints = function(color) {
      var hexPosition = GameUtil.getHexPosition(color, 0);
      var x1 = hexPosition.x1, y1 = hexPosition.y1, x4 = hexPosition.x2, y4 = hexPosition.y2;
      var x2, y2, x3, y3, x5, y5, x6, y6;
      switch(color) {
        case Color.RED:
          x2 = point_x / 2.35;    // lower left
          y2 = point_y / 1.098;   // lower left
          x3 = point_x / 1.7395;   // lower right
          y3 = point_y / 1.098;   // lower right
          x5 = point_x / 1.74;   // top right
          y5 = point_y / 1.167;   // top right
          x6 = point_x / 2.353;    // top left
          y6 = point_y / 1.167;   // top left
          break;
        case Color.PURPLE:
          x2 = point_x / 9.3;     // lower left
          y2 = point_y / 1.563;   // lower left
          x3 = point_x / 5.49;     // lower right
          y3 = point_y / 1.299;    // lower right
          x5 = point_x / 4.38;     // top right
          y5 = point_y / 1.346;    // top right
          x6 = point_x / 6.48;     // top left
          y6 = point_y / 1.635;    // top left
          break;
        case Color.BLUE:
          x2 = point_x / 5.5;    // lower left
          y2 = point_y / 4.36;    // lower left
          x3 = point_x / 9.4;     // lower right
          y3 = point_y / 2.78;    // lower right
          x5 = point_x / 6.54;     // top right
          y5 = point_y / 2.59;    // top right
          x6 = point_x / 4.38;    // top left
          y6 = point_y / 3.91;    // top left
          break;
        case Color.GREEN:
          x2 = point_x / 1.735;   // lower left
          y2 = point_y / 11.35;     // lower left
          x3 = point_x / 2.35;    // lower right
          y3 = point_y / 11.35;     // lower right
          x5 = point_x / 2.35;    // top right
          y5 = point_y / 7;    // top right
          x6 = point_x / 1.735;   // top left
          y6 = point_y / 7;    // top left
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
      }
      return [x1, y1, x2, y2, x3, y3, x4, y4, x5, y5, x6, y6];
    }

    // ----------------------------------------------------------------------------
    var getTextPosition = function(color) {
      switch(color) {
        case Color.RED:
          return { x: BASE_BOARD_WIDTH / 2.1, y: BASE_BOARD_HEIGHT / 1.132 };
        case Color.ORANGE:
          return { x: BASE_BOARD_WIDTH / 1.26, y: BASE_BOARD_HEIGHT / 1.375 };
        case Color.YELLOW:
          return { x: BASE_BOARD_WIDTH / 1.185, y: BASE_BOARD_HEIGHT / 2.89 };
        case Color.GREEN:
          return { x: BASE_BOARD_WIDTH / 1.83, y: BASE_BOARD_HEIGHT / 8.68 };
        case Color.BLUE:
          return { x: BASE_BOARD_WIDTH / 5.35, y: BASE_BOARD_HEIGHT / 3.65 };
        case Color.PURPLE:
          return { x: BASE_BOARD_WIDTH / 6.5, y: BASE_BOARD_HEIGHT / 1.5 };
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
});
