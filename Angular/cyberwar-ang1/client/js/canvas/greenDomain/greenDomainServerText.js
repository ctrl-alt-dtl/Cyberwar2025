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
  text: nodeValOne,
  x: konvaHexPositions[Color.GREEN][1].x,
  y: konvaHexPositions[Color.GREEN][1].y,
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
konvaHexTexts[Color.GREEN][1] = g1Text;

var g2Text = new Konva.Text({
  text: nodeValOne,
  x: konvaHexPositions[Color.GREEN][2].x,
  y: konvaHexPositions[Color.GREEN][2].y,
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
konvaHexTexts[Color.GREEN][2] = g2Text;

var g3Text = new Konva.Text({
  text: nodeValOne,
  x: konvaHexPositions[Color.GREEN][3].x,
  y: konvaHexPositions[Color.GREEN][3].y,
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
konvaHexTexts[Color.GREEN][3] = g3Text;

var g4Text = new Konva.Text({
  text: nodeValOne,
  x: konvaHexPositions[Color.GREEN][4].x,
  y: konvaHexPositions[Color.GREEN][4].y,
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
konvaHexTexts[Color.GREEN][4] = g4Text;

var g5Text = new Konva.Text({
  text: nodeValOne,
  x: konvaHexPositions[Color.GREEN][5].x,
  y: konvaHexPositions[Color.GREEN][5].y,
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
konvaHexTexts[Color.GREEN][5] = g5Text;

var g6Text = new Konva.Text({
  text: nodeValOne,
  x: konvaHexPositions[Color.GREEN][6].x,
  y: konvaHexPositions[Color.GREEN][6].y,
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
konvaHexTexts[Color.GREEN][6] = g6Text;

var g7Text = new Konva.Text({
  text: nodeValOne,
  x: konvaHexPositions[Color.GREEN][7].x,
  y: konvaHexPositions[Color.GREEN][7].y,
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
konvaHexTexts[Color.GREEN][7] = g7Text;

var g8Text = new Konva.Text({
  text: nodeValOne,
  x: konvaHexPositions[Color.GREEN][8].x,
  y: konvaHexPositions[Color.GREEN][8].y,
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
konvaHexTexts[Color.GREEN][8] = g8Text;

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
