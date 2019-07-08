angular.module("CyberWar")
.service('ChatSocket', function(Socket) {
  var gid, user, onChatReceivedCB;
  var requestSentCBListener = new Gambit.CallbackListener();

  // ----------------------------------------------------------------------------
  this.initialize = function(currentGID, currentUser, chatReceivedCB) {
    gid = currentGID;
    user = currentUser;
    onChatReceivedCB = chatReceivedCB;
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
  this.sendChatMessage = function(message, to, turnNumber) {
    requestSentCBListener.triggerAll();
    socketSend(GameRequest.SEND_CHAT, { gid: gid, from: user, to: to, message: message, turnNumber: turnNumber });
  }

  // ----------------------------------------------------------------------------
  var onSocketOpened = function() {
    socketSend(GameRequest.CHAT_HISTORY, { gid: gid, user: user });
  }

  // ----------------------------------------------------------------------------
  var onSocketMessage = function(socketData) {
    if (socketData.socketType === SocketType.CHAT && onChatReceivedCB) {
      onChatReceivedCB(socketData.message);
    }
  }

  // ----------------------------------------------------------------------------
  var onSocketClose = function() {
  }

  // ----------------------------------------------------------------------------
  var socketSend = function(request, data) {
    Socket.send(JSON.stringify({ socketType: SocketType.CHAT, request: request, data: data }));
  }
});
