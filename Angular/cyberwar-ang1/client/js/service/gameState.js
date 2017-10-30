angular.module('CyberWar')
.service('GameState', ['GameUtil', function(GameUtil) {
  var cbListener = new Gambit.CallbackListener();

  this.currentPlayer = null;
  this.currentPlayerData = null;
  this.currentGameState = null;

  //---------------------------------------------------------------------------
  this.addListener = function(callback) {
    cbListener.addListener(callback);
  }

  //---------------------------------------------------------------------------
  this.removeListener = function(callback) {
    cbListener.removeListener(callback);
  }

  //---------------------------------------------------------------------------
  this.gameStateUpdated = function(gameData) {
    this.currentGameState = gameData;
    this.currentPlayerData = GameUtil.findPlayerByColor(gameData.players, this.currentPlayer);
    cbListener.triggerAll();
  }
}]);
