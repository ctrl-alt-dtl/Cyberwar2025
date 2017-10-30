angular.module("CyberWar")
  .controller("GameController", ["$scope", "GameSocket", "GameState", "HTTPHandler", function ($scope, GameSocket, GameState, HTTPHandler) {
    // ----------------------------------------------------------------------------
    var gameStateUpdated = function(gameData) {
      $scope.$apply(GameState.gameStateUpdated(gameData.turn, gameData.turnNumber));
    }

    // ----------------------------------------------------------------------------
    // Get our session data and load the game for the first time
    HTTPHandler.getSessionData(function (sessionData) {
      GameSocket.initialize(sessionData.gid, sessionData.user, gameStateUpdated);
    });
  }]);
