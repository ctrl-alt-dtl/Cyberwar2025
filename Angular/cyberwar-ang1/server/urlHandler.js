/*******************************************************************************
 * Handles server requests from clients and EGS
 ******************************************************************************/
var _ = require("underscore");
var Game = require("./game.js");
//var Chat = require("./chat.js");
//var auth = require("./authenticator.js");
var log = require("./log.js").log;
var Util = require("./gameLogic/util.js");

module.exports = {
  gameList       : gameList,
  newGame        : newGame,
  //newGameEGS     : newGameEGS,
  deleteGame     : deleteGame,
  play           : play,
  sessionData    : sessionData,
};

var inDebugMode = Util.str2bool(process.env.DEBUG_MODE) || false;

//------------------------------------------------------------------------------
// A client request for listing existing games
// @return an HTMl <ul> of links to games
function gameList(request, response) {
  Game.getGameList(function(err, games) {
    if (err) {
      response.status(500).send("Error reading database");
    }

    var toSend = [];
    _.each(games, function(game) {
      var currentTurn = Util.getCurrentTurn(game);
      var gameData = {
        gid: game._id,
        players: _.map(currentTurn.players, function(player) { return { name: player.name, color: player.color }; }),
        turnNumber: game.turns.length - 1,
      };
      toSend.push(gameData);
    });
    response.send(JSON.stringify(toSend));
  });
}

//------------------------------------------------------------------------------
// Generates a new game
// Query string parameters:
// @returns the game id.
function newGame(request, response) {
  var newGame = Game.createGame();
  //Chat.gameCreated(newGame.id);
  log.info("Created new game with id " + newGame.id);
  response.send(newGame.id);
}

////------------------------------------------------------------------------------
//// Generates a new game requested by the EGS lobby
//// Query string parameters:
//// @param players - The list of names for the people playing the game
//// @returns JSON string containing information about the new game. Per EGS API.
//function newGameEGS(request, response) {
//
//  var playerList = [];
//  var numPlayers = 0;
//
//  for (numPlayers = 0; request.param("user"+(numPlayers+1)); ++numPlayers) {
//    var playerId = request.param("user"+(numPlayers+1));
//    playerList.push(playerId);
//  }
//
//  var newGame = Game.createGame(playerList);
//  //Chat.gameCreated(newGame.id);
//  log.info("Created new game with id " + newGame.id);
//
//  var update = [];
//
//  log.info("BUILDING EGS REPLY: " + JSON.stringify(Util.getCurrentTurn(newGame)));
//  auth.buildPlayerUpdate(update, newGame.id, Util.getCurrentTurn(newGame));
//
//    //send back JSON string, according to EGS (Ecco Game Server) rules
//    var gameJSON = {
//      "stat": "OK",
//      "glst": {
//        "cnt" : "1",
//        "game": {
//          "gid": newGame.id
//        }
//      },
//      "update": update
//    };
//
//    // build the update part of the payload
//    //auth.sendPlayerUpdate(gameJSON.update, newGame.id, getCurrentTurn(myGame));
//    response.send(gameJSON);
//}

//------------------------------------------------------------------------------
// Delete the game from the database
// delete?gid=<the game id>
function deleteGame(request, response) {
  var gid = request.params.id;
  Game.deleteGame(gid);
  //Chat.gameDeleted(gid);

  if (request.session && request.session.gid === gid) {
    request.session.gid = undefined;
  }
  response.send({});
}

//------------------------------------------------------------------------------
// Request to play an existing game.
// @param gid The game id
// @param user The user's id
// @param dbg Optional. If we're in debug/developer mode
// @returns Success will return the gamepage.html file
// @note /play?gid=<game id>&user=<user id>[&dbg=1]
function play(request, response) {
  inDebugMode = false;
  if (request.query.dbg === "1") { inDebugMode = true; }
  Game.setDebugMode(inDebugMode);

  var gid = request.query.gid;
  if (gid === undefined) {
    response.status(400).send("gid parameter not supplied");
  }
  else if (inDebugMode) {
    var user = request.query.user;
    if (user) {
      startGame(user, gid, request, response);
    }
    //kick out with an error if params aren't correct
    else {
      response.status(400).send("user parameter not supplied");
    }
  }
  else {
    auth.authenticateWithCAS(request, response, function(cas_handle) {
      log.info(cas_handle + " logged in!");
      auth.getPlayerProfile(cas_handle, gid, function(error, profile) {
        if (error) {
          response.status(400).send(error);
        }
        else if (!profile) {
          response.status(400).send("Unable to retrieve player profile.");
        }
        else {
          //the player profile is valid (gamingID is the player's nickname)
          startGame(profile.gamingId, gid, request, response);
        }
      });
    });
  }
}

//------------------------------------------------------------------------------
// Retrieves our currently sessioned game and user ID
function sessionData(request, response) {
  if (request.session.gid === undefined) {
    log.error("Session GID invalid.");
    response.status(400).send("No game session started.");
  }
  else if (request.session.user === undefined) {
    log.error("Session USER invalid.");
    response.status(400).send("No user session started.");
  }
  else {
    response.send({ "gid": request.session.gid, "user": request.session.user });
  }
}

//------------------------------------------------------------------------------
// Start the game play, using the supplied params.
// @param username : The player's nickname for this game
// @param gid : The Game ID
// @param request : The clients request object
// @param response: The responce object to the client
var startGame = function(username, gid, request, response) {
   //see if gid exists in the database
  Game.getGame(gid, function(err, gameFound) {
    if (err) {
      log.warn("Did not find the requested game: " + gid);
      response.status(400).send("The requested game was not found: " + gid);
      return;
    }

    if (gameFound) {
      // Determine the user can play the game or just view.
      if (Game.isValidPlayer(gameFound, username)) {
        if (request.session) {
          request.session.gid  = gid;
          request.session.user = username;
        }

        log.info ("Player " + username + " is joining game: " + gid);

        response.sendFile("/client/html/index.html", { root: __dirname + "/.." });
      }
      else {
        response.status(400).send("You are not a player in this game");
      }
    }
    else {
      response.status(400).send("Game not found.");
    }
  });
};
