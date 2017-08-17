var change = 'true'; // false will change it

var yellowServerCount = 8;


var y1HexListener = new Konva.RegularPolygon({
  x: pt_y1Hex_X,
  y: pt_y1Hex_Y,
  sides: 6,
  radius: radius,
  rotation: 90,
  id: 'y1HexListener'
});


var y3HexListener = new Konva.RegularPolygon({
  x: pt_y3Hex_X,
  y: pt_y3Hex_Y,
  sides: 6,
  radius: radius,
  rotation: 90,
  id: 'y3HexListener'
});

// onlick change
/*y1Hex.on('click', function () {
  var fill = this.fill() === yellowColor ? 'red' : yellowColor;
  this.fill(fill);
  domainsLayer.draw();
});*/

y1HexListener.on('click', function () {
  var fill = y1Hex.fill() === yellowColor ? orangeColor : yellowColor;
  var text = y1Text.text() === '1' ? '2' : 1;
  y1Hex.fill(fill);
  var stroke = Y1HexO2Hex.stroke() === darkYellowColor ? orangeColor : darkYellowColor;
  y1Text.text(text);
  Y1HexO2Hex.stroke(stroke);

  if(y1Hex.fill() === orangeColor){
    yellowServerCount--;
    console.log(yellowServerCount);
  } else if (y1Hex.fill() === yellowColor){
    yellowServerCount++;
    console.log(yellowServerCount);
  }

  // Connected server linkage
  if((y1Hex.fill() === orangeColor) && (y3Hex.fill() === orangeColor)) {
    y1HexToY3Hex.stroke(orangeColor);
    domainsLayer.draw();
  } else {
    y1HexToY3Hex.stroke(darkYellowColor);
    domainsLayer.draw();
  }
  domainsLayer.draw();
});

y3HexListener.on('click', function () {
  var fill = y3Hex.fill() === yellowColor ? orangeColor : yellowColor;
  var text = y3Text.text() === '1' ? '2' : 1;
  var stroke = Y3HexO5Hex.stroke() === darkYellowColor ? orangeColor : darkYellowColor;
  y3Hex.fill(fill);
  Y3HexO5Hex.stroke(stroke);
  y3Text.text(text);

  if(y3Hex.fill() === orangeColor){
    yellowServerCount--;
    console.log(yellowServerCount);
  } else if (y3Hex.fill() === yellowColor){
    yellowServerCount++;
    console.log(yellowServerCount);
  }

  // Connected server linkage
  if((y1Hex.fill() === orangeColor) && (y3Hex.fill() === orangeColor)) {
    y1HexToY3Hex.stroke(orangeColor);
    domainsLayer.draw();
  } else {
    y1HexToY3Hex.stroke(darkYellowColor);
    domainsLayer.draw();
  }
  domainsLayer.draw();
});




// on load change
if(change === 'false'){
  this.y2Hex.fill('green');
  domainsLayer.draw();
}

if(y1Hex.fill() === yellowColor){
  this.y1HexToY3Hex.stroke(darkYellowColor);
  domainsLayer.draw()
}

// y1Hex.fill('red');
if(y1Hex.fill() === redColor){
  this.y1HexToY3Hex.stroke('orange');
  domainsLayer.draw()
}

// Hover events
r3r6Exploit.on('mousemove', function() {
  document.body.style.cursor = 'pointer';
  var mousePos = stage.getPointerPosition();
  toolTipText.position({
    x: mousePos.x + 5,
    y: mousePos.y + 5,
  });
  toolTipRect.position({
    x: mousePos.x + 5,
    y: mousePos.y + 5,
  });

  /*
    var complexText = new Konva.Text({
      x: 60,
      y: 60,
      text: 'COMPLEX TEXT\n',
      fontSize: 18,
      fontFamily: 'Calibri',
      fill: '#555',
      width: 300,
      padding: 20,
      align: 'center'
  });

  var rect = new Konva.Rect({
    x: 20,
    y: 60,
    stroke: '#555',
    strokeWidth: 5,
    fill: '#ddd',
    width: 300,
    height: complexText.getHeight(),
    shadowColor: 'black',
    shadowBlur: 10,
    shadowOffset: [10, 10],
    shadowOpacity: 0.2,
    cornerRadius: 10
  });
  toolTips.add(rect, complexText);
  */

  toolTipRect.show();
  toolTipText.text("WMDeez\nFrostByte");
  toolTipText.show();
  toolTipLayer.batchDraw();
});

r3r6Exploit.on('mouseout', function() {
  document.body.style.cursor = 'default';
  toolTipRect.hide();
  toolTipText.hide();
  toolTipLayer.draw();
});

var toolTipRect = new Konva.Rect({
  width: 75,
  height: 50,
  fill: '#4F618F',
  visible: false
});

var toolTipText = new Konva.Text({
  text: "",
  fontFamily: "Calibri",
  fontSize: 12,
  padding: 5,
  textFill: "black",
  fill: "white",
  alpha: 0.75,
  visible: false
});
toolTipLayer.add(toolTipRect, toolTipText);

// r1ExploitR3Blue.visible(false)

// Direct Assignment
// b6HexToB8Hex.stroke(redColor);
// p1Text.text("4");

// static change
// this.y5Hex.fill('blue');


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
