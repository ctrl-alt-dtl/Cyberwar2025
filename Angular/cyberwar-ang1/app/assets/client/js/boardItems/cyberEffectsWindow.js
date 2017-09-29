// WINDOW
var cewTopRow = new Konva.Rect({
  x: BASE_BOARD_WIDTH / 1.355,
  y: BASE_BOARD_HEIGHT / 100,
  width: BASE_BOARD_WIDTH / 3.96,
  height: BASE_BOARD_HEIGHT / 45,
  fill: 'white',
  stroke: 'black',
  strokeWidth: 2
});

var cewEffectTypesRow = new Konva.Rect({
  x: BASE_BOARD_WIDTH / 1.355,
  y: BASE_BOARD_HEIGHT / 31,
  width: BASE_BOARD_WIDTH / 3.96,
  height: BASE_BOARD_HEIGHT / 30,
  fill: 'white',
  stroke: 'black',
  strokeWidth: 2
});

var cewTier1Row = new Konva.Rect({
  x: BASE_BOARD_WIDTH / 1.355,
  y: BASE_BOARD_HEIGHT / 15.2,
  width: BASE_BOARD_WIDTH / 3.96,
  height: BASE_BOARD_HEIGHT / 30,
  fill: 'white',
  stroke: 'black',
  strokeWidth: 2
});

var cewTier2Row = new Konva.Rect({
  x: BASE_BOARD_WIDTH / 1.355,
  y: BASE_BOARD_HEIGHT / 10.1,
  width: BASE_BOARD_WIDTH / 3.96,
  height: BASE_BOARD_HEIGHT / 30,
  fill: 'white',
  stroke: 'black',
  strokeWidth: 2
});

var cewTier3Row = new Konva.Rect({
  x: BASE_BOARD_WIDTH / 1.355,
  y: BASE_BOARD_HEIGHT / 7.55,
  width: BASE_BOARD_WIDTH / 3.96,
  height: BASE_BOARD_HEIGHT / 30,
  fill: 'white',
  stroke: 'black',
  strokeWidth: 2
});

var cewLevelBarRow = new Konva.Rect({
  x: BASE_BOARD_WIDTH / 1.355,
  y: BASE_BOARD_HEIGHT / 6,
  width: BASE_BOARD_WIDTH / 3.96,
  height: BASE_BOARD_HEIGHT / 20,
  fill: 'white',
  stroke: 'black',
  strokeWidth: 2
});


// CYBER EFFECT LABEL ITEMS
var cewTier1Row = new Konva.Rect({
  x: BASE_BOARD_WIDTH / 1.355,
  y: BASE_BOARD_HEIGHT / 15.2,
  width: BASE_BOARD_WIDTH / 3.96,
  height: BASE_BOARD_HEIGHT / 30,
  fill: 'white',
  stroke: 'black',
  strokeWidth: 2
});

// LINE SEPARATORS
var cewLineDCO = new Konva.Line({
  points: [
    BASE_BOARD_WIDTH / 1.2392,
    BASE_BOARD_HEIGHT / 30,
    BASE_BOARD_WIDTH / 1.2392,
    BASE_BOARD_HEIGHT / 4.65
  ],
  stroke: 'black',
  strokeWidth: 3,
  lineCap: 'round',
  lineJoin: 'round',
  visible: lineVisible
});

var cewLineOCO = new Konva.Line({
  points: [
    BASE_BOARD_WIDTH / 1.143,
    BASE_BOARD_HEIGHT / 30,
    BASE_BOARD_WIDTH / 1.143,
    BASE_BOARD_HEIGHT / 4.65
  ],
  stroke: 'black',
  strokeWidth: 3,
  lineCap: 'round',
  lineJoin: 'round',
  visible: lineVisible
});

var cewLineCNE = new Konva.Line({
  points: [
    BASE_BOARD_WIDTH / 1.06,
    BASE_BOARD_HEIGHT / 30,
    BASE_BOARD_WIDTH / 1.06,
    BASE_BOARD_HEIGHT / 4.65
  ],
  stroke: 'black',
  strokeWidth: 3,
  lineCap: 'round',
  lineJoin: 'round',
  visible: lineVisible
});


