/**
 * MAIN BOARD
 * Requires:
 *    ../domainLibs/konvaConfigSettings.js
 */

var centerHex = new Konva.RegularPolygon({
  x: stage.width() / 2,
  y: stage.height() / 2,
  sides: 6,
  radius: BASE_BOARD_WIDTH / 38,
  fill: 'white',
  stroke: 'black',
  strokeWidth: 2,
  rotation: 90
});

var boardEdge= new Konva.RegularPolygon({
  x: stage.width() / 2,
  y: stage.height() / 2,
  sides: 6,
  radius: BASE_BOARD_WIDTH / 2.79,
  fill: 'white',
  stroke: 'black',
  strokeWidth: 4,
  rotation: 90
});

var tier3= new Konva.RegularPolygon({
  x: stage.width() / 2,
  y: stage.height() / 2,
  sides: 6,
  radius: BASE_BOARD_WIDTH / 3.5,
  fill: '#E3E3E3',
  stroke: 'black',
  strokeWidth: 1,
  rotation: 90
});

var tier2= new Konva.RegularPolygon({
  x: stage.width() / 2,
  y: stage.height() / 2,
  sides: 6,
  radius: BASE_BOARD_WIDTH / 5,
  fill: 'white',
  stroke: 'black',
  strokeWidth: 1,
  rotation: 90
});

var tier1= new Konva.RegularPolygon({
  x: stage.width() / 2,
  y: stage.height() / 2,
  sides: 6,
  radius: BASE_BOARD_WIDTH / 9,
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
  y: BASE_BOARD_HEIGHT / 1.225,
  width: BASE_BOARD_WIDTH / 40,
  fontFamily: 'sans-serif',
  fontSize: BASE_BOARD_WIDTH / 106.67,
  fontStyle: 'bold',
  fill: '#000'
});


var tier2Text = new Konva.Text({
  text: 'Tier 2',
  x: BASE_BOARD_WIDTH / 2.05,
  y: BASE_BOARD_HEIGHT / 1.395,
  width: BASE_BOARD_WIDTH / 40,
  fontFamily: 'sans-serif',
  fontSize: BASE_BOARD_WIDTH / 106.67,
  fontStyle: 'bold',
  fill: '#000'
});

var tier1Text = new Konva.Text({
  text: 'Tier 1',
  x: BASE_BOARD_WIDTH / 2.05,
  y: BASE_BOARD_HEIGHT / 1.63,
  width: BASE_BOARD_WIDTH / 40,
  fontFamily: 'sans-serif',
  fontSize: BASE_BOARD_WIDTH / 106.67,
  fontStyle: 'bold',
  fill: '#000',
  align: 'center'
});

// Domain boundary lines

var mainBoundary1 = new Konva.Line({
  points: [
    BASE_BOARD_WIDTH / 3.1,
    BASE_BOARD_HEIGHT / 1.1,
    BASE_BOARD_WIDTH / 1.475,
    BASE_BOARD_HEIGHT / 11.5
  ],
  stroke: 'black',
  strokeWidth: 3,
  lineCap: 'round',
  lineJoin: 'round'
});

var mainBoundary2 = new Konva.Line({
  points: [
    BASE_BOARD_WIDTH / 1.48,
    BASE_BOARD_HEIGHT / 1.1,
    BASE_BOARD_WIDTH / 3.1,
    BASE_BOARD_HEIGHT / 11
  ],
  stroke: 'black',
  strokeWidth: 3,
  lineCap: 'round',
  lineJoin: 'round'
});

var mainBoundary3 = new Konva.Line({
  points: [
    BASE_BOARD_WIDTH / 1.17,
    BASE_BOARD_HEIGHT / 2,
    BASE_BOARD_WIDTH / 6.9,
    BASE_BOARD_HEIGHT / 2
  ],
  stroke: 'black',
  strokeWidth: 3,
  lineCap: 'round',
  lineJoin: 'round'
});

var minorBounds1 = new Konva.Line({
  points: [
    BASE_BOARD_WIDTH / 2.985,
    BASE_BOARD_HEIGHT / 1.095,
    BASE_BOARD_WIDTH / 1.457,
    BASE_BOARD_HEIGHT / 10
  ],
  stroke: 'black',
  strokeWidth: 1,
  lineCap: 'round',
  lineJoin: 'round'
});

var minorBounds2 = new Konva.Line({
  points: [
    BASE_BOARD_WIDTH / 3.2,
    BASE_BOARD_HEIGHT / 1.11,
    BASE_BOARD_WIDTH / 1.505,
    BASE_BOARD_HEIGHT / 11.5
  ],
  stroke: 'black',
  strokeWidth: 1,
  lineCap: 'round',
  lineJoin: 'round'
});

var minorBounds3 = new Konva.Line({
  points: [
    BASE_BOARD_WIDTH / 3.19,
    BASE_BOARD_HEIGHT / 9.5,
    BASE_BOARD_WIDTH / 1.5,
    BASE_BOARD_HEIGHT / 1.095
  ],
  stroke: 'black',
  strokeWidth: 1,
  lineCap: 'round',
  lineJoin: 'round'
});

var minorBounds4 = new Konva.Line({
  points: [
    BASE_BOARD_WIDTH / 1.457,
    BASE_BOARD_HEIGHT / 1.108,
    BASE_BOARD_WIDTH / 2.985,
    BASE_BOARD_HEIGHT / 11.5
  ],
  stroke: 'black',
  strokeWidth: 1,
  lineCap: 'round',
  lineJoin: 'round'
});

var minorBounds5 = new Konva.Line({
  points: [
    BASE_BOARD_WIDTH / 6.8,
    BASE_BOARD_HEIGHT / 2.07,
    BASE_BOARD_WIDTH / 1.175,
    BASE_BOARD_HEIGHT / 2.07
  ],
  stroke: 'black',
  strokeWidth: 1,
  lineCap: 'round',
  lineJoin: 'round'
});

var minorBounds6 = new Konva.Line({
  points: [
    BASE_BOARD_WIDTH / 6.8,
    BASE_BOARD_HEIGHT / 1.943,
    BASE_BOARD_WIDTH / 1.175,
    BASE_BOARD_HEIGHT / 1.943
  ],
  stroke: 'black',
  strokeWidth: 1,
  lineCap: 'round',
  lineJoin: 'round'
});