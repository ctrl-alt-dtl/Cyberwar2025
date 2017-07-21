/**
 * BLUE DOMAIN
 */
var point_x = BASE_BOARD_WIDTH;
var point_y = BASE_BOARD_HEIGHT;

var radius = BASE_BOARD_WIDTH / 55;

// Green Base Outline
var gBase = new Konva.Line({
  points: [
    point_x / 1.68,       // X1
    point_y / 8.95,      // Y1
    point_x / 1.705,       // X2
    point_y / 7.5,      // Y2
    point_x / 2.42,      // X3
    point_y / 7.5,      // Y3
    point_x / 2.48,       // X4
    point_y / 8.95,      // Y4
    point_x / 2.42,      // X5
    point_y / 11,        // Y5
    point_x / 1.705,       // X6
    point_y / 11         // Y6
  ],
  fill: 'green',
  stroke: 'black',
  strokeWidth: 2,
  closed: true
});

var g1Hex = new Konva.RegularPolygon({
  x: BASE_BOARD_WIDTH / 1.575,
  y: BASE_BOARD_HEIGHT / 8.95,
  sides: 6,
  radius: radius,
  fill: 'green',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'g1Hex'
});

var g2Hex = new Konva.RegularPolygon({
  x: BASE_BOARD_WIDTH / 2.74,
  y: BASE_BOARD_HEIGHT / 8.95,
  sides: 6,
  radius: radius,
  fill: 'green',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'g2Hex'
});

var g3Hex = new Konva.RegularPolygon({
  x: BASE_BOARD_WIDTH / 1.7,
  y: BASE_BOARD_HEIGHT / 4.64,
  sides: 6,
  radius: radius,
  fill: 'green',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'g3Hex'
});

var g4Hex = new Konva.RegularPolygon({
  x: BASE_BOARD_WIDTH / 2,
  y: BASE_BOARD_HEIGHT / 4.64,
  sides: 6,
  radius: radius,
  fill: 'green',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'g4Hex'
});

var g5Hex = new Konva.RegularPolygon({
  x: BASE_BOARD_WIDTH / 2.434,
  y: BASE_BOARD_HEIGHT / 4.64,
  sides: 6,
  radius: radius,
  fill: 'green',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'g5Hex'
});

var g6Hex = new Konva.RegularPolygon({
  x: BASE_BOARD_WIDTH / 1.835,
  y: BASE_BOARD_HEIGHT / 3.15,
  sides: 6,
  radius: radius,
  fill: 'green',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'g6Hex'
});

var g7Hex = new Konva.RegularPolygon({
  x: BASE_BOARD_WIDTH / 2.2,
  y: BASE_BOARD_HEIGHT / 3.15,
  sides: 6,
  radius: radius,
  fill: 'green',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'g7Hex'
});

var g8Hex = new Konva.RegularPolygon({
  x: BASE_BOARD_WIDTH / 2,
  y: BASE_BOARD_HEIGHT / 2.365,
  sides: 6,
  radius: radius,
  fill: 'green',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'g8Hex'
});

