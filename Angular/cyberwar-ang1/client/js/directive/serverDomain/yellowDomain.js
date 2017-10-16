// Yellow Base
app.directive('gameBoardYellowBase', function ($rootScope, $timeout) {
  return {
    restrict: 'A',
    scope: {
      callbackFn: '&callbackFn'
    },
    link: function (scope) {
      // console.log("gameBoardYellowBaseLoading");

      // add server point to the domain
      domainsGroup.add(yBase, yellowBaseText);

      var options = {
        points: [
          pt_yBase1Hex_X,        // X1
          pt_yBase1Hex_Y,        // Y1
          point_x / 1.28,       // X2
          point_y / 2.4,        // Y2
          point_x / 1.44,      // X3
          point_y / 4.647,      // Y3
          pt_yBase2Hex_X,       // X4
          pt_yBase2Hex_Y,      // Y4
          point_x / 1.387,      // X5
          point_y / 5.15,        // Y5
          point_x / 1.237,       // X6
          point_y / 2.53,       // Y6
        ],
        closed: true,
        id: 'yBaseHexListener'
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

      scope.konvaobj.on ('click', function () {
        console.log("Yellow Hex Base");
        $timeout(function() {
          // Implement server point on-click logic here
        });

        // Modal Callback Function
        scope.callbackFn();
      });

      domainsGroup.add(scope.konvaobj);
      console.log("gameBoardYellowBaseLoaded");
    }
  }
});

// Hex1
app.directive('gameBoardYellow1Hex', function ($rootScope, $timeout) {
  return {
    restrict: 'AE',
    link: function (scope) {
      // console.log("gameBoardYellow1HexLoading");

      // add server point to the domain
      domainsGroup.add(y1Hex, y1Text);

      var options = {
        x: pt_y1Hex_X,
        y: pt_y1Hex_Y,
        sides: 6,
        radius: radius,
        stroke: 'black',
        strokeWidth: 2,
        rotation: 90,
        id: 'y1HexListener'
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

      scope.konvaobj.on ('click', function () {
        console.log("Yellow Hex 1");
        $timeout(function() {
          // Implement server point on-click logic here
        });
      });

      domainsGroup.add(scope.konvaobj);
      console.log("gameBoardYellow1HexLoaded");
    }
  }
});

// Hex 2
app.directive('gameBoardYellow2Hex', function ($rootScope, $timeout) {
  return {
    restrict: 'AE',
    link: function (scope) {
      // console.log("gameBoardYellow2HexLoading");

      // add server point to the domain
      domainsGroup.add(y2Hex, y2Text);

      var options = {
        x: pt_y2Hex_X,
        y: pt_y2Hex_Y,
        sides: 6,
        radius: radius,
        stroke: 'black',
        strokeWidth: 2,
        rotation: 90,
        id: 'y2HexListener'
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

      scope.konvaobj.on ('click', function () {
        console.log("Yellow Hex 2");
        $timeout(function() {
          // Implement server point on-click logic here
        });
      });

      domainsGroup.add(scope.konvaobj);
      console.log("gameBoardYellow2HexLoaded");
    }
  }
});

// Hex 3
app.directive('gameBoardYellow3Hex', function ($rootScope, $timeout) {
  return {
    restrict: 'AE',
    link: function (scope) {
      // console.log("gameBoardYellow3HexLoading");

      // add server point to the domain
      domainsGroup.add(y3Hex, y3Text);

      var options = {
        x: pt_y3Hex_X,
        y: pt_y3Hex_Y,
        sides: 6,
        radius: radius,
        stroke: 'black',
        strokeWidth: 2,
        rotation: 90,
        id: 'y3HexListener'
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

      scope.konvaobj.on ('click', function () {
        console.log("Yellow Hex 3");
        $timeout(function() {
          // Implement server point on-click logic here
        });
      });

      domainsGroup.add(scope.konvaobj);
      console.log("gameBoardYellow3HexLoaded");
    }
  }
});

// Hex 4
app.directive('gameBoardYellow4Hex', function ($rootScope, $timeout) {
  return {
    restrict: 'AE',
    link: function (scope) {
      // console.log("gameBoardYellow4HexLoading");

      // add server point to the domain
      domainsGroup.add(y4Hex, y4Text);

      var options = {
        x: pt_y4Hex_X,
        y: pt_y4Hex_Y,
        sides: 6,
        radius: radius,
        stroke: 'black',
        strokeWidth: 2,
        rotation: 90,
        id: 'y4HexListener'
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

      scope.konvaobj.on ('click', function () {
        console.log("Yellow Hex 4");
        $timeout(function() {
          // Implement server point on-click logic here
        });
      });

      domainsGroup.add(scope.konvaobj);
      console.log("gameBoardYellow4HexLoaded");
    }
  }
});

// Hex 5
app.directive('gameBoardYellow5Hex', function ($rootScope, $timeout) {
  return {
    restrict: 'AE',
    link: function (scope) {
      // console.log("gameBoardYellow5HexLoading");

      // add server point to the domain
      domainsGroup.add(y5Hex, y5Text);

      var options = {
        x: pt_y5Hex_X,
        y: pt_y5Hex_Y,
        sides: 6,
        radius: radius,
        stroke: 'black',
        strokeWidth: 2,
        rotation: 90,
        id: 'y5HexListener'
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

      scope.konvaobj.on ('click', function () {
        console.log("Yellow Hex 5");
        $timeout(function() {
          // Implement server point on-click logic here
        });
      });

      domainsGroup.add(scope.konvaobj);
      console.log("gameBoardYellow5HexLoaded");
    }
  }
});

// Hex 6
app.directive('gameBoardYellow6Hex', function ($rootScope, $timeout) {
  return {
    restrict: 'AE',
    link: function (scope) {
      // console.log("gameBoardYellow6HexLoading");

      // add server point to the domain
      domainsGroup.add(y6Hex, y6Text);

      var options = {
        x: pt_y6Hex_X,
        y: pt_y6Hex_Y,
        sides: 6,
        radius: radius,
        stroke: 'black',
        strokeWidth: 2,
        rotation: 90,
        id: 'y6HexListener'
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

      scope.konvaobj.on ('click', function () {
        console.log("Yellow Hex 6");
        $timeout(function() {
          // Implement server point on-click logic here
        });
      });

      domainsGroup.add(scope.konvaobj);
      console.log("gameBoardYellow6HexLoaded");
    }
  }
});

// Hex 7
app.directive('gameBoardYellow7Hex', function ($rootScope, $timeout) {
  return {
    restrict: 'AE',
    link: function (scope) {
      // console.log("gameBoardYellow7HexLoading");

      // add server point to the domain
      domainsGroup.add(y7Hex, y7Text);

      var options = {
        x: pt_y7Hex_X,
        y: pt_y7Hex_Y,
        sides: 6,
        radius: radius,
        stroke: 'black',
        strokeWidth: 2,
        rotation: 90,
        id: 'y7HexListener'
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

      scope.konvaobj.on ('click', function () {
        console.log("Yellow Hex 7");
        $timeout(function() {
          // Implement server point on-click logic here
        });
      });

      domainsGroup.add(scope.konvaobj);
      console.log("gameBoardYellow7HexLoaded");
    }
  }
})

// Hex 8
app.directive('gameBoardYellow8Hex', function ($rootScope, $timeout) {
  return {
    restrict: 'AE',
    link: function (scope) {
      // console.log("gameBoardYellow8HexLoading");

      // add server point to the domain
      domainsGroup.add(y8Hex, y8Text);

      var options = {
        x: pt_y8Hex_X,
        y: pt_y8Hex_Y,
        sides: 6,
        radius: radius,
        stroke: 'black',
        strokeWidth: 2,
        rotation: 90,
        id: 'y8HexListener'
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

      scope.konvaobj.on ('click', function () {
        console.log("Yellow Hex 8");
        $timeout(function() {
          // Implement server point on-click logic here
        });
      });

      domainsGroup.add(scope.konvaobj);
      console.log("gameBoardYellow8HexLoaded");
    }
  }
});