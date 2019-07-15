angular.module("CyberWar")
.controller("GameController", function ($scope, $uibModal, ChatSocket, ChatState, GameSocket, GameState, GameUtil, HTTPHandler, Socket) {
  $scope.GameState = GameState;
  $scope.isObserver = () => GameState.isObserver();
  GameSocket.addRequestSentListener(onGameSocketRequestSent);
  GameSocket.addSocketOpenedListener(onGameSocketOpened);
  var loadingDialog, reportDialog;

  // ----------------------------------------------------------------------------
  $scope.$on('$destroy', function() {
    GameSocket.removeRequestSentListener(onGameSocketRequestSent);
    GameSocket.removeSocketOpenedListener(onGameSocketOpened);
  });

  // ----------------------------------------------------------------------------
  $scope.toggleBoardView = function() {
    GameSocket.toggleObserverBoardView(!GameState.currentPlayerData.isViewingFullBoard);
  }

  // ----------------------------------------------------------------------------
  $scope.getBoardViewButtonText = function() {
    // If the observer is viewing the full board display text for viewing the board from their current color's point of view
    if (GameState.currentPlayerData.isViewingFullBoard) {
      return 'View ' + GameState.currentPlayerData.color + '\'s Point of View';
    }
    // Otherwise, they are viewing from a player's point of view, so let them know they
    // can view the fully revealed board
    return 'View Fully Revealed Board';
  }

  // ----------------------------------------------------------------------------
  $scope.showReport = function() {
    showReport();
  }

  // ----------------------------------------------------------------------------
  function onGameSocketRequestSent() {
    toggleLoading(true);
  }

  // ----------------------------------------------------------------------------
  function onGameSocketOpened() {
    toggleLoading(false);
  }

  // ----------------------------------------------------------------------------
  var gameStateUpdated = function(gameData) {
    var autoShowReport = shouldShowReport(GameState, gameData);
    $scope.$apply(GameState.gameStateUpdated(gameData.turn, gameData.turnNumber, gameData.latestTurnNumber));
    toggleLoading(false);

    // If we are showing a different turn, show the report
    if (autoShowReport) {
      showReport();
    }
  }

  // ----------------------------------------------------------------------------
  var chatMessageReceived = function(message) {
    $scope.$apply(ChatState.messageReceived(message));
  }

  // ----------------------------------------------------------------------------
  var shouldShowReport = function(prevGameState, newGameState) {
    // We should only show the report if this isn't our first game state update,
    if (prevGameState.currentGameState &&
    // we aren't viewing history,
      prevGameState.viewingTurn == undefined &&
    // and the latest turn number changed
      prevGameState.latestTurnNumber != newGameState.latestTurnNumber
    ) {
      return true;
    }
    return false;
  }

  //---------------------------------------------------------------------------
  // Toggle the loading screen on or off
  var toggleLoading = function(isLoading) {
    if (isLoading) {
      loadingDialog = $uibModal.open({
        animation: true,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'loading.html',
        controller: 'LoadingController',
        backdrop: 'static', // User can't click away the dialog
        keyboard: false // User can't use keyboard to dismiss dialog
      });
    }
    else if (loadingDialog) {
      loadingDialog.close();
    }
  }

  //---------------------------------------------------------------------------
  // Show the report of the previous turn's actions
  var showReport = function() {
    var reports = GameState.currentPlayerData.reports;

    // If the current player is an observer, get the reports of the player being watched
    if (GameState.currentPlayerData.isObserver) {
      var observedPlayer = GameUtil.findPlayerByColor(GameState.currentGameState.players, GameState.currentPlayerData.color);
      reports = observedPlayer.reports;
    }

    // Close previously report dialogs
    if (reportDialog) {
      reportDialog.close();
    }

    // If there are reports to show, then show them
    if (reports && reports.length > 0) {
      reportDialog = $uibModal.open({
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

      reportDialog.result.then(() => {}, () => {});
    }
  }    

  // ----------------------------------------------------------------------------
  // Get our session data and load the game for the first time
  HTTPHandler.getSessionData(function (sessionData) {
    toggleLoading(true);
    GameSocket.initialize(sessionData.gid, sessionData.user, gameStateUpdated);
    ChatSocket.initialize(sessionData.gid, sessionData.user, chatMessageReceived);
    Socket.connect();
  });
});
