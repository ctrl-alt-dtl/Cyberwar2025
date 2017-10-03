var PORT = process.env.PORT || 8080;
var enableHeapDebug = false;

// ----------------------------------------------------------------------------
var express = require("express");
var expressSession = require("express-session");
var bodyParser = require("body-parser");
var sockjs = require('sockjs');

// var URLHandler = require("./server/urlHandler.js");
var log = require("./server/log.js").log;
var Game = require("./server/game.js");
// var Chat = require("./server/chat.js");

var app = express();
var httpServer = require("http").createServer(app);
var socketServer = sockjs.createServer({sockjs_url: '/node_modules/sockjs/lib/sockjs.js'});
var hideAdminPage = process.env.HIDE_ADMIN_PAGE;

// ----------------------------------------------------------------------------
app.use(expressSession({secret: "1234567890QWERTY", resave: true, saveUninitialized: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname));
app.use(express.static(__dirname + "/client/audio"));
app.use(express.static(__dirname + "/client/css"));
app.use(express.static(__dirname + "/client/js"));
app.use(express.static(__dirname + "/client/html"));
app.use(express.static(__dirname + "/client/img"));
app.use(express.static(__dirname + "/client/fonts"));
app.use(express.static(__dirname + "/shared"));
app.use(express.static(__dirname + "/lib"));
app.use(express.static(__dirname + "/build"));

// ----------------------------------------------------------------------------
app.get("/", function (require, response) {
  if (!hideAdminPage) {
    //response.sendFile("/client/html/gamelist.html", {root: __dirname});
    response.sendFile("/client/html/index.html", {root: __dirname});
  }
});

// ----------------------------------------------------------------------------
//get the list of games from the server
//app.get("/games", URLHandler.gameList);

// ----------------------------------------------------------------------------
//request to create a new game
//app.post("/games", URLHandler.newGame);
//app.get("/new", URLHandler.newGameEGS);//for Global ECCO

// ----------------------------------------------------------------------------
//request to delete a game instance
//app.delete("/games/:id", URLHandler.deleteGame);

// ----------------------------------------------------------------------------
//request to play a game instance
//app.get("/play", URLHandler.play);

// ----------------------------------------------------------------------------
//app.get("/sessionData", URLHandler.sessionData);

// ----------------------------------------------------------------------------
socketServer.installHandlers(httpServer, {prefix: '/game'});
// Game.start(socketServer);
// Chat.start(socketServer);
httpServer.listen(PORT);
log.info("Listening on port:" + PORT);







