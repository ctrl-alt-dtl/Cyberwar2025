/**
 * BLUE DOMAIN
 */
var point_x = BASE_BOARD_WIDTH;
var point_y = BASE_BOARD_HEIGHT;

var radius = BASE_BOARD_WIDTH / 55;

// Green Base Outline
var gBase = new Konva.Line({
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
  stroke: 'green',
  strokeWidth: 2,
  closed: true
});

var g1Hex = new Konva.RegularPolygon({
  x: BASE_BOARD_WIDTH / 1.575,
  y: BASE_BOARD_HEIGHT / 8.95,
  sides: 6,
  radius: radius,
  fill: '',
  stroke: 'green',
  strokeWidth: 2,
  rotation: 90
});

var g2Hex = new Konva.RegularPolygon({
  x: BASE_BOARD_WIDTH / 2.74,
  y: BASE_BOARD_HEIGHT / 8.95,
  sides: 6,
  radius: radius,
  fill: '',
  stroke: 'green',
  strokeWidth: 2,
  rotation: 90
});

var g3Hex = new Konva.RegularPolygon({
  x: BASE_BOARD_WIDTH / 1.7,
  y: BASE_BOARD_HEIGHT / 4.64,
  sides: 6,
  radius: radius,
  fill: '',
  stroke: 'green',
  strokeWidth: 2,
  rotation: 90
});

var g4Hex = new Konva.RegularPolygon({
  x: BASE_BOARD_WIDTH / 2,
  y: BASE_BOARD_HEIGHT / 4.64,
  sides: 6,
  radius: radius,
  fill: '',
  stroke: 'green',
  strokeWidth: 2,
  rotation: 90
});

var g5Hex = new Konva.RegularPolygon({
  x: BASE_BOARD_WIDTH / 2.434,
  y: BASE_BOARD_HEIGHT / 4.64,
  sides: 6,
  radius: radius,
  fill: '',
  stroke: 'green',
  strokeWidth: 2,
  rotation: 90
});

var g6Hex = new Konva.RegularPolygon({
  x: BASE_BOARD_WIDTH / 1.835,
  y: BASE_BOARD_HEIGHT / 3.15,
  sides: 6,
  radius: radius,
  fill: '',
  stroke: 'green',
  strokeWidth: 2,
  rotation: 90
});

var g7Hex = new Konva.RegularPolygon({
  x: BASE_BOARD_WIDTH / 2.2,
  y: BASE_BOARD_HEIGHT / 3.15,
  sides: 6,
  radius: radius,
  fill: '',
  stroke: 'green',
  strokeWidth: 2,
  rotation: 90
});

var g8Hex = new Konva.RegularPolygon({
  x: BASE_BOARD_WIDTH / 2,
  y: BASE_BOARD_HEIGHT / 2.365,
  sides: 6,
  radius: radius,
  fill: '',
  stroke: 'green',
  strokeWidth: 2,
  rotation: 90
});

