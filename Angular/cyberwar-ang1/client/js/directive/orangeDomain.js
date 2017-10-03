// Orange Base
app.directive('gameBoardOrangeBase', function ($rootScope, $timeout) {
  return {
    restrict: 'A',
    scope: {
      callbackFn: '&callbackFn'
    },
    link: function (scope) {
      console.log("gameBoardOrangeBaseLoading");

      // add server point to the domain
      domainsGroup.add(oBase);

      var options = {
        points: [
          pt_oBase1Hex_X,       // X1
          pt_oBase1Hex_Y,      // Y1
          point_x / 1.44,        // X2
          point_y / 1.28,      // Y2
          point_x / 1.28,       // X3
          point_y / 1.715,       // Y3
          pt_oBase2Hex_X,       // X4
          pt_oBase2Hex_Y,       // Y4
          point_x / 1.237,        // X5
          point_y / 1.652,       // Y5
          point_x / 1.387,       // X6
          point_y / 1.24         // Y6
        ],
        closed: true,
        id: 'oBaseHexListener'
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

      scope.clickCountOrange = 0;

      scope.konvaobj.on ('click', function () {
        console.log("Orange Hex Base");
        $timeout(function() {
          scope.clickCountOrange++;
        });

        // Modal Callback Function
        scope.callbackFn();
      });

      domainsGroup.add(scope.konvaobj);
      console.log("gameBoardOrangeBaseLoaded");
    }
  }
});

// Hex1
app.directive('gameBoardOrange1Hex', function ($rootScope, $timeout) {
  return {
    restrict: 'AE',
    link: function (scope) {
      console.log("gameBoardOrange1HexLoading");

      // add server point to the domain
      domainsGroup.add(o1Hex);

      var options = {
        x: pt_o1Hex_X,
        y: pt_o1Hex_Y,
        sides: 6,
        radius: radius,
        fill: 'orange',
        stroke: 'black',
        strokeWidth: 2,
        rotation: 90,
        id: 'o1Hex'
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
      scope.clickCountOrange = 0;
      scope.konvaobj.on ('click', function () {
        console.log("Orange Hex 1");
        $timeout(function() {
          scope.clickCountOrange++;
        });
      });

      domainsGroup.add(scope.konvaobj);
      console.log("gameBoardOrange1HexLoaded");
    }
  }
});

// Hex 2
app.directive('gameBoardOrange2Hex', function ($rootScope, $timeout) {
  return {
    restrict: 'AE',
    link: function (scope) {
      console.log("gameBoardOrange2HexLoading");

      // add server point to the domain
      domainsGroup.add(o2Hex);

      var options = {
        x: pt_o2Hex_X,
        y: pt_o2Hex_Y,
        sides: 6,
        radius: radius,
        fill: 'orange',
        stroke: 'black',
        strokeWidth: 2,
        rotation: 90,
        id: 'o2Hex'
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
      scope.clickCountOrange = 0;
      scope.konvaobj.on ('click', function () {
        console.log("Orange Hex 2");
        $timeout(function() {
          scope.clickCountOrange++;
        });
      });

      domainsGroup.add(scope.konvaobj);
      console.log("gameBoardOrange2HexLoaded");
    }
  }
});

// Hex 3
app.directive('gameBoardOrange3Hex', function ($rootScope, $timeout) {
  return {
    restrict: 'AE',
    link: function (scope) {
      console.log("gameBoardOrange3HexLoading");

      // add server point to the domain
      domainsGroup.add(o3Hex);

      var options = {
        x: pt_o3Hex_X,
        y: pt_o3Hex_Y,
        sides: 6,
        radius: radius,
        fill: 'orange',
        stroke: 'black',
        strokeWidth: 2,
        rotation: 90,
        id: 'o3Hex'
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
      scope.clickCountOrange = 0;
      scope.konvaobj.on ('click', function () {
        console.log("Orange Hex 3");
        $timeout(function() {
          scope.clickCountOrange++;
        });
      });

      domainsGroup.add(scope.konvaobj);
      console.log("gameBoardOrange3HexLoaded");
    }
  }
});

// Hex 4
app.directive('gameBoardOrange4Hex', function ($rootScope, $timeout) {
  return {
    restrict: 'AE',
    link: function (scope) {
      console.log("gameBoardOrange4HexLoading");

      // add server point to the domain
      domainsGroup.add(o4Hex);

      var options = {
        x: pt_o4Hex_X,
        y: pt_o4Hex_Y,
        sides: 6,
        radius: radius,
        fill: 'orange',
        stroke: 'black',
        strokeWidth: 2,
        rotation: 90,
        id: 'o4Hex'
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
      scope.clickCountOrange = 0;
      scope.konvaobj.on ('click', function () {
        console.log("Orange Hex 4");
        $timeout(function() {
          scope.clickCountOrange++;
        });
      });

      domainsGroup.add(scope.konvaobj);
      console.log("gameBoardOrange4HexLoaded");
    }
  }
});

// Hex 5
app.directive('gameBoardOrange5Hex', function ($rootScope, $timeout) {
  return {
    restrict: 'AE',
    link: function (scope) {
      console.log("gameBoardOrange5HexLoading");

      // add server point to the domain
      domainsGroup.add(o5Hex);

      var options = {
        x: pt_o5Hex_X,
        y: pt_o5Hex_Y,
        sides: 6,
        radius: radius,
        fill: 'orange',
        stroke: 'black',
        strokeWidth: 2,
        rotation: 90,
        id: 'o5Hex'
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
      scope.clickCountOrange = 0;
      scope.konvaobj.on ('click', function () {
        console.log("Orange Hex 5");
        $timeout(function() {
          scope.clickCountOrange++;
        });
      });

      domainsGroup.add(scope.konvaobj);
      console.log("gameBoardOrange5HexLoaded");
    }
  }
});

// Hex 6
app.directive('gameBoardOrange6Hex', function ($rootScope, $timeout) {
  return {
    restrict: 'AE',
    link: function (scope) {
      console.log("gameBoardOrange6HexLoading");

      // add server point to the domain
      domainsGroup.add(o6Hex);

      var options = {
        x: pt_o6Hex_X,
        y: pt_o6Hex_Y,
        sides: 6,
        radius: radius,
        fill: 'orange',
        stroke: 'black',
        strokeWidth: 2,
        rotation: 90,
        id: 'o6Hex'
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
      scope.clickCountOrange = 0;
      scope.konvaobj.on ('click', function () {
        console.log("Orange Hex 6");
        $timeout(function() {
          scope.clickCountOrange++;
        });
      });

      domainsGroup.add(scope.konvaobj);
      console.log("gameBoardOrange6HexLoaded");
    }
  }
});

// Hex 7
app.directive('gameBoardOrange7Hex', function ($rootScope, $timeout) {
  return {
    restrict: 'AE',
    link: function (scope) {
      console.log("gameBoardOrange7HexLoading");

      // add server point to the domain
      domainsGroup.add(o7Hex);

      var options = {
        x: pt_o7Hex_X,
        y: pt_o7Hex_Y,
        sides: 6,
        radius: radius,
        fill: 'orange',
        stroke: 'black',
        strokeWidth: 2,
        rotation: 90,
        id: 'o7Hex'
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
      scope.clickCountOrange = 0;
      scope.konvaobj.on ('click', function () {
        console.log("Orange Hex 7");
        $timeout(function() {
          scope.clickCountOrange++;
        });
      });

      domainsGroup.add(scope.konvaobj);
      console.log("gameBoardOrange7HexLoaded");
    }
  }
})

// Hex 8
app.directive('gameBoardOrange8Hex', function ($rootScope, $timeout) {
  return {
    restrict: 'AE',
    link: function (scope) {
      console.log("gameBoardOrange8HexLoading");

      // add server point to the domain
      domainsGroup.add(o8Hex);

      var options = {
        x: pt_o8Hex_X,
        y: pt_o8Hex_Y,
        sides: 6,
        radius: radius,
        fill: 'orange',
        stroke: 'black',
        strokeWidth: 2,
        rotation: 90,
        id: 'o8Hex'
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
      scope.clickCountOrange = 0;
      scope.konvaobj.on ('click', function () {
        console.log("Orange Hex 8");
        $timeout(function() {
          scope.clickCountOrange++;
        });
      });

      domainsGroup.add(scope.konvaobj);
      console.log("gameBoardOrange8HexLoaded");
    }
  }
});