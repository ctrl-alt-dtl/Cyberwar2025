var BASE_BOARD_WIDTH = 1280;
var BASE_BOARD_HEIGHT = 960;

// var BASE_BOARD_WIDTH = 1024;
// var BASE_BOARD_HEIGHT = 768;

const MAX_BOARD_WIDTH = 1600;
const MAX_BOARD_HEIGHT = 1200;

const MIN_BOARD_WIDTH = 800;
const MIN_BOARD_HEIGHT = 600;

/**
 * Other Resolutions: 1152x864, 1280x960, 1400x1050, 1440x1080
 */

var DOMAIN_LAYER_BOARD_ROTATION = 0;


var stage = new Konva.Stage({
  container: '.container',
  width: BASE_BOARD_WIDTH,
  height: BASE_BOARD_HEIGHT
});

var bgLayer = new Konva.Layer();
var boardItems = new Konva.Layer();
var domainsLayer = new Konva.Layer();

var domainsGroup = new Konva.Group({
  width: BASE_BOARD_WIDTH,
  height: BASE_BOARD_HEIGHT,
  x: BASE_BOARD_WIDTH / 2,
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
  bgLayer.add(bgBoard);
  bgLayer.add(boardEdge, tier3, tier2, tier1);
  bgLayer.add(minorBounds1, minorBounds2, minorBounds3, minorBounds4, minorBounds5, minorBounds6);
  bgLayer.add(mainBoundary3, mainBoundary2, mainBoundary1, centerHex);
  bgLayer.add(tier3Text, tier2Text, tier1Text);
  // Extra board items (Windows, Buttons, Chat, and Actions)
  boardItems.add(submitOrdersBtn, ordersQueue, effectsWindow, chatWindow, notesRulesWindow);

  domainsLayer.add(domainsGroup);
  stage.add(bgLayer,boardItems, domainsLayer);

};

imageObj.src = 'assets/client/img/empty-transparency-bg-1024x768.png';

var app = angular.module('CyberWar', []);

app.controller('canvasCtrl', function($scope){
  $scope.canvasKonvaObj = false;
  $scope.canvaskonvaStageObj = false;
});

console.log("beforeDirective");

app.directive('gameBoardRedServers', ['$rootScope', function ($rootScope) {
  return {
    restrict: 'A',
    scope: {
      konvaobj: '=',
      konvastageobj: '='
    },
    link: function (scope, el, attrs) {
      console.log("gameBoardRedServersLoading");
      if (!scope.konvastageobj) {
        var id = attrs["id"];
        //create random unique id
        if (!id) {
          id = Math.random().toString(36).substring(7);
        }
        if (!scope.konvastageobj) {
          scope.konvastageobj = stage;
        }
        if (!scope.konvastageobj.container) {
          scope.konvastageobj.attrs.container = id;
        }
      }

      // domainsGroup.add(origin);
      // add the layer to the stage -- 4 for now
      domainsGroup.add(r1Hex, r2Hex, r3Hex, r4Hex, r5Hex, r6Hex, r7Hex, r8Hex);
      domainsLayer(domainsGroup);

      /*var layer = new Konva.Layer();
      var rectX = scope.konvastageobj.getWidth() / 2 - 50;
      var rectY = scope.konvastageobj.getHeight() / 2 - 25;

      //if kineticObj is null, init
      var options = {
        x: rectX,
        y: rectY,
        width: 100,
        height: 50,
        fill: '#00D2FF',
        stroke: 'black',
        strokeWidth: 4,
      };
      if (scope.isdraggable) {
        options.draggable = true;
      }
      if (!scope.konvaobj) {
        scope.konvaobj = new Konva.Rect(options);
      }

      // add cursor styling
      scope.konvaobj.on('mouseover', function () {

        document.body.style.cursor = 'pointer';

      });
      scope.konvaobj.on('mouseout', function () {
        document.body.style.cursor = 'default';
        $rootScope.$emit("CANVAS-MOUSEOUT");
      });

      layer.add(scope.konvaobj);*/

      console.log("gameBoardRedServersLoaded")
      scope.konvastageobj.add(domainsLayer);

    }
  }
}]);

app.directive('gameBoardPurpleServers', ['$rootScope', function ($rootScope) {
  return {
    restrict: 'A',
    scope: {
      konvaobj: '=',
      konvastageobj: '='
    },
    link: function (scope, el, attrs) {
      console.log("gameBoardPurpleServersLoading");
      if (!scope.konvastageobj) {
        var id = attrs["id"];
        //create random unique id
        if (!id) {
          id = Math.random().toString(36).substring(7);
        }
        if (!scope.konvastageobj) {
          scope.konvastageobj = stage;
        }
        if (!scope.konvastageobj.container) {
          scope.konvastageobj.attrs.container = id;
        }
      }

      // add the layer to the stage -- 4 for now
      domainsGroup.add(p1Hex, p2Hex,p3Hex, p4Hex, p5Hex, p6Hex, p7Hex, p8Hex);
      domainsLayer(domainsGroup);

      /*var layer = new Konva.Layer();
      var rectX = scope.konvastageobj.getWidth() / 2 - 50;
      var rectY = scope.konvastageobj.getHeight() / 2 - 25;

      //if kineticObj is null, init
      var options = {
        x: rectX,
        y: rectY,
        width: 100,
        height: 50,
        fill: '#00D2FF',
        stroke: 'black',
        strokeWidth: 4,
      };
      if (scope.isdraggable) {
        options.draggable = true;
      }
      if (!scope.konvaobj) {
        scope.konvaobj = new Konva.Rect(options);
      }

      // add cursor styling
      scope.konvaobj.on('mouseover', function () {

        document.body.style.cursor = 'pointer';

      });
      scope.konvaobj.on('mouseout', function () {
        document.body.style.cursor = 'default';
        $rootScope.$emit("CANVAS-MOUSEOUT");
      });

      layer.add(scope.konvaobj);*/

      console.log("gameBoardPurpleServersLoaded")
      // scope.konvastageobj.add(domainsLayer);

    }
  }
}]);

console.log("afterDirective");


