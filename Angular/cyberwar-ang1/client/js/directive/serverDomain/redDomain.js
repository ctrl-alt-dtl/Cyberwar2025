// Red Base
app.directive('gameBoardRedBase', function ($rootScope, $timeout) {
  return {
    restrict: 'A',
    scope: {
      callbackFn: '&callbackFn'
    },
    link: function (scope) {
      console.log("gameBoardRedBaseLoading");

      // add server point to the domain
      domainsGroup.add(rBase, redBaseText);

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

      // HARD CODED VALUES FOR TESTING ONLY
      $rootScope.clickCountRed = 0;
      $rootScope.actionPoints = 0;
      // $rootScope.effectsNumDCO = 1;
      // $rootScope.effectsNumOCO = 4;
      // $rootScope.effectsNumCNE = 3;

      $rootScope.effectsL2DCO = 'white';
      $rootScope.effectsL2OCO = 'white';
      $rootScope.effectsL2CNE = 'white';

      $rootScope.effectsL3DCO = 'white';
      $rootScope.effectsL3OCO = 'white';
      $rootScope.effectsL3CNE = 'white';
      // END HARD CODED TESTING VALUES


      scope.konvaobj.on ('click', function () {
        console.log("Red Hex Base");
        $timeout(function() {
          $rootScope.clickCountRed++;
        });

        // Modal Callback Function
        console.log(rBase.id());
        scope.callbackFn();
      });

      domainsGroup.add(scope.konvaobj);
      console.log("gameBoardRedBaseLoaded");
    }
  }
});

