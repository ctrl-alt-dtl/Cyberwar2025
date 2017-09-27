var app=angular.module('myApp', []);
app.controller('canvasCtrl', function($scope){
  $scope.canvasKonvaObj = false;
  $scope.canvaskonvaStageObj = false;
  $scope.isDraggable = true;
});

app.directive('draggableCanvas', ['$rootScope', function ($rootScope) {
  return {
    restrict: 'A',
    scope: {
      konvaobj: '=',
      konvastageobj: '=',
      isdraggable: '='
    },
    link: function (scope, el, attrs) {
      console.log("in");
      if (!scope.konvastageobj) {
        var id = attrs["id"];
        //create random unique id
        if (!id) {
          id = Math.random().toString(36).substring(7);
        }
        if (!scope.konvastageobj) {
          scope.konvastageobj = new Konva.Stage({
            container: id,
            width: 578,
            height: 200
          });
        }
        if (!scope.konvastageobj.container) {
          scope.konvastageobj.attrs.container = id;
        }
      }
      var layer = new Konva.Layer();
      var rectX = scope.konvastageobj.getWidth() / 2 - 50;
      var rectY = scope.konvastageobj.getHeight() / 2 - 25;

      //if konvaObj is null, init
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
      scope.konvastageobj.add(layer);

    }
  }
}]);
