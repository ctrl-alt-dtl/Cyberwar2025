
/**
 * RED DOMAIN MAIN PATHS
 */

// TIER 4
var rBaseToR1Hex = new Konva.Line({
  //       XS    YS   XE   YE
  points: [580, 735, 555, 735],
  stroke: 'red',
  strokeWidth: 2,
  lineCap: 'round',
  lineJoin: 'round'
});

var rBaseToR2Hex = new Konva.Line({
  //       XS    YS   XE   YE
  points: [805, 735, 851, 735],
  stroke: 'red',
  strokeWidth: 2,
  lineCap: 'round',
  lineJoin: 'round'
});

// TO TIER 3
var r1HexToR3Hex = new Konva.Line({
  //       XS    YS   XE   YE
  points: [544, 720, 577, 660],
  stroke: 'red',
  strokeWidth: 2,
  lineCap: 'round',
  lineJoin: 'round'
});

var r2HexToR5Hex = new Konva.Line({
  //       XS    YS   XE   YE
  points: [851, 735, 797, 642],
  stroke: 'red',
  strokeWidth: 2,
  lineCap: 'round',
  lineJoin: 'round'
});

// TIER 3
var r3HexToR4Hex = new Konva.Line({
  //       XS    YS   XE   YE
  points: [588, 642, 693, 642],
  stroke: 'red',
  strokeWidth: 2,
  lineCap: 'round',
  lineJoin: 'round'
});

var r5HexToR4Hex = new Konva.Line({
  //       XS    YS   XE   YE
  points: [797, 642, 693, 642],
  stroke: 'red',
  strokeWidth: 2,
  lineCap: 'round',
  lineJoin: 'round'
});

// TO TIER 2
var r4HexToR7Hex = new Konva.Line({
  //       XS    YS   XE   YE
  points: [693, 642, 745, 552],
  stroke: 'red',
  strokeWidth: 2,
  lineCap: 'round',
  lineJoin: 'round'
});

var r5HexToR7Hex = new Konva.Line({
  //       XS    YS   XE   YE
  points: [797, 642, 745, 552],
  stroke: 'red',
  strokeWidth: 2,
  lineCap: 'round',
  lineJoin: 'round'
});

var r4HexToR6Hex = new Konva.Line({
  //       XS    YS   XE   YE
  points: [693, 642, 640, 552],
  stroke: 'red',
  strokeWidth: 2,
  lineCap: 'round',
  lineJoin: 'round'
});

var r3HexToR6Hex = new Konva.Line({
  //       XS    YS   XE   YE
  points: [588, 642, 640, 552],
  stroke: 'red',
  strokeWidth: 2,
  lineCap: 'round',
  lineJoin: 'round'
});

// TIER 2
var r6HexToR7Hex = new Konva.Line({
  //       XS    YS   XE   YE
  points: [640, 552, 745, 552],
  stroke: 'red',
  strokeWidth: 2,
  lineCap: 'round',
  lineJoin: 'round'
});

// TO TIER 1
var r6HexToR8Hex = new Konva.Line({
  //       XS    YS   XE   YE
  points: [640, 552, 693, 461],
  stroke: 'red',
  strokeWidth: 2,
  lineCap: 'round',
  lineJoin: 'round'
});

var r7HexToR8Hex = new Konva.Line({
  //       XS    YS   XE   YE
  points: [745, 552, 693, 461],
  stroke: 'red',
  strokeWidth: 2,
  lineCap: 'round',
  lineJoin: 'round'
});