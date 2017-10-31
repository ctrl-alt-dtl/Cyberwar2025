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
  x: konvaHexPositions[Color.ORANGE][1].x,
  y: konvaHexPositions[Color.ORANGE][1].y,
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
konvaHexTexts[Color.ORANGE][1] = o1Text;

var o2Text = new Konva.Text({
  text: nodeValOne,
  x: konvaHexPositions[Color.ORANGE][2].x,
  y: konvaHexPositions[Color.ORANGE][2].y,
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
konvaHexTexts[Color.ORANGE][2] = o2Text;

var o3Text = new Konva.Text({
  text: nodeValOne,
  x: konvaHexPositions[Color.ORANGE][3].x,
  y: konvaHexPositions[Color.ORANGE][3].y,
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
konvaHexTexts[Color.ORANGE][3] = o3Text;

var o4Text = new Konva.Text({
  text: nodeValOne,
  x: konvaHexPositions[Color.ORANGE][4].x,
  y: konvaHexPositions[Color.ORANGE][4].y,
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
konvaHexTexts[Color.ORANGE][4] = o4Text;

var o5Text = new Konva.Text({
  text: nodeValOne,
  x: konvaHexPositions[Color.ORANGE][5].x,
  y: konvaHexPositions[Color.ORANGE][5].y,
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
konvaHexTexts[Color.ORANGE][5] = o5Text;

var o6Text = new Konva.Text({
  text: nodeValOne,
  x: konvaHexPositions[Color.ORANGE][6].x,
  y: konvaHexPositions[Color.ORANGE][6].y,
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
konvaHexTexts[Color.ORANGE][6] = o6Text;

var o7Text = new Konva.Text({
  text: nodeValOne,
  x: konvaHexPositions[Color.ORANGE][7].x,
  y: konvaHexPositions[Color.ORANGE][7].y,
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
konvaHexTexts[Color.ORANGE][7] = o7Text;

var o8Text = new Konva.Text({
  text: nodeValOne,
  x: konvaHexPositions[Color.ORANGE][8].x,
  y: konvaHexPositions[Color.ORANGE][8].y,
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
konvaHexTexts[Color.ORANGE][8] = o8Text;

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
