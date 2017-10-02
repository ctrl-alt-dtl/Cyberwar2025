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
  bgGroup.add(rbr1, rbr2, r1r3, r2r5, r5r4, r3r4, r4r6, r4r7, r3r6, r5r7, r6r7, r6r8, r7r8);
  bgGroup.add(pbp1, pbp2, p1p3, p2p5, p5p4, p3p4, p4p6, p4p7, p3p6, p5p7, p6p7, p6p8, p7p8);
  bgGroup.add(bbb1, bbb2, b1b3, b2b5, b5b4, b3b4, b4b6, b4b7, b3b6, b5b7, b6b7, b6b8, b7b8);
  bgGroup.add(gbg1, gbg2, g1g3, g2g5, g5g4, g3g4, g4g6, g4g7, g3g6, g5g7, g6g7, g6g8, g7g8);
  bgGroup.add(yby1, yby2, y1y3, y2y5, y5y4, y3y4, y4y6, y4y7, y3y6, y5y7, y6y7, y6y8, y7y8);
  bgGroup.add(obo1, obo2, o1o3, o2o5, o5o4, o3o4, o4o6, o4o7, o3o6, o5o7, o6o7, o6o8, o7o8);

  bgLayer.add(bgBoard, boardEdge, tier3, tier2, tier1, bgGroup, centerHex);

  domainsLayer.add(domainsGroup);
  stage.add(bgLayer, domainsLayer);

};

imageObj.src = 'app/assets/client/img/empty-transparency-bg-1024x768.png';

/*
Start of Angular App Module!
 */

var app = angular.module('CyberWar', ['ui.bootstrap']);

app.controller('canvasCtrl', function($scope, $uibModal, $log, $document){
  $scope.canvasKonvaObj = false;
  $scope.canvaskonvaStageObj = false;


  // MODAL TEST
  var $ctrl = this;
  $ctrl.items = ['item1', 'item2', 'item3'];

  $ctrl.animationsEnabled = true;

  $ctrl.open = function (size, parentSelector) {
    var parentElem = parentSelector ?
      app.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;

    var modalInstance = $uibModal.open({
      animation: $ctrl.animationsEnabled,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      controllerAs: '$ctrl',
      size: size,
      appendTo: parentElem,
      resolve: {
        items: function () {
          return $ctrl.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $ctrl.selected = selectedItem;
      console.log("Selected: " + $ctrl.selected)
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

  $ctrl.toggleAnimation = function () {
    $ctrl.animationsEnabled = !$ctrl.animationsEnabled;
  }; //MODAL TEST END


});

app.controller('toolTipCtrl', function ($scope) {
  $scope.dynamicTooltip = "Testing Tooltip!";
  $scope.dynamicTooltipText = "dynamic!";
});

console.log("beforeDirective");

app.directive('gameBoardRedBase', function ($rootScope, $timeout) {
  return {
    restrict: 'A',
    scope: {
      callbackFn: '&callbackFn',
      uibTooltip: '&'
    },
    link: function (scope, element, attrs) {
      console.log("gameBoardRedBaseLoading");

      // add server point to the domain
      domainsGroup.add(rBase);

      var options = {
        points: [
          pt_rBase1Hex_X,       // X1
          pt_rBase1Hex_Y,       // Y1
          point_x / 2.42,       // X2
          point_y / 1.154,      // Y2
          point_x / 1.705,      // X3
          point_y / 1.154,      // Y3
          pt_rBase2Hex_X,       // X4
          pt_rBase2Hex_Y,       // Y4
          point_x / 1.705,      // X5
          point_y / 1.1,        // Y5
          point_x / 2.42,       // X6
          point_y / 1.1         // Y6
        ],
        closed: true,
        id: 'rBaseHexListener'
      }

      scope.konvaobj = new Konva.Line(options);
      // add cursor styling
      scope.konvaobj.on('mouseover', function () {
        document.body.style.cursor = 'pointer';
      });
      scope.konvaobj.on('mouseout', function () {
        document.body.style.cursor = 'default';
        $rootScope.$emit("CANVAS-MOUSEOUT");
      });

      scope.uibTooltip;

      scope.clickCount = 0;

      scope.konvaobj.on ('click', function () {
        console.log("test red");
        $timeout(function() {
          scope.clickCount++;
        });

        // Modal Callback Function
        scope.callbackFn();
      });

      domainsGroup.add(scope.konvaobj);
      console.log("gameBoardRedBaseLoaded");
    }
  }
});

app.directive('gameBoardRed1Hex', function ($rootScope, $timeout) {
  return {
    restrict: 'AE',
    link: function (scope, el, attrs) {
      console.log("gameBoardRed1HexLoading");

      // add server point to the domain
      domainsGroup.add(r1Hex);

      var options = {
        x: pt_r1Hex_X,
        y: pt_r1Hex_Y,
        sides: 6,
        radius: radius,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 2,
        rotation: 90,
        id: 'r1Hex'
      }

      scope.konvaobj = new Konva.RegularPolygon(options);
      // add cursor styling
      scope.konvaobj.on('mouseover', function () {
        document.body.style.cursor = 'pointer';
      });
      scope.konvaobj.on('mouseout', function () {
        document.body.style.cursor = 'default';
        $rootScope.$emit("CANVAS-MOUSEOUT");
      });
      scope.clickCount = 0;
      scope.konvaobj.on ('click', function () {
        console.log("test red");
        $timeout(function() {
          scope.clickCount++;
        });
      });

      domainsGroup.add(scope.konvaobj);
      console.log("gameBoardRed1HexLoaded");
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

// MODAL TEST
app.controller('ModalInstanceCtrl', function ($uibModalInstance, items) {
  var $ctrl = this;
  $ctrl.items = items;
  $ctrl.selected = {
    item: $ctrl.items[0]
  };

  $ctrl.ok = function () {
    $uibModalInstance.close($ctrl.selected.item);
  };

  $ctrl.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
}); // END MODAL TEST