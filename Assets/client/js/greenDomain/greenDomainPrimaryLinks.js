/**
 * GREEN DOMAIN MAIN PATHS
 * Requires:
 *    ../domainLibs/konvaConfigSettings.js
 *    ../domainLibs/serverPointCoordinates.js
 */

// TIER 4
var gBaseToG1Hex = new Konva.Line({
  points: [
    pt_gBase1Hex_X,
    pt_gBase1Hex_Y,
    pt_g1Hex_X,
    pt_g1Hex_Y
  ],
  stroke: 'green',
  strokeWidth: 2,
  lineCap: 'round',
  lineJoin: 'round',
  visible: lineVisible,
});

var gBaseToG2Hex = new Konva.Line({
  //       XS    YS   XE   YE
  points: [
    pt_gBase2Hex_X,
    pt_gBase2Hex_Y,
    pt_g2Hex_X,
    pt_g2Hex_Y
  ],
  stroke: 'green',
  strokeWidth: 2,
  lineCap: 'round',
  lineJoin: 'round',
  visible: lineVisible,
});

// TO TIER 3
var g1HexToG3Hex = new Konva.Line({
  //       XS    YS   XE   YE
  points: [
    pt_g1Hex_X,
    pt_g1Hex_Y,
    pt_g3Hex_X,
    pt_g3Hex_Y
  ],
  stroke: 'green',
  strokeWidth: 2,
  lineCap: 'round',
  lineJoin: 'round',
  visible: lineVisible,
});

var g2HexToG5Hex = new Konva.Line({
  //       XS    YS   XE   YE
  points: [
    pt_g2Hex_X,
    pt_g2Hex_Y,
    pt_g5Hex_X,
    pt_g5Hex_Y
  ],
  stroke: 'green',
  strokeWidth: 2,
  lineCap: 'round',
  lineJoin: 'round',
  visible: lineVisible,
});

// TIER 3
var g3HexToG4Hex = new Konva.Line({
  //       XS    YS   XE   YE
  points: [
    pt_g3Hex_X,
    pt_g3Hex_Y,
    pt_g4Hex_X,
    pt_g4Hex_Y
  ],
  stroke: 'green',
  strokeWidth: 2,
  lineCap: 'round',
  lineJoin: 'round',
  visible: lineVisible,
});

var g5HexToG4Hex = new Konva.Line({
  //       XS    YS   XE   YE
  points: [
    pt_g5Hex_X,
    pt_g5Hex_Y,
    pt_g4Hex_X,
    pt_g4Hex_Y
  ],
  stroke: 'green',
  strokeWidth: 2,
  lineCap: 'round',
  lineJoin: 'round',
  visible: lineVisible,
});

// TO TIER 2
var g4HexToG7Hex = new Konva.Line({
  //       XS    YS   XE   YE
  points: [
    pt_g4Hex_X,
    pt_g4Hex_Y,
    pt_g7Hex_X,
    pt_g7Hex_Y
  ],
  stroke: 'green',
  strokeWidth: 2,
  lineCap: 'round',
  lineJoin: 'round',
  visible: lineVisible,
});

var g5HexToG7Hex = new Konva.Line({
  //       XS    YS   XE   YE
  points: [
    pt_g5Hex_X,
    pt_g5Hex_Y,
    pt_g7Hex_X,
    pt_g7Hex_Y
  ],
  stroke: 'green',
  strokeWidth: 2,
  lineCap: 'round',
  lineJoin: 'round',
  visible: lineVisible,
});

var g4HexToG6Hex = new Konva.Line({
  //       XS    YS   XE   YE
  points: [
    pt_g4Hex_X,
    pt_g4Hex_Y,
    pt_g6Hex_X,
    pt_g6Hex_Y
  ],
  stroke: 'green',
  strokeWidth: 2,
  lineCap: 'round',
  lineJoin: 'round',
  visible: lineVisible,
});

var g3HexToG6Hex = new Konva.Line({
  //       XS    YS   XE   YE
  points: [
    pt_g3Hex_X,
    pt_g3Hex_Y,
    pt_g6Hex_X,
    pt_g6Hex_Y
  ],
  stroke: 'green',
  strokeWidth: 2,
  lineCap: 'round',
  lineJoin: 'round',
  visible: lineVisible,
});

// TIER 2
var g6HexToG7Hex = new Konva.Line({
  //       XS    YS   XE   YE
  points: [
    pt_g6Hex_X,
    pt_g6Hex_Y,
    pt_g7Hex_X,
    pt_g7Hex_Y
  ],
  stroke: 'green',
  strokeWidth: 2,
  lineCap: 'round',
  lineJoin: 'round',
  visible: lineVisible,
});

// TO TIER 1
var g6HexToG8Hex = new Konva.Line({
  //       XS    YS   XE   YE
  points: [
    pt_g6Hex_X,
    pt_g6Hex_Y,
    pt_g8Hex_X,
    pt_g8Hex_Y
  ],
  stroke: 'green',
  strokeWidth: 2,
  lineCap: 'round',
  lineJoin: 'round',
  visible: lineVisible,
});

var g7HexToG8Hex = new Konva.Line({
  //       XS    YS   XE   YE
  points: [
    pt_g7Hex_X,
    pt_g7Hex_Y,
    pt_g8Hex_X,
    pt_g8Hex_Y
  ],
  stroke: 'green',
  strokeWidth: 2,
  lineCap: 'round',
  lineJoin: 'round',
  visible: lineVisible,
});