/**
 * RED DOMAIN TEXT
 * Requires:
 *    ../domainLibs/konvaConfigSettings.js
 *    ../domainLibs/serverPointCoordinates.js
 */
var redBaseText = new Konva.Text({
  text: 'DotEvil',
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
  x: konvaHexPositions[Color.RED][1].x,
  y: konvaHexPositions[Color.RED][1].y,
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
konvaHexTexts[Color.RED][1] = r1Text;

var r2Text = new Konva.Text({
  text: nodeValOne,
  x: konvaHexPositions[Color.RED][2].x,
  y: konvaHexPositions[Color.RED][2].y,
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
konvaHexTexts[Color.RED][2] = r2Text;

var r3Text = new Konva.Text({
  text: nodeValOne,
  x: konvaHexPositions[Color.RED][3].x,
  y: konvaHexPositions[Color.RED][3].y,
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
konvaHexTexts[Color.RED][3] = r3Text;

var r4Text = new Konva.Text({
  text: nodeValOne,
  x: konvaHexPositions[Color.RED][4].x,
  y: konvaHexPositions[Color.RED][4].y,
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
konvaHexTexts[Color.RED][4] = r4Text;

var r5Text = new Konva.Text({
  text: nodeValOne,
  x: konvaHexPositions[Color.RED][5].x,
  y: konvaHexPositions[Color.RED][5].y,
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
konvaHexTexts[Color.RED][5] = r5Text;

var r6Text = new Konva.Text({
  text: nodeValOne,
  x: konvaHexPositions[Color.RED][6].x,
  y: konvaHexPositions[Color.RED][6].y,
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
konvaHexTexts[Color.RED][6] = r6Text;

var r7Text = new Konva.Text({
  text: nodeValOne,
  x: konvaHexPositions[Color.RED][7].x,
  y: konvaHexPositions[Color.RED][7].y,
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
konvaHexTexts[Color.RED][7] = r7Text;

var r8Text = new Konva.Text({
  text: nodeValOne,
  x: konvaHexPositions[Color.RED][8].x,
  y: konvaHexPositions[Color.RED][8].y,
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
konvaHexTexts[Color.RED][8] = r8Text;

rotationChangedListener.addListener(function() {
  r1Text.rotate(-DOMAIN_LAYER_BOARD_ROTATION);
  r2Text.rotate(-DOMAIN_LAYER_BOARD_ROTATION);
  r3Text.rotate(-DOMAIN_LAYER_BOARD_ROTATION);
  r4Text.rotate(-DOMAIN_LAYER_BOARD_ROTATION);
  r5Text.rotate(-DOMAIN_LAYER_BOARD_ROTATION);
  r6Text.rotate(-DOMAIN_LAYER_BOARD_ROTATION);
  r7Text.rotate(-DOMAIN_LAYER_BOARD_ROTATION);
  r8Text.rotate(-DOMAIN_LAYER_BOARD_ROTATION);
});
