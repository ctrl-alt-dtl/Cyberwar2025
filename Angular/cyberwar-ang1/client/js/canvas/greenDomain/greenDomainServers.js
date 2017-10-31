/**
 * GREEN DOMAIN
 * Requires:
 *    ../domainLibs/konvaConfigSettings.js
 *    ../domainLibs/serverPointCoordinates.js
 */
// Green Base Outline
var gBase = new Konva.Line({
  points: [
    konvaHexPositions[Color.GREEN][0].x1, // X1
    konvaHexPositions[Color.GREEN][0].y1, // Y1
    point_x / 1.705,                      // X2
    point_y / 7.5,                        // Y2
    point_x / 2.42,                       // X3
    point_y / 7.5,                        // Y3
    konvaHexPositions[Color.GREEN][0].x2, // X4
    konvaHexPositions[Color.GREEN][0].y2, // Y4
    point_x / 2.42,                       // X5
    point_y / 11,                         // Y5
    point_x / 1.705,                      // X6
    point_y / 11                          // Y6
  ],
  fill: 'green',
  stroke: 'black',
  strokeWidth: 2,
  closed: true
});
konvaHexes[Color.GREEN][0] = gBase;

var g1Hex = new Konva.RegularPolygon({
  x: konvaHexPositions[Color.GREEN][1].x,
  y: konvaHexPositions[Color.GREEN][1].y,
  sides: 6,
  radius: radius,
  fill: 'green',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'g1Hex'
});
konvaHexes[Color.GREEN][1] = g1Hex;

var g2Hex = new Konva.RegularPolygon({
  x: konvaHexPositions[Color.GREEN][2].x,
  y: konvaHexPositions[Color.GREEN][2].y,
  sides: 6,
  radius: radius,
  fill: 'green',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'g2Hex'
});
konvaHexes[Color.GREEN][2] = g2Hex;

var g3Hex = new Konva.RegularPolygon({
  x: konvaHexPositions[Color.GREEN][3].x,
  y: konvaHexPositions[Color.GREEN][3].y,
  sides: 6,
  radius: radius,
  fill: 'green',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'g3Hex'
});
konvaHexes[Color.GREEN][3] = g3Hex;

var g4Hex = new Konva.RegularPolygon({
  x: konvaHexPositions[Color.GREEN][4].x,
  y: konvaHexPositions[Color.GREEN][4].y,
  sides: 6,
  radius: radius,
  fill: 'green',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'g4Hex'
});
konvaHexes[Color.GREEN][4] = g4Hex;

var g5Hex = new Konva.RegularPolygon({
  x: konvaHexPositions[Color.GREEN][5].x,
  y: konvaHexPositions[Color.GREEN][5].y,
  sides: 6,
  radius: radius,
  fill: 'green',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'g5Hex'
});
konvaHexes[Color.GREEN][5] = g5Hex;

var g6Hex = new Konva.RegularPolygon({
  x: konvaHexPositions[Color.GREEN][6].x,
  y: konvaHexPositions[Color.GREEN][6].y,
  sides: 6,
  radius: radius,
  fill: 'green',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'g6Hex'
});
konvaHexes[Color.GREEN][6] = g6Hex;

var g7Hex = new Konva.RegularPolygon({
  x: konvaHexPositions[Color.GREEN][7].x,
  y: konvaHexPositions[Color.GREEN][7].y,
  sides: 6,
  radius: radius,
  fill: 'green',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'g7Hex'
});
konvaHexes[Color.GREEN][7] = g7Hex;

var g8Hex = new Konva.RegularPolygon({
  x: konvaHexPositions[Color.GREEN][8].x,
  y: konvaHexPositions[Color.GREEN][8].y,
  sides: 6,
  radius: radius,
  fill: 'green',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'g8Hex'
});
konvaHexes[Color.GREEN][8] = g8Hex;
