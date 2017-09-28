/**
 * The main Konva (canvas) layer instance.
 */

// var BASE_BOARD_WIDTH = 1024;
// var BASE_BOARD_HEIGHT = 768;

var BASE_BOARD_WIDTH = 1280;
var BASE_BOARD_HEIGHT = 960;


const MAX_BOARD_WIDTH = 1600;
const MAX_BOARD_HEIGHT = 1200;

const MIN_BOARD_WITDH = 800;
const MIN_BOARD_HEIGHT = 600;

/**
 * Other Resolutions: 1152x864, 1280x960, 1400x1050, 1440x1080
 */

var DOMAIN_LAYER_BOARD_ROTATION = 0;

var stage = new Konva.Stage({
  container: '.container',
  width: BASE_BOARD_WIDTH,
  height: BASE_BOARD_HEIGHT
});

var bgLayer = new Konva.Layer();
var boardItems = new Konva.Layer();
var domainsLayer = new Konva.Layer();
var toolTipLayer = new Konva.Layer();

var domainsGroup = new Konva.Group({
  width: BASE_BOARD_WIDTH,
  height: BASE_BOARD_HEIGHT,
  x: BASE_BOARD_WIDTH / 2,
  y: BASE_BOARD_HEIGHT / 2,
  offset: {
    x: BASE_BOARD_WIDTH / 2,
    y: BASE_BOARD_HEIGHT / 2,
  },
  rotation: DOMAIN_LAYER_BOARD_ROTATION
});


var imageObj = new Image();
// background board
imageObj.onload = function() {
  var bgBoard = new Konva.Image({
    width: BASE_BOARD_WIDTH,
    height: BASE_BOARD_HEIGHT,
    image: imageObj
  });


  // add the shapes to the layer, the order matters (background, links, bases, then servers).
  bgLayer.add(bgBoard);
  bgLayer.add(boardEdge, tier3, tier2, tier1);
  bgLayer.add(minorBounds1, minorBounds2, minorBounds3, minorBounds4, minorBounds5, minorBounds6);
  bgLayer.add(mainBoundary3, mainBoundary2, mainBoundary1, centerHex);
  bgLayer.add(tier3Text, tier2Text, tier1Text);
  // Extra board items (Windows, Buttons, Chat, and Actions)
  boardItems.add(submitOrdersBtn, ordersQueue, effectsWindow, chatWindow, notesRulesWindow);


  stage.add(bgLayer,boardItems);

};

imageObj.src = 'assets/client/img/empty-transparency-bg-1024x768.png';


// Somewhat dynamic resizing of the canvas.
function fitStageIntoParentContainer() {
  var container = document.querySelector('#stage-parent');
  // now we need to fit stage into parent
  var containerWidth = container.offsetWidth;
  // var containerHeight = container.offsetHeight;

  // to do this we need to scale the stage
  var scale = containerWidth / BASE_BOARD_WIDTH;
  // var scaleX = Math.min(containerWidth, MAX_BOARD_WIDTH) / BASE_BOARD_WIDTH;
  // var scaleY = Math.min(containerHeight, MAX_BOARD_HEIGHT) / BASE_BOARD_HEIGHT;
  // var minRatio = Math.min(scaleX, scaleY);

  // stage.width(BASE_BOARD_WIDTH * scaleX);
  stage.width(BASE_BOARD_WIDTH * scale);
  // stage.height(BASE_BOARD_HEIGHT * scaleY);
  stage.height(BASE_BOARD_HEIGHT * scale);
  // stage.scale({ x: minRatio, y: minRatio });
  stage.scale({ x: scale, y: scale });
  stage.draw();

  fitStageIntoParentContainer();
  // adapt the stage on any window resize
  window.addEventListener('resize', fitStageIntoParentContainer);
}

/*
var tween;

document.getElementById('activate').addEventListener('click', function() {
  // or var shape = stage.findOne('#myRect');
  var shape = stage.find('#y1Hex')[0];
  if (tween) {
    tween.destroy();
  }
  tween = new Konva.Tween({
    node: shape,
    fill:'red'
  }).play();
}, false);
*/


