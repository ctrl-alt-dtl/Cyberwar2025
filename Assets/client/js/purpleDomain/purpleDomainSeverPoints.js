/**
 * PURPLE DOMAIN
 */
var point_x = BASE_BOARD_WIDTH;
var point_y = BASE_BOARD_HEIGHT;

var radius = BASE_BOARD_WIDTH / 55;

// Purple Base Outline
var pBase = new Konva.Line({
  points: [
    point_x / 5.04,       // X1
    point_y / 1.715,      // Y1
    point_x / 4.6,        // X2
    point_y / 1.715,      // Y2
    point_x / 3.28,       // X3
    point_y / 1.28,       // Y3
    point_x / 3.37,       // X4
    point_y / 1.24,       // Y4
    point_x / 3.595,        // X5
    point_y / 1.24,       // Y5
    point_x / 5.23,       // X6
    point_y / 1.652         // Y6
  ],
  fill: 'purple',
  stroke: 'black',
  strokeWidth: 2,
  closed: true
});

var p1Hex = new Konva.RegularPolygon({
  x: BASE_BOARD_WIDTH / 5.55,
  y: BASE_BOARD_HEIGHT / 1.86,
  sides: 6,
  radius: radius,
  fill: 'purple',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'p1Hex'
});

var p2Hex = new Konva.RegularPolygon({
  x: BASE_BOARD_WIDTH / 3.172,
  y: BASE_BOARD_HEIGHT / 1.177,
  sides: 6,
  radius: radius,
  fill: 'purple',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'p2Hex'
});

var p3Hex = new Konva.RegularPolygon({
  x: BASE_BOARD_WIDTH / 3.687,
  y: BASE_BOARD_HEIGHT / 1.86,
  sides: 6,
  radius: radius,
  fill: 'purple',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'p3Hex'
});

var p4Hex = new Konva.RegularPolygon({
  x: BASE_BOARD_WIDTH / 3.172,
  y: BASE_BOARD_HEIGHT / 1.558,
  sides: 6,
  radius: radius,
  fill: 'purple',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'p4Hex'
});

var p5Hex = new Konva.RegularPolygon({
  x: BASE_BOARD_WIDTH / 2.772,
  y: BASE_BOARD_HEIGHT / 1.345,
  sides: 6,
  radius: radius,
  fill: 'purple',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'p5Hex'
});

var p6Hex = new Konva.RegularPolygon({
  x: BASE_BOARD_WIDTH / 2.775,
  y: BASE_BOARD_HEIGHT / 1.86,
  sides: 6,
  radius: radius,
  fill: 'purple',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'p6Hex'
});

var p7Hex = new Konva.RegularPolygon({
  x: BASE_BOARD_WIDTH / 2.47,
  y: BASE_BOARD_HEIGHT / 1.558,
  sides: 6,
  radius: radius,
  fill: 'purple',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'p7Hex'
});

var p8Hex = new Konva.RegularPolygon({
  x: BASE_BOARD_WIDTH / 2.221,
  y: BASE_BOARD_HEIGHT / 1.86,
  sides: 6,
  radius: radius,
  fill: 'purple',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'p8Hex'
});

