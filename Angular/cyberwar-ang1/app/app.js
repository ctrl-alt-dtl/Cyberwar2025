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
  // Board Items on top of the Template
  boardItems.add(cewTopRow, cewEffectTypesRow, cewTier1Row, cewTier2Row, cewTier3Row, cewLevelBarRow, cewCostText);
  // Cyber Effects Window Grid Lines
  boardItems.add(cewLineDCO, cewLineOCO, cewLineCNE);
  // Cyber Effects Window Text
  boardItems.add(cewTopRowText, cewEffectsLabelText, cewEffectsDCOText, cewEffectsOCOText, cewEffectsCNEText);
  // Cyber Effect DCO Blocks
  boardItems.add(cewTier1DCOBlk, cewTier2DCOBlk, cewTier3DCOBlk);
  // Cyber Effect OCO Blocks
  boardItems.add(cewTier1OCOBlk, cewTier2OCOBlk, cewTier3OCOBlk);
  // Cyber Effect CNE Blocks
  boardItems.add(cewTier1CNEBlk, cewTier2CNEBlk, cewTier3CNEBlk);
  // Cyber Effects Tier 1 Text
  boardItems.add(cewTier1DCOText, cewTier1OCOText, cewTier1CNEText, cewTier1CostText);
  // Cyber Effects Tier 2 Text
  boardItems.add(cewTier2DCOText, cewTier2OCOText, cewTier2CNEText, cewTier2CostText);
  // Cyber Effects Tier 3 Text
  boardItems.add(cewTier3DCOText, cewTier3OCOText, cewTier3CNEText, cewTier3CostText);
  // Cyber Effects Action Points Text
  boardItems.add(cewActionPointsLabelText, cewActionPointsText);
  // Research Blocks DCO
  boardItems.add(cewDCOresBlk1, cewDCOresBlk2, cewDCOresBlk3, cewDCOresBlk4, cewDCOresBlk5, cewDCOresBlk6, cewDCOresBlk7, cewDCOresBlk8);
  // Research Blocks OCO
  boardItems.add(cewOCOresBlk1, cewOCOresBlk2, cewOCOresBlk3, cewOCOresBlk4, cewOCOresBlk5, cewOCOresBlk6, cewOCOresBlk7, cewOCOresBlk8);
  // Research Blocks CNE
  boardItems.add(cewCNEresBlk1, cewCNEresBlk2, cewCNEresBlk3, cewCNEresBlk4, cewCNEresBlk5, cewCNEresBlk6, cewCNEresBlk7, cewCNEresBlk8);

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

app.directive('gameBoardRedServers', function ($timeout) {
  var ctrl = this;
  return {
    restrict: 'AE',
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
      domainsGroup.add(rBase, r1Hex, r2Hex, r3Hex, r4Hex, r5Hex, r6Hex, r7Hex, r8Hex);

      var r8HexListener = new Konva.RegularPolygon({
        x: pt_r8Hex_X,
        y: pt_r8Hex_Y,
        sides: 6,
        radius: radius,
        rotation: 90,
        id: 'y1HexListener'
      });

      domainsGroup.add(r8HexListener);
      console.log("gameBoardRedServersLoaded");

      // CLICK TEST!!!!!
      scope.clickCount = 0;
      r8HexListener.on ('click', function () {
        console.log("test");
        $timeout(function() {
          scope.clickCount++;
        });
      });
    }
  }
});

app.directive('gameBoardPurpleServers', function () {
  return {
    restrict: 'AE',
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

      console.log("gameBoardPurpleServersLoaded")
    }
  }
});

console.log("afterDirective");


