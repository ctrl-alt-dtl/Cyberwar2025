var change = 'true'; // false will change it

// onlick change
y1Hex.on('click', function () {
  var fill = this.fill() === yellowColor ? 'red' : yellowColor;
  this.fill(fill);
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
  this.y1HexToY3Hex.stroke('red');
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
