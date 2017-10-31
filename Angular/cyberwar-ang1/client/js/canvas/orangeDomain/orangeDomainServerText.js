/**
 * ORANGE DOMAIN TEXT
 * Requires:
 *    ../domainLibs/konvaConfigSettings.js
 *    ../domainLibs/serverPointCoordinates.js
 */
var orangeBaseText = new Konva.Text({
  text: 'CaffeineCowboy',
  x: BASE_BOARD_WIDTH / 1.41,
  y: BASE_BOARD_HEIGHT / 1.29,
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
  rotation: 300
});

var o1Text = new Konva.Text({
  text: nodeValOne,
  x: pt_o1Hex_X,
  y: pt_o1Hex_Y,
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

var o2Text = new Konva.Text({
  text: nodeValOne,
  x: pt_o2Hex_X,
  y: pt_o2Hex_Y,
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

var o3Text = new Konva.Text({
  text: nodeValOne,
  x: pt_o3Hex_X,
  y: pt_o3Hex_Y,
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

var o4Text = new Konva.Text({
  text: nodeValOne,
  x: pt_o4Hex_X,
  y: pt_o4Hex_Y,
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


var o5Text = new Konva.Text({
  text: nodeValOne,
  x: pt_o5Hex_X,
  y: pt_o5Hex_Y,
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


var o6Text = new Konva.Text({
  text: nodeValOne,
  x: pt_o6Hex_X,
  y: pt_o6Hex_Y,
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


var o7Text = new Konva.Text({
  text: nodeValOne,
  x: pt_o7Hex_X,
  y: pt_o7Hex_Y,
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


var o8Text = new Konva.Text({
  text: nodeValOne,
  x: pt_o8Hex_X,
  y: pt_o8Hex_Y,
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
  o1Text.rotate(-DOMAIN_LAYER_BOARD_ROTATION);
  o2Text.rotate(-DOMAIN_LAYER_BOARD_ROTATION);
  o3Text.rotate(-DOMAIN_LAYER_BOARD_ROTATION);
  o4Text.rotate(-DOMAIN_LAYER_BOARD_ROTATION);
  o5Text.rotate(-DOMAIN_LAYER_BOARD_ROTATION);
  o6Text.rotate(-DOMAIN_LAYER_BOARD_ROTATION);
  o7Text.rotate(-DOMAIN_LAYER_BOARD_ROTATION);
  o8Text.rotate(-DOMAIN_LAYER_BOARD_ROTATION);
});
