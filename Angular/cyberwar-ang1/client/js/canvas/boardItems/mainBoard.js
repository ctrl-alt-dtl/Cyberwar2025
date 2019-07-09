/**
 * MAIN BOARD
 * Requires:
 *    ../domainLibs/konvaConfigSettings.js
 */

var centerHex = new Konva.RegularPolygon({
  x: BASE_BOARD_WIDTH / 2,
  y: BASE_BOARD_HEIGHT / 2,
  sides: 6,
  radius: BASE_BOARD_WIDTH / 20,
  fill: 'white',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90
});

var boardEdge = new Konva.RegularPolygon({
  x: BASE_BOARD_WIDTH / 2,
  y: BASE_BOARD_HEIGHT / 2,
  sides: 6,
  radius: BASE_BOARD_WIDTH / 2.05,
  //fill: 'white',
  stroke: 'black',
  strokeWidth: 4,
  rotation: 90,
  centeredScaling: true
});

var tier3 = new Konva.RegularPolygon({
  x: BASE_BOARD_WIDTH / 2,
  y: BASE_BOARD_HEIGHT / 2,
  sides: 6,
  radius: BASE_BOARD_WIDTH / 2.6,
  fill: '#E3E3E3',
  stroke: 'black',
  strokeWidth: 1,
  rotation: 90
});

var tier2 = new Konva.RegularPolygon({
  x: BASE_BOARD_WIDTH / 2,
  y: BASE_BOARD_HEIGHT / 2,
  sides: 6,
  radius: BASE_BOARD_WIDTH / 3.7,
  fill: 'white',
  stroke: 'black',
  strokeWidth: 1,
  rotation: 90,
  centeredScaling: true
});

var tier1 = new Konva.RegularPolygon({
  x: BASE_BOARD_WIDTH / 2,
  y: BASE_BOARD_HEIGHT / 2,
  sides: 6,
  radius: BASE_BOARD_WIDTH / 6.5,
  fill: '#E3E3E3',
  stroke: 'black',
  strokeWidth: 1,
  rotation: 90
});

var origin = new Konva.RegularPolygon({
  x: BASE_BOARD_WIDTH / 2,
  y: BASE_BOARD_HEIGHT / 2,
  sides: 6,
  fill: 'green',
  radius: 2
});

// Text labeling for different board tiers.
var tier3Text = new Konva.Text({
  text: 'Tier 3',
  x: BASE_BOARD_WIDTH / 2.05,
  y: BASE_BOARD_HEIGHT / 1.265,
  width: BASE_BOARD_WIDTH / 38,
  fontFamily: 'sans-serif',
  fontSize: BASE_BOARD_WIDTH / 106.67,
  fontStyle: 'bold',
  fill: '#000'
});


var tier2Text = new Konva.Text({
  text: 'Tier 2',
  x: BASE_BOARD_WIDTH / 2.05,
  y: BASE_BOARD_HEIGHT / 1.425,
  width: BASE_BOARD_WIDTH / 38,
  fontFamily: 'sans-serif',
  fontSize: BASE_BOARD_WIDTH / 106.67,
  fontStyle: 'bold',
  fill: '#000'
});

var tier1Text = new Konva.Text({
  text: 'Tier 1',
  x: BASE_BOARD_WIDTH / 2.05,
  y: BASE_BOARD_HEIGHT / 1.638,
  width: BASE_BOARD_WIDTH / 38,
  fontFamily: 'sans-serif',
  fontSize: BASE_BOARD_WIDTH / 106.67,
  fontStyle: 'bold',
  fill: '#000',
  align: 'center'
});

// Server Node Numbering Text
var node1Text = new Konva.Text({
  text: '1',
  x: BASE_BOARD_WIDTH / 3.5,
  y: BASE_BOARD_HEIGHT / 1.16,
  width: BASE_BOARD_WIDTH / 38,
  fontFamily: 'sans-serif',
  fontSize: BASE_BOARD_WIDTH / 106.67,
  fontStyle: 'bold',
  fill: '#000',
  align: 'center'
});

var node2Text = new Konva.Text({
  text: '2',
  x: BASE_BOARD_WIDTH / 1.455,
  y: BASE_BOARD_HEIGHT / 1.16,
  width: BASE_BOARD_WIDTH / 38,
  fontFamily: 'sans-serif',
  fontSize: BASE_BOARD_WIDTH / 106.67,
  fontStyle: 'bold',
  fill: '#000',
  align: 'center'
});

var node3Text = new Konva.Text({
  text: '3',
  x: BASE_BOARD_WIDTH / 2.95,
  y: BASE_BOARD_HEIGHT / 1.29,
  width: BASE_BOARD_WIDTH / 38,
  fontFamily: 'sans-serif',
  fontSize: BASE_BOARD_WIDTH / 106.67,
  fontStyle: 'bold',
  fill: '#000',
  align: 'center'
});

