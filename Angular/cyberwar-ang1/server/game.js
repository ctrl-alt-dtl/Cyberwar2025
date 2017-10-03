/*******************************************************************************
 * Handles chat related server requests
 ******************************************************************************/
var _ = require("underscore");
// var auth = require("./authenticator.js");
var log = require("./log.js").log;
var database = require("./database.js");
var SocketType = require("../shared/socketType.js").SocketType;


var inDebugMode = true;
var clients = {};

module.exports = {
  setDebugMode: setDebugMode,
  start: start,
  // getGameList: getGameList,
  // createGame: createGame,
  // deleteGame: deleteGame,
  // getGame: getGame,
  // updateGame: updateGame,
  // saveGame: saveGame,
  // isValidPlayer: isValidPlayer,
};

//------------------------------------------------------------------------------
// Set whether we're in debug mode or not
function setDebugMode(debugMode) {
  inDebugMode = debugMode;
}

//------------------------------------------------------------------------------
// Start the chat socket server
function start(socketServer) {
  socketServer.on('connection', onConnection);
}

//------------------------------------------------------------------------------
// Get the list of all games
function getGameList(callback) {
  db.find().lean().exec(callback);
}

//------------------------------------------------------------------------------
// Create a new game in the database and initialize the first turn
function createGame(playerNames, callback) {
  // Create and initialize our game
  var newGame = new db();
  //log.debug("player names are: " + JSON.stringify(playerNames));
  gameController.initializeNewGame(newGame, playerNames);
  newGame.save(function(err) {
    if (err) {
      log.error("Failed to initialize new game: " + err);
      response.send({"stat":"FAIL", "msg":"failed insert database entry for new game"});
      return;
    }
    if (newGame) {
      log.info("Created the game:" + newGame.id);
      //log.debug(JSON.stringify(newGame));
    }
    if (callback) {
      callback(newGame);
    }
  });
  return newGame;
}

//------------------------------------------------------------------------------
// A game was deleted, so remove it from the database
function deleteGame(gid, callback) {
  if (gid !== undefined) {
    db.remove({ _id: gid }, function(err) {
      if (err) {
        response.send("Error: Could not find game to remove:" + gid);
        return;
      }
      else {
        log.info("Removed the game:" + gid);
      }

      if (callback) {
        callback(err);
      }
    });
  }
}

//------------------------------------------------------------------------------
// Get a particular game object
function getGame(gid, callback) {
  db.findById(gid).lean().exec(callback);
}

//------------------------------------------------------------------------------
// Update the game state until player input is needed
function updateGame(gid, game, user, turnData, updateFinished, turnFinished) {
  var success = gameController.updateGameState(game, user, turnData);
  saveGame(gid, game, function() {
    getGame(gid, function(err, savedGame) {
      // If all players are observers, keep taking turns until the game is over
      var currentTurn = Util.getCurrentTurn(savedGame);
      if (areAllPlayersObservers(currentTurn) && currentTurn.phase !== GamePhase.END) {
        if (turnFinished) {
          turnFinished(savedGame);
        }
        updateGame(gid, savedGame, user, currentTurn, updateFinished, turnFinished);
      }
      else {
        updateFinished(success, savedGame);
      }
    });
  });
}

//------------------------------------------------------------------------------
// Save the given game object in the db with the given game id
function saveGame(gid, game, callback) {
  //save the game model changes to the database
  log.debug("saving game state for game " + gid);
  var updateObject = {};
  var currentTurnNumber = getCurrentTurnNumber(game);
  updateObject['turns.' + currentTurnNumber] = getTurn(game, currentTurnNumber);
  if (currentTurnNumber > 1) {
    var previousTurnNumber = currentTurnNumber - 1;
    var previousTurn = getTurn(game, previousTurnNumber);
    updateObject['turns.' + previousTurnNumber + '.attacks'] = previousTurn.attacks;
    updateObject['turns.' + previousTurnNumber + '.defends'] = previousTurn.defends;
    updateObject['turns.' + previousTurnNumber + '.investments'] = previousTurn.investments;
  }
  db.update({ _id: gid }, { $set: updateObject }, function (err) {
    if (err) {
      log.error("failed to save new data: " + err);
    }

    // Respond to the client when the save is done
    if (callback !== undefined) {
      callback();
    }
  });
};

//------------------------------------------------------------------------------
// Is the given user one of our players?
function isValidPlayer(game, user) {

  //log.info("Game: " + JSON.stringify(game));
  //log.info(JSON.stringify(Util.getCurrentTurn(game)));

  var validUser = _.find(Util.getCurrentTurn(game).players, function(player) {
    return player.name === user;
  });

  return validUser !== undefined;
};

