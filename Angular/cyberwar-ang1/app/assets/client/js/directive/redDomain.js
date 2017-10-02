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