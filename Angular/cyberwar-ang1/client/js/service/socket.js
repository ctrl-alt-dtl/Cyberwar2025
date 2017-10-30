angular.module("CyberWar")
.service('Socket', [function() {
  var listeners = [];
  var socket = null;

  // ----------------------------------------------------------------------------
  this.addListener = function(onOpenCB, onMessageCB, onCloseCB) {
    listeners.push({ onOpen: onOpenCB, onMessage: onMessageCB, onClose: onCloseCB });
  }

  // ----------------------------------------------------------------------------
  this.send = function(message) {
    if (socket != null) {
      socket.send(message);
    }
    else {
      console.log('Trying to send message when socket is null');
    }
  }

  // ----------------------------------------------------------------------------
  this.setSocket = function(newSocket) {
    socket = newSocket;
    socket.onopen = function() {
      _.each(listeners, function(listener) {
        listener.onOpen();
      });
    }
    socket.onmessage = function(message) {
      //var data = jsonpack.unpack(message.data);
      var data = JSON.parse(message.data);
      _.each(listeners, function(listener) {
        listener.onMessage(data);
      });
    }
    socket.onclose = function() {
      _.each(listeners, function(listener) {
        listener.onClose();
      });
    }
  }
}]);