// TEXT
var cewTopRowText = new Konva.Text({
  text: 'Cyber Effects',
  x: BASE_BOARD_WIDTH / 1.21,
  y: BASE_BOARD_HEIGHT / 90,
  width: ceWindowTitleTextWidth,
  fontFamily:'sans-serif',
  fontSize: ceWindowTitleTextSize,
  fontStyle: 'bold',
  fill: 'black',
  rotation: 0
});

var cewEffectsLabelText = new Konva.Text({
  text: '',
  x: BASE_BOARD_WIDTH / 1.355,
  y: BASE_BOARD_HEIGHT / 97,
  width: ceWindowTextWidth,
  fontFamily:'sans-serif',
  fontSize: ceWindowTextSize,
  fontStyle: 'bold',
  fill: 'black',
  rotation: 0
});

// DCO/CND Effects Text
var cewEffectsDCOText = new Konva.Text({
  text: 'DCO/CND',
  x: BASE_BOARD_WIDTH / 1.335,
  y: BASE_BOARD_HEIGHT / 23,
  width: ceWindowTitleTextWidth,
  fontFamily:'sans-serif',
  fontSize: ceWindowTextSize,
  fontStyle: 'bold',
  fill: 'black',
  rotation: 0
});

var cewTier1DCOText = new Konva.Text({
  text: 'Secure',
  x: BASE_BOARD_WIDTH / 1.345,
  y: BASE_BOARD_HEIGHT / 13.5,
  width: ceWindowTitleTextWidth,
  fontFamily:'sans-serif',
  fontSize: ceWindowTextSize,
  fontStyle: 'bold',
  fill: 'black',
  rotation: 0
});

var cewTier1DCOBlk = new Konva.Rect({
  x: BASE_BOARD_WIDTH / 1.3535,
  y: BASE_BOARD_HEIGHT / 15.2,
  width: BASE_BOARD_WIDTH / 14.9,
  height: BASE_BOARD_HEIGHT/ 31,
  fill: 'green',
  stroke: 'black',
  strokeWidth: '1'
});

var cewTier2DCOText = new Konva.Text({
  text: 'Expel',
  x: BASE_BOARD_WIDTH / 1.345,
  y: BASE_BOARD_HEIGHT / 9.2,
  width: ceWindowTitleTextWidth,
  fontFamily:'sans-serif',
  fontSize: ceWindowTextSize,
  fontStyle: 'bold',
  fill: 'black',
  rotation: 0
});

var cewTier2DCOBlk = new Konva.Rect({
  x: BASE_BOARD_WIDTH / 1.3535,
  y: BASE_BOARD_HEIGHT / 10.1,
  width: BASE_BOARD_WIDTH / 14.9,
  height: BASE_BOARD_HEIGHT/ 31,
  fill: 'red',
  stroke: 'black',
  strokeWidth: '1'
});

var cewTier3DCOText = new Konva.Text({
  text: 'Analyze',
  x: BASE_BOARD_WIDTH / 1.345,
  y: BASE_BOARD_HEIGHT / 7,
  width: ceWindowTitleTextWidth,
  fontFamily:'sans-serif',
  fontSize: ceWindowTextSize,
  fontStyle: 'bold',
  fill: 'black',
  rotation: 0
});

var cewTier3DCOBlk = new Konva.Rect({
  x: BASE_BOARD_WIDTH / 1.3535,
  y: BASE_BOARD_HEIGHT / 7.55,
  width: BASE_BOARD_WIDTH / 14.9,
  height: BASE_BOARD_HEIGHT/ 31,
  fill: 'red',
  stroke: 'black',
  strokeWidth: '1'
});

// OCO/CNO Effects Text
var cewEffectsOCOText = new Konva.Text({
  text: 'OCO/CNO',
  x: BASE_BOARD_WIDTH / 1.224,
  y: BASE_BOARD_HEIGHT / 23,
  width: ceWindowTitleTextWidth,
  fontFamily:'sans-serif',
  fontSize: ceWindowTextSize,
  fontStyle: 'bold',
  fill: 'black',
  rotation: 0
});

var cewTier1OCOText = new Konva.Text({
  text: 'Acquire',
  x: BASE_BOARD_WIDTH / 1.23,
  y: BASE_BOARD_HEIGHT / 13.5,
  width: ceWindowTitleTextWidth,
  fontFamily:'sans-serif',
  fontSize: ceWindowTextSize,
  fontStyle: 'bold',
  fill: 'black',
  rotation: 0
});

