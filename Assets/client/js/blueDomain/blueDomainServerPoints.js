/**
 * BLUE DOMAIN
 */
var point_x = BASE_BOARD_WIDTH;
var point_y = BASE_BOARD_HEIGHT;

var radius = BASE_BOARD_WIDTH / 55;

// Blue Base Outline
var bBase = new Konva.Line({
  points: [
    point_x / 3.37,       // X1
    point_y / 5.15,       // Y1
    point_x / 3.28,       // X2
    point_y / 4.65,       // Y2
    point_x / 4.57,       // X3
    point_y / 2.4,        // Y3
    point_x / 4.99,       // X4
    point_y / 2.4,        // Y4
    point_x / 5.26,       // X5
    point_y / 2.52,       // Y5
    point_x / 3.6,        // X6
    point_y / 5.15        // Y6
  ],
  fill: 'blue',
  stroke: 'black',
  strokeWidth: 2,
  closed: true
});

var b1Hex = new Konva.RegularPolygon({
  x: BASE_BOARD_WIDTH / 3.172,
  y: BASE_BOARD_HEIGHT / 6.63,
  sides: 6,
  radius: radius,
  fill: 'blue',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'b1Hex'
});

var b2Hex = new Konva.RegularPolygon({
  x: BASE_BOARD_WIDTH / 5.55,
  y: BASE_BOARD_HEIGHT / 2.165,
  sides: 6,
  radius: radius,
  fill: 'blue',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'b2Hex'
});

var b3Hex = new Konva.RegularPolygon({
  x: BASE_BOARD_WIDTH / 2.775,
  y: BASE_BOARD_HEIGHT / 3.92,
  sides: 6,
  radius: radius,
  fill: 'blue',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'b3Hex'
});

var b4Hex = new Konva.RegularPolygon({
  x: BASE_BOARD_WIDTH / 3.172,
  y: BASE_BOARD_HEIGHT / 2.78,
  sides: 6,
  radius: radius,
  fill: 'blue',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'b4Hex'
});

var b5Hex = new Konva.RegularPolygon({
  x: BASE_BOARD_WIDTH / 3.688,
  y: BASE_BOARD_HEIGHT / 2.165,
  sides: 6,
  radius: radius,
  fill: 'blue',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'b5Hex'
});

var b6Hex = new Konva.RegularPolygon({
  x: BASE_BOARD_WIDTH / 2.47,
  y: BASE_BOARD_HEIGHT / 2.78,
  sides: 6,
  radius: radius,
  fill: 'blue',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'b6Hex'
});

var b7Hex = new Konva.RegularPolygon({
  x: BASE_BOARD_WIDTH / 2.78,
  y: BASE_BOARD_HEIGHT / 2.165,
  sides: 6,
  radius: radius,
  fill: 'blue',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'b7Hex'
});

var b8Hex = new Konva.RegularPolygon({
  x: BASE_BOARD_WIDTH / 2.221,
  y: BASE_BOARD_HEIGHT / 2.165,
  sides: 6,
  radius: radius,
  fill: 'blue',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'b8Hex'
});

