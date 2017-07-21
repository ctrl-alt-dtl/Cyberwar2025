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
    pt_oBase1Hex_X,       // X1
    pt_oBase1Hex_Y,      // Y1
    point_x / 1.44,        // X2
    point_y / 1.28,      // Y2
    point_x / 1.28,       // X3
    point_y / 1.715,       // Y3
    pt_oBase2Hex_X,       // X4
    pt_oBase2Hex_Y,       // Y4
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
  x: pt_o1Hex_X,
  y: pt_o1Hex_Y,
  sides: 6,
  radius: radius,
  fill: 'orange',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'o1Hex'
});

var o2Hex = new Konva.RegularPolygon({
  x: pt_o2Hex_X,
  y: pt_o2Hex_Y,
  sides: 6,
  radius: radius,
  fill: 'orange',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'o2Hex'
});

var o3Hex = new Konva.RegularPolygon({
  x: pt_o3Hex_X,
  y: pt_o3Hex_Y,
  sides: 6,
  radius: radius,
  fill: 'orange',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'o3Hex'
});

var o4Hex = new Konva.RegularPolygon({
  x: pt_o4Hex_X,
  y: pt_o4Hex_Y,
  sides: 6,
  radius: radius,
  fill: 'orange',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'o4Hex'
});

var o5Hex = new Konva.RegularPolygon({
  x: pt_o5Hex_X,
  y: pt_o5Hex_Y,
  sides: 6,
  radius: radius,
  fill: 'orange',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'o5Hex'
});

var o6Hex = new Konva.RegularPolygon({
  x: pt_o6Hex_X,
  y: pt_o6Hex_Y,
  sides: 6,
  radius: radius,
  fill: 'orange',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'o6Hex'
});

var o7Hex = new Konva.RegularPolygon({
  x: pt_o7Hex_X,
  y: pt_o7Hex_Y,
  sides: 6,
  radius: radius,
  fill: 'orange',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'o7Hex'
});

var o8Hex = new Konva.RegularPolygon({
  x: pt_o8Hex_X,
  y: pt_o8Hex_Y,
  sides: 6,
  radius: radius,
  fill: 'orange',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'o8Hex'
});