var cewTier1OCOBlk = new Konva.Rect({
  x: BASE_BOARD_WIDTH / 1.2392,
  y: BASE_BOARD_HEIGHT / 15.2,
  width: BASE_BOARD_WIDTH / 14.9,
  height: BASE_BOARD_HEIGHT/ 31,
  fill: 'green',
  stroke: 'black',
  strokeWidth: '1'
});

var cewTier2OCOText = new Konva.Text({
  text: 'Manipulate',
  x: BASE_BOARD_WIDTH / 1.23,
  y: BASE_BOARD_HEIGHT / 9.2,
  width: ceWindowTitleTextWidth,
  fontFamily:'sans-serif',
  fontSize: ceWindowTextSize,
  fontStyle: 'bold',
  fill: 'black',
  rotation: 0
});

var cewTier2OCOBlk = new Konva.Rect({
  x: BASE_BOARD_WIDTH / 1.2392,
  y: BASE_BOARD_HEIGHT / 10.1,
  width: BASE_BOARD_WIDTH / 14.9,
  height: BASE_BOARD_HEIGHT/ 31,
  fill: 'red',
  stroke: 'black',
  strokeWidth: '1'
});

var cewTier3OCOText = new Konva.Text({
  text: 'Deny',
  x: BASE_BOARD_WIDTH / 1.23,
  y: BASE_BOARD_HEIGHT / 7,
  width: ceWindowTitleTextWidth,
  fontFamily:'sans-serif',
  fontSize: ceWindowTextSize,
  fontStyle: 'bold',
  fill: 'black',
  rotation: 0
});

var cewTier3OCOBlk = new Konva.Rect({
  x: BASE_BOARD_WIDTH / 1.2392,
  y: BASE_BOARD_HEIGHT / 7.55,
  width: BASE_BOARD_WIDTH / 14.9,
  height: BASE_BOARD_HEIGHT/ 31,
  fill: 'red',
  stroke: 'black',
  strokeWidth: '1'
});

// CNE Effects Text
var cewEffectsCNEText = new Konva.Text({
  text: 'CNE',
  x: BASE_BOARD_WIDTH / 1.115,
  y: BASE_BOARD_HEIGHT / 23,
  width: ceWindowTitleTextWidth,
  fontFamily:'sans-serif',
  fontSize: ceWindowTextSize,
  fontStyle: 'bold',
  fill: 'black',
  rotation: 0
});

var cewTier1CNEText = new Konva.Text({
  text: 'Scan',
  x: BASE_BOARD_WIDTH / 1.13,
  y: BASE_BOARD_HEIGHT / 13.5,
  width: ceWindowTitleTextWidth,
  fontFamily:'sans-serif',
  fontSize: ceWindowTextSize,
  fontStyle: 'bold',
  fill: 'black',
  rotation: 0
});

var cewTier1CNEBlk = new Konva.Rect({
  x: BASE_BOARD_WIDTH / 1.143,
  y: BASE_BOARD_HEIGHT / 15.2,
  width: BASE_BOARD_WIDTH / 14.9,
  height: BASE_BOARD_HEIGHT/ 31,
  fill: 'green',
  stroke: 'black',
  strokeWidth: '1'
});

var cewTier2CNEText = new Konva.Text({
  text: 'Exploit',
  x: BASE_BOARD_WIDTH / 1.13,
  y: BASE_BOARD_HEIGHT / 9.2,
  width: ceWindowTitleTextWidth,
  fontFamily:'sans-serif',
  fontSize: ceWindowTextSize,
  fontStyle: 'bold',
  fill: 'black',
  rotation: 0
});

var cewTier2CNEBlk = new Konva.Rect({
  x: BASE_BOARD_WIDTH / 1.143,
  y: BASE_BOARD_HEIGHT / 10.1,
  width: BASE_BOARD_WIDTH / 14.9,
  height: BASE_BOARD_HEIGHT/ 31,
  fill: 'red',
  stroke: 'black',
  strokeWidth: '1'
});

