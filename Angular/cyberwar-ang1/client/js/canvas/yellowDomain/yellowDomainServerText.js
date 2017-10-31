/**
 * YELLOW DOMAIN TEXT
 * Requires:
 *    ../domainLibs/konvaConfigSettings.js
 *    ../domainLibs/serverPointCoordinates.js
 */
var yellowBaseText = new Konva.Text({
  text: 'BuzzKill',
  x: BASE_BOARD_WIDTH / 1.315,
  y: BASE_BOARD_HEIGHT / 2.91,
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
  rotation: 240
});

var y1Text = new Konva.Text({
  text: nodeValOne,
  x: pt_y1Hex_X,
  y: pt_y1Hex_Y,
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

var y2Text = new Konva.Text({
  text: nodeValOne,
  x: pt_y2Hex_X,
  y: pt_y2Hex_Y,
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

var y3Text = new Konva.Text({
  text: nodeValOne,
  x: pt_y3Hex_X,
  y: pt_y3Hex_Y,
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

var y4Text = new Konva.Text({
  text: nodeValOne,
  x: pt_y4Hex_X,
  y: pt_y4Hex_Y,
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


var y5Text = new Konva.Text({
  text: nodeValOne,
  x: pt_y5Hex_X,
  y: pt_y5Hex_Y,
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


var y6Text = new Konva.Text({
  text: nodeValOne,
  x: pt_y6Hex_X,
  y: pt_y6Hex_Y,
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


var y7Text = new Konva.Text({
  text: nodeValOne,
  x: pt_y7Hex_X,
  y: pt_y7Hex_Y,
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


var y8Text = new Konva.Text({
  text: nodeValOne,
  x: pt_y8Hex_X,
  y: pt_y8Hex_Y,
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
  y1Text.rotate(-DOMAIN_LAYER_BOARD_ROTATION);
  y2Text.rotate(-DOMAIN_LAYER_BOARD_ROTATION);
  y3Text.rotate(-DOMAIN_LAYER_BOARD_ROTATION);
  y4Text.rotate(-DOMAIN_LAYER_BOARD_ROTATION);
  y5Text.rotate(-DOMAIN_LAYER_BOARD_ROTATION);
  y6Text.rotate(-DOMAIN_LAYER_BOARD_ROTATION);
  y7Text.rotate(-DOMAIN_LAYER_BOARD_ROTATION);
  y8Text.rotate(-DOMAIN_LAYER_BOARD_ROTATION);
});
