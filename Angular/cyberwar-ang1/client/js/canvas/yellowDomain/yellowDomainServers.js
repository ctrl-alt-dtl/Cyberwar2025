/**
 * YELLOW DOMAIN
 * Requires:
 *    ../domainLibs/konvaConfigSettings.js
 *    ../domainLibs/serverPointCoordinates.js
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
  x: konvaHexPositions[Color.YELLOW][1].x,
  y: konvaHexPositions[Color.YELLOW][1].y,
  sides: 6,
  radius: radius,
  fill: yellowColor,
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'y1Hex'
});
konvaHexes[Color.YELLOW][1] = y1Hex;

var y2Hex = new Konva.RegularPolygon({
  x: konvaHexPositions[Color.YELLOW][2].x,
  y: konvaHexPositions[Color.YELLOW][2].y,
  sides: 6,
  radius: radius,
  fill: yellowColor,
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'y2Hex'
});
konvaHexes[Color.YELLOW][2] = y2Hex;

var y3Hex = new Konva.RegularPolygon({
  x: konvaHexPositions[Color.YELLOW][3].x,
  y: konvaHexPositions[Color.YELLOW][3].y,
  sides: 6,
  radius: radius,
  fill: yellowColor,
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'y3Hex'
});
konvaHexes[Color.YELLOW][3] = y3Hex;

var y4Hex = new Konva.RegularPolygon({
  x: konvaHexPositions[Color.YELLOW][4].x,
  y: konvaHexPositions[Color.YELLOW][4].y,
  sides: 6,
  radius: radius,
  fill: yellowColor,
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'y4Hex'
});
konvaHexes[Color.YELLOW][4] = y4Hex;

var y5Hex = new Konva.RegularPolygon({
  x: konvaHexPositions[Color.YELLOW][5].x,
  y: konvaHexPositions[Color.YELLOW][5].y,
  sides: 6,
  radius: radius,
  fill: yellowColor,
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'y5Hex'
});
konvaHexes[Color.YELLOW][5] = y5Hex;

var y6Hex = new Konva.RegularPolygon({
  x: konvaHexPositions[Color.YELLOW][6].x,
  y: konvaHexPositions[Color.YELLOW][6].y,
  sides: 6,
  radius: radius,
  fill: yellowColor,
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'y6Hex'
});
konvaHexes[Color.YELLOW][6] = y6Hex;

var y7Hex = new Konva.RegularPolygon({
  x: konvaHexPositions[Color.YELLOW][7].x,
  y: konvaHexPositions[Color.YELLOW][7].y,
  sides: 6,
  radius: radius,
  fill: yellowColor,
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'y7Hex'
});
konvaHexes[Color.YELLOW][7] = y7Hex;

var y8Hex = new Konva.RegularPolygon({
  x: konvaHexPositions[Color.YELLOW][8].x,
  y: konvaHexPositions[Color.YELLOW][8].y,
  sides: 6,
  radius: radius,
  fill: yellowColor,
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'y8Hex'
});
konvaHexes[Color.YELLOW][8] = y8Hex;
