/**
 * YELLOW DOMAIN
 */

// These are in the konvaConfigSettings.js file

// var point_x = BASE_BOARD_WIDTH;
// var point_y = BASE_BOARD_HEIGHT;

// var radius = BASE_BOARD_WIDTH / 55;

// var yellowColor = '#F7E500'; // This is in the konvaConfigSettings

// Yellow Base Outline.
var yBase = new Konva.Line({
  points: [
    pt_yBase1Hex_X,        // X1
    pt_yBase1Hex_Y,        // Y1
    point_x / 1.28,       // X2
    point_y / 2.4,        // Y2
    point_x / 1.44,      // X3
    point_y / 4.647,      // Y3
    pt_yBase2Hex_X,       // X4
    pt_yBase2Hex_Y,      // Y4
    point_x / 1.387,      // X5
    point_y / 5.15,        // Y5
    point_x / 1.237,       // X6
    point_y / 2.53,       // Y6
  ],
  fill: yellowColor,
  stroke: 'black',
  strokeWidth: 2,
  closed: true
});

var y1Hex = new Konva.RegularPolygon({
  x: pt_y1Hex_X,
  y: pt_y1Hex_Y,
  sides: 6,
  radius: radius,
  fill: yellowColor,
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'y1Hex'
});

var y2Hex = new Konva.RegularPolygon({
  x: pt_y2Hex_X,
  y: pt_y2Hex_Y,
  sides: 6,
  radius: radius,
  fill: yellowColor,
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'y2Hex'
});

var y3Hex = new Konva.RegularPolygon({
  x: pt_y3Hex_X,
  y: pt_y3Hex_Y,
  sides: 6,
  radius: radius,
  fill: yellowColor,
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'y3Hex'

});

var y4Hex = new Konva.RegularPolygon({
  x: pt_y4Hex_X,
  y: pt_y4Hex_Y,
  sides: 6,
  radius: radius,
  fill: yellowColor,
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'y4Hex'
});

var y5Hex = new Konva.RegularPolygon({
  x: pt_y5Hex_X,
  y: pt_y5Hex_Y,
  sides: 6,
  radius: radius,
  fill: yellowColor,
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'y5Hex'
});

var y6Hex = new Konva.RegularPolygon({
  x: pt_y6Hex_X,
  y: pt_y6Hex_Y,
  sides: 6,
  radius: radius,
  fill: yellowColor,
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'y6Hex'
});

var y7Hex = new Konva.RegularPolygon({
  x: pt_y7Hex_X,
  y: pt_y7Hex_Y,
  sides: 6,
  radius: radius,
  fill: yellowColor,
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'y7Hex'
});

var y8Hex = new Konva.RegularPolygon({
  x: pt_y8Hex_X,
  y: pt_y8Hex_Y,
  sides: 6,
  radius: radius,
  fill: yellowColor,
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'y8Hex'
});
