/**
 * YELLOW DOMAIN MAIN PATHS
 * Requires:
 *    ../domainLibs/konvaConfigSettings.js
 *    ../domainLibs/serverPointCoordinates.js
 */

// TIER 4
var yBaseToY1Hex = new Konva.Line({
  points: [
    pt_yBase1Hex_X,
    pt_yBase1Hex_Y,
    pt_y1Hex_X,
    pt_y1Hex_Y
  ],
  stroke: darkYellowColor,
  strokeWidth: 2,
  lineCap: 'round',
  lineJoin: 'round',
  visible: lineVisible
});

var yBaseToY2Hex = new Konva.Line({
  //       XS    YS   XE   YE
  points: [
    pt_yBase2Hex_X,
    pt_yBase2Hex_Y,
    pt_y2Hex_X,
    pt_y2Hex_Y
  ],
  stroke: darkYellowColor,
  strokeWidth: 2,
  lineCap: 'round',
  lineJoin: 'round',
  visible: lineVisible
});

// TO TIER 3
var y1HexToY3Hex = new Konva.Line({
  //       XS    YS   XE   YE
  points: [
    pt_y1Hex_X,
    pt_y1Hex_Y,
    pt_y3Hex_X,
    pt_y3Hex_Y
  ],
  stroke: darkYellowColor,
  strokeWidth: 2,
  lineCap: 'round',
  lineJoin: 'round',
  visible: lineVisible,
  id: y1HexToY3Hex
});

var y2HexToY5Hex = new Konva.Line({
  //       XS    YS   XE   YE
  points: [
    pt_y2Hex_X,
    pt_y2Hex_Y,
    pt_y5Hex_X,
    pt_y5Hex_Y
  ],
  stroke: darkYellowColor,
  strokeWidth: 2,
  lineCap: 'round',
  lineJoin: 'round',
  visible: lineVisible
});

// TIER 3
var y3HexToY4Hex = new Konva.Line({
  //       XS    YS   XE   YE
  points: [
    pt_y3Hex_X,
    pt_y3Hex_Y,
    pt_y4Hex_X,
    pt_y4Hex_Y
  ],
  stroke: darkYellowColor,
  strokeWidth: 2,
  lineCap: 'round',
  lineJoin: 'round',
  visible: lineVisible
});

var y5HexToY4Hex = new Konva.Line({
  //       XS    YS   XE   YE
  points: [
    pt_y5Hex_X,
    pt_y5Hex_Y,
    pt_y4Hex_X,
    pt_y4Hex_Y
  ],
  stroke: darkYellowColor,
  strokeWidth: 2,
  lineCap: 'round',
  lineJoin: 'round',
  visible: lineVisible
});

// TO TIER 2
var y4HexToY7Hex = new Konva.Line({
  //       XS    YS   XE   YE
  points: [
    pt_y4Hex_X,
    pt_y4Hex_Y,
    pt_y7Hex_X,
    pt_y7Hex_Y
  ],
  stroke: darkYellowColor,
  strokeWidth: 2,
  lineCap: 'round',
  lineJoin: 'round',
  visible: lineVisible
});

var y5HexToY7Hex = new Konva.Line({
  //       XS    YS   XE   YE
  points: [
    pt_y5Hex_X,
    pt_y5Hex_Y,
    pt_y7Hex_X,
    pt_y7Hex_Y
  ],
  stroke: darkYellowColor,
  strokeWidth: 2,
  lineCap: 'round',
  lineJoin: 'round',
  visible: lineVisible
});

var y4HexToY6Hex = new Konva.Line({
  //       XS    YS   XE   YE
  points: [
    pt_y4Hex_X,
    pt_y4Hex_Y,
    pt_y6Hex_X,
    pt_y6Hex_Y
  ],
  stroke: darkYellowColor,
  strokeWidth: 2,
  lineCap: 'round',
  lineJoin: 'round',
  visible: lineVisible
});

var y3HexToY6Hex = new Konva.Line({
  //       XS    YS   XE   YE
  points: [
    pt_y3Hex_X,
    pt_y3Hex_Y,
    pt_y6Hex_X,
    pt_y6Hex_Y
  ],
  stroke: darkYellowColor,
  strokeWidth: 2,
  lineCap: 'round',
  lineJoin: 'round',
  visible: lineVisible
});

// TIER 2
var y6HexToY7Hex = new Konva.Line({
  //       XS    YS   XE   YE
  points: [
    pt_y6Hex_X,
    pt_y6Hex_Y,
    pt_y7Hex_X,
    pt_y7Hex_Y
  ],
  stroke: darkYellowColor,
  strokeWidth: 2,
  lineCap: 'round',
  lineJoin: 'round',
  visible: lineVisible
});

// TO TIER 1
var y6HexToY8Hex = new Konva.Line({
  //       XS    YS   XE   YE
  points: [
    pt_y6Hex_X,
    pt_y6Hex_Y,
    pt_y8Hex_X,
    pt_y8Hex_Y
  ],
  stroke: darkYellowColor,
  strokeWidth: 2,
  lineCap: 'round',
  lineJoin: 'round',
  visible: lineVisible
});

var y7HexToY8Hex = new Konva.Line({
  //       XS    YS   XE   YE
  points: [
    pt_y7Hex_X,
    pt_y7Hex_Y,
    pt_y8Hex_X,
    pt_y8Hex_Y
  ],
  stroke: darkYellowColor,
  strokeWidth: 2,
  lineCap: 'round',
  lineJoin: 'round',
  visible: lineVisible
});