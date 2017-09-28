'use strict';

var app = angular.module('myApp', []);

var BASE_BOARD_WIDTH = 1280;
var BASE_BOARD_HEIGHT = 960;

var DOMAIN_LAYER_BOARD_ROTATION = 0;

app.controller('canvasCtrl', function($scope){
  $scope.canvasKonvaObj = false;
  $scope.canvaskonvaStageObj = false;
  $scope.isDraggable = true;
});

app.directive('gameBoard', ['$rootScope', function ($rootScope) {
  return {
    restrict: 'A',
    scope: {
      konvaobj: '=',
      konvastageobj: '=',
      isdraggable: '='
    },
    link: function (scope, el, attrs) {
      console.log("in");
      if (!scope.konvastageobj) {
        var id = attrs["id"];
        //create random unique id
        if (!id) {
          id = Math.random().toString(36).substring(7);
        }
        if (!scope.konvastageobj) {
          scope.konvastageobj = new Konva.Stage({
            container: id,
            width: BASE_BOARD_WIDTH,
            height: BASE_BOARD_HEIGHT
          });
        }
        if (!scope.konvastageobj.container) {
          scope.konvastageobj.attrs.container = id;
        }
      }

      var centerHex = new Konva.RegularPolygon({
        x: scope.konvastageobj.width() / 2,
        y: scope.konvastageobj.height() / 2,
        sides: 6,
        radius: BASE_BOARD_WIDTH / 38,
        fill: 'white',
        stroke: 'black',
        strokeWidth: 2,
        rotation: 90
      });

      var boardEdge= new Konva.RegularPolygon({
        x: scope.konvastageobj.width() / 2,
        y: scope.konvastageobj.height() / 2,
        sides: 6,
        radius: BASE_BOARD_WIDTH / 2.79,
        fill: 'white',
        stroke: 'black',
        strokeWidth: 4,
        rotation: 90
      });

      var tier3= new Konva.RegularPolygon({
        x: scope.konvastageobj.width() / 2,
        y: scope.konvastageobj.height() / 2,
        sides: 6,
        radius: BASE_BOARD_WIDTH / 3.5,
        fill: '#E3E3E3',
        stroke: 'black',
        strokeWidth: 1,
        rotation: 90
      });

      var tier2= new Konva.RegularPolygon({
        x: scope.konvastageobj.width() / 2,
        y: scope.konvastageobj.height() / 2,
        sides: 6,
        radius: BASE_BOARD_WIDTH / 5,
        fill: 'white',
        stroke: 'black',
        strokeWidth: 1,
        rotation: 90
      });

      var tier1= new Konva.RegularPolygon({
        x: scope.konvastageobj.width() / 2,
        y: scope.konvastageobj.height() / 2,
        sides: 6,
        radius: BASE_BOARD_WIDTH / 9,
        fill: '#E3E3E3',
        stroke: 'black',
        strokeWidth: 1,
        rotation: 90
      });

      var bgLayer = new Konva.Layer();
      var boardItems = new Konva.Layer();
      var domainsLayer = new Konva.Layer();
      var toolTipLayer = new Konva.Layer();

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

      // add the shapes to the layer, the order matters (background, links, bases, then servers).
      bgLayer.add(boardEdge, tier3, tier2, tier1);
      bgLayer.add(minorBounds1, minorBounds2, minorBounds3, minorBounds4, minorBounds5, minorBounds6);
      bgLayer.add(mainBoundary3, mainBoundary2, mainBoundary1, centerHex);
      bgLayer.add(tier3Text, tier2Text, tier1Text);
      // Extra board items (Windows, Buttons, Chat, and Actions)
      boardItems.add(submitOrdersBtn, ordersQueue, effectsWindow, chatWindow, notesRulesWindow);

      var layer = new Konva.Layer();
      var rectX = scope.konvastageobj.getWidth() / 2 - 50;
      var rectY = scope.konvastageobj.getHeight() / 2 - 25;

      //if konvaObj is null, init
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

      layer.add(scope.konvaobj);
      scope.konvastageobj.add(bgLayer, boardItems);

    }
  }
}]);

