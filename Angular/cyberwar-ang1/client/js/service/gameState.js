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
    this.currentPlayerData = GameUtil.findPlayerByName(gameData.players, this.currentPlayer);
    if (!this.currentPlayerData.isObserver) {
      updateGameStateForNonObserver(this, turnNumber);
    }
    else {
      updateGameStateForObserver(this, turnNumber);
    }
  }

  //---------------------------------------------------------------------------
  this.submittedTurn = function() {
    return this.currentPlayerData && GameUtil.hasPlayerTakenTurn(this.currentPlayerData);
  }

  //---------------------------------------------------------------------------
  this.isObserver = function() {
    return !this.currentPlayerData || this.currentPlayerData.isObserver;
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
  var updateGameStateForNonObserver = function(GameState, turnNumber) {
    // We only care about when the turn number actually changes, otherwise our local actions may be overwritten
    if (GameState.currentTurnNumber != turnNumber) {
      GameState.currentTurnNumber = turnNumber;
      GameState.positivelyLinkedNodes = GameUtil.getPositivelyLinkedNodes(GameState.currentPlayerData.color, GameState.currentGameState.serverNodes, GameState.currentPlayerData.exploitLinks);
      if (GameState.submittedTurn()) {
        GameState.currentActionPoints = 0;
        CurrentInvestments.setInvestments(GameState.currentPlayerData.investments);
        CurrentOrders.setOrders(GameState.currentPlayerData.orders);
      }
      else {
        GameState.currentActionPoints = getCurrentActionPoints(GameState.currentTurnNumber, GameState.currentPlayerData, GameState.positivelyLinkedNodes);
        var investments = {};
        _.each(ResearchType, function(type) { investments[type] = 0 }, GameState);
        CurrentInvestments.setInvestments(investments);
        CurrentOrders.setOrders([]);
      }
      cbListener.triggerAll();
      console.log("Turn Number: " + turnNumber);
    }
  }

  //---------------------------------------------------------------------------
  var updateGameStateForObserver = function(GameState, turnNumber) {
    GameState.currentTurnNumber = turnNumber;
    // Find the observed player and copy his current game state into our current game state
    var observedPlayer = GameUtil.findPlayerByColor(GameState.currentGameState.players, GameState.currentPlayerData.color);
    GameState.currentPlayerData.research = observedPlayer.research;
    GameState.currentPlayerData.exploitLinks = observedPlayer.exploitLinks;
    GameState.currentPlayerData.scannedNodes = observedPlayer.scannedNodes;
    GameState.currentPlayerData.scannedExploitLinks = observedPlayer.scannedExploitLinks;
    if (observedPlayer.investments) {
      GameState.currentActionPoints = 0;
      CurrentInvestments.setInvestments(observedPlayer.investments);
      CurrentOrders.setOrders(observedPlayer.orders);
    }
    else {
      var positivelyLinkedNodes = GameUtil.getPositivelyLinkedNodes(GameState.currentPlayerData.color, GameState.currentGameState.serverNodes, GameState.currentPlayerData.exploitLinks);
      GameState.currentActionPoints = getCurrentActionPoints(GameState.currentTurnNumber, observedPlayer, positivelyLinkedNodes);
      CurrentInvestments.setInvestments({});
      CurrentOrders.setOrders([]);
    }
    cbListener.triggerAll();
  }

  //---------------------------------------------------------------------------
  var getCurrentActionPoints = function(turnNumber, playerData, positivelyLinkedNodes) {
    // Everyone gets 3 points on the first turn
    if (turnNumber === 0) {
      return 3;
      // If player loses all node links. Reinstate 1 AP to allow for player to recontinue game. HAIL MARY RULE!
      // This is a temporary rule just to allow play to continue for teaching. I need to address the knock out mechanic
      // in the server.
    } else if (turnNumber >= 1 && positivelyLinkedNodes.length < 2) {
      return 1;
    }

    // After that it's one for every acquired or exploited node
    var calculatedAP = positivelyLinkedNodes.length - 1;
    if (positivelyLinkedNodes.length > 1) {
      // Should be a 1; however, if players do not acquire two nodes at the very start, give them two APs to
      // catch up.
      return Math.max(calculatedAP, 2);
    }

    return 0;
  }
}]);
