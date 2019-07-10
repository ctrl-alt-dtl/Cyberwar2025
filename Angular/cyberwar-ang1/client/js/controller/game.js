angular.module("CyberWar")
.controller("GameController", function ($scope, ChatSocket, ChatState, GameSocket, GameState, HTTPHandler, Socket) {
  $scope.GameState = GameState;

  // ----------------------------------------------------------------------------
  var gameStateUpdated = function(gameData) {
    $scope.$apply(GameState.gameStateUpdated(gameData.turn, gameData.turnNumber, gameData.latestTurnNumber));
  }

  // ----------------------------------------------------------------------------
  var chatMessageReceived = function(message) {
    $scope.$apply(ChatState.messageReceived(message));
  }

  // ----------------------------------------------------------------------------
  // Get our session data and load the game for the first time
  HTTPHandler.getSessionData(function (sessionData) {
    GameSocket.initialize(sessionData.gid, sessionData.user, gameStateUpdated);
    ChatSocket.initialize(sessionData.gid, sessionData.user, chatMessageReceived);
    Socket.connect();
  });
});
