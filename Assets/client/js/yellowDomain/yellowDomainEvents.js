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

// static change
// this.y5Hex.fill('blue');