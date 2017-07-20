var MAX_BOARD_WIDTH = 1600;
var MAX_BOARD_HEIGHT = 1200;

var MIN_BOARD_WITDH = 800;
var MIN_BOARD_HEIGHT = 600;

var BASE_BOARD_WIDTH = 1024;
var BASE_BOARD_HEIGHT = 768;

var BOARD_ROTATION = 0;


var mainView = new Konva.Stage({
  container: 'container',
  width: BASE_BOARD_WIDTH,
  height: BASE_BOARD_HEIGHT
});

var domainsLayer = new Konva.Layer();
var bgLayer = new Konva.Layer();

var domainsGroup = new Konva.Group({
  width: BASE_BOARD_WIDTH,
  height: BASE_BOARD_HEIGHT,
  x: BASE_BOARD_WIDTH / 2,
  y: BASE_BOARD_HEIGHT / 2,
  offset: {
    x: BASE_BOARD_WIDTH / 2,
    y: BASE_BOARD_HEIGHT / 2,
  },
  rotation: BOARD_ROTATION
});

var center_hex = new Konva.RegularPolygon({
  x: mainView.width() / 2,
  y: mainView.height() / 2,
  sides: 6,
  radius: 30,
  fill: '',
  stroke: 'black',
  strokewidth: 2,
  rotation: 90
});

var imageObj = new Image();
// background board
imageObj.onload = function() {
  var bgBoard = new Konva.Image({
    width: BASE_BOARD_WIDTH,
    height: BASE_BOARD_HEIGHT,
    image: imageObj
  });

var origin = new Konva.RegularPolygon({
  x: BASE_BOARD_WIDTH / 2,
  y: BASE_BOARD_HEIGHT / 2,
  sides: 6,
  fill: 'green',
  radius: 2
});

var box = new Konva.Rect({
  width: BASE_BOARD_WIDTH,
  height: BASE_BOARD_HEIGHT,
  stroke: 'black',
  strokeWidth: '8'
})

// add the shapes to the layer, the order matters (background, links, bases, then servers).
  bgLayer.add(bgBoard);
  bgLayer.add(center_hex);

  // add Domain Inter-Server Paths (LINKS)
  // Red Domain Tier 4
  domainsGroup.add(rBaseToR1Hex, rBaseToR2Hex, r1HexToR3Hex, r2HexToR5Hex);

  // Red Domain Tier 3
  domainsGroup.add(r3HexToR4Hex, r5HexToR4Hex, r3HexToR6Hex, r4HexToR6Hex, r4HexToR7Hex, r5HexToR7Hex);

  // Red Domain Tier 2
  domainsGroup.add(r6HexToR7Hex, r6HexToR8Hex, r7HexToR8Hex);

  // Blue Domain

  // add Red Domain Servers
  domainsGroup.add(rBase, r1Hex, r2Hex, r3Hex, r4Hex, r5Hex, r6Hex, r7Hex, r8Hex);

  // add Red Domain Text
  domainsGroup.add(r1Text, r2Text, r3Text, r4Text, r5Text, r6Text, r7Text, r8Text);

  domainsGroup.add(origin);

// add the layer to the stage
  domainsLayer.add(domainsGroup);
  mainView.add(bgLayer, domainsLayer);

};
imageObj.src = '../img/boardWeb-1024x768.png';


function fitStageIntoParentContainer() {
  var container = document.querySelector('#container');
  // now we need to fit stage into parent
  var containerWidth = container.offsetWidth;
  var containerHeight = container.offsetHeight;

  // to do this we need to scale the stage
  // var scale = containerWidth / BASE_BOARD_WIDTH;
  var scaleX = Math.min(containerWidth, MAX_BOARD_WIDTH) / BASE_BOARD_WIDTH;
  var scaleY = Math.min(containerHeight, MAX_BOARD_HEIGHT) / BASE_BOARD_HEIGHT;
  var minRatio = Math.min(scaleX, scaleY);

  mainView.width(BASE_BOARD_WIDTH * scaleX);
  mainView.height(BASE_BOARD_HEIGHT * scaleY);
  mainView.scale({ x: minRatio, y: minRatio });
  mainView.draw();

  fitStageIntoParentContainer();
  // adapt the stage on any window resize
  window.addEventListener('resize', fitStageIntoParentContainer);
}

