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