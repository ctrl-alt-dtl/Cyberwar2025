/*******************************************************************************
 * Handles chat related server requests
 ******************************************************************************/
var _ = require("underscore");
var log = require("./log.js").log;
var database = require("./database.js");
var db = database.getChatModel();

var GameRequest = require("../shared/gameRequest.js").GameRequest;
var SocketType = require("../shared/socketType.js").SocketType;

module.exports = {
  start: start,
  gameCreated: gameCreated,
  gameDeleted: gameDeleted,
  getChat: getChat
};

var clients = {};

//------------------------------------------------------------------------------
// Start the chat socket server
function start(socketServer) {
  socketServer.on('connection', onConnection);
}

//------------------------------------------------------------------------------
// A game was created, so add an associated chat database
function gameCreated(gid, callback) {
  var newChat = new db({
    gid: gid,
    messages: []
  });

  newChat.save(function (err) {
    if (err) {
      log.error('Failed to save new chat for new game.');
      return;
    }
    if (callback) {
      callback(err);
    }
  });
}

//------------------------------------------------------------------------------
// A game was deleted, so remove the associated chat database
function gameDeleted(gid, callback) {
  if (gid != null) {
    db.findOneAndRemove({ gid: gid }, function(err, found) {
      if (!found) {
        log.error("Couldn't find game to remove associated chat database: " + gid);
      }
      if (callback) {
        callback(err);
      }
    });
  }
}

//------------------------------------------------------------------------------
// Get a particular game object
function getChat(gid, callback) {
  db.findById(gid).lean().exec(callback);
}

//------------------------------------------------------------------------------
// A player joined the chat server
var onConnection = function(connection) {
  clients[connection.id] = { connection: connection };
  connection.on('close', function() {
    delete clients[connection.id];
  });
  connection.on('data', function(data) {
    var message = JSON.parse(data);
    switch (message.request) {
      case GameRequest.CHAT_HISTORY:
        sendHistory(message.data.gid, message.data.user, clients[connection.id]);
        break;
      case GameRequest.SEND_CHAT:
        messageSent(message.data);
        break;
    }
  });
}

//------------------------------------------------------------------------------
// A player requested all chat history for them
var sendHistory = function(gid, user, client) {
  client.gid = gid;
  client.user = user;
  db.findOne({ gid: gid }, function (error, found) {
    if (error) {
      log.error('Error reading database for chat');
    }
    if (found) {
      _.each(found.messages, function(message) {
        broadcastMessage(message, client);
      });
    }
  });
}

//------------------------------------------------------------------------------
// A player sent a chat message
var messageSent = function(message) {
  // Save the message in the database
  saveMessage(message, () => {
    // Broadcast the message to all connected players
    _.each(clients, function(client) {
      if (client.gid === message.gid) {
        broadcastMessage(message, client, true);
      }
    });
  });
}

//------------------------------------------------------------------------------
// Save the message to the database
var saveMessage = function(message, finishCB) {
  db.findOne({ gid: message.gid }, function (error, found) {
    if (error) {
      log.error('Error reading database for chat');
    }

    if (found) {
      var entry = {
        from       : message.from,
        to         : message.to,
        message    : message.message,
        turnNumber : message.turnNumber,
        timestamp  : Date.now()
      };
      found.messages.push(entry);
      found.save(function (err) {
        if (err) {
          log.error("Failed to save new chat entry: " + err);
        }
        else {
          finishCB();
        }
      });
    }
  });
}

//------------------------------------------------------------------------------
// Send message to client if it is meant for them to see
var broadcastMessage = function(message, client, isNew) {
  if (!message.to || message.from === client.user || message.to === client.user) {
    message.isNew = isNew;
    client.connection.write(JSON.stringify({ socketType: SocketType.CHAT, message: message }));
  }
}
