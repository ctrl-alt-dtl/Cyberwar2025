angular.module('CyberWar')
.directive('chat', function(ChatState, ChatSocket, GameState) {
  function link($scope, element, attrs) {
    $scope.chats = ChatState.messages;

    //---------------------------------------------------------------------------
    $scope.shouldDisplaymessage = function(chat) {
      // If we don't have a specific to for this chat, only show public messages
      if (!$scope.to) {
        return !chat.to;
      }
      // Otherwise, only show private messages to or from our specific to
      return chat.to && (chat.from == $scope.to || chat.to == $scope.to);
    }

    //---------------------------------------------------------------------------
    $scope.sendMessage = function() {
      if ($scope.newMessage) {
        ChatSocket.sendChatMessage($scope.newMessage, $scope.to, GameState.currentTurnNumber);
        $scope.newMessage = '';
      }
    }

    //----------------------------------------------------------------------------
    $scope.onStopEventPropagation = function($event) {
      $event.stopPropagation();
    }
  }
  return {
    link: link,
    restrict: 'E',
    scope: {
      to: '=',
    },
    templateUrl: 'chat.html',
  }
});
