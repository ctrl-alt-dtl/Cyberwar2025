/*******************************************************************************
 * Defines structure and helper functions for the game's state
 ******************************************************************************/

var mongoose = require('mongoose');
var _ = require("underscore");
var log = require('./log').log;

module.exports = {
  getGameModel: getGameModel,
  getChatModel: getChatModel,
};

var ResearchType = require('../shared/researchType.js').ResearchType;

var Schema = mongoose.Schema;

//------------------------------------------------------------------------------
// Game Data

// Schema for research
var research = {};
_.each(ResearchType, function(type) { research[type] = { type: Number, default: 0 }});
var researchSchema = new Schema(research, { _id: false });

// Schema for a server node's location
var nodeLocationSchema = new Schema({
  color : { type: String, default: '' }, // The color of the player domain this node is in
  index : { type: Number, default: 0 },  // The index of the node
}, { _id: false });

// Schema for a server node
var linkSchema = new Schema({
  nodeA : nodeLocationSchema, // One of the linked nodes
  nodeB : nodeLocationSchema, // The other linked node
}, { _id: false });

// Schema for a server node
var serverNodeSchema = new Schema({
  location        : nodeLocationSchema,            // The node's location
  manipulateColor : { type: String, default: '' }, // The manipulated color of this node
  ownerColor      : { type: String, default: '' }, // The color of the node's owner
  strength        : { type: Number, default: 0 },  // The current server node strength
}, { _id: false });

// Schema for an action order
var orderSchema = new Schema({
  action : { type: String, default: '' }, // The ActionType of the action to perform
  node   : nodeLocationSchema,            // The node to perform the action on
  params : { type: Schema.Types.Mixed },  // Parameters for the action
}, { _id: false });

// Schema for a player
var playerSchema = new Schema({
  name                : { type: String, default: '' }, // The player's name
  color               : { type: String, default: '' }, // What color the player is playing as
  research            : researchSchema,                // What research this player has done
  exploitLinks        : [linkSchema],                  // The exploit links this player has
  scannedNodes        : [serverNodeSchema],            // The list of node information this player has from scanning
  scannedExploitLinks : [linkSchema],                  // The list of exploit link information this player has from scanning
  investments         : researchSchema,                // How much the player invested in each research type this turn
  orders              : [orderSchema],                 // The actions the player wants to take this turn
}, { _id: false });

// Schema that defines the state of the game for one turn
var turnSchema = new Schema({
  roundNumber : { type: Number, default: 0 }, // Which round number is it
  players     : [playerSchema],               // The state of all players at the beginning of this turn
  serverNodes : [serverNodeSchema],           // The list of all server nodes on the board
  overtLinks  : [linkSchema],                 // The list of all overt links on the board
}, { _id: false });

// Schema for our game.
var gameSchema = new Schema({
  turns : [turnSchema], // The list of turns that make up this game
});

//------------------------------------------------------------------------------
var gameModel = mongoose.model('GameModel', gameSchema);
if (!gameModel) {
  log.error('Failed to create database game model');
}

function getGameModel() {
  return gameModel;
}

// Schema that defines a chat message
var messageSchema = new Schema({
  from       : { type: String, default: '' }, // Who sent the message
  to         : { type: String, default: '' }, // The intended receiver of the message (undefined if it's a public message)
  message    : { type: String, default: '' }, // The actual message itself
  turnNumber : { type: Number, default: 0 },  // The turn number the message was sent at
}, { _id: false, timestamps: { createdAt: 'timestamp' } });

// Schema for our game chat.
var chatSchema = new Schema({
  gid      : { type: String, default: '' }, // The associated game ID
  messages : [messageSchema], // The list of messages that are in this game
});

//------------------------------------------------------------------------------
var chatModel = mongoose.model('ChatModel', chatSchema);
if (!chatModel) {
  log.error('Failed to create database chat model');
}

function getChatModel() {
  return chatModel;
}