var BASE_BOARD_WIDTH = 1024;
var BASE_BOARD_HEIGHT = 768;

// var BASE_BOARD_WIDTH = 1024;
// var BASE_BOARD_HEIGHT = 768;

/**
 * Other Resolutions: 1152x864, 1280x960, 1400x1050, 1440x1080
 */

var DOMAIN_LAYER_BOARD_ROTATION = 0;


var stage = new Konva.Stage({
  container: '.container',
  width: BASE_BOARD_HEIGHT,
  height: BASE_BOARD_HEIGHT
});

var bgLayer = new Konva.Layer();
var domainsLayer = new Konva.Layer();

var bgGroup = new Konva.Group({
  width: BASE_BOARD_HEIGHT,
  height: BASE_BOARD_HEIGHT,
  x: BASE_BOARD_WIDTH / 2.665,
  y: BASE_BOARD_HEIGHT / 2,
  offset: {
    x: BASE_BOARD_WIDTH / 2,
    y: BASE_BOARD_HEIGHT / 2,
  }
});

var domainsGroup = new Konva.Group({
  width: BASE_BOARD_HEIGHT,
  height: BASE_BOARD_HEIGHT,
  x: BASE_BOARD_WIDTH / 2.665,
  y: BASE_BOARD_HEIGHT / 2,
  offset: {
    x: BASE_BOARD_WIDTH / 2,
    y: BASE_BOARD_HEIGHT / 2,
  },
  rotation: DOMAIN_LAYER_BOARD_ROTATION
});

var imageObj = new Image();
// background board
imageObj.onload = function() {
  var bgBoard = new Konva.Image({
    width: BASE_BOARD_WIDTH,
    height: BASE_BOARD_HEIGHT,
    image: imageObj
  });

  // add the shapes to the layer, the order matters (background, links, bases, then servers).
  bgGroup.add(minorBounds1, minorBounds2, minorBounds3, minorBounds4, minorBounds5, minorBounds6);
  bgGroup.add(mainBoundary3, mainBoundary2, mainBoundary1);
  bgGroup.add(tier3Text, tier2Text, tier1Text);

  bgLayer.add(bgBoard, boardEdge, tier3, tier2, tier1, bgGroup, centerHex);

  domainsLayer.add(domainsGroup);
  stage.add(bgLayer, domainsLayer);

};

imageObj.src = 'assets/client/img/empty-transparency-bg-1024x768.png';

var app = angular.module('CyberWar', []);

app.controller('canvasCtrl', function($scope){
  $scope.canvasKonvaObj = false;
  $scope.canvaskonvaStageObj = false;
});

console.log("beforeDirective");

app.directive('gameBoardRedServers', function ($timeout) {
  return {
    restrict: 'AE',
    link: function (scope, el, attrs) {
      console.log("gameBoardRedServersLoading");

      // add server point to the domain
      domainsGroup.add(rBase, r1Hex, r2Hex, r3Hex, r4Hex, r5Hex, r6Hex, r7Hex, r8Hex);

      var r8HexListener = new Konva.RegularPolygon({
        x: pt_r8Hex_X,
        y: pt_r8Hex_Y,
        sides: 6,
        radius: radius,
        rotation: 90,
        id: 'r1HexListener'
      });

      domainsGroup.add(r8HexListener);
      console.log("gameBoardRedServersLoaded");

      // CLICK TEST!!!!!
      scope.clickCount = 0;
      r8HexListener.on ('click', function () {
        console.log("test red");
        $timeout(function() {
          scope.clickCount++;
        });
      });
    }
  }
});

app.directive('gameBoardPurpleServers', function ($timeout) {
  return {
    restrict: 'AE',
    link: function (scope, el, attrs) {
      console.log("gameBoardPurpleServersLoading");

      // add the layer to the stage -- 4 for now
      domainsGroup.add(p1Hex, p2Hex,p3Hex, p4Hex, p5Hex, p6Hex, p7Hex, p8Hex);

      var p8HexListener = new Konva.RegularPolygon({
        x: pt_p8Hex_X,
        y: pt_p8Hex_Y,
        sides: 6,
        radius: radius,
        rotation: 90,
        id: 'p1HexListener'
      });

      domainsGroup.add(p8HexListener);

      console.log("gameBoardPurpleServersLoaded")
      // CLICK TEST!!!!!
      scope.clickCount2 = 0;
      p8HexListener.on ('click', function () {
        console.log("test purple");
        $timeout(function() {
          scope.clickCount2++;
        });
      });
    }
  }
});

console.log("afterDirective");


