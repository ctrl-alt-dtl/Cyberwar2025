// Blue Base
app.directive('gameBoardBlueBase', function ($rootScope, $timeout) {
  return {
    restrict: 'A',
    scope: {
      callbackFn: '&callbackFn'
    },
    link: function (scope) {
      console.log("gameBoardBlueBaseLoading");

      // add server point to the domain
      domainsGroup.add(bBase);

      var options = {
        points: [
          pt_bBase1Hex_X,       // X1
          pt_bBase1Hex_Y,       // Y1
          point_x / 3.28,       // X2
          point_y / 4.65,       // Y2
          point_x / 4.57,       // X3
          point_y / 2.4,        // Y3
          pt_bBase2Hex_X,       // X4
          pt_bBase2Hex_Y,       // Y4
          point_x / 5.26,       // X5
          point_y / 2.52,       // Y5
          point_x / 3.6,        // X6
          point_y / 5.15        // Y6
        ],
        closed: true,
        id: 'pBaseHexListener'
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
        console.log("Blue Hex Base");
        $timeout(function() {
          scope.clickCountBlue++;
        });

        // Modal Callback Function
        scope.callbackFn();
      });

      domainsGroup.add(scope.konvaobj);
      console.log("gameBoardBlueBaseLoaded");
    }
  }
});

