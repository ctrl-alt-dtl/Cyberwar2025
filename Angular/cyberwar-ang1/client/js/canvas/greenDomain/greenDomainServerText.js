/**
 * GREEN DOMAIN TEXT
 * Requires:
 *    ../domainLibs/konvaConfigSettings.js
 *    ../domainLibs/serverPointCoordinates.js
 */
var greenBaseText = new Konva.Text({
  text: 'CuttlePhish',
  x: BASE_BOARD_WIDTH / 1.8,
  y: BASE_BOARD_HEIGHT / 8.4,
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
  rotation: 180
});

var g1Text = new Konva.Text({
  text: '1',
  x: pt_g1Hex_X,
  y: pt_g1Hex_Y,
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

var g2Text = new Konva.Text({
  text: '2',
  x: pt_g2Hex_X,
  y: pt_g2Hex_Y,
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

var g3Text = new Konva.Text({
  text: '3',
  x: pt_g3Hex_X,
  y: pt_g3Hex_Y,
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

var g4Text = new Konva.Text({
  text: '4',
  x: pt_g4Hex_X,
  y: pt_g4Hex_Y,
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


var g5Text = new Konva.Text({
  text: '5',
  x: pt_g5Hex_X,
  y: pt_g5Hex_Y,
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


var g6Text = new Konva.Text({
  text: '6',
  x: pt_g6Hex_X,
  y: pt_g6Hex_Y,
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


var g7Text = new Konva.Text({
  text: '7',
  x: pt_g7Hex_X,
  y: pt_g7Hex_Y,
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


var g8Text = new Konva.Text({
  text: '8',
  x: pt_g8Hex_X,
  y: pt_g8Hex_Y,
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
  g1Text.rotate(-DOMAIN_LAYER_BOARD_ROTATION);
  g2Text.rotate(-DOMAIN_LAYER_BOARD_ROTATION);
  g3Text.rotate(-DOMAIN_LAYER_BOARD_ROTATION);
  g4Text.rotate(-DOMAIN_LAYER_BOARD_ROTATION);
  g5Text.rotate(-DOMAIN_LAYER_BOARD_ROTATION);
  g6Text.rotate(-DOMAIN_LAYER_BOARD_ROTATION);
  g7Text.rotate(-DOMAIN_LAYER_BOARD_ROTATION);
  g8Text.rotate(-DOMAIN_LAYER_BOARD_ROTATION);
});
