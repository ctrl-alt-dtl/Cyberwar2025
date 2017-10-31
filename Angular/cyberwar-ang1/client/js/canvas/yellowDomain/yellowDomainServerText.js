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
  x: konvaHexPositions[Color.YELLOW][1].x,
  y: konvaHexPositions[Color.YELLOW][1].y,
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
konvaHexTexts[Color.YELLOW][1] = y1Text;

var y2Text = new Konva.Text({
  text: nodeValOne,
  x: konvaHexPositions[Color.YELLOW][2].x,
  y: konvaHexPositions[Color.YELLOW][2].y,
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
konvaHexTexts[Color.YELLOW][2] = y2Text;

var y3Text = new Konva.Text({
  text: nodeValOne,
  x: konvaHexPositions[Color.YELLOW][3].x,
  y: konvaHexPositions[Color.YELLOW][3].y,
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
konvaHexTexts[Color.YELLOW][3] = y3Text;

var y4Text = new Konva.Text({
  text: nodeValOne,
  x: konvaHexPositions[Color.YELLOW][4].x,
  y: konvaHexPositions[Color.YELLOW][4].y,
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
konvaHexTexts[Color.YELLOW][4] = y4Text;

var y5Text = new Konva.Text({
  text: nodeValOne,
  x: konvaHexPositions[Color.YELLOW][5].x,
  y: konvaHexPositions[Color.YELLOW][5].y,
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
konvaHexTexts[Color.YELLOW][5] = y5Text;

var y6Text = new Konva.Text({
  text: nodeValOne,
  x: konvaHexPositions[Color.YELLOW][6].x,
  y: konvaHexPositions[Color.YELLOW][6].y,
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
konvaHexTexts[Color.YELLOW][6] = y6Text;

var y7Text = new Konva.Text({
  text: nodeValOne,
  x: konvaHexPositions[Color.YELLOW][7].x,
  y: konvaHexPositions[Color.YELLOW][7].y,
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
konvaHexTexts[Color.YELLOW][7] = y7Text;

var y8Text = new Konva.Text({
  text: nodeValOne,
  x: konvaHexPositions[Color.YELLOW][8].x,
  y: konvaHexPositions[Color.YELLOW][8].y,
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
konvaHexTexts[Color.YELLOW][8] = y8Text;

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
