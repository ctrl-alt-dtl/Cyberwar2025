/**
 * YELLOW DOMAIN TEXT
 * Requires:
 *    ../domainLibs/konvaConfigSettings.js
 *    ../domainLibs/serverPointCoordinates.js
 */
var yellowBaseText = new Konva.Text({
  text: 'BuzzKill',
  x: BASE_BOARD_WIDTH / 1.33,
  y: BASE_BOARD_HEIGHT / 3.4,
  offset: {
    x: base_text_offset_x,
    y: base_text_offset_y
  },
  width: 210,
  stroke: 'black',
  strokeWidth: 1,
  fontFamily:'sans-serif',
  fontSize: 22,
  fontStyle: 'bold',
  fill: '#FFF',
  rotation: 240
});

var y1Text = new Konva.Text({
  text: '1',
  x: pt_y1Hex_X,
  y: pt_y1Hex_Y,
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
  visible: textVisible,
  rotation: -DOMAIN_LAYER_BOARD_ROTATION
});

var y2Text = new Konva.Text({
  text: '2',
  x: pt_y2Hex_X,
  y: pt_y2Hex_Y,
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
  visible: textVisible,
  rotation: -DOMAIN_LAYER_BOARD_ROTATION
});

var y3Text = new Konva.Text({
  text: '3',
  x: pt_y3Hex_X,
  y: pt_y3Hex_Y,
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
  visible: textVisible,
  rotation: -DOMAIN_LAYER_BOARD_ROTATION
});

var y4Text = new Konva.Text({
  text: '4',
  x: pt_y4Hex_X,
  y: pt_y4Hex_Y,
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
  visible: textVisible,
  rotation: -DOMAIN_LAYER_BOARD_ROTATION
});


var y5Text = new Konva.Text({
  text: '5',
  x: pt_y5Hex_X,
  y: pt_y5Hex_Y,
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
  visible: textVisible,
  rotation: -DOMAIN_LAYER_BOARD_ROTATION
});


var y6Text = new Konva.Text({
  text: '6',
  x: pt_y6Hex_X,
  y: pt_y6Hex_Y,
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
  visible: textVisible,
  rotation: -DOMAIN_LAYER_BOARD_ROTATION
});


var y7Text = new Konva.Text({
  text: '7',
  x: pt_y7Hex_X,
  y: pt_y7Hex_Y,
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
  visible: textVisible,
  rotation: -DOMAIN_LAYER_BOARD_ROTATION
});


var y8Text = new Konva.Text({
  text: '8',
  x: pt_y8Hex_X,
  y: pt_y8Hex_Y,
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
  visible: textVisible,
  rotation: -DOMAIN_LAYER_BOARD_ROTATION
});


