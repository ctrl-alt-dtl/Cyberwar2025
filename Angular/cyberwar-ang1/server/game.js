/*******************************************************************************
 * Handles chat related server requests
 ******************************************************************************/
var _ = require("underscore");
// var auth = require("./authenticator.js");
var log = require("./log.js").log;
var database = require("./database.js");
var SocketType = require("../shared/socketType.js").SocketType;
