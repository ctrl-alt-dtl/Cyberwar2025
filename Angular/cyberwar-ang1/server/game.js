/*******************************************************************************
 * Handles chat related server requests
 ******************************************************************************/
var _ = require("underscore");
// var auth = require("./authenticator.js");
var log = require("./log.js").log;
var database = require("./database.js");
var db = database.getGameModel();
var gameController = require("./gameLogic/gameController.js");
var Util = require("./gameLogic/util.js");
var GameRequest = require("../shared/gameRequest.js").GameRequest;
var SocketType = require("../shared/socketType.js").SocketType;

var inDebugMode = true;
var clients = {};
var updatingGames = {};

module.exports = {
  setDebugMode: setDebugMode,
  start: start,
  getGameList: getGameList,
  createGame: createGame,
  deleteGame: deleteGame,
  getGame: getGame,
  isValidPlayer: isValidPlayer,
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
function createGame(callback) {
  // Create and initialize our game
  var newGame = new db();
  //log.debug("player names are: " + JSON.stringify(playerNames));
  gameController.initializeNewGame(newGame);
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
// Is the given user one of our players?
function isValidPlayer(game, user) {

  //log.info("Game: " + JSON.stringify(game));
  //log.info(JSON.stringify(Util.getCurrentTurn(game)));

  var validUser = _.find(Util.getCurrentTurn(game).players, function(player) {
    return player.color === user;
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
    var gid = message.data.gid;
    var user = message.data.user;
    switch (message.request) {
      case GameRequest.GET:
        getCurrentTurnData(clients[connection.id], gid, user);
        break;
      case GameRequest.SUBMIT:
        addLockedAction(gid, { name: 'Submit Action', callback: submitAction, params: { user: user, action: message.data.action }});
        break;
    }
  });
}

//------------------------------------------------------------------------------
// Send a given game state turn and its previous turn state back to the client.
var getCurrentTurnData = function(client, gid, user) {
  client.gid = gid;
  client.user = user;
  db.findById(gid).lean().exec(function (err, gameFound) {
    if (err) {
      log.error("Error finding the game: " + err);
    }
    else if (gameFound) {
      sendGameToClient(gameFound, client);
    }
  });
}

//------------------------------------------------------------------------------
// Handle the player's pushing of data to the server.
var submitAction = function(gid, game, params) {
  if (!game.paused) {
    if (params.user !== undefined && params.action !== undefined) {
      gameController.performAction(game, params.user, params.action);
    }
    else {
      log.error("User and/or Actions not provided");
    }
  }
}

//------------------------------------------------------------------------------
var addLockedAction = function(gid, action, failCB) {
  // If no other locked action is currently being performed, create a queue and start executing it
  if (!updatingGames.hasOwnProperty(gid)) {
    updatingGames[gid] = [action];
    db.findById(gid).lean().exec(function(err, game) {
      if (!err && game) {
        delete game.__v;
        delete game._id;
        performLockedAction(gid, game);
      }
      else {
        if (err) {
          log.error(err);
        }
        else {
          log.error('Could not find game: ' + gid);
        }
        delete updatingGames[gid];
        if (failCB) {
          failCB();
        }
      }
    });
  }
  // Otherwise just add the action to the queue
  else {
    updatingGames[gid].push(action);
  }
}

//------------------------------------------------------------------------------
var performLockedAction = function(gid, game) {
  // Take the first action off the list
  var action = updatingGames[gid].shift();
  // Perform said action
  action.callback(gid, game, action.params);
  // If the queue is not empty, perform the next action in the queue
  if (updatingGames[gid].length > 0) {
    performLockedAction(gid, game);
  }
  // Otherwise get the differences between the previous game state and the current one
  else {
    saveGame(gid, game, function() {
      sendGameToClients(gid, function() {
        // If the queue is not empty, perform the next action in the queue
        if (updatingGames[gid].length > 0) {
          performLockedAction(gid, game);
        }
        // Otherwise, delete the update queue
        else {
          delete updatingGames[gid];
        }
      });
    });
  }
}

//------------------------------------------------------------------------------
// Save the given game object in the db with the given game id
var saveGame = function(gid, game, finishedCB) {
  //save the game model changes to the database
  db.update({ _id: gid }, { $set: game }, function(err) {
    if (err) {
      log.error("failed to save new data: " + err);
    }
    finishedCB();
  });
};

//------------------------------------------------------------------------------
var sendGameToClients = function(gid, finishedCB) {
  // Get the freshest version of the game and send to all clients playing this game
  db.findById(gid).lean().exec(function(err, game) {
    if (game) {
      _.each(clients, function(client) {
        if (client.gid === gid) {
          sendGameToClient(game, client);
        }
      });
    }
    finishedCB();
  });
}

//------------------------------------------------------------------------------
var sendGameToClient = function(game, client) {
  sendMessage({ request: GameRequest.GET, data: getGameData(game, getCurrentTurnNumber(game)) }, client);
}

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
    latestTurnNumber: lastTurn.roundNumber,
    turnNumber: turn.roundNumber,
    turn: turn
  };
}

//------------------------------------------------------------------------------
// Send message to client
var sendMessage = function(message, client) {
  client.connection.write(JSON.stringify({ socketType: SocketType.GAME, message: message }));
}
