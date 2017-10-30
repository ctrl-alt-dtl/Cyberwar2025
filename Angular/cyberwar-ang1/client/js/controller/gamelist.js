angular.module("CyberWar 2025")
.controller("GameListController", ["$scope", "$window", "HTTPHandler", function($scope, $window, HTTPHandler) {
  // ----------------------------------------------------------------------------
  $scope.newGame = function() {
    createGame();
  }

  // ----------------------------------------------------------------------------
  $scope.deleteGame = function(gameID) {
    HTTPHandler.deleteGame(gameID, getGameList, reportError);
  }

  // ----------------------------------------------------------------------------
  $scope.playGame = function(gameID, login) {
    HTTPHandler.playGame(login, gameID, reportError);
  }

  // ----------------------------------------------------------------------------
  var createGame = function() {
    HTTPHandler.createGame(getGameList, reportError);
  }

  // ----------------------------------------------------------------------------
  var getGameList = function() {
    HTTPHandler.getGameList(setGameList, reportError);
  }

  // ----------------------------------------------------------------------------
  var setGameList = function(gameList) {
    $scope.gameList = gameList;
  }

  // ----------------------------------------------------------------------------
  var reportError = function(error) {
    $scope.error = error;
  }

  // ----------------------------------------------------------------------------
  var reportError = function(error) {
    $scope.error = error;
  }

  $window.setInterval(getGameList, 1000);
  getGameList();
}]);
