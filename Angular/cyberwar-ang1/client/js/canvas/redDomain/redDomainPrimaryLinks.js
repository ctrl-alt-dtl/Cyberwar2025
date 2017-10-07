/**
 * RED DOMAIN MAIN PATHS
 * Requires:
 *    ../domainLibs/konvaConfigSettings.js
 *    ../domainLibs/serverPointCoordinates.js
 */

// TIER 4
var rBaseToR1Hex = new Konva.Line({
  points: [
    pt_rBase1Hex_X,
    pt_rBase1Hex_Y,
    pt_r1Hex_X,
    pt_r1Hex_Y
  ],
  stroke: 'red',
  strokeWidth: mainLinksStroke,
  lineCap: 'round',
  lineJoin: 'round',
  visible: lineVisible,
});

var rBaseToR2Hex = new Konva.Line({
  //       XS    YS   XE   YE
  points: [
    pt_rBase2Hex_X,
    pt_rBase2Hex_Y,
    pt_r2Hex_X,
    pt_r2Hex_Y
  ],
  stroke: 'red',
  strokeWidth: mainLinksStroke,
  lineCap: 'round',
  lineJoin: 'round',
  visible: lineVisible,
});

// TO TIER 3
var r1HexToR3Hex = new Konva.Line({
  //       XS    YS   XE   YE
  points: [
    pt_r1Hex_X,
    pt_r1Hex_Y,
    pt_r3Hex_X,
    pt_r3Hex_Y
  ],
  stroke: 'red',
  strokeWidth: mainLinksStroke,
  lineCap: 'round',
  lineJoin: 'round',
  visible: lineVisible,
});

var r2HexToR5Hex = new Konva.Line({
  //       XS    YS   XE   YE
  points: [
    pt_r2Hex_X,
    pt_r2Hex_Y,
    pt_r5Hex_X,
    pt_r5Hex_Y
  ],
  stroke: 'red',
  strokeWidth: mainLinksStroke,
  lineCap: 'round',
  lineJoin: 'round',
  visible: lineVisible,
});

// TIER 3
var r3HexToR4Hex = new Konva.Line({
  //       XS    YS   XE   YE
  points: [
    pt_r3Hex_X,
    pt_r3Hex_Y,
    pt_r4Hex_X,
    pt_r4Hex_Y
  ],
  stroke: 'red',
  strokeWidth: mainLinksStroke,
  lineCap: 'round',
  lineJoin: 'round',
  visible: lineVisible,
});

var r5HexToR4Hex = new Konva.Line({
  //       XS    YS   XE   YE
  points: [
    pt_r5Hex_X,
    pt_r5Hex_Y,
    pt_r4Hex_X,
    pt_r4Hex_Y
  ],
  stroke: 'red',
  strokeWidth: mainLinksStroke,
  lineCap: 'round',
  lineJoin: 'round',
  visible: lineVisible,
});

// TO TIER 2
var r4HexToR7Hex = new Konva.Line({
  //       XS    YS   XE   YE
  points: [
    pt_r4Hex_X,
    pt_r4Hex_Y,
    pt_r7Hex_X,
    pt_r7Hex_Y
  ],
  stroke: 'red',
  strokeWidth: mainLinksStroke,
  lineCap: 'round',
  lineJoin: 'round',
  visible: lineVisible,
});

var r5HexToR7Hex = new Konva.Line({
  //       XS    YS   XE   YE
  points: [
    pt_r5Hex_X,
    pt_r5Hex_Y,
    pt_r7Hex_X,
    pt_r7Hex_Y
  ],
  stroke: 'red',
  strokeWidth: mainLinksStroke,
  lineCap: 'round',
  lineJoin: 'round',
  visible: lineVisible,
});

var r4HexToR6Hex = new Konva.Line({
  //       XS    YS   XE   YE
  points: [
    pt_r4Hex_X,
    pt_r4Hex_Y,
    pt_r6Hex_X,
    pt_r6Hex_Y
  ],
  stroke: 'red',
  strokeWidth: mainLinksStroke,
  lineCap: 'round',
  lineJoin: 'round',
  visible: lineVisible,
});

var r3HexToR6Hex = new Konva.Line({
  //       XS    YS   XE   YE
  points: [
    pt_r3Hex_X,
    pt_r3Hex_Y,
    pt_r6Hex_X,
    pt_r6Hex_Y
  ],
  stroke: 'red',
  strokeWidth: mainLinksStroke,
  lineCap: 'round',
  lineJoin: 'round',
  visible: lineVisible,
});

// TIER 2
var r6HexToR7Hex = new Konva.Line({
  //       XS    YS   XE   YE
  points: [
    pt_r6Hex_X,
    pt_r6Hex_Y,
    pt_r7Hex_X,
    pt_r7Hex_Y
  ],
  stroke: 'red',
  strokeWidth: mainLinksStroke,
  lineCap: 'round',
  lineJoin: 'round',
  visible: lineVisible,
});

// TO TIER 1
var r6HexToR8Hex = new Konva.Line({
  //       XS    YS   XE   YE
  points: [
    pt_r6Hex_X,
    pt_r6Hex_Y,
    pt_r8Hex_X,
    pt_r8Hex_Y
  ],
  stroke: 'red',
  strokeWidth: mainLinksStroke,
  lineCap: 'round',
  lineJoin: 'round',
  visible: lineVisible,
});

var r7HexToR8Hex = new Konva.Line({
  //       XS    YS   XE   YE
  points: [
    pt_r7Hex_X,
    pt_r7Hex_Y,
    pt_r8Hex_X,
    pt_r8Hex_Y
  ],
  stroke: 'red',
  strokeWidth: mainLinksStroke,
  lineCap: 'round',
  lineJoin: 'round',
  visible: lineVisible
});