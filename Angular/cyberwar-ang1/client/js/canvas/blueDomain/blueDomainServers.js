/**
 * BLUE DOMAIN
 * Requires:
 *    ../domainLibs/konvaConfigSettings.js
 *    ../domainLibs/serverPointCoordinates.js
 */
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
  fill: blueColor,
  stroke: 'black',
  strokeWidth: 2,
  closed: true
});

var b1Hex = new Konva.RegularPolygon({
  x: konvaHexPositions[Color.BLUE][1].x,
  y: konvaHexPositions[Color.BLUE][1].y,
  sides: 6,
  radius: radius,
  fill: blueColor,
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'b1Hex'
});
konvaHexes[Color.BLUE][1] = b1Hex;

var b2Hex = new Konva.RegularPolygon({
  x: konvaHexPositions[Color.BLUE][2].x,
  y: konvaHexPositions[Color.BLUE][2].y,
  sides: 6,
  radius: radius,
  fill: blueColor,
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'b2Hex'
});
konvaHexes[Color.BLUE][2] = b2Hex;

var b3Hex = new Konva.RegularPolygon({
  x: konvaHexPositions[Color.BLUE][3].x,
  y: konvaHexPositions[Color.BLUE][3].y,
  sides: 6,
  radius: radius,
  fill: blueColor,
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'b3Hex'
});
konvaHexes[Color.BLUE][3] = b3Hex;

var b4Hex = new Konva.RegularPolygon({
  x: konvaHexPositions[Color.BLUE][4].x,
  y: konvaHexPositions[Color.BLUE][4].y,
  sides: 6,
  radius: radius,
  fill: blueColor,
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'b4Hex'
});
konvaHexes[Color.BLUE][4] = b4Hex;

var b5Hex = new Konva.RegularPolygon({
  x: konvaHexPositions[Color.BLUE][5].x,
  y: konvaHexPositions[Color.BLUE][5].y,
  sides: 6,
  radius: radius,
  fill: blueColor,
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'b5Hex'
});
konvaHexes[Color.BLUE][5] = b5Hex;

var b6Hex = new Konva.RegularPolygon({
  x: konvaHexPositions[Color.BLUE][6].x,
  y: konvaHexPositions[Color.BLUE][6].y,
  sides: 6,
  radius: radius,
  fill: blueColor,
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'b6Hex'
});
konvaHexes[Color.BLUE][6] = b6Hex;

var b7Hex = new Konva.RegularPolygon({
  x: konvaHexPositions[Color.BLUE][7].x,
  y: konvaHexPositions[Color.BLUE][7].y,
  sides: 6,
  radius: radius,
  fill: blueColor,
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'b7Hex'
});
konvaHexes[Color.BLUE][7] = b7Hex;

var b8Hex = new Konva.RegularPolygon({
  x: konvaHexPositions[Color.BLUE][8].x,
  y: konvaHexPositions[Color.BLUE][8].y,
  sides: 6,
  radius: radius,
  fill: blueColor,
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'b8Hex'
});
konvaHexes[Color.BLUE][8] = b8Hex;
