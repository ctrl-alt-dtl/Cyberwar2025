angular.module("CyberWar")
.service('GameSocket', function(GameState, Socket) {
  var gid, user, updateCB;
  var requestSentCBListener = new Gambit.CallbackListener();

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

  // ----------------------------------------------------------------------------
  this.performAction = function(action) {
    requestSentCBListener.triggerAll();
    socketSend(GameRequest.SUBMIT, { gid: gid, user: user, action: action });
  }

  // ----------------------------------------------------------------------------
  this.setObserverColor = function(color) {
    requestSentCBListener.triggerAll();
    socketSend(GameRequest.CHANGE_OBSERVED_PLAYER, { gid: gid, user: user, color: color });
  }

  // ----------------------------------------------------------------------------
  var onSocketOpened = function() {
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
