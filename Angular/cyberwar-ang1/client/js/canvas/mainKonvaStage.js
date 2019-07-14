var BASE_BOARD_WIDTH = 945; // Don't change because it will alter the CSS layout.
var BASE_BOARD_HEIGHT = 945; // Don't change because it will alter the CSS layout.

// TODO: Change the board size to 945x945

var DOMAIN_LAYER_BOARD_ROTATION = 0;

var stage = new Konva.Stage({
  container: '.board',
  width: BASE_BOARD_WIDTH,
  height: BASE_BOARD_HEIGHT

});
var bgLayer = new Konva.Layer();
var domainsLayer = new Konva.Layer();
var linksLayer = new Konva.Layer();
// var toolTipLayer = new Konva.Layer();

var konvaHexPositions = {};
_.each(Color, function(color) {
  konvaHexPositions[color] = {};
});

var bgGroup = new Konva.Group({
  width: BASE_BOARD_WIDTH,
  height: BASE_BOARD_HEIGHT,
  x: BASE_BOARD_WIDTH / 2,
  y: BASE_BOARD_HEIGHT / 2,
  offset: {
    x: BASE_BOARD_WIDTH / 2,
    y: BASE_BOARD_HEIGHT / 2,
  },
});

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

var linksGroup = new Konva.Group({
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

var exploitLinksGroup = new Konva.Group({
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
imageObj.src = 'client/img/BoardNew.png';
//imageObj.src = 'client/img/transparency-1000.png';
imageObj.onload = function() {

  var bgBoard = new Konva.Image({
    width: 1000,
    height: 945,
    x: -30,
    y: 0,
    image: imageObj
  });


  // add the shapes to the layer, the order matters (background, links, bases, then servers).
  bgGroup.add(minorBounds1, minorBounds2, minorBounds3, minorBounds4, minorBounds5, minorBounds6);
  bgGroup.add(mainBoundary3, mainBoundary2, mainBoundary1);
  bgGroup.add(tier3Text, tier2Text, tier1Text);
  //bgGroup.add(node1Text, node2Text, node3Text, node4Text, node5Text, node6Text, node7Text, node8Text);
  //bgGroup.add(rbr1, rbr2, r1r3, r2r5, r5r4, r3r4, r4r6, r4r7, r3r6, r5r7, r6r7, r6r8, r7r8);
  //bgGroup.add(pbp1, pbp2, p1p3, p2p5, p5p4, p3p4, p4p6, p4p7, p3p6, p5p7, p6p7, p6p8, p7p8);
  //bgGroup.add(bbb1, bbb2, b1b3, b2b5, b5b4, b3b4, b4b6, b4b7, b3b6, b5b7, b6b7, b6b8, b7b8);
  //bgGroup.add(gbg1, gbg2, g1g3, g2g5, g5g4, g3g4, g4g6, g4g7, g3g6, g5g7, g6g7, g6g8, g7g8);
  //bgGroup.add(yby1, yby2, y1y3, y2y5, y5y4, y3y4, y4y6, y4y7, y3y6, y5y7, y6y7, y6y8, y7y8);
  //bgGroup.add(obo1, obo2, o1o3, o2o5, o5o4, o3o4, o4o6, o4o7, o3o6, o5o7, o6o7, o6o8, o7o8);
  // Intra-Domain Links
  //bgGroup.add(r1p2, r2o1, r3p5, r5o3, r6p7, r7o6, r8p8, r8o8);
  //bgGroup.add(b1g2, b2p1, b3g5, b5p3, b6g7, b7p6, b8g8, b8p8);
  //bgGroup.add(y1o2, y2g1, y3o5, y5g3, y6o7, y7g6, y8o8, y8g8);

  //bgLayer.add(bgBoard, boardEdge, tier3, tier2, tier1, bgGroup, centerHex);
  bgLayer.add(bgBoard, boardEdge, tier3, tier2, tier1, bgGroup, centerHex);

  //toolTipLayer.add();
 //domainsLayer.add(domainsGroup);

  //linksLayer.add(exploitLinksGroup, linksGroup);

  stage.add(bgLayer, linksLayer, domainsLayer);
};

//---------------------------------------------------------------------------
var drawBoard = function(playerData) {
  // Setup board rotation based on player
  switch (playerData.color) {
    case Color.RED:
      DOMAIN_LAYER_BOARD_ROTATION = 0;
      break;
    case Color.ORANGE:
      DOMAIN_LAYER_BOARD_ROTATION = 60;
      break;
    case Color.YELLOW:
      DOMAIN_LAYER_BOARD_ROTATION = 120;
      break;
    case Color.GREEN:
      DOMAIN_LAYER_BOARD_ROTATION = 180;
      break;
    case Color.BLUE:
      DOMAIN_LAYER_BOARD_ROTATION = 240;
      break;
    case Color.PURPLE:
      DOMAIN_LAYER_BOARD_ROTATION = 300;
      break;
  }
  domainsGroup.rotation(DOMAIN_LAYER_BOARD_ROTATION);
  linksGroup.rotation(DOMAIN_LAYER_BOARD_ROTATION);
  exploitLinksGroup.rotation(DOMAIN_LAYER_BOARD_ROTATION);
}



//---------------------------------------------------------------------------
var redrawStage = function() {
  stage.clearCache();
  stage.draw();
}