var node5Text = new Konva.Text({
  text: '5',
  x: BASE_BOARD_WIDTH / 1.58,
  y: BASE_BOARD_HEIGHT / 1.29,
  width: BASE_BOARD_WIDTH / 38,
  fontFamily: 'sans-serif',
  fontSize: BASE_BOARD_WIDTH / 106.67,
  fontStyle: 'bold',
  fill: '#000',
  align: 'center'
});

var node6Text = new Konva.Text({
  text: '6',
  x: BASE_BOARD_WIDTH / 2.53,
  y: BASE_BOARD_HEIGHT / 1.46,
  width: BASE_BOARD_WIDTH / 38,
  fontFamily: 'sans-serif',
  fontSize: BASE_BOARD_WIDTH / 106.67,
  fontStyle: 'bold',
  fill: '#000',
  align: 'center'
});

var node7Text = new Konva.Text({
  text: '7',
  x: BASE_BOARD_WIDTH / 1.74,
  y: BASE_BOARD_HEIGHT / 1.46,
  width: BASE_BOARD_WIDTH / 38,
  fontFamily: 'sans-serif',
  fontSize: BASE_BOARD_WIDTH / 106.67,
  fontStyle: 'bold',
  fill: '#000',
  align: 'center'
});

// Domain boundary lines

var mainBoundary1 = new Konva.Line({
  points: [
    BASE_BOARD_WIDTH / 3.9,
    BASE_BOARD_HEIGHT / 1.135,
    BASE_BOARD_WIDTH / 1.345,
    BASE_BOARD_HEIGHT / 8.45
  ],
  stroke: 'black',
  strokeWidth: 3,
  lineCap: 'round',
  lineJoin: 'round'
});

var mainBoundary2 = new Konva.Line({
  points: [
    BASE_BOARD_WIDTH / 1.345,
    BASE_BOARD_HEIGHT / 1.135,
    BASE_BOARD_WIDTH / 3.9,
    BASE_BOARD_HEIGHT / 8.45
  ],
  stroke: 'black',
  strokeWidth: 3,
  lineCap: 'round',
  lineJoin: 'round'
});

var mainBoundary3 = new Konva.Line({
  points: [
    BASE_BOARD_WIDTH / 1.015,
    BASE_BOARD_HEIGHT / 2,
    BASE_BOARD_WIDTH / 70,
    BASE_BOARD_HEIGHT / 2
  ],
  stroke: 'black',
  strokeWidth: 3,
  lineCap: 'round',
  lineJoin: 'round'
});

var minorBounds1 = new Konva.Line({
  points: [
    BASE_BOARD_WIDTH / 3.65,
    BASE_BOARD_HEIGHT / 1.135,
    BASE_BOARD_WIDTH / 1.325,
    BASE_BOARD_HEIGHT / 7.5
  ],
  stroke: 'black',
  strokeWidth: 1,
  lineCap: 'round',
  lineJoin: 'round'
});

var minorBounds2 = new Konva.Line({
  points: [
    BASE_BOARD_WIDTH / 4.05,
    BASE_BOARD_HEIGHT / 1.16,
    BASE_BOARD_WIDTH / 1.38,
    BASE_BOARD_HEIGHT / 8.5
  ],
  stroke: 'black',
  strokeWidth: 1,
  lineCap: 'round',
  lineJoin: 'round'
});

var minorBounds3 = new Konva.Line({
  points: [
    BASE_BOARD_WIDTH / 4.05,
    BASE_BOARD_HEIGHT / 7.4,
    BASE_BOARD_WIDTH / 1.38,
    BASE_BOARD_HEIGHT / 1.135
  ],
  stroke: 'black',
  strokeWidth: 1,
  lineCap: 'round',
  lineJoin: 'round'
});

var minorBounds4 = new Konva.Line({
  points: [
    BASE_BOARD_WIDTH / 1.33,
    BASE_BOARD_HEIGHT / 1.16,
    BASE_BOARD_WIDTH / 3.6,
    BASE_BOARD_HEIGHT / 8.2
  ],
  stroke: 'black',
  strokeWidth: 1,
  lineCap: 'round',
  lineJoin: 'round'
});

var minorBounds5 = new Konva.Line({
  points: [
    BASE_BOARD_WIDTH / 40,
    BASE_BOARD_HEIGHT / 2.07,
    BASE_BOARD_WIDTH / 1.025,
    BASE_BOARD_HEIGHT / 2.07
  ],
  stroke: 'black',
  strokeWidth: 1,
  lineCap: 'round',
  lineJoin: 'round'
});

var minorBounds6 = new Konva.Line({
  points: [
    BASE_BOARD_WIDTH / 40,
    BASE_BOARD_HEIGHT / 1.943,
    BASE_BOARD_WIDTH / 1.025,
    BASE_BOARD_HEIGHT / 1.943
  ],
  stroke: 'black',
  strokeWidth: 1,
  lineCap: 'round',
  lineJoin: 'round'
});