var cewTier3CNEText = new Konva.Text({
  text: 'Implant',
  x: BASE_BOARD_WIDTH / 1.13,
  y: BASE_BOARD_HEIGHT / 7,
  width: ceWindowTitleTextWidth,
  fontFamily:'sans-serif',
  fontSize: ceWindowTextSize,
  fontStyle: 'bold',
  fill: 'black',
  rotation: 0
});

var cewTier3CNEBlk = new Konva.Rect({
  x: BASE_BOARD_WIDTH / 1.143,
  y: BASE_BOARD_HEIGHT / 7.55,
  width: BASE_BOARD_WIDTH / 14.9,
  height: BASE_BOARD_HEIGHT/ 31,
  fill: 'red',
  stroke: 'black',
  strokeWidth: '1'
});


// Cyber Effects COST/AP Text
var cewCostText = new Konva.Text({
  text: 'COST TO USE',
  x: BASE_BOARD_WIDTH / 1.05,
  y: BASE_BOARD_HEIGHT / 26,
  width: BASE_BOARD_WIDTH / 31.22,
  fontFamily:'sans-serif',
  fontSize: BASE_BOARD_WIDTH / 116.36,
  fontStyle: 'bold',
  fill: 'black',
  align: 'center'
});

var cewTier1CostText = new Konva.Text({
  text: '1',
  x: BASE_BOARD_WIDTH / 1.037,
  y: BASE_BOARD_HEIGHT / 13.5,
  width: ceWindowTitleTextWidth,
  fontFamily:'sans-serif',
  fontSize: ceWindowTextSize,
  fontStyle: 'bold',
  fill: 'black',
  rotation: 0
});

var cewTier2CostText = new Konva.Text({
  text: '2',
  x: BASE_BOARD_WIDTH / 1.037,
  y: BASE_BOARD_HEIGHT / 9.2,
  width: ceWindowTitleTextWidth,
  fontFamily:'sans-serif',
  fontSize: ceWindowTextSize,
  fontStyle: 'bold',
  fill: 'black',
  rotation: 0
});

var cewTier3CostText = new Konva.Text({
  text: '3',
  x: BASE_BOARD_WIDTH / 1.037,
  y: BASE_BOARD_HEIGHT / 7,
  width: ceWindowTitleTextWidth,
  fontFamily:'sans-serif',
  fontSize: ceWindowTextSize,
  fontStyle: 'bold',
  fill: 'black',
  rotation: 0
});

var cewActionPointsLabelText = new Konva.Text({
  text: 'AP',
  x: BASE_BOARD_WIDTH / 1.043,
  y: BASE_BOARD_HEIGHT / 5.82,
  width: ceWindowAPTextWidth,
  fontFamily:'sans-serif',
  fontSize: ceWindowAPTextSize,
  fontStyle: 'bold',
  fill: 'black',
  rotation: 0
});

var cewActionPointsText = new Konva.Text({
  text: '0',
  x: BASE_BOARD_WIDTH / 1.038,
  y: BASE_BOARD_HEIGHT / 5.2,
  width: ceWindowAPTextWidth,
  fontFamily:'sans-serif',
  fontSize: ceWindowAPTextSize,
  fontStyle: 'bold',
  fill: 'black',
  rotation: 0
});

// DCO Research Points Blocks
var cewDCOresBlk1 = new Konva.Rect({
  x: BASE_BOARD_WIDTH / 1.3535,
  y: BASE_BOARD_HEIGHT / 5.97,
  width: BASE_BOARD_WIDTH / 60,
  height: BASE_BOARD_HEIGHT/ 60,
  fill: 'gray',
  stroke: 'black',
  strokeWidth: '1'
});

var cewDCOresBlk2 = new Konva.Rect({
  x: BASE_BOARD_WIDTH / 1.3235,
  y: BASE_BOARD_HEIGHT / 5.97,
  width: BASE_BOARD_WIDTH / 60,
  height: BASE_BOARD_HEIGHT/ 60,
  fill: 'gray',
  stroke: 'black',
  strokeWidth: '1'
});

var cewDCOresBlk3 = new Konva.Rect({
  x: BASE_BOARD_WIDTH / 1.2945,
  y: BASE_BOARD_HEIGHT / 5.97,
  width: BASE_BOARD_WIDTH / 60,
  height: BASE_BOARD_HEIGHT/ 60,
  fill: 'gray',
  stroke: 'black',
  strokeWidth: '1'
});

