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
      this.positivelyLinkedNodes = getPositivelyLinkedNodes(this.currentPlayerData.color, this.currentGameState.serverNodes, this.currentPlayerData.exploitLinks);
      if (this.submittedTurn()) {
        this.currentActionPoints = 0;
        CurrentInvestments.setInvestments(this.currentPlayerData.investments);
        CurrentOrders.setOrders(this.currentPlayerData.orders);
      }
      else {
        this.currentActionPoints = getCurrentActionPoints(this.currentTurnNumber, this.currentPlayerData, this.positivelyLinkedNodes);
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
  var getCurrentActionPoints = function(turnNumber, playerData, positivelyLinkedNodes) {
    // Everyone gets 3 points on the first turn
    if (turnNumber == 0) {
      return 3;
    }
    // After that it's one for every acquired or exploited node
    var calculatedAP = positivelyLinkedNodes.length - 1;
    return Math.max(calculatedAP, 2);
  }

  // ----------------------------------------------------------------------------
  var getPositivelyLinkedNodes = function(playerColor, serverNodes, exploitLinks) {
    var playerBase = GameUtil.getServerNode(serverNodes, playerColor, 0);
    var linkedNodes = [];
    var processedNodes = [];
    var nodesToProcess = [playerBase.location];
    while(nodesToProcess.length > 0) {
      var nodeBeingProcessed = nodesToProcess.shift();
      if (!GameUtil.isLocationInList(nodeBeingProcessed, processedNodes)) {
        processedNodes.push(nodeBeingProcessed);

        // If the current player owns this node or has an exploit link connected to this node, add it to the list and process its neighbors
        var serverNode = GameUtil.getServerNode(serverNodes, nodeBeingProcessed.color, nodeBeingProcessed.index);
        if (serverNode.ownerColor == playerColor || GameUtil.isLocationInLinkList(nodeBeingProcessed, exploitLinks)) {
          linkedNodes.push(nodeBeingProcessed);
          var neighbors = GameUtil.getNeighbors(nodeBeingProcessed);
          _.each(neighbors, function(neighbor) {
            // If this node is owned by the player and hasn't been processed, then process it
            if (!GameUtil.isLocationInList(neighbor, processedNodes)) {
              nodesToProcess.push(neighbor);
            }
          });
        }
      }
    }
    return linkedNodes;
  }
}]);
