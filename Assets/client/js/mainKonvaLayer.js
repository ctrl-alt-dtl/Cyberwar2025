var width = window.innerWidth;
var height = window.innerHeight;

var stage = new Konva.Stage({
  container: 'container',
  width: width,
  height: height
});

var layer = new Konva.Layer();

var center_hex = new Konva.RegularPolygon({
  x: 693,
  y: 394,
  sides: 6,
  radius: 33,
  fill: '',
  stroke: 'black',
  strokewidth: 2,
  rotation: 90
});



var imageObj = new Image();
// background board
imageObj.onload = function() {
  var bgBoard = new Konva.Image({
    x: 10,
    y: 10,
    image: imageObj,
    width: 1366,
    height: 768
  });

// add the shapes to the layer, the order matters (background, links, bases, then servers).
  layer.add(bgBoard);
  layer.add(center_hex);

  // add Domain Inter-Server Paths (LINKS)
  // Red Domain Tier 4
  layer.add(rBaseToR1Hex, rBaseToR2Hex, r1HexToR3Hex, r2HexToR5Hex);

  // Red Domain Tier 3
  layer.add(r3HexToR4Hex, r5HexToR4Hex, r3HexToR6Hex, r4HexToR6Hex, r4HexToR7Hex, r5HexToR7Hex);

  // Red Domain Tier 2
  layer.add(r6HexToR7Hex, r6HexToR8Hex, r7HexToR8Hex);

  // Blue Domain

  // add Red Domain Servers
  layer.add(rBase, r1Hex, r2Hex, r3Hex, r4Hex, r5Hex, r6Hex, r7Hex, r8Hex);

  // add Red Domain Text
  layer.add(r1Text, r2Text);

// add the layer to the stage
  stage.add(layer);

};
imageObj.src = '../img/Board-Web.png';




