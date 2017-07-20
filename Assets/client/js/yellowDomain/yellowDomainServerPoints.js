/**
 * YELLOW DOMAIN
 */

var point_x = BASE_BOARD_WIDTH;
var point_y = BASE_BOARD_HEIGHT;

var radius = BASE_BOARD_WIDTH / 55;

// Yellow Base Outline.
var yBase = new Konva.Line({
  points: [
    point_x / 1.25,        // X1
    point_y / 2.4,        // Y1
    point_x / 1.28,       // X2
    point_y / 2.4,        // Y2
    point_x / 1.44,      // X3
    point_y / 4.647,      // Y3
    point_x / 1.42,       // X4
    point_y / 5.15,      // Y4
    point_x / 1.387,      // X5
    point_y / 5.15,        // Y5
    point_x / 1.237,       // X6
    point_y / 2.53,       // Y6
  ],
  stroke: 'yellow',
  strokeWidth: 2,
  closed: true
});

var y1Hex = new Konva.RegularPolygon({
  x: BASE_BOARD_WIDTH / 1.221,
  y: BASE_BOARD_HEIGHT / 2.165,
  sides: 6,
  radius: radius,
  fill: '',
  stroke: 'yellow',
  strokeWidth: 2,
  rotation: 90
});

var y2Hex = new Konva.RegularPolygon({
  x: BASE_BOARD_WIDTH / 1.464,
  y: BASE_BOARD_HEIGHT / 6.63,
  sides: 6,
  radius: radius,
  fill: '',
  stroke: 'yellow',
  strokeWidth: 2,
  rotation: 90
});

var y3Hex = new Konva.RegularPolygon({
  x: BASE_BOARD_WIDTH / 1.373,
  y: BASE_BOARD_HEIGHT / 2.165,
  sides: 6,
  radius: radius,
  fill: '',
  stroke: 'yellow',
  strokeWidth: 2,
  rotation: 90,
  visible: true,
  listening: true,
  id: y3Hex,

});

var y4Hex = new Konva.RegularPolygon({
  x: BASE_BOARD_WIDTH / 1.464,
  y: BASE_BOARD_HEIGHT / 2.78,
  sides: 6,
  radius: radius,
  fill: '',
  stroke: 'yellow',
  strokeWidth: 2,
  rotation: 90
});

var y5Hex = new Konva.RegularPolygon({
  x: BASE_BOARD_WIDTH / 1.564,
  y: BASE_BOARD_HEIGHT / 3.92,
  sides: 6,
  radius: radius,
  fill: '',
  stroke: 'yellow',
  strokeWidth: 2,
  rotation: 90
});

var y6Hex = new Konva.RegularPolygon({
  x: BASE_BOARD_WIDTH / 1.564,
  y: BASE_BOARD_HEIGHT / 2.165,
  sides: 6,
  radius: radius,
  fill: '',
  stroke: 'yellow',
  strokeWidth: 2,
  rotation: 90
});

var y7Hex = new Konva.RegularPolygon({
  x: BASE_BOARD_WIDTH / 1.68,
  y: BASE_BOARD_HEIGHT / 2.78,
  sides: 6,
  radius: radius,
  fill: '',
  stroke: 'yellow',
  strokeWidth: 2,
  rotation: 90
});

var y8Hex = new Konva.RegularPolygon({
  x: BASE_BOARD_WIDTH / 1.816,
  y: BASE_BOARD_HEIGHT / 2.165,
  sides: 6,
  radius: radius,
  fill: '',
  stroke: 'yellow',
  strokeWidth: 2,
  rotation: 90
});