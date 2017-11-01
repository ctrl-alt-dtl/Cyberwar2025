angular.module('CyberWar')
.service('GameState', ['CurrentInvestments', 'CurrentOrders', 'GameUtil', function(CurrentInvestments, CurrentOrders, GameUtil) {
  var cbListener = new Gambit.CallbackListener();

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
    this.currentGameState = gameData;
    this.currentPlayerData = GameUtil.findPlayerByColor(gameData.players, this.currentPlayer);
    // We only care about when the turn number actually changes, otherwise our local actions may be overwritten
    if (this.currentTurnNumber != turnNumber) {
      this.currentTurnNumber = turnNumber;
      if (this.submittedTurn()) {
        this.currentActionPoints = 0;
        CurrentInvestments.setInvestments(this.currentPlayerData.investments);
        CurrentOrders.setOrders(this.currentPlayerData.orders);
      }
      else {
        this.currentActionPoints = getCurrentActionPoints(this.currentTurnNumber, this.currentPlayerData);
        var investments = {};
        _.each(ResearchType, function(type) { investments[type] = 0 }, this);
        CurrentInvestments.setInvestments(investments);
        CurrentOrders.setOrders([]);
      }
      cbListener.triggerAll();
    }
  }

  //---------------------------------------------------------------------------
  this.submittedTurn = function() {
    return this.currentPlayerData && GameUtil.hasPlayerTakenTurn(this.currentPlayerData);
  }

  //---------------------------------------------------------------------------
  this.invest = function(type, amount) {
    amount = Math.max(0, Math.min(Math.min(amount, this.getInvestmentRemaining(type)), CurrentInvestments.getInvestment(type) + this.currentActionPoints));
    var pointChange = CurrentInvestments.getInvestment(type) - amount;
    this.currentActionPoints += pointChange;
    CurrentInvestments.setInvestment(type, amount);
  }

  //---------------------------------------------------------------------------
  this.addOrder = function(order) {
    this.currentActionPoints -= order.cost;
    CurrentOrders.addOrder(order);
  }

  //---------------------------------------------------------------------------
  this.removeOrder = function(index) {
    this.currentActionPoints += CurrentOrders.getOrder(index).cost;
    CurrentOrders.removeOrder(index);
  }

  //---------------------------------------------------------------------------
  this.getInvestmentRemaining = function(type) {
    return GameUtil.Config.MAX_RESEARCH_POINTS - this.currentPlayerData.research[type];
  }

  //---------------------------------------------------------------------------
  var getCurrentActionPoints = function(turnNumber, playerData) {
    // Everyone gets 3 points on the first turn
    if (turnNumber == 0) {
      return 3;
    }
    // After that it's one for every acquired or exploited node
    return 3;
  }
}]);