var cewDCOresBlk4 = new Konva.Rect({
  x: BASE_BOARD_WIDTH / 1.2665,
  y: BASE_BOARD_HEIGHT / 5.97,
  width: BASE_BOARD_WIDTH / 60,
  height: BASE_BOARD_HEIGHT/ 60,
  fill: 'gray',
  stroke: 'black',
  strokeWidth: '1'
});


var cewDCOresBlk5 = new Konva.Rect({
  x: BASE_BOARD_WIDTH / 1.3535,
  y: BASE_BOARD_HEIGHT / 5.43,
  width: BASE_BOARD_WIDTH / 60,
  height: BASE_BOARD_HEIGHT/ 60,
  fill: 'gray',
  stroke: 'black',
  strokeWidth: '1'
});

var cewDCOresBlk6 = new Konva.Rect({
  x: BASE_BOARD_WIDTH / 1.3235,
  y: BASE_BOARD_HEIGHT / 5.43,
  width: BASE_BOARD_WIDTH / 60,
  height: BASE_BOARD_HEIGHT/ 60,
  fill: 'gray',
  stroke: 'black',
  strokeWidth: '1'
});

var cewDCOresBlk7 = new Konva.Rect({
  x: BASE_BOARD_WIDTH / 1.2945,
  y: BASE_BOARD_HEIGHT / 5.43,
  width: BASE_BOARD_WIDTH / 60,
  height: BASE_BOARD_HEIGHT/ 60,
  fill: 'gray',
  stroke: 'black',
  strokeWidth: '1'
});


var cewDCOresBlk8 = new Konva.Rect({
  x: BASE_BOARD_WIDTH / 1.2665,
  y: BASE_BOARD_HEIGHT / 5.43,
  width: BASE_BOARD_WIDTH / 60,
  height: BASE_BOARD_HEIGHT/ 60,
  fill: 'gray',
  stroke: 'black',
  strokeWidth: '1'
});

var cewDCOresMinus = new Konva.Rect({
  x: BASE_BOARD_WIDTH / 1.3535,
  y: BASE_BOARD_HEIGHT / 4.97,
  width: BASE_BOARD_WIDTH / 30,
  height: BASE_BOARD_HEIGHT/ 70,
  fill: 'white',
  stroke: 'black',
  strokeWidth: '1'
});

var cewDCOresPlus = new Konva.Rect({
  x: BASE_BOARD_WIDTH / 1.2945,
  y: BASE_BOARD_HEIGHT / 4.97,
  width: BASE_BOARD_WIDTH / 30,
  height: BASE_BOARD_HEIGHT/ 70,
  fill: 'white',
  stroke: 'black',
  strokeWidth: '1'
});

var cewDCOresMinusText = new Konva.Text({
  text: '-',
  x: BASE_BOARD_WIDTH / 1.328,
  y: BASE_BOARD_HEIGHT / 5.09,
  width: cewResTextWidth,
  fontFamily:'sans-serif',
  fontSize: cewResTextSize,
  fontStyle: 'bold',
  fill: 'black',
  rotation: 0
});

var cewDCOresPlusText = new Konva.Text({
  text: '+',
  x: BASE_BOARD_WIDTH / 1.275,
  y: BASE_BOARD_HEIGHT / 5.09,
  width: cewResTextWidth,
  fontFamily:'sans-serif',
  fontSize: cewResTextSize,
  fontStyle: 'bold',
  fill: 'black',
  rotation: 0
});



// OCO Research Points Blocks
var cewOCOresBlk1 = new Konva.Rect({
  x: BASE_BOARD_WIDTH / 1.2392,
  y: BASE_BOARD_HEIGHT / 5.97,
  width: BASE_BOARD_WIDTH / 60,
  height: BASE_BOARD_HEIGHT/ 60,
  fill: 'gray',
  stroke: 'black',
  strokeWidth: '1'
});

var cewOCOresBlk2 = new Konva.Rect({
  x: BASE_BOARD_WIDTH / 1.2135,
  y: BASE_BOARD_HEIGHT / 5.97,
  width: BASE_BOARD_WIDTH / 60,
  height: BASE_BOARD_HEIGHT/ 60,
  fill: 'gray',
  stroke: 'black',
  strokeWidth: '1'
});

