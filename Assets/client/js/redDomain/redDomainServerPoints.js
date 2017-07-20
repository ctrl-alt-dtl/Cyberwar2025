/**
 * RED DOMAIN
 */

var point_x = BASE_BOARD_WIDTH;
var point_y = BASE_BOARD_HEIGHT;

var radius = BASE_BOARD_WIDTH / 55;

// Red Base Outline.
var rBase = new Konva.Line({
  points: [
    point_x / 2.48,       // X1
    point_y / 1.126,      // Y1
    point_x / 2.42,       // X2
    point_y / 1.154,      // Y2
    point_x / 1.705,      // X3
    point_y / 1.154,      // Y3
    point_x / 1.68,       // X4
    point_y / 1.126,      // Y4
    point_x / 1.705,      // X5
    point_y / 1.1,        // Y5
    point_x / 2.42,       // X6
    point_y / 1.1         // Y6
  ],
  stroke: 'red',
  strokeWidth: 2,
  closed: true
});

var r1Hex = new Konva.RegularPolygon({
  x: BASE_BOARD_WIDTH / 2.74,
  y: BASE_BOARD_HEIGHT / 1.126,
  sides: 6,
  radius: radius,
  fill: '',
  stroke: 'red',
  strokeWidth: 2,
  rotation: 90
});

var r2Hex = new Konva.RegularPolygon({
  x: BASE_BOARD_WIDTH / 1.575,
  y: BASE_BOARD_HEIGHT / 1.126,
  sides: 6,
  radius: radius,
  fill: '',
  stroke: 'red',
  strokeWidth: 2,
  rotation: 90
});

var r3Hex = new Konva.RegularPolygon({
  x: BASE_BOARD_WIDTH / 2.434,
  y: BASE_BOARD_HEIGHT / 1.2775,
  sides: 6,
  radius: radius,
  fill: '',
  stroke: 'red',
  strokeWidth: 2,
  rotation: 90,
  visible: true,
  listening: true,
  id: r3Hex,

});

var r4Hex = new Konva.RegularPolygon({
  x: BASE_BOARD_WIDTH / 2,
  y: BASE_BOARD_HEIGHT / 1.2775,
  sides: 6,
  radius: radius,
  fill: '',
  stroke: 'red',
  strokeWidth: 2,
  rotation: 90
});

var r5Hex = new Konva.RegularPolygon({
  x: BASE_BOARD_WIDTH / 1.7,
  y: BASE_BOARD_HEIGHT / 1.2775,
  sides: 6,
  radius: radius,
  fill: '',
  stroke: 'red',
  strokeWidth: 2,
  rotation: 90
});

var r6Hex = new Konva.RegularPolygon({
  x: BASE_BOARD_WIDTH / 2.2,
  y: BASE_BOARD_HEIGHT / 1.47,
  sides: 6,
  radius: radius,
  fill: '',
  stroke: 'red',
  strokeWidth: 2,
  rotation: 90
});

var r7Hex = new Konva.RegularPolygon({
  x: BASE_BOARD_WIDTH / 1.835,
  y: BASE_BOARD_HEIGHT / 1.47,
  sides: 6,
  radius: radius,
  fill: '',
  stroke: 'red',
  strokeWidth: 2,
  rotation: 90
});

var r8Hex = new Konva.RegularPolygon({
  x: BASE_BOARD_WIDTH / 2,
  y: BASE_BOARD_HEIGHT / 1.735,
  sides: 6,
  radius: radius,
  fill: '',
  stroke: 'red',
  strokeWidth: 2,
  rotation: 90
});


