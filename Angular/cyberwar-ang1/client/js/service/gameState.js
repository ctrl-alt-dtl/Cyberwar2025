angular.module('CyberWar')
.service('GameState', function(CurrentInvestments, CurrentOrders, GameUtil) {
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
      this.currentPlayerData = GameUtil.List.findPlayerByName(gameData.players, this.currentPlayer);
      if (!this.currentPlayerData.isObserver) {
        modifyPlayerDataForNonObserver(this);
      }
      else {
        modifyPlayerDataForObserver(this);
      }
    }
    cbListener.triggerAll();
  }

  //---------------------------------------------------------------------------
  this.isEliminated = function() {
    return this.currentPlayerData && GameUtil.Player.isPlayerEliminated(this.currentGameState, this.currentPlayerData);
  }

  //---------------------------------------------------------------------------
  this.hasSubmittedTurn = function() {
    return this.currentPlayerData && GameUtil.Player.hasPlayerTakenTurn(this.currentPlayerData);
  }

  //---------------------------------------------------------------------------
  this.isImplanted = function() {
    return this.currentPlayerData && this.currentPlayerData.implanted;
  }

  //---------------------------------------------------------------------------
  this.isObserver = function() {
    return this.currentPlayerData && this.currentPlayerData.isObserver;
  }

  //---------------------------------------------------------------------------
  this.isGameOver = function() {
    // The game is over if at most one player is not eliminated
    if (this.currentGameState) {
      var numberOfActivePlayers = this.currentGameState.players.reduce((count, player) => {
        if (!player.isObserver && !GameUtil.Player.isPlayerEliminated(this.currentGameState, player)) {
          ++count;
        }
        return count;
      }, 0);
      return numberOfActivePlayers <= 1;
    }
    return false;
  }

  //---------------------------------------------------------------------------
  this.viewingTurnInHistory = function(turnNumber) {
    // If we aren't looking at the latest turn, mark the desired turn number to view for future game updates
    if (turnNumber != this.latestTurnNumber) {
      // If we weren't previously looking at history, and we haven't submitted our turn, store our previous actions
      if (!this.viewingTurn && !this.hasSubmittedTurn()) {
        this.previousActions = { investments: CurrentInvestments.getInvestments(), orders: CurrentOrders.getOrders() };
      }
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
    // If we are an observer, then always update the game state
    if (GameState.currentPlayerData && GameState.currentPlayerData.isObserver) {
      return true;
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
    var newPlayerData = GameUtil.List.findPlayerByName(newGameData.players, GameState.currentPlayer);
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
    GameState.positivelyLinkedNodes = GameUtil.Network.getPositivelyLinkedNodes(GameState.currentPlayerData.color, GameState.currentGameState.serverNodes, GameState.currentPlayerData.exploitLinks);
    // If we have submitted our turn, then show the investments and orders we submitted
    if (GameState.hasSubmittedTurn() || GameState.isEliminated()) {
      GameState.currentActionPoints = 0;
      CurrentInvestments.setInvestments(GameState.currentPlayerData.investments || {});
      CurrentOrders.setOrders(GameState.currentPlayerData.orders);
    }
    else {
      GameState.currentActionPoints = GameUtil.Action.getCurrentActionPoints(GameState.currentTurnNumber, GameState.positivelyLinkedNodes);
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
    var observedPlayer = GameUtil.List.findPlayerByColor(GameState.currentGameState.players, GameState.currentPlayerData.color);
    GameState.currentPlayerData.research = observedPlayer.research;
    GameState.currentPlayerData.exploitLinks = observedPlayer.exploitLinks;
    GameState.currentPlayerData.isViewingFullBoard = GameState.currentPlayerData.scannedNodes.length > 0 || GameState.currentPlayerData.scannedExploitLinks > 0;
    GameState.currentPlayerData.scannedNodes = GameState.currentPlayerData.isViewingFullBoard ? GameState.currentPlayerData.scannedNodes : observedPlayer.scannedNodes;
    GameState.currentPlayerData.scannedExploitLinks = GameState.currentPlayerData.isViewingFullBoard ? GameState.currentPlayerData.scannedExploitLinks : observedPlayer.scannedExploitLinks;
    GameState.positivelyLinkedNodes = GameUtil.Network.getPositivelyLinkedNodes(GameState.currentPlayerData.color, GameState.currentGameState.serverNodes, GameState.currentPlayerData.exploitLinks);
    if (observedPlayer.investments) {
      GameState.currentActionPoints = 0;
      CurrentInvestments.setInvestments(observedPlayer.investments);
      CurrentOrders.setOrders(observedPlayer.orders);
    }
    else {
      var positivelyLinkedNodes = GameUtil.Network.getPositivelyLinkedNodes(GameState.currentPlayerData.color, GameState.currentGameState.serverNodes, GameState.currentPlayerData.exploitLinks);
      GameState.currentActionPoints = GameUtil.Action.getCurrentActionPoints(GameState.currentTurnNumber, positivelyLinkedNodes);
      CurrentInvestments.setInvestments({});
      CurrentOrders.setOrders([]);
    }
  }
});
