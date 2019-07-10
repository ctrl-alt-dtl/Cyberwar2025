angular.module("CyberWar")
.controller("GameController", function ($scope, $uibModal, ChatSocket, ChatState, GameSocket, GameState, GameUtil, HTTPHandler, Socket) {
  $scope.GameState = GameState;

  // ----------------------------------------------------------------------------
  $scope.showReport = function() {
    showReport();
  }

  // ----------------------------------------------------------------------------
  var gameStateUpdated = function(gameData) {
    var previousShownTurn = GameState.currentTurnNumber;
    $scope.$apply(GameState.gameStateUpdated(gameData.turn, gameData.turnNumber, gameData.latestTurnNumber));

    // If we are showing a different turn, show the report
    if (previousShownTurn != GameState.currentTurnNumber) {
      showReport();
    }
  }

  // ----------------------------------------------------------------------------
  var chatMessageReceived = function(message) {
    $scope.$apply(ChatState.messageReceived(message));
  }

  //---------------------------------------------------------------------------
  var showReport = function() {
    var reports = GameState.currentPlayerData.reports;

    // If the current player is an observer, get the reports of the player being watched
    if (GameState.currentPlayerData.isObserver) {
      var observedPlayer = GameUtil.findPlayerByColor(GameState.currentGameState.players, GameState.currentPlayerData.color);
      reports = observedPlayer.reports;
    }

    // If there are reports to show, then show them
    if (reports && reports.length > 0) {
      modalInstance = $uibModal.open({
        animation: true,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'reports.html',
        controller: 'ReportsController',
        resolve: {
          reports: function() {
            return reports;
          },
        }
      });
  
      modalInstance.result.then(
        // Dialog accepted
        function () {
        },
        // Dialog canceled
        function () {
        }
      );
    }
  }    

  // ----------------------------------------------------------------------------
  // Get our session data and load the game for the first time
  HTTPHandler.getSessionData(function (sessionData) {
    GameSocket.initialize(sessionData.gid, sessionData.user, gameStateUpdated);
    ChatSocket.initialize(sessionData.gid, sessionData.user, chatMessageReceived);
    Socket.connect();
  });
});
