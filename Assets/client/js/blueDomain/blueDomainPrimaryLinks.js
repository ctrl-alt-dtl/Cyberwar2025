/**
 * BLUE DOMAIN MAIN PATHS
 * Requires:
 *    ../domainLibs/konvaConfigSettings.js
 *    ../domainLibs/serverPointCoordinates.js
 */

// TIER 4
var bBaseToB1Hex = new Konva.Line({
  points: [
    pt_bBase1Hex_X,
    pt_bBase1Hex_Y,
    pt_b1Hex_X,
    pt_b1Hex_Y
  ],
  stroke: blueColor,
  strokeWidth: mainLinksStroke,
  lineCap: 'round',
  lineJoin: 'round',
  visible: lineVisible,
  id: bBaseToB1Hex
});

var bBaseToB2Hex = new Konva.Line({
  //       XS    YS   XE   YE
  points: [
    pt_bBase2Hex_X,
    pt_bBase2Hex_Y,
    pt_b2Hex_X,
    pt_b2Hex_Y
  ],
  stroke: blueColor,
  strokeWidth: mainLinksStroke,
  lineCap: 'round',
  lineJoin: 'round',
  visible: lineVisible,
  id: bBaseToB2Hex
});

// TO TIER 3
var b1HexToB3Hex = new Konva.Line({
  //       XS    YS   XE   YE
  points: [
    pt_b1Hex_X,
    pt_b1Hex_Y,
    pt_b3Hex_X,
    pt_b3Hex_Y
  ],
  stroke: blueColor,
  strokeWidth: mainLinksStroke,
  lineCap: 'round',
  lineJoin: 'round',
  visible: lineVisible,
  id: b1HexToB3Hex
});

var b2HexToB5Hex = new Konva.Line({
  //       XS    YS   XE   YE
  points: [
    pt_b2Hex_X,
    pt_b2Hex_Y,
    pt_b5Hex_X,
    pt_b5Hex_Y
  ],
  stroke: blueColor,
  strokeWidth: mainLinksStroke,
  lineCap: 'round',
  lineJoin: 'round',
  visible: lineVisible,
  id: b2HexToB5Hex
});

// TIER 3
var b3HexToB4Hex = new Konva.Line({
  //       XS    YS   XE   YE
  points: [
    pt_b3Hex_X,
    pt_b3Hex_Y,
    pt_b4Hex_X,
    pt_b4Hex_Y
  ],
  stroke: blueColor,
  strokeWidth: mainLinksStroke,
  lineCap: 'round',
  lineJoin: 'round',
  visible: lineVisible,
  id: b3HexToB4Hex
});

var b5HexToB4Hex = new Konva.Line({
  //       XS    YS   XE   YE
  points: [
    pt_b5Hex_X,
    pt_b5Hex_Y,
    pt_b4Hex_X,
    pt_b4Hex_Y
  ],
  stroke: blueColor,
  strokeWidth: mainLinksStroke,
  lineCap: 'round',
  lineJoin: 'round',
  visible: lineVisible,
  id: b5HexToB4Hex
});

// TO TIER 2
var b4HexToB7Hex = new Konva.Line({
  //       XS    YS   XE   YE
  points: [
    pt_b4Hex_X,
    pt_b4Hex_Y,
    pt_b7Hex_X,
    pt_b7Hex_Y
  ],
  stroke: blueColor,
  strokeWidth: mainLinksStroke,
  lineCap: 'round',
  lineJoin: 'round',
  visible: lineVisible,
  id: b4HexToB7Hex
});

var b5HexToB7Hex = new Konva.Line({
  //       XS    YS   XE   YE
  points: [
    pt_b5Hex_X,
    pt_b5Hex_Y,
    pt_b7Hex_X,
    pt_b7Hex_Y
  ],
  stroke: blueColor,
  strokeWidth: mainLinksStroke,
  lineCap: 'round',
  lineJoin: 'round',
  visible: lineVisible,
  id: b5HexToB7Hex
});

var b4HexToB6Hex = new Konva.Line({
  //       XS    YS   XE   YE
  points: [
    pt_b4Hex_X,
    pt_b4Hex_Y,
    pt_b6Hex_X,
    pt_b6Hex_Y
  ],
  stroke: blueColor,
  strokeWidth: mainLinksStroke,
  lineCap: 'round',
  lineJoin: 'round',
  visible: lineVisible,
  id: b4HexToB6Hex
});

var b3HexToB6Hex = new Konva.Line({
  //       XS    YS   XE   YE
  points: [
    pt_b3Hex_X,
    pt_b3Hex_Y,
    pt_b6Hex_X,
    pt_b6Hex_Y
  ],
  stroke: blueColor,
  strokeWidth: mainLinksStroke,
  lineCap: 'round',
  lineJoin: 'round',
  visible: lineVisible,
  id: b3HexToB6Hex
});

// TIER 2
var b6HexToB7Hex = new Konva.Line({
  //       XS    YS   XE   YE
  points: [
    pt_b6Hex_X,
    pt_b6Hex_Y,
    pt_b7Hex_X,
    pt_b7Hex_Y
  ],
  stroke: blueColor,
  strokeWidth: mainLinksStroke,
  lineCap: 'round',
  lineJoin: 'round',
  visible: lineVisible,
  id: b6HexToB7Hex
});

// TO TIER 1
var b6HexToB8Hex = new Konva.Line({
  //       XS    YS   XE   YE
  points: [
    pt_b6Hex_X,
    pt_b6Hex_Y,
    pt_b8Hex_X,
    pt_b8Hex_Y
  ],
  stroke: blueColor,
  strokeWidth: mainLinksStroke,
  lineCap: 'round',
  lineJoin: 'round',
  visible: lineVisible,
  id: b6HexToB8Hex
});

var b7HexToB8Hex = new Konva.Line({
  //       XS    YS   XE   YE
  points: [
    pt_b7Hex_X,
    pt_b7Hex_Y,
    pt_b8Hex_X,
    pt_b8Hex_Y
  ],
  stroke: blueColor,
  strokeWidth: mainLinksStroke,
  lineCap: 'round',
  lineJoin: 'round',
  visible: lineVisible,
  id: b7HexToB8Hex
});