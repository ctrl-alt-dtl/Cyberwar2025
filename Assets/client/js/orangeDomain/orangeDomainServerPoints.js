/**
 * ORANGE DOMAIN
 */
/**
 * ORANGE DOMAIN
 */

var point_x = BASE_BOARD_WIDTH;
var point_y = BASE_BOARD_HEIGHT;

var radius = BASE_BOARD_WIDTH / 55;

// Orange Base Outline
var oBase = new Konva.Line({
  points: [
    point_x / 1.42,       // X1
    point_y / 1.24,      // Y1
    point_x / 1.44,        // X2
    point_y / 1.28,      // Y2
    point_x / 1.28,       // X3
    point_y / 1.715,       // Y3
    point_x / 1.25,       // X4
    point_y / 1.715,       // Y4
    point_x / 1.237,        // X5
    point_y / 1.652,       // Y5
    point_x / 1.387,       // X6
    point_y / 1.24         // Y6
  ],
  fill: 'orange',
  stroke: 'black',
  strokeWidth: 2,
  closed: true
});

var o1Hex = new Konva.RegularPolygon({
  x: BASE_BOARD_WIDTH / 1.464,
  y: BASE_BOARD_HEIGHT / 1.177,
  sides: 6,
  radius: radius,
  fill: 'orange',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'o1Hex'
});

var o2Hex = new Konva.RegularPolygon({
  x: BASE_BOARD_WIDTH / 1.221,
  y: BASE_BOARD_HEIGHT / 1.86,
  sides: 6,
  radius: radius,
  fill: 'orange',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'o2Hex'
});

var o3Hex = new Konva.RegularPolygon({
  x: BASE_BOARD_WIDTH / 1.564,
  y: BASE_BOARD_HEIGHT / 1.345,
  sides: 6,
  radius: radius,
  fill: 'orange',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'o3Hex'
});

var o4Hex = new Konva.RegularPolygon({
  x: BASE_BOARD_WIDTH / 1.464,
  y: BASE_BOARD_HEIGHT / 1.558,
  sides: 6,
  radius: radius,
  fill: 'orange',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'o4Hex'
});

var o5Hex = new Konva.RegularPolygon({
  x: BASE_BOARD_WIDTH / 1.373,
  y: BASE_BOARD_HEIGHT / 1.86,
  sides: 6,
  radius: radius,
  fill: 'orange',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'o5Hex'
});

var o6Hex = new Konva.RegularPolygon({
  x: BASE_BOARD_WIDTH / 1.68,
  y: BASE_BOARD_HEIGHT / 1.558,
  sides: 6,
  radius: radius,
  fill: 'orange',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'o6Hex'
});

var o7Hex = new Konva.RegularPolygon({
  x: BASE_BOARD_WIDTH / 1.564,
  y: BASE_BOARD_HEIGHT / 1.86,
  sides: 6,
  radius: radius,
  fill: 'orange',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'o7Hex'
});

var o8Hex = new Konva.RegularPolygon({
  x: BASE_BOARD_WIDTH / 1.816,
  y: BASE_BOARD_HEIGHT / 1.86,
  sides: 6,
  radius: radius,
  fill: 'orange',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'o8Hex'
});