// Hex 1
app.directive('gameBoardBlue1Hex', function ($rootScope, $timeout) {
  return {
    restrict: 'AE',
    link: function (scope) {
      console.log("gameBoardBlue1HexLoading");

      // add server point to the domain
      domainsGroup.add(p1Hex);

      var options = {
        x: pt_b1Hex_X,
        y: pt_b1Hex_Y,
        sides: 6,
        radius: radius,
        fill: 'blue',
        stroke: 'black',
        strokeWidth: 2,
        rotation: 90,
        id: 'p1Hex'
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
      scope.clickCountBlue = 0;
      scope.konvaobj.on ('click', function () {
        console.log("Blue Hex 1");
        $timeout(function() {
          scope.clickCountBlue++;
        });
      });

      domainsGroup.add(scope.konvaobj);
      console.log("gameBoardBlue1HexLoaded");
    }
  }
});

// Hex 2
app.directive('gameBoardBlue2Hex', function ($rootScope, $timeout) {
  return {
    restrict: 'AE',
    link: function (scope) {
      console.log("gameBoardBlue2HexLoading");

      // add server point to the domain
      domainsGroup.add(p2Hex);

      var options = {
        x: pt_b2Hex_X,
        y: pt_b2Hex_Y,
        sides: 6,
        radius: radius,
        fill: 'blue',
        stroke: 'black',
        strokeWidth: 2,
        rotation: 90,
        id: 'p2Hex'
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
      scope.clickCountBlue = 0;
      scope.konvaobj.on ('click', function () {
        console.log("Blue Hex 2");
        $timeout(function() {
          scope.clickCountBlue++;
        });
      });

      domainsGroup.add(scope.konvaobj);
      console.log("gameBoardBlue2HexLoaded");
    }
  }
});

// Hex 3
app.directive('gameBoardBlue3Hex', function ($rootScope, $timeout) {
  return {
    restrict: 'AE',
    link: function (scope) {
      console.log("gameBoardBlue3HexLoading");

      // add server point to the domain
      domainsGroup.add(p3Hex);

      var options = {
        x: pt_b3Hex_X,
        y: pt_b3Hex_Y,
        sides: 6,
        radius: radius,
        fill: 'blue',
        stroke: 'black',
        strokeWidth: 2,
        rotation: 90,
        id: 'p8Hex'
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
      scope.clickCountBlue = 0;
      scope.konvaobj.on ('click', function () {
        console.log("Blue Hex 3");
        $timeout(function() {
          scope.clickCountBlue++;
        });
      });

      domainsGroup.add(scope.konvaobj);
      console.log("gameBoardBlue3HexLoaded");
    }
  }
});

// Hex 4
app.directive('gameBoardBlue4Hex', function ($rootScope, $timeout) {
  return {
    restrict: 'AE',
    link: function (scope) {
      console.log("gameBoardBlue4HexLoading");

      // add server point to the domain
      domainsGroup.add(p4Hex);

      var options = {
        x: pt_b4Hex_X,
        y: pt_b4Hex_Y,
        sides: 6,
        radius: radius,
        fill: 'blue',
        stroke: 'black',
        strokeWidth: 2,
        rotation: 90,
        id: 'p4Hex'
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
      scope.clickCountBlue = 0;
      scope.konvaobj.on ('click', function () {
        console.log("Blue Hex 4");
        $timeout(function() {
          scope.clickCountBlue++;
        });
      });

      domainsGroup.add(scope.konvaobj);
      console.log("gameBoardBlue4HexLoaded");
    }
  }
});

// Hex 5
app.directive('gameBoardBlue5Hex', function ($rootScope, $timeout) {
  return {
    restrict: 'AE',
    link: function (scope) {
      console.log("gameBoardBlue5HexLoading");

      // add server point to the domain
      domainsGroup.add(p5Hex);

      var options = {
        x: pt_b5Hex_X,
        y: pt_b5Hex_Y,
        sides: 6,
        radius: radius,
        fill: 'blue',
        stroke: 'black',
        strokeWidth: 2,
        rotation: 90,
        id: 'p5Hex'
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
      scope.clickCountBlue = 0;
      scope.konvaobj.on ('click', function () {
        console.log("Blue Hex 5");
        $timeout(function() {
          scope.clickCountBlue++;
        });
      });

      domainsGroup.add(scope.konvaobj);
      console.log("gameBoardBlue5HexLoaded");
    }
  }
});

// Hex 6
app.directive('gameBoardBlue6Hex', function ($rootScope, $timeout) {
  return {
    restrict: 'AE',
    link: function (scope) {
      console.log("gameBoardBlue6HexLoading");

      // add server point to the domain
      domainsGroup.add(p6Hex);

      var options = {
        x: pt_b6Hex_X,
        y: pt_b6Hex_Y,
        sides: 6,
        radius: radius,
        fill: 'blue',
        stroke: 'black',
        strokeWidth: 2,
        rotation: 90,
        id: 'p6Hex'
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
      scope.clickCountBlue = 0;
      scope.konvaobj.on ('click', function () {
        console.log("Blue Hex 6");
        $timeout(function() {
          scope.clickCountBlue++;
        });
      });

      domainsGroup.add(scope.konvaobj);
      console.log("gameBoardBlue6HexLoaded");
    }
  }
});

// Hex 7
app.directive('gameBoardBlue7Hex', function ($rootScope, $timeout) {
  return {
    restrict: 'AE',
    link: function (scope) {
      console.log("gameBoardBlue7HexLoading");

      // add server point to the domain
      domainsGroup.add(p7Hex);

      var options = {
        x: pt_b7Hex_X,
        y: pt_b7Hex_Y,
        sides: 6,
        radius: radius,
        fill: 'blue',
        stroke: 'black',
        strokeWidth: 2,
        rotation: 90,
        id: 'p7Hex'
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
      scope.clickCountBlue = 0;
      scope.konvaobj.on ('click', function () {
        console.log("Blue Hex 7");
        $timeout(function() {
          scope.clickCountBlue++;
        });
      });

      domainsGroup.add(scope.konvaobj);
      console.log("gameBoardBlue7HexLoaded");
    }
  }
});

// Hex 8
app.directive('gameBoardBlue8Hex', function ($rootScope, $timeout) {
  return {
    restrict: 'AE',
    link: function (scope) {
      console.log("gameBoardBlue8HexLoading");

      // add server point to the domain
      domainsGroup.add(p8Hex);

      var options = {
        x: pt_b8Hex_X,
        y: pt_b8Hex_Y,
        sides: 6,
        radius: radius,
        fill: 'blue',
        stroke: 'black',
        strokeWidth: 2,
        rotation: 90,
        id: 'p8Hex'
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
      scope.clickCountBlue = 0;
      scope.konvaobj.on ('click', function () {
        console.log("Blue Hex 8");
        $timeout(function() {
          scope.clickCountBlue++;
        });
      });

      domainsGroup.add(scope.konvaobj);
      console.log("gameBoardBlue8HexLoaded");
    }
  }
});