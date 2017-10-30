/**
 * RED DOMAIN TEXT
 * Requires:
 *    ../domainLibs/konvaConfigSettings.js
 *    ../domainLibs/serverPointCoordinates.js
 */
var redBaseText = new Konva.Text({
  text: 'DotEvil',
  // x: BASE_BOARD_WIDTH / 1.95,
  // y: BASE_BOARD_HEIGHT / 1.12,
  x: BASE_BOARD_WIDTH / 2.1,
  y: BASE_BOARD_HEIGHT / 1.135,
  offset: {
    x: base_text_offset_x,
    y: base_text_offset_y
  },
  width: baseTextWidth,
  stroke: 'black',
  strokeWidth: 1,
  fontFamily:'sans-serif',
  fontSize: baseTextSize,
  fontStyle: 'bold',
  fill: '#FFF',
  rotation: 0
});

var r1Text = new Konva.Text({
  text: nodeValOne,
  x: pt_r1Hex_X,
  y: pt_r1Hex_Y,
  offset: {
    x: text_offset_x,
    y: text_offset_y
  },
  width: serverTextWidth,
  stroke: 'black',
  strokeWidth: 1,
  fontFamily: 'sans-serif',
  fontSize: serverTextSize,
  fill: '#FFF',
  id: r1Text,
  visible: textVisible,
  rotation: -DOMAIN_LAYER_BOARD_ROTATION
});

var r2Text = new Konva.Text({
  text: nodeValOne,
  x: pt_r2Hex_X,
  y: pt_r2Hex_Y,
  offset: {
    x: text_offset_x,
    y: text_offset_y
  },
  width: serverTextWidth,
  stroke: 'black',
  strokeWidth: 1,
  fontFamily: 'sans-serif',
  fontSize: serverTextSize,
  fill: '#FFF',
  visible: textVisible,
  rotation: -DOMAIN_LAYER_BOARD_ROTATION
});

var r3Text = new Konva.Text({
  text: nodeValOne,
  x: pt_r3Hex_X,
  y: pt_r3Hex_Y,
  offset: {
    x: text_offset_x,
    y: text_offset_y
  },
  width: serverTextWidth,
  stroke: 'black',
  strokeWidth: 1,
  fontFamily: 'sans-serif',
  fontSize: serverTextSize,
  fill: '#FFF',
  visible: textVisible,
  rotation: -DOMAIN_LAYER_BOARD_ROTATION
});

var r4Text = new Konva.Text({
  text: nodeValOne,
  x: pt_r4Hex_X,
  y: pt_r4Hex_Y,
  offset: {
    x: text_offset_x,
    y: text_offset_y
  },
  width: serverTextWidth,
  stroke: 'black',
  strokeWidth: 1,
  fontFamily: 'sans-serif',
  fontSize: serverTextSize,
  fill: '#FFF',
  visible: textVisible,
  rotation: -DOMAIN_LAYER_BOARD_ROTATION
});


var r5Text = new Konva.Text({
  text: nodeValOne,
  x: pt_r5Hex_X,
  y: pt_r5Hex_Y,
  offset: {
    x: text_offset_x,
    y: text_offset_y
  },
  width: serverTextWidth,
  stroke: 'black',
  strokeWidth: 1,
  fontFamily: 'sans-serif',
  fontSize: serverTextSize,
  fill: '#FFF',
  visible: textVisible,
  rotation: -DOMAIN_LAYER_BOARD_ROTATION
});


var r6Text = new Konva.Text({
  text: nodeValOne,
  x: pt_r6Hex_X,
  y: pt_r6Hex_Y,
  offset: {
    x: text_offset_x,
    y: text_offset_y
  },
  width: serverTextWidth,
  stroke: 'black',
  strokeWidth: 1,
  fontFamily: 'sans-serif',
  fontSize: serverTextSize,
  fill: '#FFF',
  visible: textVisible,
  rotation: -DOMAIN_LAYER_BOARD_ROTATION
});


var r7Text = new Konva.Text({
  text: nodeValOne,
  x: pt_r7Hex_X,
  y: pt_r7Hex_Y,
  offset: {
    x: text_offset_x,
    y: text_offset_y
  },
  width: serverTextWidth,
  stroke: 'black',
  strokeWidth: 1,
  fontFamily: 'sans-serif',
  fontSize: serverTextSize,
  fill: '#FFF',
  visible: textVisible,
  rotation: -DOMAIN_LAYER_BOARD_ROTATION
});


var r8Text = new Konva.Text({
  text: nodeValOne,
  x: pt_r8Hex_X,
  y: pt_r8Hex_Y,
  offset: {
    x: text_offset_x,
    y: text_offset_y
  },
  width: serverTextWidth,
  stroke: 'black',
  strokeWidth: 1,
  fontFamily: 'sans-serif',
  fontSize: serverTextSize,
  fill: '#FFF',
  visible: textVisible,
  rotation: -DOMAIN_LAYER_BOARD_ROTATION
});


