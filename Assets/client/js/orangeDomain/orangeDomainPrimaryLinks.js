/**
 * ORANGE DOMAIN MAIN PATHS
 * Requires:
 *    ../domainLibs/konvaConfigSettings.js
 *    ../domainLibs/serverPointCoordinates.js
 */

// TIER 4
var oBaseToO1Hex = new Konva.Line({
  points: [
    pt_oBase1Hex_X,
    pt_oBase1Hex_Y,
    pt_o1Hex_X,
    pt_o1Hex_Y
  ],
  stroke: 'orange',
  strokeWidth: 2,
  lineCap: 'round',
  lineJoin: 'round'
});

var oBaseToO2Hex = new Konva.Line({
  //       XS    YS   XE   YE
  points: [
    pt_oBase2Hex_X,
    pt_oBase2Hex_Y,
    pt_o2Hex_X,
    pt_o2Hex_Y
  ],
  stroke: 'orange',
  strokeWidth: 2,
  lineCap: 'round',
  lineJoin: 'round'
});

// TO TIER 3
var o1HexToO3Hex = new Konva.Line({
  //       XS    YS   XE   YE
  points: [
    pt_o1Hex_X,
    pt_o1Hex_Y,
    pt_o3Hex_X,
    pt_o3Hex_Y
  ],
  stroke: 'orange',
  strokeWidth: 2,
  lineCap: 'round',
  lineJoin: 'round'
});

var o2HexToO5Hex = new Konva.Line({
  //       XS    YS   XE   YE
  points: [
    pt_o2Hex_X,
    pt_o2Hex_Y,
    pt_o5Hex_X,
    pt_o5Hex_Y
  ],
  stroke: 'orange',
  strokeWidth: 2,
  lineCap: 'round',
  lineJoin: 'round'
});

// TIER 3
var o3HexToO4Hex = new Konva.Line({
  //       XS    YS   XE   YE
  points: [
    pt_o3Hex_X,
    pt_o3Hex_Y,
    pt_o4Hex_X,
    pt_o4Hex_Y
  ],
  stroke: 'orange',
  strokeWidth: 2,
  lineCap: 'round',
  lineJoin: 'round'
});

var o5HexToO4Hex = new Konva.Line({
  //       XS    YS   XE   YE
  points: [
    pt_o5Hex_X,
    pt_o5Hex_Y,
    pt_o4Hex_X,
    pt_o4Hex_Y
  ],
  stroke: 'orange',
  strokeWidth: 2,
  lineCap: 'round',
  lineJoin: 'round'
});

// TO TIER 2
var o4HexToO7Hex = new Konva.Line({
  //       XS    YS   XE   YE
  points: [
    pt_o4Hex_X,
    pt_o4Hex_Y,
    pt_o7Hex_X,
    pt_o7Hex_Y
  ],
  stroke: 'orange',
  strokeWidth: 2,
  lineCap: 'round',
  lineJoin: 'round'
});

var o5HexToO7Hex = new Konva.Line({
  //       XS    YS   XE   YE
  points: [
    pt_o5Hex_X,
    pt_o5Hex_Y,
    pt_o7Hex_X,
    pt_o7Hex_Y
  ],
  stroke: 'orange',
  strokeWidth: 2,
  lineCap: 'round',
  lineJoin: 'round'
});

var o4HexToO6Hex = new Konva.Line({
  //       XS    YS   XE   YE
  points: [
    pt_o4Hex_X,
    pt_o4Hex_Y,
    pt_o6Hex_X,
    pt_o6Hex_Y
  ],
  stroke: 'orange',
  strokeWidth: 2,
  lineCap: 'round',
  lineJoin: 'round'
});

var o3HexToO6Hex = new Konva.Line({
  //       XS    YS   XE   YE
  points: [
    pt_o3Hex_X,
    pt_o3Hex_Y,
    pt_o6Hex_X,
    pt_o6Hex_Y
  ],
  stroke: 'orange',
  strokeWidth: 2,
  lineCap: 'round',
  lineJoin: 'round'
});

// TIER 2
var o6HexToO7Hex = new Konva.Line({
  //       XS    YS   XE   YE
  points: [
    pt_o6Hex_X,
    pt_o6Hex_Y,
    pt_o7Hex_X,
    pt_o7Hex_Y
  ],
  stroke: 'orange',
  strokeWidth: 2,
  lineCap: 'round',
  lineJoin: 'round'
});

// TO TIER 1
var o6HexToO8Hex = new Konva.Line({
  //       XS    YS   XE   YE
  points: [
    pt_o6Hex_X,
    pt_o6Hex_Y,
    pt_o8Hex_X,
    pt_o8Hex_Y
  ],
  stroke: 'orange',
  strokeWidth: 2,
  lineCap: 'round',
  lineJoin: 'round'
});

var o7HexToO8Hex = new Konva.Line({
  //       XS    YS   XE   YE
  points: [
    pt_o7Hex_X,
    pt_o7Hex_Y,
    pt_o8Hex_X,
    pt_o8Hex_Y
  ],
  stroke: 'orange',
  strokeWidth: 2,
  lineCap: 'round',
  lineJoin: 'round'
});