var cewOCOresBlk3 = new Konva.Rect({
  x: BASE_BOARD_WIDTH / 1.189,
  y: BASE_BOARD_HEIGHT / 5.97,
  width: BASE_BOARD_WIDTH / 60,
  height: BASE_BOARD_HEIGHT/ 60,
  fill: 'gray',
  stroke: 'black',
  strokeWidth: '1'
});

var cewOCOresBlk4 = new Konva.Rect({
  x: BASE_BOARD_WIDTH / 1.166,
  y: BASE_BOARD_HEIGHT / 5.97,
  width: BASE_BOARD_WIDTH / 60,
  height: BASE_BOARD_HEIGHT/ 60,
  fill: 'gray',
  stroke: 'black',
  strokeWidth: '1'
});


var cewOCOresBlk5 = new Konva.Rect({
  x: BASE_BOARD_WIDTH / 1.2392,
  y: BASE_BOARD_HEIGHT / 5.43,
  width: BASE_BOARD_WIDTH / 60,
  height: BASE_BOARD_HEIGHT/ 60,
  fill: 'gray',
  stroke: 'black',
  strokeWidth: '1'
});

var cewOCOresBlk6 = new Konva.Rect({
  x: BASE_BOARD_WIDTH / 1.2135,
  y: BASE_BOARD_HEIGHT / 5.43,
  width: BASE_BOARD_WIDTH / 60,
  height: BASE_BOARD_HEIGHT/ 60,
  fill: 'gray',
  stroke: 'black',
  strokeWidth: '1'
});

var cewOCOresBlk7 = new Konva.Rect({
  x: BASE_BOARD_WIDTH / 1.189,
  y: BASE_BOARD_HEIGHT / 5.43,
  width: BASE_BOARD_WIDTH / 60,
  height: BASE_BOARD_HEIGHT/ 60,
  fill: 'gray',
  stroke: 'black',
  strokeWidth: '1'
});


var cewOCOresBlk8 = new Konva.Rect({
  x: BASE_BOARD_WIDTH / 1.166,
  y: BASE_BOARD_HEIGHT / 5.43,
  width: BASE_BOARD_WIDTH / 60,
  height: BASE_BOARD_HEIGHT/ 60,
  fill: 'gray',
  stroke: 'black',
  strokeWidth: '1'
});

var cewOCOresMinus = new Konva.Rect({
  x: BASE_BOARD_WIDTH / 1.2392,
  y: BASE_BOARD_HEIGHT / 4.97,
  width: BASE_BOARD_WIDTH / 30,
  height: BASE_BOARD_HEIGHT/ 70,
  fill: 'white',
  stroke: 'black',
  strokeWidth: '1'
});

var cewOCOresPlus = new Konva.Rect({
  x: BASE_BOARD_WIDTH / 1.189,
  y: BASE_BOARD_HEIGHT / 4.97,
  width: BASE_BOARD_WIDTH / 30,
  height: BASE_BOARD_HEIGHT/ 70,
  fill: 'white',
  stroke: 'black',
  strokeWidth: '1'
});

var cewOCOresMinusText = new Konva.Text({
  text: '-',
  x: BASE_BOARD_WIDTH / 1.218,
  y: BASE_BOARD_HEIGHT / 5.09,
  width: cewResTextWidth,
  fontFamily:'sans-serif',
  fontSize: cewResTextSize,
  fontStyle: 'bold',
  fill: 'black',
  rotation: 0
});

var cewOCOresPlusText = new Konva.Text({
  text: '+',
  x: BASE_BOARD_WIDTH / 1.173,
  y: BASE_BOARD_HEIGHT / 5.09,
  width: cewResTextWidth,
  fontFamily:'sans-serif',
  fontSize: cewResTextSize,
  fontStyle: 'bold',
  fill: 'black',
  rotation: 0
});



// CNE Research Points Blocks
var cewCNEresBlk1 = new Konva.Rect({
  x: BASE_BOARD_WIDTH / 1.142,
  y: BASE_BOARD_HEIGHT / 5.97,
  width: BASE_BOARD_WIDTH / 60,
  height: BASE_BOARD_HEIGHT/ 60,
  fill: 'gray',
  stroke: 'black',
  strokeWidth: '1'
});

