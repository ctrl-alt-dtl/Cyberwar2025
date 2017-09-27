/**
 * PURPLE DOMAIN
 * Requires:
 *    ../domainLibs/konvaConfigSettings.js
 *    ../domainLibs/serverPointCoordinates.js
 */
// Purple Base Outline
var pBase = new Konva.Line({
  points: [
    pt_pBase1Hex_X,       // X1
    pt_pBase1Hex_Y,      // Y1
    point_x / 4.6,        // X2
    point_y / 1.715,      // Y2
    point_x / 3.28,       // X3
    point_y / 1.28,       // Y3
    pt_pBase2Hex_X,       // X4
    pt_pBase2Hex_Y,       // Y4
    point_x / 3.595,        // X5
    point_y / 1.24,       // Y5
    point_x / 5.23,       // X6
    point_y / 1.652         // Y6
  ],
  fill: 'purple',
  stroke: 'black',
  strokeWidth: 2,
  closed: true
});

var p1Hex = new Konva.RegularPolygon({
  x: pt_p1Hex_X,
  y: pt_p1Hex_Y,
  sides: 6,
  radius: radius,
  fill: 'purple',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'p1Hex'
});

var p2Hex = new Konva.RegularPolygon({
  x: pt_p2Hex_X,
  y: pt_p2Hex_Y,
  sides: 6,
  radius: radius,
  fill: 'purple',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'p2Hex'
});

var p3Hex = new Konva.RegularPolygon({
  x: pt_p3Hex_X,
  y: pt_p3Hex_Y,
  sides: 6,
  radius: radius,
  fill: 'purple',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'p3Hex'
});

var p4Hex = new Konva.RegularPolygon({
  x: pt_p4Hex_X,
  y: pt_p4Hex_Y,
  sides: 6,
  radius: radius,
  fill: 'purple',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'p4Hex'
});

var p5Hex = new Konva.RegularPolygon({
  x: pt_p5Hex_X,
  y: pt_p5Hex_Y,
  sides: 6,
  radius: radius,
  fill: 'purple',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'p5Hex'
});

var p6Hex = new Konva.RegularPolygon({
  x: pt_p6Hex_X,
  y: pt_p6Hex_Y,
  sides: 6,
  radius: radius,
  fill: 'purple',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'p6Hex'
});

var p7Hex = new Konva.RegularPolygon({
  x: pt_p7Hex_X,
  y: pt_p7Hex_Y,
  sides: 6,
  radius: radius,
  fill: 'purple',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'p7Hex'
});

var p8Hex = new Konva.RegularPolygon({
  x: pt_p8Hex_X,
  y: pt_p8Hex_Y,
  sides: 6,
  radius: radius,
  fill: 'purple',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90,
  id: 'p8Hex'
});

