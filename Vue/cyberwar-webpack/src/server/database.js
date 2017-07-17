/**
 * File: database.js
 * Created by: David "Ty" Long
 * Date: 7/10/17
 * Info: This is the server side code to control and record game states.
 */

var mongoose = require('mongoose');
var log = require("./log").log;

var GamePhase = new(require("../shared/gamePhase").GamePhase)();

var mongoURL = process.env.MONGOURL || "mongodb://localhost/CyberWar";
log.info("Connecting to MongoDB at: " + mongoURL);
mongoose.connect(mongoURL);

var Schema = mongoose.Schema;
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // Test connection
});
