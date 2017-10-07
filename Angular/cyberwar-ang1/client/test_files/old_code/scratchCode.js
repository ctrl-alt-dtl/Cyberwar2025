/**
 * This is scratch code that serves no purpose other than to store temporary ideas or code that I plan to use in the
 * future.
 */

var layer = new Konva.Layer();
var rectX = scope.konvastageobj.getWidth() / 2 - 50;
var rectY = scope.konvastageobj.getHeight() / 2 - 25;

//if kineticObj is null, init
var options = {
  x: rectX,
  y: rectY,
  width: 100,
  height: 50,
  fill: '#00D2FF',
  stroke: 'black',
  strokeWidth: 4,
};
if (scope.isdraggable) {
  options.draggable = true;
}
if (!scope.konvaobj) {
  scope.konvaobj = new Konva.Rect(options);
}

// add cursor styling
scope.konvaobj.on('mouseover', function () {

  document.body.style.cursor = 'pointer';

});
scope.konvaobj.on('mouseout', function () {
  document.body.style.cursor = 'default';
  $rootScope.$emit("CANVAS-MOUSEOUT");
});

layer.add(scope.konvaobj);




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

      /*
      var rBaseHexListener = new Konva.Line({
        points: [
          pt_rBase1Hex_X,       // X1
          pt_rBase1Hex_Y,      // Y1
          point_x / 2.42,       // X2
          point_y / 1.154,      // Y2
          point_x / 1.705,      // X3
          point_y / 1.154,      // Y3
          pt_rBase2Hex_X,       // X4
          pt_rBase2Hex_Y,      // Y4
          point_x / 1.705,      // X5
          point_y / 1.1,        // Y5
          point_x / 2.42,       // X6
          point_y / 1.1         // Y6
        ],
        closed: true,
        id: 'rBaseHexListener'
      });

      domainsGroup.add(rBaseHexListener);
      */

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

      // CLICK TEST!!!!!
      /*
      scope.clickCount = 0;
      rBaseHexListener.on ('click', function () {
        console.log("test red");
        scope.primary = function () {
          Notification("test");
          console.log("notification test?");
        };
        $timeout(function() {
          scope.clickCount++;
        });
      });
      */
    }
  }
});