//------------------------------------------------------------------------------
// A player joined the chat server
function onConnection(connection) {
  clients[connection.id] = { connection: connection };
  connection.on('close', function() {
    delete clients[connection.id];
  });
  connection.on('data', function(data) {
    var message = JSON.parse(data);
    switch (message.request) {
      case GameRequest.TURN:
        getTurnData(message.data.gid, message.data.turnNumber, clients[connection.id]);
        break;
      case GameRequest.SUBMIT:
        submitTurn(message.data.gid, message.data.user, message.data.turnData, clients[connection.id]);
        break;
    }
  });
}

//------------------------------------------------------------------------------
// Send a given game state turn and its previous turn state back to the client.
var getTurnData = function(gid, turnNumber, client) {
  db.findById(gid).lean().exec(function (err, gameFound) {
    if (err) {
      log.error("Error finding the game: " + err);
    }
    else if (gameFound) {
      if (turnNumber === undefined) {
        // This is the player's first turn request, so mark which game they are part of
        client.gid = gid;
        turnNumber = getCurrentTurnNumber(gameFound);
      } else {
        turnNumber = parseInt(turnNumber);
      }
      client.playback = turnNumber !== getCurrentTurnNumber(gameFound);
      sendMessage(getGameData(gameFound, turnNumber), client);
    }
  });
}

//------------------------------------------------------------------------------
// Handle the player's pushing of data to the server.
var submitTurn = function(gid, user, turnData, client) {
  db.findById(gid).lean().exec(function(err, gameFound) {
    if (err) {
      log.error("Could not find the requested game: " + gid);
      return;
    }
    else if (gameFound) {
      if (user !== undefined && turnData !== undefined) {
        var previousTurnNumber = getCurrentTurnNumber(gameFound);
        updateGame(gid, gameFound, user, turnData, function(success) {
          if (success) {
            // Update EGS authentication if necessary
            if (!inDebugMode) {
              // Send an updated game status to the EGS server.
              database.getRPC(function (rpcIndex) {
                auth.sendEGSUpdate(rpcIndex, gid, Util.getCurrentTurn(gameFound));
              });
            }

            var currentTurnNumber = getCurrentTurnNumber(gameFound);
            var gameData = getGameData(gameFound, currentTurnNumber);
            // Update everyone's game state
            _.each(clients, function(client) {
              // Don't send any messages to players in a different game
              if (client.gid === gid) {
                // If someone is currently in playback, just inform them of new turns
                if (client.playback && previousTurnNumber !== currentTurnNumber) {
                  var messageData = {};
                  messageData[GameRequest.NEW] = getTurn(gameFound, currentTurnNumber).roundNumber;
                  sendMessage(messageData, client);
                }
                else if (!client.playback) {
                  sendMessage(gameData, client);
                }
              }
            });
          }
          else {
            log.error("Invalid turn submission");
            // "Reset" the player's turn
            var gameData = getGameData(gameFound, previousTurnNumber);
            sendMessage(gameData, client);
          }
        });
      }
      else {
        log.error("User and/or Actions not provided");
      }
    }
    else {
      log.error("Could not find the requested game: " + gid);
    }
  });
}

//------------------------------------------------------------------------------
// Add the bare bones objects to update on the database for the given turn to the given updateObject
var addTurnUpdate = function(updateObject, game, turnNumber) {
  updateObject['turns.' + turnNumber] = getTurn(game, turnNumber);
};

//------------------------------------------------------------------------------
// Get the turn number for the current turn
var getCurrentTurnNumber = function(game) {
  return game.turns.length - 1;
};

//------------------------------------------------------------------------------
// Get the object for the given turn number
var getTurn = function(game, turnIndex) {
  if (0 <= turnIndex && turnIndex < game.turns.length) {
    return game.turns[turnIndex];
  }
  return null;
};

//------------------------------------------------------------------------------
// Gathers the turn data generated from the given previous and current turn for
// the given user name
var getGameData = function(game, turnNumber) {
  var turn = getTurn(game, turnNumber);
  var lastTurn = getTurn(game, getCurrentTurnNumber(game));
  return {
    finalTurnNumber: lastTurn.phase === GamePhase.END ? lastTurn.roundNumber : -1,
    latestTurnNumber: lastTurn.roundNumber,
    turnNumber: turn.roundNumber,
    turn: turn
  };
}

//------------------------------------------------------------------------------
// Send message to client
var sendMessage = function(message, client) {
  client.connection.write(JSON.stringify({ socket: SocketType.GAME, message: message }));
}

//------------------------------------------------------------------------------
// Do all players have roles assigned?
var areAllPlayersObservers = function(turn) {
  // If we can't find a player with an invalid role, then they all have roles
  return _.find(turn.players, function(player) {
    return player.role !== Role.OBSERVER;
  }) === undefined;
}
