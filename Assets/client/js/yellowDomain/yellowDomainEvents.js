var change = 'true'; // false will change it


var y1HexListener = new Konva.RegularPolygon({
  x: pt_y1Hex_X,
  y: pt_y1Hex_Y,
  sides: 6,
  radius: radius,
  rotation: 90,
  id: 'y1HexListener'
});

// onlick change
/*y1Hex.on('click', function () {
  var fill = this.fill() === yellowColor ? 'red' : yellowColor;
  this.fill(fill);
  domainsLayer.draw();
});*/

y1HexListener.on('click', function () {
  var fill = y1Hex.fill() === yellowColor ? 'orange' : yellowColor;
  var text = y1Text.text() === '1' ? '2' : 1;
  y1Hex.fill(fill);
  y1Text.text(text);
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
