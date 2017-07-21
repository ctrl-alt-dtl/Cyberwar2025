/**
 * RED DOMAIN MAIN PATHS
 */

// TIER 4
var rBaseToR1Hex = new Konva.Line({
  points: [
    BASE_BOARD_WIDTH / 2.48,
    BASE_BOARD_HEIGHT / 1.126,
    BASE_BOARD_WIDTH / 2.74,
    BASE_BOARD_HEIGHT / 1.126
  ],
  stroke: 'red',
  strokeWidth: 2,
  lineCap: 'round',
  lineJoin: 'round'
});

var rBaseToR2Hex = new Konva.Line({
  //       XS    YS   XE   YE
  points: [
    BASE_BOARD_WIDTH / 1.68,
    BASE_BOARD_HEIGHT / 1.126,
    BASE_BOARD_WIDTH / 1.575,
    BASE_BOARD_HEIGHT / 1.126,
  ],
  stroke: 'red',
  strokeWidth: 2,
  lineCap: 'round',
  lineJoin: 'round'
});

// TO TIER 3
var r1HexToR3Hex = new Konva.Line({
  //       XS    YS   XE   YE
  points: [
    BASE_BOARD_WIDTH / 2.74,
    BASE_BOARD_HEIGHT / 1.126,
    BASE_BOARD_WIDTH / 2.434,
    BASE_BOARD_HEIGHT / 1.2775,
  ],
  stroke: 'red',
  strokeWidth: 2,
  lineCap: 'round',
  lineJoin: 'round'
});

var r2HexToR5Hex = new Konva.Line({
  //       XS    YS   XE   YE
  points: [
    BASE_BOARD_WIDTH / 1.575,
    BASE_BOARD_HEIGHT / 1.126,
    BASE_BOARD_WIDTH / 1.7,
    BASE_BOARD_HEIGHT / 1.2775,
  ],
  stroke: 'red',
  strokeWidth: 2,
  lineCap: 'round',
  lineJoin: 'round'
});

// TIER 3
var r3HexToR4Hex = new Konva.Line({
  //       XS    YS   XE   YE
  points: [
    BASE_BOARD_WIDTH / 2.434,
    BASE_BOARD_HEIGHT / 1.2775,
    BASE_BOARD_WIDTH / 2,
    BASE_BOARD_HEIGHT / 1.2775,
  ],
  stroke: 'red',
  strokeWidth: 2,
  lineCap: 'round',
  lineJoin: 'round'
});

var r5HexToR4Hex = new Konva.Line({
  //       XS    YS   XE   YE
  points: [
    BASE_BOARD_WIDTH / 1.7,
    BASE_BOARD_HEIGHT / 1.2775,
    BASE_BOARD_WIDTH / 2,
    BASE_BOARD_HEIGHT / 1.2775,
  ],
  stroke: 'red',
  strokeWidth: 2,
  lineCap: 'round',
  lineJoin: 'round'
});

// TO TIER 2
var r4HexToR7Hex = new Konva.Line({
  //       XS    YS   XE   YE
  points: [
    BASE_BOARD_WIDTH / 2,
    BASE_BOARD_HEIGHT / 1.2775,
    BASE_BOARD_WIDTH / 1.835,
    BASE_BOARD_HEIGHT / 1.47,
  ],
  stroke: 'red',
  strokeWidth: 2,
  lineCap: 'round',
  lineJoin: 'round'
});

var r5HexToR7Hex = new Konva.Line({
  //       XS    YS   XE   YE
  points: [
    BASE_BOARD_WIDTH / 1.7,
    BASE_BOARD_HEIGHT / 1.2775,
    BASE_BOARD_WIDTH / 1.835,
    BASE_BOARD_HEIGHT / 1.47,
  ],
  stroke: 'red',
  strokeWidth: 2,
  lineCap: 'round',
  lineJoin: 'round'
});

var r4HexToR6Hex = new Konva.Line({
  //       XS    YS   XE   YE
  points: [
    BASE_BOARD_WIDTH / 2,
    BASE_BOARD_HEIGHT / 1.2775,
    BASE_BOARD_WIDTH / 2.2,
    BASE_BOARD_HEIGHT / 1.47,
  ],
  stroke: 'red',
  strokeWidth: 2,
  lineCap: 'round',
  lineJoin: 'round'
});

var r3HexToR6Hex = new Konva.Line({
  //       XS    YS   XE   YE
  points: [
    BASE_BOARD_WIDTH / 2.434,
    BASE_BOARD_HEIGHT / 1.2775,
    BASE_BOARD_WIDTH / 2.2,
    BASE_BOARD_HEIGHT / 1.47,
  ],
  stroke: 'red',
  strokeWidth: 2,
  lineCap: 'round',
  lineJoin: 'round'
});

// TIER 2
var r6HexToR7Hex = new Konva.Line({
  //       XS    YS   XE   YE
  points: [
    BASE_BOARD_WIDTH / 2.2,
    BASE_BOARD_HEIGHT / 1.47,
    BASE_BOARD_WIDTH / 1.835,
    BASE_BOARD_HEIGHT / 1.47,
  ],
  stroke: 'red',
  strokeWidth: 2,
  lineCap: 'round',
  lineJoin: 'round'
});

// TO TIER 1
var r6HexToR8Hex = new Konva.Line({
  //       XS    YS   XE   YE
  points: [
    BASE_BOARD_WIDTH / 2.2,
    BASE_BOARD_HEIGHT / 1.47,
    BASE_BOARD_WIDTH / 2,
    BASE_BOARD_HEIGHT / 1.735,
  ],
  stroke: 'red',
  strokeWidth: 2,
  lineCap: 'round',
  lineJoin: 'round'
});

var r7HexToR8Hex = new Konva.Line({
  //       XS    YS   XE   YE
  points: [
    BASE_BOARD_WIDTH / 1.835,
    BASE_BOARD_HEIGHT / 1.47,
    BASE_BOARD_WIDTH / 2,
    BASE_BOARD_HEIGHT / 1.735,
  ],
  stroke: 'red',
  strokeWidth: 2,
  lineCap: 'round',
  lineJoin: 'round'
});