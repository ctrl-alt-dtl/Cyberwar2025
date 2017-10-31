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
  text: nodeValOne,
  x: konvaHexPositions[Color.PURPLE][1].x,
  y: konvaHexPositions[Color.PURPLE][1].y,
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
konvaHexTexts[Color.PURPLE][1] = p1Text;

var p2Text = new Konva.Text({
  text: nodeValOne,
  x: konvaHexPositions[Color.PURPLE][2].x,
  y: konvaHexPositions[Color.PURPLE][2].y,
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
konvaHexTexts[Color.PURPLE][2] = p2Text;

var p3Text = new Konva.Text({
  text: nodeValOne,
  x: konvaHexPositions[Color.PURPLE][3].x,
  y: konvaHexPositions[Color.PURPLE][3].y,
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
konvaHexTexts[Color.PURPLE][3] = p3Text;

var p4Text = new Konva.Text({
  text: nodeValOne,
  x: konvaHexPositions[Color.PURPLE][4].x,
  y: konvaHexPositions[Color.PURPLE][4].y,
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
konvaHexTexts[Color.PURPLE][4] = p4Text;

var p5Text = new Konva.Text({
  text: nodeValOne,
  x: konvaHexPositions[Color.PURPLE][5].x,
  y: konvaHexPositions[Color.PURPLE][5].y,
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
konvaHexTexts[Color.PURPLE][5] = p5Text;

var p6Text = new Konva.Text({
  text: nodeValOne,
  x: konvaHexPositions[Color.PURPLE][6].x,
  y: konvaHexPositions[Color.PURPLE][6].y,
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
konvaHexTexts[Color.PURPLE][6] = p6Text;

var p7Text = new Konva.Text({
  text: nodeValOne,
  x: konvaHexPositions[Color.PURPLE][7].x,
  y: konvaHexPositions[Color.PURPLE][7].y,
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
konvaHexTexts[Color.PURPLE][7] = p7Text;

var p8Text = new Konva.Text({
  text: nodeValOne,
  x: konvaHexPositions[Color.PURPLE][8].x,
  y: konvaHexPositions[Color.PURPLE][8].y,
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
konvaHexTexts[Color.PURPLE][8] = p8Text;

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
