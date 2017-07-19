var width = window.innerWidth;
var height = window.innerHeight;

var mainView = new Konva.Stage({
  container: 'container',
  width: width,
  height: height
});

var domainsLayer = new Konva.Layer();
var bgLayer = new Konva.Layer();

var domainsGroup = new Konva.Group({
  rotation: 0,
  offset: {
    x: 0,
    y: 0
  }
});

var center_hex = new Konva.RegularPolygon({
  x: width/2,
  y: height/2,
  sides: 6,
  radius: 33,
  fill: '',
  stroke: 'black',
  strokewidth: 2,
  rotation: 90
});

var imageObj = new Image();
// background board
imageObj.onload = function() {
  var bgBoard = new Konva.Image({
    x: 0,
    y: 0,
    image: imageObj,
    offset:{
      x: 0,
      y: 0
    }
  });

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
  domainsGroup.add(r1Text, r2Text);

// add the layer to the stage
  domainsLayer.add(domainsGroup);
  mainView.add(bgLayer, domainsLayer);

};
imageObj.src = '../img/Board-Web.png';


function fitStageIntoParentContainer() {
  var container = document.querySelector('#stage-parent');
  // now we need to fit stage into parent
  var containerWidth = container.offsetWidth;
  // to do this we need to scale the stage
  var scale = containerWidth / width;
  mainView.width(width * scale);
  mainView.height(height * scale);
  mainView.scale({ x: scale, y: scale });
  mainView.draw();

  fitStageIntoParentContainer();
  // adapt the stage on any window resize
  window.addEventListener('resize', fitStageIntoParentContainer);
}

