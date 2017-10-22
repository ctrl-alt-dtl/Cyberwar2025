// Purple Base
app.directive('gameBoardPurpleBase', function ($rootScope, $timeout) {
  return {
    restrict: 'A',
    scope: {
      callbackFn: '&callbackFn'
    },
    link: function (scope) {
      // console.log("gameBoardPurpleBaseLoading");

      // add server point to the domain
      domainsGroup.add(pBase, purpleBaseText);

      var options = {
        points: [
          pt_pBase1Hex_X,       // X1
          pt_pBase1Hex_Y,      // Y1
          point_x / 4.6,        // X2
          point_y / 1.715,      // Y2
          point_x / 3.28,       // X3
          point_y / 1.28,       // Y3
          pt_pBase2Hex_X,       // X4
          pt_pBase2Hex_Y,       // Y4
          point_x / 3.595,        // X5
          point_y / 1.24,       // Y5
          point_x / 5.23,       // X6
          point_y / 1.652         // Y6
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

      scope.konvaobj.on ('click', function () {
        console.log("Purple Hex Base");
        $timeout(function() {
          // Implement server point on-click logic here
        });

        // Modal Callback Function
        scope.callbackFn();
      });

      domainsGroup.add(scope.konvaobj);
      console.log("gameBoardPurpleBaseLoaded");
    }
  }
});

// Hex 1
app.directive('gameBoardPurple1Hex', function ($rootScope, $timeout) {
  return {
    restrict: 'AE',
    link: function (scope) {
      // console.log("gameBoardPurple1HexLoading");

      // add server point to the domain
      domainsGroup.add(p1Hex, p1Text);

      var options = {
        x: pt_p1Hex_X,
        y: pt_p1Hex_Y,
        sides: 6,
        radius: radius,
        stroke: 'black',
        strokeWidth: 2,
        rotation: 90,
        id: 'p1HexListener'
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
        console.log("Purple Hex 1");
        $timeout(function() {
          // Implement server point on-click logic here
        });
      });

      domainsGroup.add(scope.konvaobj);
      console.log("gameBoardPurple1HexLoaded");
    }
  }
});

// Hex 2
app.directive('gameBoardPurple2Hex', function ($rootScope, $timeout) {
  return {
    restrict: 'AE',
    link: function (scope) {
      // console.log("gameBoardPurple2HexLoading");

      // add server point to the domain
      domainsGroup.add(p2Hex, p2Text);

      var options = {
        x: pt_p2Hex_X,
        y: pt_p2Hex_Y,
        sides: 6,
        radius: radius,
        stroke: 'black',
        strokeWidth: 2,
        rotation: 90,
        id: 'p2HexListener'
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
        console.log("Purple Hex 2");
        $timeout(function() {
          // Implement server point on-click logic here
        });
      });

      domainsGroup.add(scope.konvaobj);
      console.log("gameBoardPurple2HexLoaded");
    }
  }
});

// Hex 3
app.directive('gameBoardPurple3Hex', function ($rootScope, $timeout) {
  return {
    restrict: 'AE',
    link: function (scope) {
      // console.log("gameBoardPurple3HexLoading");

      // add server point to the domain
      domainsGroup.add(p3Hex, p3Text);

      var options = {
        x: pt_p3Hex_X,
        y: pt_p3Hex_Y,
        sides: 6,
        radius: radius,
        stroke: 'black',
        strokeWidth: 2,
        rotation: 90,
        id: 'p3HexListener'
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
        console.log("Purple Hex 3");
        $timeout(function() {
          // Implement server point on-click logic here
        });
      });

      domainsGroup.add(scope.konvaobj);
      console.log("gameBoardPurple3HexLoaded");
    }
  }
});

// Hex 4
app.directive('gameBoardPurple4Hex', function ($rootScope, $timeout) {
  return {
    restrict: 'AE',
    link: function (scope) {
      // console.log("gameBoardPurple4HexLoading");

      // add server point to the domain
      domainsGroup.add(p4Hex, p4Text);

      var options = {
        x: pt_p4Hex_X,
        y: pt_p4Hex_Y,
        sides: 6,
        radius: radius,
        stroke: 'black',
        strokeWidth: 2,
        rotation: 90,
        id: 'p4HexListener'
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
        console.log("Purple Hex 4");
        $timeout(function() {
          // Implement server point on-click logic here
        });
      });

      domainsGroup.add(scope.konvaobj);
      console.log("gameBoardPurple4HexLoaded");
    }
  }
});

// Hex 5
app.directive('gameBoardPurple5Hex', function ($rootScope, $timeout) {
  return {
    restrict: 'AE',
    link: function (scope) {
      // console.log("gameBoardPurple5HexLoading");

      // add server point to the domain
      domainsGroup.add(p5Hex, p5Text);

      var options = {
        x: pt_p5Hex_X,
        y: pt_p5Hex_Y,
        sides: 6,
        radius: radius,
        stroke: 'black',
        strokeWidth: 2,
        rotation: 90,
        id: 'p5HexListener'
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
        console.log("Purple Hex 5");
        $timeout(function() {
          // Implement server point on-click logic here
        });
      });

      domainsGroup.add(scope.konvaobj);
      console.log("gameBoardPurple5HexLoaded");
    }
  }
});

// Hex 6
app.directive('gameBoardPurple6Hex', function ($rootScope, $timeout) {
  return {
    restrict: 'AE',
    link: function (scope) {
      // console.log("gameBoardPurple6HexLoading");

      // add server point to the domain
      domainsGroup.add(p6Hex, p6Text);

      var options = {
        x: pt_p6Hex_X,
        y: pt_p6Hex_Y,
        sides: 6,
        radius: radius,
        stroke: 'black',
        strokeWidth: 2,
        rotation: 90,
        id: 'p6HexListener'
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
        console.log("Purple Hex 6");
        $timeout(function() {
          // Implement server point on-click logic here
        });
      });

      domainsGroup.add(scope.konvaobj);
      console.log("gameBoardPurple6HexLoaded");
    }
  }
});

// Hex 7
app.directive('gameBoardPurple7Hex', function ($rootScope, $timeout) {
  return {
    restrict: 'AE',
    link: function (scope) {
      // console.log("gameBoardPurple7HexLoading");

      // add server point to the domain
      domainsGroup.add(p7Hex, p7Text);

      var options = {
        x: pt_p7Hex_X,
        y: pt_p7Hex_Y,
        sides: 6,
        radius: radius,
        stroke: 'black',
        strokeWidth: 2,
        rotation: 90,
        id: 'p7HexListener'
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
        console.log("Purple Hex 7");
        $timeout(function() {
          // Implement server point on-click logic here
        });
      });

      domainsGroup.add(scope.konvaobj);
      console.log("gameBoardPurple7HexLoaded");
    }
  }
});

// Hex 8
app.directive('gameBoardPurple8Hex', function ($rootScope, $timeout) {
  return {
    restrict: 'AE',
    link: function (scope) {
      // console.log("gameBoardPurple8HexLoading");

      // add server point to the domain
      domainsGroup.add(p8Hex, p8Text);

      var options = {
        x: pt_p8Hex_X,
        y: pt_p8Hex_Y,
        sides: 6,
        radius: radius,
        stroke: 'black',
        strokeWidth: 2,
        rotation: 90,
        id: 'p8HexListener'
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
        console.log("Purple Hex 8");
        $timeout(function() {
          // Implement server point on-click logic here
        });
      });

      domainsGroup.add(scope.konvaobj);
      console.log("gameBoardPurple8HexLoaded");
    }
  }
});