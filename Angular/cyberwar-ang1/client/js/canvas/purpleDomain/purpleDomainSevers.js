/**
 * PURPLE DOMAIN
 * Requires:
 *    ../domainLibs/konvaConfigSettings.js
 *    ../domainLibs/serverPointCoordinates.js
 */
// Purple Base Outline
var pBase = new Konva.Line({
  points: [
    konvaHexPositions[Color.PURPLE][0].x1, // X1
    konvaHexPositions[Color.PURPLE][0].y1, // Y1
    point_x / 4.6,                         // X2
    point_y / 1.715,                       // Y2
    point_x / 3.28,                        // X3
    point_y / 1.28,                        // Y3
    konvaHexPositions[Color.PURPLE][0].x2, // X4
    konvaHexPositions[Color.PURPLE][0].y2, // Y4
    point_x / 3.595,                       // X5
    point_y / 1.24,                        // Y5
    point_x / 5.23,                        // X6
    point_y / 1.652                        // Y6
  ],
  fill: 'purple',
  stroke: 'black',
  strokeWidth: 2,
  closed: true
});
konvaHexes[Color.PURPLE][0] = pBase;

var p1Hex = new Konva.RegularPolygon({
  x: konvaHexPositions[Color.PURPLE][1].x,
  y: konvaHexPositions[Color.PURPLE][1].y,
  sides: 6,
  radius: radius,
  fill: 'purple',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'p1Hex'
});
konvaHexes[Color.PURPLE][1] = p1Hex;

var p2Hex = new Konva.RegularPolygon({
  x: konvaHexPositions[Color.PURPLE][2].x,
  y: konvaHexPositions[Color.PURPLE][2].y,
  sides: 6,
  radius: radius,
  fill: 'purple',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'p2Hex'
});
konvaHexes[Color.PURPLE][2] = p2Hex;

var p3Hex = new Konva.RegularPolygon({
  x: konvaHexPositions[Color.PURPLE][3].x,
  y: konvaHexPositions[Color.PURPLE][3].y,
  sides: 6,
  radius: radius,
  fill: 'purple',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'p3Hex'
});
konvaHexes[Color.PURPLE][3] = p3Hex;

var p4Hex = new Konva.RegularPolygon({
  x: konvaHexPositions[Color.PURPLE][4].x,
  y: konvaHexPositions[Color.PURPLE][4].y,
  sides: 6,
  radius: radius,
  fill: 'purple',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'p4Hex'
});
konvaHexes[Color.PURPLE][4] = p4Hex;

var p5Hex = new Konva.RegularPolygon({
  x: konvaHexPositions[Color.PURPLE][5].x,
  y: konvaHexPositions[Color.PURPLE][5].y,
  sides: 6,
  radius: radius,
  fill: 'purple',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'p5Hex'
});
konvaHexes[Color.PURPLE][5] = p5Hex;

var p6Hex = new Konva.RegularPolygon({
  x: konvaHexPositions[Color.PURPLE][6].x,
  y: konvaHexPositions[Color.PURPLE][6].y,
  sides: 6,
  radius: radius,
  fill: 'purple',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'p6Hex'
});
konvaHexes[Color.PURPLE][6] = p6Hex;

var p7Hex = new Konva.RegularPolygon({
  x: konvaHexPositions[Color.PURPLE][7].x,
  y: konvaHexPositions[Color.PURPLE][7].y,
  sides: 6,
  radius: radius,
  fill: 'purple',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'p7Hex'
});
konvaHexes[Color.PURPLE][7] = p7Hex;

var p8Hex = new Konva.RegularPolygon({
  x: konvaHexPositions[Color.PURPLE][8].x,
  y: konvaHexPositions[Color.PURPLE][8].y,
  sides: 6,
  radius: radius,
  fill: 'purple',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'p8Hex'
});
konvaHexes[Color.PURPLE][8] = p8Hex;
