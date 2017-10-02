// Red Base
app.directive('gameBoardRedBase', function ($rootScope, $timeout) {
  return {
    restrict: 'A',
    scope: {
      callbackFn: '&callbackFn'
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

      scope.clickCountRed = 0;

      scope.konvaobj.on ('click', function () {
        console.log("Red Hex Base");
        $timeout(function() {
          scope.clickCountRed++;
        });

        // Modal Callback Function
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
      scope.clickCountRed = 0;
      scope.konvaobj.on ('click', function () {
        console.log("Red Hex 1");
        $timeout(function() {
          scope.clickCountRed++;
        });
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
    link: function (scope, el, attrs) {
      console.log("gameBoardRed2HexLoading");

      // add server point to the domain
      domainsGroup.add(r1Hex);

      var options = {
        x: pt_r2Hex_X,
        y: pt_r2Hex_Y,
        sides: 6,
        radius: radius,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 2,
        rotation: 90,
        id: 'r2Hex'
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
      scope.clickCountRed = 0;
      scope.konvaobj.on ('click', function () {
        console.log("Red Hex 2");
        $timeout(function() {
          scope.clickCountRed++;
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
    link: function (scope, el, attrs) {
      console.log("gameBoardRed3HexLoading");

      // add server point to the domain
      domainsGroup.add(r1Hex);

      var options = {
        x: pt_r3Hex_X,
        y: pt_r3Hex_Y,
        sides: 6,
        radius: radius,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 2,
        rotation: 90,
        id: 'r3Hex'
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
      scope.clickCountRed = 0;
      scope.konvaobj.on ('click', function () {
        console.log("Red Hex 3");
        $timeout(function() {
          scope.clickCountRed++;
        });
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
    link: function (scope, el, attrs) {
      console.log("gameBoardRed4HexLoading");

      // add server point to the domain
      domainsGroup.add(r1Hex);

      var options = {
        x: pt_r4Hex_X,
        y: pt_r4Hex_Y,
        sides: 6,
        radius: radius,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 2,
        rotation: 90,
        id: 'r4Hex'
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
      scope.clickCountRed = 0;
      scope.konvaobj.on ('click', function () {
        console.log("Red Hex 4");
        $timeout(function() {
          scope.clickCountRed++;
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
    link: function (scope, el, attrs) {
      console.log("gameBoardRed5HexLoading");

      // add server point to the domain
      domainsGroup.add(r1Hex);

      var options = {
        x: pt_r5Hex_X,
        y: pt_r5Hex_Y,
        sides: 6,
        radius: radius,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 2,
        rotation: 90,
        id: 'r5Hex'
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
      scope.clickCountRed = 0;
      scope.konvaobj.on ('click', function () {
        console.log("Red Hex 5");
        $timeout(function() {
          scope.clickCountRed++;
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
    link: function (scope, el, attrs) {
      console.log("gameBoardRed6HexLoading");

      // add server point to the domain
      domainsGroup.add(r1Hex);

      var options = {
        x: pt_r6Hex_X,
        y: pt_r6Hex_Y,
        sides: 6,
        radius: radius,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 2,
        rotation: 90,
        id: 'r6Hex'
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
      scope.clickCountRed = 0;
      scope.konvaobj.on ('click', function () {
        console.log("Red Hex 6");
        $timeout(function() {
          scope.clickCountRed++;
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
    link: function (scope, el, attrs) {
      console.log("gameBoardRed7HexLoading");

      // add server point to the domain
      domainsGroup.add(r1Hex);

      var options = {
        x: pt_r7Hex_X,
        y: pt_r7Hex_Y,
        sides: 6,
        radius: radius,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 2,
        rotation: 90,
        id: 'r7Hex'
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
      scope.clickCountRed = 0;
      scope.konvaobj.on ('click', function () {
        console.log("Red Hex 7");
        $timeout(function() {
          scope.clickCountRed++;
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
    link: function (scope, el, attrs) {
      console.log("gameBoardRed8HexLoading");

      // add server point to the domain
      domainsGroup.add(r1Hex);

      var options = {
        x: pt_r8Hex_X,
        y: pt_r8Hex_Y,
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
      scope.clickCountRed = 0;
      scope.konvaobj.on ('click', function () {
        console.log("Red Hex 8");
        $timeout(function() {
          scope.clickCountRed++;
        });
      });

      domainsGroup.add(scope.konvaobj);
      console.log("gameBoardRed8HexLoaded");
    }
  }
});