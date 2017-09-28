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

var app = angular.module('CyberWar', []);

app.controller('canvasCtrl', function($scope){
  $scope.canvasKonvaObj = false;
  $scope.canvaskonvaStageObj = false;
});

console.log("beforeDirective");

app.directive('gameBoardServers', ['$rootScope', function ($rootScope) {
  return {
    restrict: 'A',
    scope: {
      konvaobj: '=',
      konvastageobj: '='
    },
    link: function (scope, el, attrs) {
      console.log("gameBoardLinksLoading");
      if (!scope.konvastageobj) {
        var id = attrs["id"];
        //create random unique id
        if (!id) {
          id = Math.random().toString(36).substring(7);
        }
        if (!scope.kineticstageobj) {
          scope.kineticstageobj = stage;
        }
        if (!scope.konvastageobj.container) {
          scope.konvastageobj.attrs.container = id;
        }
      }

      var domainsLayer = new Konva.Layer();

      // domainsGroup.add(origin);
      // add the layer to the stage -- 4 for now
      domainsLayer.add(r1Hex);


      var rectX = scope.kineticstageobj.getWidth() / 2 - 50;
      var rectY = scope.kineticstageobj.getHeight() / 2 - 25;

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
      if (!scope.kineticobj) {
        scope.kineticobj = new Konva.Rect(options);
      }

      // add cursor styling
      scope.kineticobj.on('mouseover', function () {

        document.body.style.cursor = 'pointer';

      });
      scope.kineticobj.on('mouseout', function () {
        document.body.style.cursor = 'default';
        $rootScope.$emit("CANVAS-MOUSEOUT");
      });

      layer.add(scope.kineticobj);

      console.log("gameBoardLinksLoaded")
      scope.kineticstageobj.add(layer);
    }
  }
}]);

console.log("afterDirective");

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

  // domainsLayer.add(domainsGroup);
  stage.add(bgLayer,boardItems);

};

imageObj.src = 'assets/client/img/empty-transparency-bg-1024x768.png';
