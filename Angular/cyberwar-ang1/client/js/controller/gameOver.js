angular.module('CyberWar')
.controller('GameOverController', function($scope, GameState, GameUtil) {
  var nonEliminatedPlayer = GameState.currentGameState.players.find(player => !player.isObserver && !GameUtil.Player.isPlayerEliminated(GameState.currentGameState, player));
  // If there is any non-eliminated player, they win
  if (nonEliminatedPlayer) {
    $scope.winner = nonEliminatedPlayer.name;
    $scope.reason = ' by eliminating all other players';
  }
  // If there isn't a clear winner, then whoever would have the most action points is the winner
  else {
    // Calculate each player's final action points
    var actionPoints = {};
    var highestActionPoint = 0;
    GameState.currentGameState.players.forEach(player => {
      if (!player.isObserver) {
        var positivelyLinkedNodes = GameUtil.Network.getPositivelyLinkedNodes(player.color, GameState.currentGameState.serverNodes, player.exploitLinks);
        var finalActionPoints = GameUtil.Action.getCurrentActionPoints(GameState.currentTurnNumber, positivelyLinkedNodes);
        actionPoints[player.color] = finalActionPoints;
        if (finalActionPoints > highestActionPoint) {
          highestActionPoint = finalActionPoints;
        }
      }
    });

    // Get a list of players with the highest action points
    var winners = GameState.currentGameState.players.reduce((winners, player) => {
      if (!player.isObserver && actionPoints[player.color] == highestActionPoint) {
        winners.push(player.name);
      }
      return winners;
    }, []);

    // If at least one person had a lower score than the rest, list our winners
    if (winners.length < GameState.currentGameState.players.length) {
      $scope.winner = winners.join(', ');
      $scope.reason = ' by having the largest network at the end of the game';
    }
  }
});
