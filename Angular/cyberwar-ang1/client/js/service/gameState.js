angular.module('CyberWar')
.service('GameState', ['GameUtil', function(GameUtil) {
  var cbListener = new Gambit.CallbackListener();

  this.maxInvestment = 8;

  //---------------------------------------------------------------------------
  this.addListener = function(callback) {
    cbListener.addListener(callback);
  }

  //---------------------------------------------------------------------------
  this.removeListener = function(callback) {
    cbListener.removeListener(callback);
  }

  //---------------------------------------------------------------------------
  this.gameStateUpdated = function(gameData, turnNumber) {
    this.currentTurnNumber = turnNumber;
    this.currentGameState = gameData;
    this.currentPlayerData = GameUtil.findPlayerByColor(gameData.players, this.currentPlayer);
    this.currentActionPoints = getCurrentActionPoints(this.currentTurnNumber, this.currentPlayerData);
    this.currentInvestments = {};
    _.each(ResearchType, function(type) { this.currentInvestments[type] = 0 }, this);
    cbListener.triggerAll();
  }

  //---------------------------------------------------------------------------
  this.invest = function(type, amount) {
    amount = Math.max(0, Math.min(Math.min(amount, this.getInvestmentRemaining(type)), this.currentInvestments[type] + this.currentActionPoints));
    var pointChange = this.currentInvestments[type] - amount;
    this.currentInvestments[type] = amount;
    this.currentActionPoints += pointChange;
    //cbListener.triggerAll();
  }

  //---------------------------------------------------------------------------
  this.getInvestmentRemaining = function(type) {
    return 8 - this.currentPlayerData.research[type];
  }

  //---------------------------------------------------------------------------
  var getCurrentActionPoints = function(turnNumber, playerData) {
    // Everyone gets 3 points on the first turn
    if (turnNumber == 0) {
      return 3;
    }
    // After that it's one for every acquired or exploited node
    return 0;
  }
}]);