// Hex1
app.directive('gameBoardRed1Hex', function ($rootScope, $timeout) {
  return {
    restrict: 'AE',
    scope: {
      callbackFnTest: '&callbackFnTest'
    },
    link: function (scope) {
      console.log("gameBoardRed1HexLoading");

      // add server point to the domain
      domainsGroup.add(r1Hex, r1Text);


      var options = {
        x: pt_r1Hex_X,
        y: pt_r1Hex_Y,
        sides: 6,
        radius: radius,
        stroke: 'black',
        strokeWidth: 2,
        rotation: 90,
        id: 'r1HexListener'
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

      $rootScope.clickCountRed = 0;

      scope.konvaobj.on ('click', function () {
        console.log("Red Hex 1");
        $timeout(function() {
          $rootScope.clickCountRed++;
        });

        // Modal Callback Function (ATTEMPT TO FILL A HEX ONCLICK)
        scope.callbackFnTest(r1Hex.fill(purpleColor));
        $rootScope.actionPoints--;
        domainsLayer.draw();
      });

      domainsGroup.add(scope.konvaobj);
      console.log("gameBoardRed1HexLoaded");
    }
  }
});

// Hex 2
app.directive('gameBoardRed2Hex', function ($rootScope, $timeout) {
  return {
    restrict: 'AE',
    link: function (scope) {
      console.log("gameBoardRed2HexLoading");

      // add server point to the domain
      domainsGroup.add(r2Hex, r2Text);

      var options = {
        x: pt_r2Hex_X,
        y: pt_r2Hex_Y,
        sides: 6,
        radius: radius,
        stroke: 'black',
        strokeWidth: 2,
        rotation: 90,
        id: 'r2HexListener'
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

      $rootScope.clickCountRed = 0;

      scope.konvaobj.on ('click', function () {
        console.log("Red Hex 2");
        $timeout(function() {
          $rootScope.clickCountRed++;
        });
      });

      domainsGroup.add(scope.konvaobj);
      console.log("gameBoardRed2HexLoaded");
    }
  }
});

// Hex 3
app.directive('gameBoardRed3Hex', function ($rootScope, $timeout) {
  return {
    restrict: 'AE',
    scope: {
      callbackFnTest: '&callbackFnTest'
    },
    link: function (scope) {
      console.log("gameBoardRed3HexLoading");

      // add server point to the domain
      domainsGroup.add(r3Hex, r3Text);

      var options = {
        x: pt_r3Hex_X,
        y: pt_r3Hex_Y,
        sides: 6,
        radius: radius,
        stroke: 'black',
        strokeWidth: 2,
        rotation: 90,
        id: 'r3HexListener'
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

      $rootScope.clickCountRed = 0;

      scope.konvaobj.on ('click', function () {
        console.log("Red Hex 3");
        $timeout(function() {
          $rootScope.clickCountRed++;
        });

        scope.callbackFnTest(r3Hex.fill(purpleColor));
        $rootScope.actionPoints--;
        domainsLayer.draw();
      });

      domainsGroup.add(scope.konvaobj);
      console.log("gameBoardRed3HexLoaded");
    }
  }
});

// Hex 4
app.directive('gameBoardRed4Hex', function ($rootScope, $timeout) {
  return {
    restrict: 'AE',
    link: function (scope) {
      console.log("gameBoardRed4HexLoading");

      // add server point to the domain
      domainsGroup.add(r4Hex, r4Text);

      var options = {
        x: pt_r4Hex_X,
        y: pt_r4Hex_Y,
        sides: 6,
        radius: radius,
        stroke: 'black',
        strokeWidth: 2,
        rotation: 90,
        id: 'r4HexListener'
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

      $rootScope.clickCountRed = 0;

      scope.konvaobj.on ('click', function () {
        console.log("Red Hex 4");
        $timeout(function() {
          $rootScope.clickCountRed++;
        });
      });

      domainsGroup.add(scope.konvaobj);
      console.log("gameBoardRed4HexLoaded");
    }
  }
});

// Hex 5
app.directive('gameBoardRed5Hex', function ($rootScope, $timeout) {
  return {
    restrict: 'AE',
    link: function (scope) {
      console.log("gameBoardRed5HexLoading");

      // add server point to the domain
      domainsGroup.add(r5Hex, r5Text);

      var options = {
        x: pt_r5Hex_X,
        y: pt_r5Hex_Y,
        sides: 6,
        radius: radius,
        stroke: 'black',
        strokeWidth: 2,
        rotation: 90,
        id: 'r5HexListener'
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

      $rootScope.clickCountRed = 0;

      scope.konvaobj.on ('click', function () {
        console.log("Red Hex 5");
        $timeout(function() {
          $rootScope.clickCountRed++;
        });
      });

      domainsGroup.add(scope.konvaobj);
      console.log("gameBoardRed5HexLoaded");
    }
  }
});

// Hex 6
app.directive('gameBoardRed6Hex', function ($rootScope, $timeout) {
  return {
    restrict: 'AE',
    link: function (scope) {
      console.log("gameBoardRed6HexLoading");

      // add server point to the domain
      domainsGroup.add(r6Hex, r6Text);

      var options = {
        x: pt_r6Hex_X,
        y: pt_r6Hex_Y,
        sides: 6,
        radius: radius,
        stroke: 'black',
        strokeWidth: 2,
        rotation: 90,
        id: 'r6HexListener'
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

      $rootScope.clickCountRed = 0;

      scope.konvaobj.on ('click', function () {
        console.log("Red Hex 6");
        $timeout(function() {
          $rootScope.clickCountRed++;
        });
      });

      domainsGroup.add(scope.konvaobj);
      console.log("gameBoardRed6HexLoaded");
    }
  }
});

// Hex 7
app.directive('gameBoardRed7Hex', function ($rootScope, $timeout) {
  return {
    restrict: 'AE',
    link: function (scope) {
      console.log("gameBoardRed7HexLoading");

      // add server point to the domain
      domainsGroup.add(r7Hex, r7Text);

      var options = {
        x: pt_r7Hex_X,
        y: pt_r7Hex_Y,
        sides: 6,
        radius: radius,
        stroke: 'black',
        strokeWidth: 2,
        rotation: 90,
        id: 'r7HexListener'
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

      $rootScope.clickCountRed = 0;

      scope.konvaobj.on ('click', function () {
        console.log("Red Hex 7");
        $timeout(function() {
          $rootScope.clickCountRed++;
        });
      });

      domainsGroup.add(scope.konvaobj);
      console.log("gameBoardRed7HexLoaded");
    }
  }
})

// Hex 8
app.directive('gameBoardRed8Hex', function ($rootScope, $timeout) {
  return {
    restrict: 'AE',
    link: function (scope) {
      console.log("gameBoardRed8HexLoading");

      // add server point to the domain
      domainsGroup.add(r8Hex, r8Text);

      var options = {
        x: pt_r8Hex_X,
        y: pt_r8Hex_Y,
        sides: 6,
        radius: radius,
        stroke: 'black',
        strokeWidth: 2,
        rotation: 90,
        id: 'r8HexListener'
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

      $rootScope.clickCountRed = 0;

      scope.konvaobj.on ('click', function () {
        console.log("Red Hex 8");
        $timeout(function() {
          $rootScope.clickCountRed++;
        });
      });

      domainsGroup.add(scope.konvaobj);
      console.log("gameBoardRed8HexLoaded");
    }
  }
});