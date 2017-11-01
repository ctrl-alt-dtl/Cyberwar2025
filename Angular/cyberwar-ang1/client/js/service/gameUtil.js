angular.module("CyberWar")
.service('GameUtil', function() {
  var sharedUtil = new SharedUtil(_);
  // Add all shared util properties to the GameUtil service object
  Object.getOwnPropertyNames(sharedUtil).forEach(function(propertyName) {
    this[propertyName] = sharedUtil[propertyName];
  }, this);

  //------------------------------------------------------------------------------
  this.getColor = function(colorName) {
    switch (colorName) {
      case Color.RED:
        return redColor;
      case Color.ORANGE:
        return orangeColor;
      case Color.YELLOW:
        return yellowColor;
      case Color.GREEN:
        return greenColor;
      case Color.BLUE:
        return blueColor;
      case Color.PURPLE:
        return purpleColor;
    }
    return grayColor;
  }

  //------------------------------------------------------------------------------
  this.getHexPosition = function(color, index) {
    return konvaHexPositions[color][index];
  }
});
