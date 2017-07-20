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
    point_x / 5.23,       // X5
    point_y / 2.52,       // Y5
    point_x / 3.6,        // X6
    point_y / 5.15        // Y6
  ],
  stroke: 'blue',
  strokewidth: 2,
  closed: true
});

var b1Hex = new Konva.RegularPolygon({
  x: BASE_BOARD_WIDTH / 3.168,
  y: BASE_BOARD_HEIGHT / 6.59,
  sides: 6,
  radius: radius,
  fill: '',
  stroke: 'blue',
  strokewidth: 2,
  rotation: 90
});

var b2Hex = new Konva.RegularPolygon({
  x: BASE_BOARD_WIDTH / 5.55,
  y: BASE_BOARD_HEIGHT / 2.17,
  sides: 6,
  radius: radius,
  fill: '',
  stroke: 'blue',
  strokewidth: 2,
  rotation: 90
});

var b3Hex = new Konva.RegularPolygon({
  x: BASE_BOARD_WIDTH / 2.775,
  y: BASE_BOARD_HEIGHT / 3.92,
  sides: 6,
  radius: radius,
  fill: '',
  stroke: 'blue',
  strokewidth: 2,
  rotation: 90
});

var b4Hex = new Konva.RegularPolygon({
  x: BASE_BOARD_WIDTH / 3.168,
  y: BASE_BOARD_HEIGHT / 2.78,
  sides: 6,
  radius: radius,
  fill: '',
  stroke: 'blue',
  strokewidth: 2,
  rotation: 90
});

var b5Hex = new Konva.RegularPolygon({
  x: BASE_BOARD_WIDTH / 3.68,
  y: BASE_BOARD_HEIGHT / 2.17,
  sides: 6,
  radius: radius,
  fill: '',
  stroke: 'blue',
  strokewidth: 2,
  rotation: 90
});

var b6Hex = new Konva.RegularPolygon({
  x: BASE_BOARD_WIDTH / 2.47,
  y: BASE_BOARD_HEIGHT / 2.79,
  sides: 6,
  radius: radius,
  fill: '',
  stroke: 'blue',
  strokewidth: 2,
  rotation: 90
});

var b7Hex = new Konva.RegularPolygon({
  x: BASE_BOARD_WIDTH / 2.775,
  y: BASE_BOARD_HEIGHT / 2.17,
  sides: 6,
  radius: radius,
  fill: '',
  stroke: 'blue',
  strokewidth: 2,
  rotation: 90
});

var b8Hex = new Konva.RegularPolygon({
  x: BASE_BOARD_WIDTH / 2.224,
  y: BASE_BOARD_HEIGHT / 2.17,
  sides: 6,
  radius: radius,
  fill: '',
  stroke: 'blue',
  strokewidth: 2,
  rotation: 90
});

