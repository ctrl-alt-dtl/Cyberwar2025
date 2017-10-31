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
konvaHexTexts[Color.BLUE][0] = blueBaseText;

var b1Text = new Konva.Text({
  text: nodeValOne,
  x: konvaHexPositions[Color.BLUE][1].x,
  y: konvaHexPositions[Color.BLUE][1].y,
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
konvaHexTexts[Color.BLUE][1] = b1Text;

var b2Text = new Konva.Text({
  text: nodeValOne,
  x: konvaHexPositions[Color.BLUE][2].x,
  y: konvaHexPositions[Color.BLUE][2].y,
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
konvaHexTexts[Color.BLUE][2] = b2Text;

var b3Text = new Konva.Text({
  text: nodeValOne,
  x: konvaHexPositions[Color.BLUE][3].x,
  y: konvaHexPositions[Color.BLUE][3].y,
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
konvaHexTexts[Color.BLUE][3] = b3Text;

var b4Text = new Konva.Text({
  text: nodeValOne,
  x: konvaHexPositions[Color.BLUE][4].x,
  y: konvaHexPositions[Color.BLUE][4].y,
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
konvaHexTexts[Color.BLUE][4] = b4Text;

var b5Text = new Konva.Text({
  text: nodeValOne,
  x: konvaHexPositions[Color.BLUE][5].x,
  y: konvaHexPositions[Color.BLUE][5].y,
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
konvaHexTexts[Color.BLUE][5] = b5Text;

var b6Text = new Konva.Text({
  text: nodeValOne,
  x: konvaHexPositions[Color.BLUE][6].x,
  y: konvaHexPositions[Color.BLUE][6].y,
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
konvaHexTexts[Color.BLUE][6] = b6Text;

var b7Text = new Konva.Text({
  text: nodeValOne,
  x: konvaHexPositions[Color.BLUE][7].x,
  y: konvaHexPositions[Color.BLUE][7].y,
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
konvaHexTexts[Color.BLUE][7] = b7Text;

var b8Text = new Konva.Text({
  text: nodeValOne,
  x: konvaHexPositions[Color.BLUE][8].x,
  y: konvaHexPositions[Color.BLUE][8].y,
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
konvaHexTexts[Color.BLUE][8] = b8Text;

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
