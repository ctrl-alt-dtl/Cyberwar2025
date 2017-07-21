/**
 * GREEN DOMAIN
 */

var point_x = BASE_BOARD_WIDTH;
var point_y = BASE_BOARD_HEIGHT;

var radius = BASE_BOARD_WIDTH / 55;

// Green Base Outline
var gBase = new Konva.Line({
  points: [
    pt_gBase1Hex_X,       // X1
    pt_gBase1Hex_Y,      // Y1
    point_x / 1.705,       // X2
    point_y / 7.5,      // Y2
    point_x / 2.42,      // X3
    point_y / 7.5,      // Y3
    pt_gBase2Hex_X,       // X4
    pt_gBase2Hex_Y,      // Y4
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
  x: pt_g1Hex_X,
  y: pt_g1Hex_Y,
  sides: 6,
  radius: radius,
  fill: 'green',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'g1Hex'
});

var g2Hex = new Konva.RegularPolygon({
  x: pt_g2Hex_X,
  y: pt_g2Hex_Y,
  sides: 6,
  radius: radius,
  fill: 'green',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'g2Hex'
});

var g3Hex = new Konva.RegularPolygon({
  x: pt_g3Hex_X,
  y: pt_g3Hex_Y,
  sides: 6,
  radius: radius,
  fill: 'green',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'g3Hex'
});

var g4Hex = new Konva.RegularPolygon({
  x: pt_g4Hex_X,
  y: pt_g4Hex_Y,
  sides: 6,
  radius: radius,
  fill: 'green',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'g4Hex'
});

var g5Hex = new Konva.RegularPolygon({
  x: pt_g5Hex_X,
  y: pt_g5Hex_Y,
  sides: 6,
  radius: radius,
  fill: 'green',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'g5Hex'
});

var g6Hex = new Konva.RegularPolygon({
  x: pt_g6Hex_X,
  y: pt_g6Hex_Y,
  sides: 6,
  radius: radius,
  fill: 'green',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'g6Hex'
});

var g7Hex = new Konva.RegularPolygon({
  x: pt_g7Hex_X,
  y: pt_g7Hex_Y,
  sides: 6,
  radius: radius,
  fill: 'green',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'g7Hex'
});

var g8Hex = new Konva.RegularPolygon({
  x: pt_g8Hex_X,
  y: pt_g8Hex_Y,
  sides: 6,
  radius: radius,
  fill: 'green',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'g8Hex'
});

