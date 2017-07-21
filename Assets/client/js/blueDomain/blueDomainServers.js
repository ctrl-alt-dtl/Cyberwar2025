/**
 * BLUE DOMAIN
 */

var point_x = BASE_BOARD_WIDTH;
var point_y = BASE_BOARD_HEIGHT;

var radius = BASE_BOARD_WIDTH / 55;

// Blue Base Outline
var bBase = new Konva.Line({
  points: [
    pt_bBase1Hex_X,       // X1
    pt_bBase1Hex_Y,       // Y1
    point_x / 3.28,       // X2
    point_y / 4.65,       // Y2
    point_x / 4.57,       // X3
    point_y / 2.4,        // Y3
    pt_bBase2Hex_X,       // X4
    pt_bBase2Hex_Y,       // Y4
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
  x: pt_b1Hex_X,
  y: pt_b1Hex_Y,
  sides: 6,
  radius: radius,
  fill: 'blue',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'b1Hex'
});

var b2Hex = new Konva.RegularPolygon({
  x: pt_b2Hex_X,
  y: pt_b2Hex_Y,
  sides: 6,
  radius: radius,
  fill: 'blue',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'b2Hex'
});

var b3Hex = new Konva.RegularPolygon({
  x: pt_b3Hex_X,
  y: pt_b3Hex_Y,
  sides: 6,
  radius: radius,
  fill: 'blue',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'b3Hex'
});

var b4Hex = new Konva.RegularPolygon({
  x: pt_b4Hex_X,
  y: pt_b4Hex_Y,
  sides: 6,
  radius: radius,
  fill: 'blue',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'b4Hex'
});

var b5Hex = new Konva.RegularPolygon({
  x: pt_b5Hex_X,
  y: pt_b5Hex_Y,
  sides: 6,
  radius: radius,
  fill: 'blue',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'b5Hex'
});

var b6Hex = new Konva.RegularPolygon({
  x: pt_b6Hex_X,
  y: pt_b6Hex_Y,
  sides: 6,
  radius: radius,
  fill: 'blue',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'b6Hex'
});

var b7Hex = new Konva.RegularPolygon({
  x: pt_b7Hex_X,
  y: pt_b7Hex_Y,
  sides: 6,
  radius: radius,
  fill: 'blue',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'b7Hex'
});

var b8Hex = new Konva.RegularPolygon({
  x: pt_b8Hex_X,
  y: pt_b8Hex_Y,
  sides: 6,
  radius: radius,
  fill: 'blue',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'b8Hex'
});

