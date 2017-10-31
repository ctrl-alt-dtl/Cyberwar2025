/**
 * RED DOMAIN
 * Requires:
 *    ../domainLibs/konvaConfigSettings.js
 *    ../domainLibs/serverPointCoordinates.js
 */
// Red Base Outline.
var rBase = new Konva.Line({
  points: [
    konvaHexPositions[Color.RED][0].x1, // X1
    konvaHexPositions[Color.RED][0].y1, // Y1
    point_x / 2.42,                     // X2
    point_y / 1.154,                    // Y2
    point_x / 1.705,                    // X3
    point_y / 1.154,                    // Y3
    konvaHexPositions[Color.RED][0].x2, // X4
    konvaHexPositions[Color.RED][0].y2, // Y4
    point_x / 1.705,                    // X5
    point_y / 1.1,                      // Y5
    point_x / 2.42,                     // X6
    point_y / 1.1                       // Y6
  ],
  fill: 'red',
  stroke: 'black',
  strokeWidth: 2,
  closed: true,
  id: 'rBase'
});
konvaHexes[Color.RED][0] = rBase;

var r1Hex = new Konva.RegularPolygon({
  x: konvaHexPositions[Color.RED][1].x,
  y: konvaHexPositions[Color.RED][1].y,
  sides: 6,
  radius: radius,
  fill: 'red',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'r1Hex'
});
konvaHexes[Color.RED][1] = r1Hex;

var r2Hex = new Konva.RegularPolygon({
  x: konvaHexPositions[Color.RED][2].x,
  y: konvaHexPositions[Color.RED][2].y,
  sides: 6,
  radius: radius,
  fill: 'red',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'r2Hex'
});
konvaHexes[Color.RED][2] = r2Hex;

var r3Hex = new Konva.RegularPolygon({
  x: konvaHexPositions[Color.RED][3].x,
  y: konvaHexPositions[Color.RED][3].y,
  sides: 6,
  radius: radius,
  fill: 'red',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'r3Hex'

});
konvaHexes[Color.RED][3] = r3Hex;

var r4Hex = new Konva.RegularPolygon({
  x: konvaHexPositions[Color.RED][4].x,
  y: konvaHexPositions[Color.RED][4].y,
  sides: 6,
  radius: radius,
  fill: 'red',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'r4Hex'
});
konvaHexes[Color.RED][4] = r4Hex;

var r5Hex = new Konva.RegularPolygon({
  x: konvaHexPositions[Color.RED][5].x,
  y: konvaHexPositions[Color.RED][5].y,
  sides: 6,
  radius: radius,
  fill: 'red',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'r5Hex'
});
konvaHexes[Color.RED][5] = r5Hex;

var r6Hex = new Konva.RegularPolygon({
  x: konvaHexPositions[Color.RED][6].x,
  y: konvaHexPositions[Color.RED][6].y,
  sides: 6,
  radius: radius,
  fill: 'red',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'r6Hex'
});
konvaHexes[Color.RED][6] = r6Hex;

var r7Hex = new Konva.RegularPolygon({
  x: konvaHexPositions[Color.RED][7].x,
  y: konvaHexPositions[Color.RED][7].y,
  sides: 6,
  radius: radius,
  fill: 'red',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'r7Hex'
});
konvaHexes[Color.RED][7] = r7Hex;

var r8Hex = new Konva.RegularPolygon({
  x: konvaHexPositions[Color.RED][8].x,
  y: konvaHexPositions[Color.RED][8].y,
  sides: 6,
  radius: radius,
  fill: 'red',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'r8Hex'
});
konvaHexes[Color.RED][8] = r8Hex;
