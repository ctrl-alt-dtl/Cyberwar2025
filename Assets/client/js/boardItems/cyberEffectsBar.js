// WINDOW
var cewTopRow = new Konva.Rect({
  x: BASE_BOARD_WIDTH / 1.355,
  y: BASE_BOARD_HEIGHT / 100,
  width: BASE_BOARD_WIDTH / 3.96,
  height: BASE_BOARD_HEIGHT / 55,
  fill: 'white',
  stroke: 'black',
  strokeWidth: 2
});

var cewEffectTypesRow = new Konva.Rect({
  x: BASE_BOARD_WIDTH / 1.355,
  y: BASE_BOARD_HEIGHT / 35,
  width: BASE_BOARD_WIDTH / 3.96,
  height: BASE_BOARD_HEIGHT / 55,
  fill: 'white',
  stroke: 'black',
  strokeWidth: 2
});

var cewTier1Row = new Konva.Rect({
  x: BASE_BOARD_WIDTH / 1.355,
  y: BASE_BOARD_HEIGHT / 22,
  width: BASE_BOARD_WIDTH / 3.96,
  height: BASE_BOARD_HEIGHT / 55,
  fill: 'white',
  stroke: 'black',
  strokeWidth: 2
});

var cewTier2Row = new Konva.Rect({
  x: BASE_BOARD_WIDTH / 1.355,
  y: BASE_BOARD_HEIGHT / 12,
  width: BASE_BOARD_WIDTH / 3.96,
  height: BASE_BOARD_HEIGHT / 30,
  fill: 'white',
  stroke: 'black',
  strokeWidth: 2
});

var cewTier3Row = new Konva.Rect({
  x: BASE_BOARD_WIDTH / 1.355,
  y: BASE_BOARD_HEIGHT / 7.05,
  width: BASE_BOARD_WIDTH / 3.96,
  height: BASE_BOARD_HEIGHT / 30,
  fill: 'white',
  stroke: 'black',
  strokeWidth: 2
});

var cewLevelBarRow = new Konva.Rect({
  x: BASE_BOARD_WIDTH / 1.355,
  y: BASE_BOARD_HEIGHT / 5.7,
  width: BASE_BOARD_WIDTH / 3.96,
  height: BASE_BOARD_HEIGHT / 25,
  fill: 'white',
  stroke: 'black',
  strokeWidth: 2
});


// TEXT
var cewTopRowText = new Konva.Text({
  text: 'Cyber Effects',
  x: BASE_BOARD_WIDTH / 1.21,
  y: BASE_BOARD_HEIGHT / 97,
  width: ceWindowTextWidth,
  fontFamily:'sans-serif',
  fontSize: ceWindowTextSize,
  fontStyle: 'bold',
  fill: 'black',
  rotation: 0
});

var cewEffectsLabelText = new Konva.Text({
  text: 'Effects',
  x: BASE_BOARD_WIDTH / 1.355,
  y: BASE_BOARD_HEIGHT / 97,
  width: ceWindowTextWidth,
  fontFamily:'sans-serif',
  fontSize: ceWindowTextSize,
  fontStyle: 'bold',
  fill: 'black',
  rotation: 0
});

var cewEffectsTierText = new Konva.Text({
  text: 'Effects',
  x: BASE_BOARD_WIDTH / 1.355,
  y: BASE_BOARD_HEIGHT / 97,
  width: ceWindowTextWidth,
  fontFamily:'sans-serif',
  fontSize: ceWindowTextSize,
  fontStyle: 'bold',
  fill: 'black',
  rotation: 0
});