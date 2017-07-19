
/**
 * RED DOMAIN
 */
// Red Base Outline.
var rBase = new Konva.Line({
  //        X1   Y1   X2  Y2   X3    Y3   X4   Y4   X5   Y5   X6   Y6
  points: [580, 735, 590, 717, 795, 717, 805, 735, 795, 753, 590, 753],
  stroke: 'red',
  strokewidth: 2,
  closed: true
});

var r1Hex = new Konva.RegularPolygon({
  x: 534,
  y: 735,
  sides: 6,
  radius: 21,
  fill: 'red',
  stroke: 'red',
  strokewidth: 2,
  rotation: 90
});

var r2Hex = new Konva.RegularPolygon({
  x: 851,
  y: 735,
  sides: 6,
  radius: 21,
  fill: 'red',
  stroke: 'red',
  strokewidth: 2,
  rotation: 90
});

var r3Hex = new Konva.RegularPolygon({
  x: 588,
  y: 642,
  sides: 6,
  radius: 21,
  fill: 'red',
  stroke: 'red',
  strokewidth: 2,
  rotation: 90,
  visible: true,
  listening: true,
  id: r3Hex,

});

var r4Hex = new Konva.RegularPolygon({
  x: 693,
  y: 642,
  sides: 6,
  radius: 21,
  fill: 'red',
  stroke: 'red',
  strokewidth: 2,
  rotation: 90
});

var r5Hex = new Konva.RegularPolygon({
  x: 797,
  y: 642,
  sides: 6,
  radius: 21,
  fill: 'red',
  stroke: 'red',
  strokewidth: 2,
  rotation: 90
});

var r6Hex = new Konva.RegularPolygon({
  x: 640,
  y: 552,
  sides: 6,
  radius: 21,
  fill: 'red',
  stroke: 'red',
  strokewidth: 2,
  rotation: 90
});

var r7Hex = new Konva.RegularPolygon({
  x: 745,
  y: 552,
  sides: 6,
  radius: 21,
  fill: 'red',
  stroke: 'red',
  strokewidth: 2,
  rotation: 90
});

var r8Hex = new Konva.RegularPolygon({
  x: 693,
  y: 461,
  sides: 6,
  radius: 21,
  fill: 'red',
  stroke: 'red',
  strokewidth: 2,
  rotation: 90
});
