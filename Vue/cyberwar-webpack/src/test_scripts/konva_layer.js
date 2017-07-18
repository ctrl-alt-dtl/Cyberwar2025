import Konva from '../../lib/canvas/konva'

var width = window.innerWidth;
var height = window.innerHeight;

var stage = new Konva.Layer( {
  container: 'background',
  width: width,
  height: height
});

var layer = new Konva.Layer();
var bgImage = new Image();

bgImage.onload = function () {
  var background = new Konva.Image({
    x: 50,
    y: 50,
    image: bgImage
  });

  layer.add(background);

  stage.add(layer);
};

bgImage.src = '/assets/Board-Web.png';
