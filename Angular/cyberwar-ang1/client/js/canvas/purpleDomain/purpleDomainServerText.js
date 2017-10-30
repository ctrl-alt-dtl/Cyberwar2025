/**
 * PURPLE DOMAIN TEXT
 * Requires:
 *    ../domainLibs/konvaConfigSettings.js
 *    ../domainLibs/serverPointCoordinates.js
 */
var purpleBaseText = new Konva.Text({
  text: 'WMDeez',
  x: BASE_BOARD_WIDTH / 4.22,
  y: BASE_BOARD_HEIGHT / 1.52,
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
  rotation: 60
});

var p1Text = new Konva.Text({
  text: '1',
  x: pt_p1Hex_X,
  y: pt_p1Hex_Y,
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

var p2Text = new Konva.Text({
  text: '2',
  x: pt_p2Hex_X,
  y: pt_p2Hex_Y,
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

var p3Text = new Konva.Text({
  text: '3',
  x: pt_p3Hex_X,
  y: pt_p3Hex_Y,
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

var p4Text = new Konva.Text({
  text: '4',
  x: pt_p4Hex_X,
  y: pt_p4Hex_Y,
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


var p5Text = new Konva.Text({
  text: '5',
  x: pt_p5Hex_X,
  y: pt_p5Hex_Y,
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


var p6Text = new Konva.Text({
  text: '6',
  x: pt_p6Hex_X,
  y: pt_p6Hex_Y,
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


var p7Text = new Konva.Text({
  text: '7',
  x: pt_p7Hex_X,
  y: pt_p7Hex_Y,
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


var p8Text = new Konva.Text({
  text: '8',
  x: pt_p8Hex_X,
  y: pt_p8Hex_Y,
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
  p1Text.rotate(-DOMAIN_LAYER_BOARD_ROTATION);
  p2Text.rotate(-DOMAIN_LAYER_BOARD_ROTATION);
  p3Text.rotate(-DOMAIN_LAYER_BOARD_ROTATION);
  p4Text.rotate(-DOMAIN_LAYER_BOARD_ROTATION);
  p5Text.rotate(-DOMAIN_LAYER_BOARD_ROTATION);
  p6Text.rotate(-DOMAIN_LAYER_BOARD_ROTATION);
  p7Text.rotate(-DOMAIN_LAYER_BOARD_ROTATION);
  p8Text.rotate(-DOMAIN_LAYER_BOARD_ROTATION);
});
