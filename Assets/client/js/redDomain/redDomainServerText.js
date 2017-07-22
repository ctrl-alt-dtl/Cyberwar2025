/**
 * RED DOMAIN TEXT
 * Requires:
 *    ../domainLibs/konvaConfigSettings.js
 *    ../domainLibs/serverPointCoordinates.js
 */
var redBaseText = new Konva.Text({
  text: 'dotEvil',
  x: BASE_BOARD_WIDTH / 1.95,
  y: BASE_BOARD_HEIGHT / 1.12,
  offset: {
    x: base_text_offset_x,
    y: base_text_offset_y
  },
  width: 210,
  stroke: 'black',
  strokeWidth: 1.5,
  fontFamily:'sans-serif',
  fontSize: 22,
  fontStyle: 'bold',
  fill: '#FFF',
  rotation: 0
});

var r1Text = new Konva.Text({
  text: '1',
  x: pt_r1Hex_X,
  y: pt_r1Hex_Y,
  offset: {
    x: text_offset_x,
    y: text_offset_y
  },
  width: 220,
  stroke: 'black',
  strokeWidth: 1,
  fontFamily: 'sans-serif',
  fontSize: 30,
  fill: '#FFF',
  id: r1Text,
  rotation: -DOMAIN_LAYER_BOARD_ROTATION
});

var r2Text = new Konva.Text({
  text: '2',
  x: pt_r2Hex_X,
  y: pt_r2Hex_Y,
  offset: {
    x: text_offset_x,
    y: text_offset_y
  },
  width: 220,
  stroke: 'black',
  strokeWidth: 1,
  fontFamily: 'sans-serif',
  fontSize: 30,
  fill: '#FFF',
  rotation: -DOMAIN_LAYER_BOARD_ROTATION
});

var r3Text = new Konva.Text({
  text: '3',
  x: pt_r3Hex_X,
  y: pt_r3Hex_Y,
  offset: {
    x: text_offset_x,
    y: text_offset_y
  },
  width: 220,
  stroke: 'black',
  strokeWidth: 1,
  fontFamily: 'sans-serif',
  fontSize: 30,
  fill: '#FFF',
  rotation: -DOMAIN_LAYER_BOARD_ROTATION
});

var r4Text = new Konva.Text({
  text: '4',
  x: pt_r4Hex_X,
  y: pt_r4Hex_Y,
  offset: {
    x: text_offset_x,
    y: text_offset_y
  },
  width: 220,
  stroke: 'black',
  strokeWidth: 1,
  fontFamily: 'sans-serif',
  fontSize: 30,
  fill: '#FFF',
  rotation: -DOMAIN_LAYER_BOARD_ROTATION
});


var r5Text = new Konva.Text({
  text: '5',
  x: pt_r5Hex_X,
  y: pt_r5Hex_Y,
  offset: {
    x: text_offset_x,
    y: text_offset_y
  },
  width: 220,
  stroke: 'black',
  strokeWidth: 1,
  fontFamily: 'sans-serif',
  fontSize: 30,
  fill: '#FFF',
  rotation: -DOMAIN_LAYER_BOARD_ROTATION
});


var r6Text = new Konva.Text({
  text: '6',
  x: pt_r6Hex_X,
  y: pt_r6Hex_Y,
  offset: {
    x: text_offset_x,
    y: text_offset_y
  },
  width: 220,
  stroke: 'black',
  strokeWidth: 1,
  fontFamily: 'sans-serif',
  fontSize: 30,
  fill: '#FFF',
  rotation: -DOMAIN_LAYER_BOARD_ROTATION
});


var r7Text = new Konva.Text({
  text: '7',
  x: pt_r7Hex_X,
  y: pt_r7Hex_Y,
  offset: {
    x: text_offset_x,
    y: text_offset_y
  },
  width: 220,
  stroke: 'black',
  strokeWidth: 1,
  fontFamily: 'sans-serif',
  fontSize: 30,
  fill: '#FFF',
  rotation: -DOMAIN_LAYER_BOARD_ROTATION
});


var r8Text = new Konva.Text({
  text: '8',
  x: pt_r8Hex_X,
  y: pt_r8Hex_Y,
  offset: {
    x: text_offset_x,
    y: text_offset_y
  },
  width: 220,
  stroke: 'black',
  strokeWidth: 1,
  fontFamily: 'sans-serif',
  fontSize: 30,
  fill: '#FFF',
  rotation: -DOMAIN_LAYER_BOARD_ROTATION
});


