angular.module("CyberWar")
.service('GameUtil', function() {
  var sharedUtil = new SharedUtil(_, Color);
  // Add all shared util properties to the GameUtil service object
  Object.getOwnPropertyNames(sharedUtil).forEach(function(propertyName) {
    this[propertyName] = sharedUtil[propertyName];
  }, this);

  // ----------------------------------------------------------------------------
  this.isActionUnlocked = function(currentResearchInvestment, level) {
    var researchPerLevel = this.Config.MAX_RESEARCH_POINTS / (this.Config.MAX_RESEARCH_LEVELS - 1);
    var levelUnlocked = (currentResearchInvestment / researchPerLevel) + 1;
    return level <= levelUnlocked;
  }

  // ----------------------------------------------------------------------------
  // A research level is partially unlocked if it's the next level to be unlocked
  // and there are some points allocated towards it
  this.isActionPartiallyUnlocked = function(currentResearchInvestment, level) {
    var researchPerLevel = this.Config.MAX_RESEARCH_POINTS / (this.Config.MAX_RESEARCH_LEVELS - 1);
    // The current highest level unlocked
    var levelUnlocked = (currentResearchInvestment / researchPerLevel) + 1;
    // Determine the amount of levels needed to unlock this one
    var levelsNeeded = level - levelUnlocked;
    // If the amount of levels needed to unlock this are between 0 and 1, it is partially unlocked
    return 0 < levelsNeeded && levelsNeeded < 1;
  }

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

  //------------------------------------------------------------------------------
  this.getHexMidPoint = function(color, index) {
    return konvaHexMidPoint[color][index];
  }
});
