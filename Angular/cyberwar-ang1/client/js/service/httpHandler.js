angular.module("CyberWar")
.service('HTTPHandler', ['$http', '$window', '$location', function($http, $window, $location) {
  // ----------------------------------------------------------------------------
  this.createGame = function(successCB, errorCB) {
    $http.post("/games")
      .then(function(response) { successCB(response.data); })
      .catch(function(response) { errorCB(response.data); });
  }

  // ----------------------------------------------------------------------------
  this.deleteGame = function(gameID, successCB, errorCB) {
    $http.delete("/games/" + gameID)
      .then(function(response) { successCB(response.data); })
      .catch(function(response) { errorCB && errorCB(response.data); });
  }

  // ----------------------------------------------------------------------------
  this.playGame = function(username, gameID, errorCB) {
    $window.location.href = "/play?gid=" + gameID + "&user=" + username + "&dbg=1";
  }

  // ----------------------------------------------------------------------------
  this.getGameList = function(successCB, errorCB) {
    $http.get("/games")
      .then(function(response) { successCB(response.data); })
      .catch(function(response) { errorCB && errorCB(response.data); });
  }

  // ----------------------------------------------------------------------------
  this.getSessionData = function(successCB, errorCB) {
    $http.get("/sessionData?rand=" + parseInt(Math.random() * 99999999, 10))
      .then(function(response) { successCB(response.data); })
      .catch(function(response) { errorCB && errorCB(response.data); });
  }
}]);
