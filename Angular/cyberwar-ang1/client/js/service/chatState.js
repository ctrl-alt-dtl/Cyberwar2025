angular.module('CyberWar')
.service('ChatState', function() {
  this.messages = [];
  var cbListener = new Gambit.CallbackListener();
  var viewingPrivateChatFor;

  //---------------------------------------------------------------------------
  this.addListener = function(callback) {
    cbListener.addListener(callback);
  }

  //---------------------------------------------------------------------------
  this.removeListener = function(callback) {
    cbListener.removeListener(callback);
  }

  //---------------------------------------------------------------------------
  this.messageReceived = function(message) {
    this.messages.push(message);
    cbListener.triggerAll(message);
  }

  //---------------------------------------------------------------------------
  this.setViewingPrivateChat = function(color) {
    viewingPrivateChatFor = color;
  }

  //---------------------------------------------------------------------------
  this.isViewingPrivateChat = function(color) {
    return viewingPrivateChatFor == color;
  }
});
