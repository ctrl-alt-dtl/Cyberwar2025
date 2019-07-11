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
  this.gameStateUpdated = function(gameData, turnNumber, latestTurnNumber) {
    var updateCurrentPlayer = shouldUpdateCurrentPlayer(this, gameData, turnNumber, latestTurnNumber);
    // Always update the latest turn number so our history tracker is accurate
    this.latestTurnNumber = latestTurnNumber;
    this.currentGameState = gameData;
    if (updateCurrentPlayer) {
      this.currentTurnNumber = turnNumber;
      this.currentPlayerData = GameUtil.findPlayerByName(gameData.players, this.currentPlayer);
      if (!this.currentPlayerData.isObserver) {
        modifyPlayerDataForNonObserver(this);
      }
      else {
        modifyPlayerDataForObserver(this);
      }
      console.log("Turn Number: " + turnNumber);
    }
    cbListener.triggerAll();
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
  this.viewingTurnInHistory = function(turnNumber) {
    // If we aren't looking at the latest turn, mark the desired turn number to view for future game updates
    if (turnNumber != this.latestTurnNumber) {
      this.viewingTurn = turnNumber;
    }
    // Otherwise, unmark the desired turn
    else {
      delete this.viewingTurn;
    }
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
  this.unsubmittedTurn = function() {
    this.previousActions = { investments: this.currentPlayerData.investments, orders: this.currentPlayerData.orders };
  }

  //---------------------------------------------------------------------------
  // Do we need to update our current player's game state or should we ignore it?
  var shouldUpdateCurrentPlayer = function(GameState, newGameData, turnNumber, latestTurnNumber) {
    // If we are an observer and our player color changed, then always update the game state
    if (GameState.currentPlayerData && GameState.currentPlayerData.isObserver) {
      var newPlayerData = GameUtil.findPlayerByName(newGameData.players, GameState.currentPlayer);
      if (GameState.currentPlayerData.color != newPlayerData.color) {
        return true;
      }
    }
    // If we aren't viewing a particular turn in history,
    // then update the game state if our current turn differs from the new latest turn
    // or if the current player's investments/orders differ from what we last stored
    if (GameState.viewingTurn === undefined) {
      return GameState.currentTurnNumber != latestTurnNumber || didPlayerTurnSubmissionChange(GameState, newGameData);
    }
    // Otherwise, update the game state if this is the turn number we are viewing
    return GameState.viewingTurn == turnNumber;
  }

  //---------------------------------------------------------------------------
  // Did the player's investments or orders change between our current game state and the incoming new game data?
  var didPlayerTurnSubmissionChange = function(GameState, newGameData) {
    var newPlayerData = GameUtil.findPlayerByName(newGameData.players, GameState.currentPlayer);
    return !areInvestmentsSame(GameState.currentPlayerData.investments, newPlayerData.investments) ||
      !areOrdersSame(GameState.currentPlayerData.orders, newPlayerData.orders);
  }

  //---------------------------------------------------------------------------
  // Do the two investment objects hold the same data?
  var areInvestmentsSame = function(currentInvestments, newInvestments) {
    // Are both investment objects defined?
    if (currentInvestments && newInvestments) {
      // Do they have the same contents?
      return Object.keys(currentInvestments).every(key => newInvestments.hasOwnProperty(key) && currentInvestments[key] == newInvestments[key]);
    }
    return currentInvestments == newInvestments;
  }

  //---------------------------------------------------------------------------
  // Do the two orders arrays have the same data?
  var areOrdersSame = function(currentOrders, newOrders) {
    return currentOrders.length == newOrders.length && currentOrders.every((currentOrder, index) => areSameOrder(currentOrder, newOrders[index]));
  }

  //---------------------------------------------------------------------------
  // Are the two order objects the same?
  var areSameOrder = function(order1, order2) {
    return order1.action == order2.action &&
      order1.node.color == order2.node.color &&
      order1.node.index == order2.node.index;
  }

  //---------------------------------------------------------------------------
  var modifyPlayerDataForNonObserver = function(GameState) {
    GameState.positivelyLinkedNodes = GameUtil.getPositivelyLinkedNodes(GameState.currentPlayerData.color, GameState.currentGameState.serverNodes, GameState.currentPlayerData.exploitLinks);
    // If we have submitted our turn, then show the investments and orders we submitted
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

      // If we had previously unsubmitted a turn, restore the investments and orders we submitted
      if (GameState.previousActions) {
        // Reinvest in our previous investments
        Object.keys(GameState.previousActions.investments).forEach(investmentType => GameState.invest(investmentType, GameState.previousActions.investments[investmentType]));
        // Re-add any orders we had
        GameState.previousActions.orders.forEach(order => GameState.addOrder(order));
        // Remove the previous actions now that we have re-applied them
        delete GameState.previousActions;
      }
    }
  }

  //---------------------------------------------------------------------------
  var modifyPlayerDataForObserver = function(GameState) {
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
  }

  //---------------------------------------------------------------------------
  var getCurrentActionPoints = function(turnNumber, playerData, positivelyLinkedNodes) {
    // Everyone gets 3 points on the first turn
    if (turnNumber === 0) {
      return 3;
    }

    // After that it's one for every acquired or exploited node
    var calculatedAP = positivelyLinkedNodes.length - 1;
    if (positivelyLinkedNodes.length > 1) {
      // Should be a 1; however, if players do not acquire two nodes at the very start, give them two APs to
      // catch up.
      return Math.max(calculatedAP, 2);
    }

    // If player loses all node links. Reinstate 1 AP to allow for player to recontinue game. HAIL MARY RULE!
    // This is a temporary rule just to allow play to continue for teaching. I need to address the knock out mechanic
    // in the server.
    return 2;
  }
}]);
