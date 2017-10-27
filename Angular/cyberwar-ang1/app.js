/*
CyberWar:2025
Defense Analysis Thesis/Capstone Project
December 2017
 */

/*
Konva Object Naming Conventions:

Using the Red Domain (a.k.a. "DotEvil") as an example:
  - Red Base = rBase
  - Red Server Nodes = r[#]Hex (e.g. r1Hex, r2Hex,..., r8Hex)
  - Red Primary/Overt Links:
    - Red Base = rBaseToR1Hex & rBaseToR2Hex
    - Red Server Nodes = r1HexToR3Hex, r2HexToR5Hex, etc.
  - Red Exploit/Covert Links:
    - Red Base: r1rBaseExploit & r2rBaseExploit
    - Red Server Nodes = r1r3Exploit, r2r5Exploit, etc.

    PLEASE NOTE:
    Naming convention order of movement in a player domain goes from Tier 4 (Base, r1Hex, & r2Hex)
      up to Tier 3 and then inward to the center. From there it goes to Tier 2, then Tier 1.

                ->[Node8]<-                 #Tier 1
               |           |
            ->[Node6]-->[Node7]<-           #Tier 2
           |       ^     ^       |
           |        \   /        |
       ->[Node3]-->[Node4]<--[Node5]<-      #Tier 3
      |                               |
    [Node1]<--------[Base]-------->[Node2]  #Tier 4

    The order of movement around the board is clockwise (e.g. Red -> Purple -> Blue -> Green -> Yellow -> Orange -> Red).
    This applies for inter-domain primary and exploit links. The only confusion is in the center of Tier 1
      where a player has to skip past their near-domain neighbor three other far domains.
      For example, when "Red8Hex" has to cross to "Blue8Hex", "Green8Hex", and "Yellow8Hex" directly
      the primary/exploit links do not go through Purple or Orange.

Inter-Domain Link Naming Conventions:
  Again these are named in a clockwise fashion.
  So with Red ("DotEvil") to Purple ("WMDeez") the Primary/Overt links are:
  Tier 4: R1HexP2Hex
  Tier 3: R3HexP5Hex
  Tier 2: R6HexP7Hex
  Tier 1: R8HexP8Hex (Note: In this case Red and Purple are near neighbors)


  Exploit/Covert links are slightly different:
  Tier 4: r1p2Exploit
  Tier 3: r3p5Exploit
  Tier 2: r6p7Exploit
  Tier 1: r8p8Exploit
  (There is reason why lower case was used here, it just is. However, it can be changed fairly easily.)

 */


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
Game.start(socketServer);
// Chat.start(socketServer);
httpServer.listen(PORT);
log.info("Listening on port:" + PORT);