var cewCNEresBlk2 = new Konva.Rect({
  x: BASE_BOARD_WIDTH / 1.1204,
  y: BASE_BOARD_HEIGHT / 5.97,
  width: BASE_BOARD_WIDTH / 60,
  height: BASE_BOARD_HEIGHT/ 60,
  fill: 'gray',
  stroke: 'black',
  strokeWidth: '1'
});

var cewCNEresBlk3 = new Konva.Rect({
  x: BASE_BOARD_WIDTH / 1.0996,
  y: BASE_BOARD_HEIGHT / 5.97,
  width: BASE_BOARD_WIDTH / 60,
  height: BASE_BOARD_HEIGHT/ 60,
  fill: 'gray',
  stroke: 'black',
  strokeWidth: '1'
});

var cewCNEresBlk4 = new Konva.Rect({
  x: BASE_BOARD_WIDTH / 1.08,
  y: BASE_BOARD_HEIGHT / 5.97,
  width: BASE_BOARD_WIDTH / 60,
  height: BASE_BOARD_HEIGHT/ 60,
  fill: 'gray',
  stroke: 'black',
  strokeWidth: '1'
});


var cewCNEresBlk5 = new Konva.Rect({
  x: BASE_BOARD_WIDTH / 1.142,
  y: BASE_BOARD_HEIGHT / 5.43,
  width: BASE_BOARD_WIDTH / 60,
  height: BASE_BOARD_HEIGHT/ 60,
  fill: 'gray',
  stroke: 'black',
  strokeWidth: '1'
});

var cewCNEresBlk6 = new Konva.Rect({
  x: BASE_BOARD_WIDTH / 1.1204,
  y: BASE_BOARD_HEIGHT / 5.43,
  width: BASE_BOARD_WIDTH / 60,
  height: BASE_BOARD_HEIGHT/ 60,
  fill: 'gray',
  stroke: 'black',
  strokeWidth: '1'
});

var cewCNEresBlk7 = new Konva.Rect({
  x: BASE_BOARD_WIDTH / 1.0996,
  y: BASE_BOARD_HEIGHT / 5.43,
  width: BASE_BOARD_WIDTH / 60,
  height: BASE_BOARD_HEIGHT/ 60,
  fill: 'gray',
  stroke: 'black',
  strokeWidth: '1'
});


var cewCNEresBlk8 = new Konva.Rect({
  x: BASE_BOARD_WIDTH / 1.08,
  y: BASE_BOARD_HEIGHT / 5.43,
  width: BASE_BOARD_WIDTH / 60,
  height: BASE_BOARD_HEIGHT/ 60,
  fill: 'gray',
  stroke: 'black',
  strokeWidth: '1'
});

var cewCNEresMinus = new Konva.Rect({
  x: BASE_BOARD_WIDTH / 1.142,
  y: BASE_BOARD_HEIGHT / 4.97,
  width: BASE_BOARD_WIDTH / 30,
  height: BASE_BOARD_HEIGHT/ 70,
  fill: 'white',
  stroke: 'black',
  strokeWidth: '1'
});

var cewCNEresPlus = new Konva.Rect({
  x: BASE_BOARD_WIDTH / 1.0996,
  y: BASE_BOARD_HEIGHT / 4.97,
  width: BASE_BOARD_WIDTH / 30,
  height: BASE_BOARD_HEIGHT/ 70,
  fill: 'white',
  stroke: 'black',
  strokeWidth: '1'
});

var cewCNEresMinusText = new Konva.Text({
  text: '-',
  x: BASE_BOARD_WIDTH / 1.123,
  y: BASE_BOARD_HEIGHT / 5.09,
  width: cewResTextWidth,
  fontFamily:'sans-serif',
  fontSize: cewResTextSize,
  fontStyle: 'bold',
  fill: 'black',
  rotation: 0
});

var cewCNEresPlusText = new Konva.Text({
  text: '+',
  x: BASE_BOARD_WIDTH / 1.0858,
  y: BASE_BOARD_HEIGHT / 5.09,
  width: cewResTextWidth,
  fontFamily:'sans-serif',
  fontSize: cewResTextSize,
  fontStyle: 'bold',
  fill: 'black',
  rotation: 0
});
