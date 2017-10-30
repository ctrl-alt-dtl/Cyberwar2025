/**
 * BLUE DOMAIN TEXT
 * Requires:
 *    ../domainLibs/konvaConfigSettings.js
 *    ../domainLibs/serverPointCoordinates.js
 */
var blueBaseText = new Konva.Text({
  text: 'FrostByte',
  x: BASE_BOARD_WIDTH / 3.65,
  y: BASE_BOARD_HEIGHT / 3.75,
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
  rotation: 120
});

var b1Text = new Konva.Text({
  text: '1',
  x: pt_b1Hex_X,
  y: pt_b1Hex_Y,
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

var b2Text = new Konva.Text({
  text: '2',
  x: pt_b2Hex_X,
  y: pt_b2Hex_Y,
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

var b3Text = new Konva.Text({
  text: '3',
  x: pt_b3Hex_X,
  y: pt_b3Hex_Y,
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

var b4Text = new Konva.Text({
  text: '4',
  x: pt_b4Hex_X,
  y: pt_b4Hex_Y,
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


var b5Text = new Konva.Text({
  text: '5',
  x: pt_b5Hex_X,
  y: pt_b5Hex_Y,
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


var b6Text = new Konva.Text({
  text: '6',
  x: pt_b6Hex_X,
  y: pt_b6Hex_Y,
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


var b7Text = new Konva.Text({
  text: '7',
  x: pt_b7Hex_X,
  y: pt_b7Hex_Y,
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


var b8Text = new Konva.Text({
  text: '8',
  x: pt_b8Hex_X,
  y: pt_b8Hex_Y,
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

rotationChangedListener.addListener(function() {
  b1Text.rotate(-DOMAIN_LAYER_BOARD_ROTATION);
  b2Text.rotate(-DOMAIN_LAYER_BOARD_ROTATION);
  b3Text.rotate(-DOMAIN_LAYER_BOARD_ROTATION);
  b4Text.rotate(-DOMAIN_LAYER_BOARD_ROTATION);
  b5Text.rotate(-DOMAIN_LAYER_BOARD_ROTATION);
  b6Text.rotate(-DOMAIN_LAYER_BOARD_ROTATION);
  b7Text.rotate(-DOMAIN_LAYER_BOARD_ROTATION);
  b8Text.rotate(-DOMAIN_LAYER_BOARD_ROTATION);
});
