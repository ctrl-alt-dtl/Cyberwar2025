angular.module('CyberWar')
.service('ChatState', function() {
  this.messages = [];

  //---------------------------------------------------------------------------
  this.messageReceived = function(message) {
    this.messages.push(message);
  }
});
