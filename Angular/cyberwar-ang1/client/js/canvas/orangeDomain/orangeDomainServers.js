/**
 * ORANGE DOMAIN
 */
/**
 * ORANGE DOMAIN
 * Requires:
 *    ../domainLibs/konvaConfigSettings.js
 *    ../domainLibs/serverPointCoordinates.js
 */
// Orange Base Outline
var oBase = new Konva.Line({
  points: [
    konvaHexPositions[Color.ORANGE][0].x1, // X1
    konvaHexPositions[Color.ORANGE][0].y1, // Y1
    point_x / 1.44,                        // X2
    point_y / 1.28,                        // Y2
    point_x / 1.28,                        // X3
    point_y / 1.715,                       // Y3
    konvaHexPositions[Color.ORANGE][0].x2, // X4
    konvaHexPositions[Color.ORANGE][0].y2, // Y4
    point_x / 1.237,                       // X5
    point_y / 1.652,                       // Y5
    point_x / 1.387,                       // X6
    point_y / 1.24                         // Y6
  ],
  fill: 'orange',
  stroke: 'black',
  strokeWidth: 2,
  closed: true
});
konvaHexes[Color.ORANGE][0] = oBase;

var o1Hex = new Konva.RegularPolygon({
  x: konvaHexPositions[Color.ORANGE][1].x,
  y: konvaHexPositions[Color.ORANGE][1].y,
  sides: 6,
  radius: radius,
  fill: 'orange',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'o1Hex'
});
konvaHexes[Color.ORANGE][1] = o1Hex;

var o2Hex = new Konva.RegularPolygon({
  x: konvaHexPositions[Color.ORANGE][2].x,
  y: konvaHexPositions[Color.ORANGE][2].y,
  sides: 6,
  radius: radius,
  fill: 'orange',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'o2Hex'
});
konvaHexes[Color.ORANGE][2] = o2Hex;

var o3Hex = new Konva.RegularPolygon({
  x: konvaHexPositions[Color.ORANGE][3].x,
  y: konvaHexPositions[Color.ORANGE][3].y,
  sides: 6,
  radius: radius,
  fill: 'orange',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'o3Hex'
});
konvaHexes[Color.ORANGE][3] = o3Hex;

var o4Hex = new Konva.RegularPolygon({
  x: konvaHexPositions[Color.ORANGE][4].x,
  y: konvaHexPositions[Color.ORANGE][4].y,
  sides: 6,
  radius: radius,
  fill: 'orange',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'o4Hex'
});
konvaHexes[Color.ORANGE][4] = o4Hex;

var o5Hex = new Konva.RegularPolygon({
  x: konvaHexPositions[Color.ORANGE][5].x,
  y: konvaHexPositions[Color.ORANGE][5].y,
  sides: 6,
  radius: radius,
  fill: 'orange',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'o5Hex'
});
konvaHexes[Color.ORANGE][5] = o5Hex;

var o6Hex = new Konva.RegularPolygon({
  x: konvaHexPositions[Color.ORANGE][6].x,
  y: konvaHexPositions[Color.ORANGE][6].y,
  sides: 6,
  radius: radius,
  fill: 'orange',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'o6Hex'
});
konvaHexes[Color.ORANGE][6] = o6Hex;

var o7Hex = new Konva.RegularPolygon({
  x: konvaHexPositions[Color.ORANGE][7].x,
  y: konvaHexPositions[Color.ORANGE][7].y,
  sides: 6,
  radius: radius,
  fill: 'orange',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'o7Hex'
});
konvaHexes[Color.ORANGE][7] = o7Hex;

var o8Hex = new Konva.RegularPolygon({
  x: konvaHexPositions[Color.ORANGE][8].x,
  y: konvaHexPositions[Color.ORANGE][8].y,
  sides: 6,
  radius: radius,
  fill: 'orange',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'o8Hex'
});
konvaHexes[Color.ORANGE][8] = o8Hex;
