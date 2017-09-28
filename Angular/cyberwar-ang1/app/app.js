'use strict';

var app = angular.module('CyberWar', []);

var BASE_BOARD_WIDTH = 1280;
var BASE_BOARD_HEIGHT = 960;

var DOMAIN_LAYER_BOARD_ROTATION = 0;

app.controller('canvasCtrl', function($scope){
  $scope.canvasKonvaObj = false;
  $scope.canvaskonvaStageObj = false;
});

app.directive('gameBoardBase', ['$rootScope', function ($rootScope) {
  return {
    restrict: 'A',
    scope: {
      konvaobj: '=',
      konvastageobj: '='
    },
    link: function (scope, el, attrs) {
      console.log("gameBoardBaseLoading");
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
        fill: '#c9c9c9',
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
        fill: '#c9c9c9',
        stroke: 'black',
        strokeWidth: 1,
        rotation: 90
      });

      var bgLayer = new Konva.Layer();
      var boardItems = new Konva.Layer();

      // add the shapes to the layer, the order matters (background, links, bases, then servers).
      bgLayer.add(boardEdge, tier3, tier2, tier1);
      bgLayer.add(minorBounds1, minorBounds2, minorBounds3, minorBounds4, minorBounds5, minorBounds6);
      bgLayer.add(mainBoundary3, mainBoundary2, mainBoundary1, centerHex);
      bgLayer.add(tier3Text, tier2Text, tier1Text);
      // Extra board items (Windows, Buttons, Chat, and Actions)
      boardItems.add(submitOrdersBtn, ordersQueue, effectsWindow, chatWindow, notesRulesWindow);

      scope.konvastageobj.add(bgLayer, boardItems);
      console.log("gameBoardBaseLoaded")

    }
  }
}]);

