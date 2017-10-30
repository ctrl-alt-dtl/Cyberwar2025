/*******************************************************************************
 * A set of helper functions for both server and client-side game logic
 ******************************************************************************/
this.SharedUtil = function(_) {
  //------------------------------------------------------------------------------
  this.cloneObject = function(object) {
    if (object != undefined) {
      return JSON.parse(JSON.stringify(object));
    }
    return undefined;
  }

  //------------------------------------------------------------------------------
  // Get the player with the given name from the list of players
  this.findPlayerByName = function(players, playerName) {
    return _.find(players, function(player) { return player.name == playerName; });
  };

  //------------------------------------------------------------------------------
  // Get the player with the given name from the list of players
  this.findPlayerByColor = function(players, color) {
    return _.find(players, function(player) { return player.color == color; });
  };

  ////------------------------------------------------------------------------------
  //// Has this player taken their turn?
  //this.hasPlayerTakenTurn = function(player) {
  //  return player.playedCards.length > 0;
  //}
}
