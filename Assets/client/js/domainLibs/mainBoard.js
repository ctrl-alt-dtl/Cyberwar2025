/**
 * MAIN BOARD
 */

var centerHex = new Konva.RegularPolygon({
  x: stage.width() / 2,
  y: stage.height() / 2,
  sides: 6,
  radius: BASE_BOARD_WIDTH / 34.133,
  fill: '',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90
});

var boardEdge= new Konva.RegularPolygon({
  x: stage.width() / 2,
  y: stage.height() / 2,
  sides: 6,
  radius: BASE_BOARD_WIDTH / 2.79,
  fill: 'white',
  stroke: 'black',
  strokeWidth: 4,
  rotation: 90
});

var origin = new Konva.RegularPolygon({
  x: BASE_BOARD_WIDTH / 2,
  y: BASE_BOARD_HEIGHT / 2,
  sides: 6,
  fill: 'green',
  radius: 2
});


// TODO: Add the other boxes.
