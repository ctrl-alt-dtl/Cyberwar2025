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
  boardItems.add(submitOrdersBtn, ordersQueue, effectsWindow, chatWindow, notesRulesWindow);

  // Domain Inter-Server Paths (LINKS)
  // Red Domain
  domainsGroup.add(rBaseToR1Hex, rBaseToR2Hex, r1HexToR3Hex, r2HexToR5Hex);
  domainsGroup.add(r3HexToR4Hex, r5HexToR4Hex, r3HexToR6Hex, r4HexToR6Hex, r4HexToR7Hex, r5HexToR7Hex);
  domainsGroup.add(r6HexToR7Hex, r6HexToR8Hex, r7HexToR8Hex);
  // Purple Domain
  domainsGroup.add(pBaseToP1Hex, pBaseToP2Hex, p1HexToP3Hex, p2HexToP5Hex);
  domainsGroup.add(p3HexToP4Hex, p5HexToP4Hex, p3HexToP6Hex, p4HexToP6Hex, p4HexToP7Hex, p5HexToP7Hex);
  domainsGroup.add(p6HexToP7Hex, p6HexToP8Hex, p7HexToP8Hex);
  // Purple Domain
  domainsGroup.add(bBaseToB1Hex, bBaseToB2Hex, b1HexToB3Hex, b2HexToB5Hex)
  domainsGroup.add(b3HexToB4Hex, b5HexToB4Hex, b3HexToB6Hex, b4HexToB6Hex, b4HexToB7Hex, b5HexToB7Hex);
  domainsGroup.add(b6HexToB7Hex, b6HexToB8Hex, b7HexToB8Hex);
  // Green Domain
  domainsGroup.add(gBaseToG1Hex, gBaseToG2Hex, g1HexToG3Hex, g2HexToG5Hex)
  domainsGroup.add(g3HexToG4Hex, g5HexToG4Hex, g3HexToG6Hex, g4HexToG6Hex, g4HexToG7Hex, g5HexToG7Hex);
  domainsGroup.add(g6HexToG7Hex, g6HexToG8Hex, g7HexToG8Hex);
  // Yellow Domain
  domainsGroup.add(yBaseToY1Hex, yBaseToY2Hex, y1HexToY3Hex, y2HexToY5Hex)
  domainsGroup.add(y3HexToY4Hex, y5HexToY4Hex, y3HexToY6Hex, y4HexToY6Hex, y4HexToY7Hex, y5HexToY7Hex);
  domainsGroup.add(y6HexToY7Hex, y6HexToY8Hex, y7HexToY8Hex);
  // Orange Domain
  domainsGroup.add(oBaseToO1Hex, oBaseToO2Hex, o1HexToO3Hex, o2HexToO5Hex)
  domainsGroup.add(o3HexToO4Hex, o5HexToO4Hex, o3HexToO6Hex, o4HexToO6Hex, o4HexToO7Hex, o5HexToO7Hex);
  domainsGroup.add(o6HexToO7Hex, o6HexToO8Hex, o7HexToO8Hex);

  // Inter-Domain Paths (LINKS)
  // Red to Purple to Blue to Green to Yellow to Orange
  domainsGroup.add(R1HexP2Hex, R3HexP5Hex, R6HexP7Hex, R8HexP8Hex);
  domainsGroup.add(P1HexB2Hex, P3HexB5Hex, P6HexB7Hex, P8HexB8Hex);
  domainsGroup.add(B1HexG2Hex, B3HexG5Hex, B6HexG7Hex, B8HexG8Hex);
  domainsGroup.add(G1HexY2Hex, G3HexY5Hex, G6HexY7Hex, G8HexY8Hex);
  domainsGroup.add(Y1HexO2Hex, Y3HexO5Hex, Y6HexO7Hex, Y8HexO8Hex);
  domainsGroup.add(O1HexR2Hex, O3HexR5Hex, O6HexR7Hex, O8HexR8Hex);
  // TIER 1 Inter-Domain Links
  domainsGroup.add(R8HexB8Hex, R8HexG8Hex, R8HexY8Hex);
  domainsGroup.add(P8HexG8Hex, P8HexY8Hex, P8HexO8Hex);
  domainsGroup.add(B8HexY8Hex, B8HexO8Hex);
  domainsGroup.add(G8HexO8Hex);

  // Exploit Links
  // Red Domain
  domainsGroup.add(r1rBaseExploit, r1r3Exploit, r2rBaseExploit, r2r5Exploit);
  domainsGroup.add(r3r4Exploit, r3r6Exploit, r4r6Exploit, r4r7Exploit, r5r4Exploit, r5r7Exploit);
  domainsGroup.add(r6r7Exploit, r6r8Exploit, r7r8Exploit);
  // Purple Domain
  domainsGroup.add(p1pBaseExploit, p1p3Exploit, p2pBaseExploit, p2p5Exploit);
  domainsGroup.add(p3p4Exploit, p3p6Exploit, p4p6Exploit, p4p7Exploit, p5p4Exploit, p5p7Exploit);
  domainsGroup.add(p6p7Exploit, p6p8Exploit, p7p8Exploit);
  // Orange Domain
  domainsGroup.add(o1oBaseExploit, o1o3Exploit, o2oBaseExploit, o2o5Exploit);
  domainsGroup.add(o3o4Exploit, o3o6Exploit, o4o6Exploit, o4o7Exploit, o5o4Exploit, o5o7Exploit);
  domainsGroup.add(o6o7Exploit, o6o8Exploit, o7o8Exploit);
  // Yellow Domain
  domainsGroup.add(y1yBaseExploit, y1y3Exploit, y2yBaseExploit, y2y5Exploit);
  domainsGroup.add(y3y4Exploit, y3y6Exploit, y4y6Exploit, y4y7Exploit, y5y4Exploit, y5y7Exploit);
  domainsGroup.add(y6y7Exploit, y6y8Exploit, y7y8Exploit);
  // Blue Domain
  domainsGroup.add(b1bBaseExploit, b1b3Exploit, b2bBaseExploit, b2b5Exploit);
  domainsGroup.add(b3b4Exploit, b3b6Exploit, b4b6Exploit, b4b7Exploit, b5b4Exploit, b5b7Exploit);
  domainsGroup.add(b6b7Exploit, b6b8Exploit, b7b8Exploit);
  // Green Domain
  domainsGroup.add(g1gBaseExploit, g1g3Exploit, g2gBaseExploit, g2g5Exploit);
  domainsGroup.add(g3g4Exploit, g3g6Exploit, g4g6Exploit, g4g7Exploit, g5g4Exploit, g5g7Exploit);
  domainsGroup.add(g6g7Exploit, g6g8Exploit, g7g8Exploit);
  // Inter-domain
  domainsGroup.add(r1p2Exploit, r3p5Exploit, r6p7Exploit, r8p8Exploit);
  domainsGroup.add(p1b2Exploit, p3b5Exploit, p6b7Exploit, p8b8Exploit);
  domainsGroup.add(b1g2Exploit, b3g5Exploit, b6g7Exploit, b8g8Exploit);
  domainsGroup.add(y1o2Exploit, y3o5Exploit, y6o7Exploit, y8o8Exploit);
  domainsGroup.add(o1r2Exploit, o3r5Exploit, o6r7Exploit, o8r8Exploit);
  domainsGroup.add(g1y2Exploit, g3y5Exploit, g6y7Exploit, g8y8Exploit);
  // Center-Domain Outside Ring
  domainsGroup.add(r8b8Exploit, p8g8Exploit, b8y8Exploit, g8o8Exploit, y8r8Exploit, o8p8Exploit);
  // Center-Domain Center Links
  domainsGroup.add(r8g8Exploit, p8y8Exploit, b8o8Exploit);


  // OLD CODE (multiple exploit links... too cluttered on board)
  // domainsGroup.add(r1rBaseExploitBlue, r1rBaseExploitYellow, r1rBaseExploitPurple, r1rBaseExploitGreen, r1rBaseExploitOrange);
  // domainsGroup.add(r2rBaseExploitBlue, r2rBaseExploitYellow, r2rBaseExploitPurple, r2rBaseExploitGreen, r2rBaseExploitOrange);
  // domainsGroup.add(r1r3ExploitBlue, r1r3ExploitYellow, r1r3ExploitPurple, r1r3ExploitGreen, r1r3ExploitOrange);
  // domainsGroup.add(r2r5ExploitBlue, r2r5ExploitYellow, r2r5ExploitPurple, r2r5ExploitGreen, r2r5ExploitOrange);
  // domainsGroup.add(r3r4ExploitBlue, r3r4ExploitYellow, r3r4ExploitPurple, r3r4ExploitGreen, r3r4ExploitOrange);
  // domainsGroup.add(r5r4ExploitBlue, r5r4ExploitYellow, r5r4ExploitPurple, r5r4ExploitGreen, r5r4ExploitOrange);
  // domainsGroup.add(r3r6ExploitBlue, r3r6ExploitYellow, r3r6ExploitPurple, r3r6ExploitGreen, r3r6ExploitOrange);
  // domainsGroup.add(r4r6ExploitBlue, r4r6ExploitYellow, r4r6ExploitPurple, r4r6ExploitGreen, r4r6ExploitOrange);
  // domainsGroup.add(r4r7ExploitBlue, r4r7ExploitYellow, r4r7ExploitPurple, r4r7ExploitGreen, r4r7ExploitOrange);
  // domainsGroup.add(r5r7ExploitBlue, r5r7ExploitYellow, r5r7ExploitPurple, r5r7ExploitGreen, r5r7ExploitOrange);
  // domainsGroup.add(r6r7ExploitBlue, r6r7ExploitYellow, r6r7ExploitPurple, r6r7ExploitGreen, r6r7ExploitOrange);
  // domainsGroup.add(r6r8ExploitBlue, r6r8ExploitYellow, r6r8ExploitPurple, r6r8ExploitGreen, r6r8ExploitOrange);
  // domainsGroup.add(r7r8ExploitBlue, r7r8ExploitYellow, r7r8ExploitPurple, r7r8ExploitGreen, r7r8ExploitOrange);


  // Green Domains Servers
  domainsGroup.add(gBase, g1Hex, g2Hex, g3Hex, g4Hex, g5Hex, g6Hex, g7Hex, g8Hex);
  // Blue Domain Servers
  domainsGroup.add(bBase, b1Hex, b2Hex, b3Hex, b4Hex, b5Hex, b6Hex, b7Hex, b8Hex);
  // Purple Domain Servers
  domainsGroup.add(pBase, p1Hex, p2Hex, p3Hex, p4Hex, p5Hex, p6Hex, p7Hex, p8Hex);
  // Red Domain Servers
  domainsGroup.add(rBase, r1Hex, r2Hex, r3Hex, r4Hex, r5Hex, r6Hex, r7Hex, r8Hex);
  // Orange Domain Servers
  domainsGroup.add(oBase, o1Hex, o2Hex, o3Hex, o4Hex, o5Hex, o6Hex, o7Hex, o8Hex);
  // Yellow Domain Servers
  domainsGroup.add(yBase, y1Hex, y2Hex, y3Hex, y4Hex, y5Hex, y6Hex, y7Hex, y8Hex);

  // Servers Text
  domainsGroup.add(r1Text, r2Text, r3Text, r4Text, r5Text, r6Text, r7Text, r8Text);
  domainsGroup.add(p1Text, p2Text, p3Text, p4Text, p5Text, p6Text, p7Text, p8Text);
  domainsGroup.add(b1Text, b2Text, b3Text, b4Text, b5Text, b6Text, b7Text, b8Text);
  domainsGroup.add(g1Text, g2Text, g3Text, g4Text, g5Text, g6Text, g7Text, g8Text);
  domainsGroup.add(y1Text, y2Text, y3Text, y4Text, y5Text, y6Text, y7Text, y8Text);
  domainsGroup.add(o1Text, o2Text, o3Text, o4Text, o5Text, o6Text, o7Text, o8Text);

  // Base Text
  domainsGroup.add(redBaseText, purpleBaseText, blueBaseText, greenBaseText, yellowBaseText, orangeBaseText);

  // Event Listener Layer since the text layer overwrites the server points layer.
  domainsGroup.add(y1HexListener, y3HexListener);

  domainsGroup.add(origin);

// add the layer to the stage
  domainsLayer.add(domainsGroup);
  stage.add(bgLayer,boardItems, domainsLayer, toolTipLayer);

};

imageObj.src = '../img/boardWeb-1024x768.png';


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


