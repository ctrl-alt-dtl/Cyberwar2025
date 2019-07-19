angular.module("CyberWar")
.service('GameSocket', function(GameState, Socket) {
  var gid, user, updateCB;
  var requestSentCBListener = new Gambit.CallbackListener();
  var socketOpenedCBListener = new Gambit.CallbackListener();

  // ----------------------------------------------------------------------------
  this.initialize = function(currentGID, currentUser, gameStateUpdatedCB) {
    gid = currentGID;
    user = currentUser;
    updateCB = gameStateUpdatedCB;
    GameState.currentPlayer = currentUser;
    Socket.addListener(onSocketOpened, onSocketMessage, onSocketClose);
  }

  //---------------------------------------------------------------------------
  this.addRequestSentListener = function(callback) {
    requestSentCBListener.addListener(callback);
  }

  //---------------------------------------------------------------------------
  this.removeRequestSentListener = function(callback) {
    requestSentCBListener.removeListener(callback);
  }

  //---------------------------------------------------------------------------
  this.addSocketOpenedListener = function(callback) {
    socketOpenedCBListener.addListener(callback);
  }

  //---------------------------------------------------------------------------
  this.removeSocketOpenedListener = function(callback) {
    socketOpenedCBListener.removeListener(callback);
  }

  // ----------------------------------------------------------------------------
  this.performAction = function(action) {
    requestSentCBListener.triggerAll();
    socketSend(GameRequest.SUBMIT, { gid: gid, user: user, action: action });
  }

  // ----------------------------------------------------------------------------
  this.getTurn = function(turnNumber) {
    requestSentCBListener.triggerAll();
    socketSend(GameRequest.GET_TURN_NUMBER, { gid: gid, user: user, turnNumber: turnNumber });
  }

  // ----------------------------------------------------------------------------
  this.setObserverColor = function(color) {
    requestSentCBListener.triggerAll();
    socketSend(GameRequest.CHANGE_OBSERVED_PLAYER, { gid: gid, user: user, color: color });
  }

  // ----------------------------------------------------------------------------
  this.forceForfeit = function(color) {
    requestSentCBListener.triggerAll();
    socketSend(GameRequest.FORCE_PLAYER_FORFEIT, { gid: gid, user: user, color: color });
  }

  // ----------------------------------------------------------------------------
  this.toggleObserverBoardView = function(showFullBoard) {
    requestSentCBListener.triggerAll();
    socketSend(GameRequest.TOGGLE_OBSERVER_BOARD_VIEW, { gid: gid, user: user, showFullBoard: showFullBoard });
  }

  // ----------------------------------------------------------------------------
  var onSocketOpened = function() {
    socketOpenedCBListener.triggerAll();
    socketSend(GameRequest.GET, { gid: gid, user: user });
  }

  // ----------------------------------------------------------------------------
  var onSocketMessage = function(socketData) {
    if (socketData.socketType === SocketType.GAME) {
      if (socketData.message.request == GameRequest.GET && updateCB) {
        updateCB(socketData.message.data);
      }
    }
  }

  // ----------------------------------------------------------------------------
  var onSocketClose = function() {
  }

  // ----------------------------------------------------------------------------
  var socketSend = function(request, data) {
    Socket.send(JSON.stringify({ socketType: SocketType.GAME, request: request, data: data }));
  }
});
