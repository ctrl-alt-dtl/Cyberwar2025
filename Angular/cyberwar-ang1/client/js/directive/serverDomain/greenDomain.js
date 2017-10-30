// Green Base
app.directive('gameBoardGreenBase', function ($rootScope, $timeout) {
  return {
    restrict: 'A',
    scope: {
      callbackFn: '&callbackFn'
    },
    link: function (scope) {
      // console.log("gameBoardGreenBaseLoading");

      // add server point to the domain
      domainsGroup.add(gBase, greenBaseText);

      var options = {
        points: [
          pt_gBase1Hex_X,       // X1
          pt_gBase1Hex_Y,      // Y1
          point_x / 1.705,       // X2
          point_y / 7.5,      // Y2
          point_x / 2.42,      // X3
          point_y / 7.5,      // Y3
          pt_gBase2Hex_X,       // X4
          pt_gBase2Hex_Y,      // Y4
          point_x / 2.42,      // X5
          point_y / 11,        // Y5
          point_x / 1.705,       // X6
          point_y / 11         // Y6
        ],
        closed: true,
        id: 'gBaseHexListener'
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
        console.log("Green Hex Base");
        $timeout(function() {
          // Implement server point on-click logic here
        });

        // Modal Callback Function
        scope.callbackFn();
      });

      domainsGroup.add(scope.konvaobj);
    }
  }
});

// Hex1
app.directive('gameBoardGreen1Hex', function ($rootScope, $timeout) {
  return {
    restrict: 'AE',
    link: function (scope) {
      // console.log("gameBoardGreen1HexLoading");

      // add server point to the domain
      domainsGroup.add(g1Hex, g1Text);

      var options = {
        x: pt_g1Hex_X,
        y: pt_g1Hex_Y,
        sides: 6,
        radius: radius,
        stroke: 'black',
        strokeWidth: 2,
        rotation: 90,
        id: 'g1Hex'
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
        console.log("Green Hex 1");
        $timeout(function() {
          // Implement server point on-click logic here
        });
      });

      domainsGroup.add(scope.konvaobj);
    }
  }
});

// Hex 2
app.directive('gameBoardGreen2Hex', function ($rootScope, $timeout) {
  return {
    restrict: 'AE',
    link: function (scope) {
      // console.log("gameBoardGreen2HexLoading");

      // add server point to the domain
      domainsGroup.add(g2Hex, g2Text);

      var options = {
        x: pt_g2Hex_X,
        y: pt_g2Hex_Y,
        sides: 6,
        radius: radius,
        stroke: 'black',
        strokeWidth: 2,
        rotation: 90,
        id: 'g2Hex'
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
        console.log("Green Hex 2");
        $timeout(function() {
          // Implement server point on-click logic here
        });
      });

      domainsGroup.add(scope.konvaobj);
    }
  }
});

// Hex 3
app.directive('gameBoardGreen3Hex', function ($rootScope, $timeout) {
  return {
    restrict: 'AE',
    link: function (scope) {
      // console.log("gameBoardGreen3HexLoading");

      // add server point to the domain
      domainsGroup.add(g3Hex, g3Text);

      var options = {
        x: pt_g3Hex_X,
        y: pt_g3Hex_Y,
        sides: 6,
        radius: radius,
        stroke: 'black',
        strokeWidth: 2,
        rotation: 90,
        id: 'g3Hex'
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
        console.log("Green Hex 3");
        $timeout(function() {
          // Implement server point on-click logic here
        });
      });

      domainsGroup.add(scope.konvaobj);
    }
  }
});

// Hex 4
app.directive('gameBoardGreen4Hex', function ($rootScope, $timeout) {
  return {
    restrict: 'AE',
    link: function (scope) {
      // console.log("gameBoardGreen4HexLoading");

      // add server point to the domain
      domainsGroup.add(g4Hex, g4Text);

      var options = {
        x: pt_g4Hex_X,
        y: pt_g4Hex_Y,
        sides: 6,
        radius: radius,
        stroke: 'black',
        strokeWidth: 2,
        rotation: 90,
        id: 'g4Hex'
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
        console.log("Green Hex 4");
        $timeout(function() {
          // Implement server point on-click logic here
        });
      });

      domainsGroup.add(scope.konvaobj);
    }
  }
});

// Hex 5
app.directive('gameBoardGreen5Hex', function ($rootScope, $timeout) {
  return {
    restrict: 'AE',
    link: function (scope) {
      // console.log("gameBoardGreen5HexLoading");

      // add server point to the domain
      domainsGroup.add(g5Hex, g5Text);

      var options = {
        x: pt_g5Hex_X,
        y: pt_g5Hex_Y,
        sides: 6,
        radius: radius,
        stroke: 'black',
        strokeWidth: 2,
        rotation: 90,
        id: 'g5Hex'
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
        console.log("Green Hex 5");
        $timeout(function() {
          // Implement server point on-click logic here
        });
      });

      domainsGroup.add(scope.konvaobj);
    }
  }
});

// Hex 6
app.directive('gameBoardGreen6Hex', function ($rootScope, $timeout) {
  return {
    restrict: 'AE',
    link: function (scope) {
      // console.log("gameBoardGreen6HexLoading");

      // add server point to the domain
      domainsGroup.add(g6Hex, g6Text);

      var options = {
        x: pt_g6Hex_X,
        y: pt_g6Hex_Y,
        sides: 6,
        radius: radius,
        stroke: 'black',
        strokeWidth: 2,
        rotation: 90,
        id: 'g6Hex'
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
        console.log("Green Hex 6");
        $timeout(function() {
          // Implement server point on-click logic here
        });
      });

      domainsGroup.add(scope.konvaobj);
    }
  }
});

// Hex 7
app.directive('gameBoardGreen7Hex', function ($rootScope, $timeout) {
  return {
    restrict: 'AE',
    link: function (scope) {
      // console.log("gameBoardGreen7HexLoading");

      // add server point to the domain
      domainsGroup.add(g7Hex, g7Text);

      var options = {
        x: pt_g7Hex_X,
        y: pt_g7Hex_Y,
        sides: 6,
        radius: radius,
        stroke: 'black',
        strokeWidth: 2,
        rotation: 90,
        id: 'g7Hex'
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
        console.log("Green Hex 7");
        $timeout(function() {
          // Implement server point on-click logic here
        });
      });

      domainsGroup.add(scope.konvaobj);
    }
  }
})

// Hex 8
app.directive('gameBoardGreen8Hex', function ($rootScope, $timeout) {
  return {
    restrict: 'AE',
    link: function (scope) {
      // console.log("gameBoardGreen8HexLoading");

      // add server point to the domain
      domainsGroup.add(g8Hex, g8Text);

      var options = {
        x: pt_g8Hex_X,
        y: pt_g8Hex_Y,
        sides: 6,
        radius: radius,
        stroke: 'black',
        strokeWidth: 2,
        rotation: 90,
        id: 'g8Hex'
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
        console.log("Green Hex 8");
        $timeout(function() {
          // Implement server point on-click logic here
        });
      });

      domainsGroup.add(scope.konvaobj);
    }
  }
});