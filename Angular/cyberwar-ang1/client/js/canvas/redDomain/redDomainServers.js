/**
 * RED DOMAIN
 * Requires:
 *    ../domainLibs/konvaConfigSettings.js
 *    ../domainLibs/serverPointCoordinates.js
 */
// Red Base Outline.
var rBase = new Konva.Line({
  points: [
    pt_rBase1Hex_X,       // X1
    pt_rBase1Hex_Y,      // Y1
    point_x / 2.42,       // X2
    point_y / 1.154,      // Y2
    point_x / 1.705,      // X3
    point_y / 1.154,      // Y3
    pt_rBase2Hex_X,       // X4
    pt_rBase2Hex_Y,      // Y4
    point_x / 1.705,      // X5
    point_y / 1.1,        // Y5
    point_x / 2.42,       // X6
    point_y / 1.1         // Y6
  ],
  fill: 'red',
  stroke: 'black',
  strokeWidth: 2,
  closed: true,
  id: 'rBase'
});

var r1Hex = new Konva.RegularPolygon({
  x: pt_r1Hex_X,
  y: pt_r1Hex_Y,
  sides: 6,
  radius: radius,
  fill: 'red',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'r1Hex'
});

var r2Hex = new Konva.RegularPolygon({
  x: pt_r2Hex_X,
  y: pt_r2Hex_Y,
  sides: 6,
  radius: radius,
  fill: 'red',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'r2Hex'
});

var r3Hex = new Konva.RegularPolygon({
  x: pt_r3Hex_X,
  y: pt_r3Hex_Y,
  sides: 6,
  radius: radius,
  fill: 'red',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'r3Hex'

});

var r4Hex = new Konva.RegularPolygon({
  x: pt_r4Hex_X,
  y: pt_r4Hex_Y,
  sides: 6,
  radius: radius,
  fill: 'red',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'r4Hex'
});

var r5Hex = new Konva.RegularPolygon({
  x: pt_r5Hex_X,
  y: pt_r5Hex_Y,
  sides: 6,
  radius: radius,
  fill: 'red',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'r5Hex'
});

var r6Hex = new Konva.RegularPolygon({
  x: pt_r6Hex_X,
  y: pt_r6Hex_Y,
  sides: 6,
  radius: radius,
  fill: 'red',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'r6Hex'
});

var r7Hex = new Konva.RegularPolygon({
  x: pt_r7Hex_X,
  y: pt_r7Hex_Y,
  sides: 6,
  radius: radius,
  fill: 'red',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'r7Hex'
});

var r8Hex = new Konva.RegularPolygon({
  x: pt_r8Hex_X,
  y: pt_r8Hex_Y,
  sides: 6,
  radius: radius,
  fill: 'red',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'r8Hex'
});


