/*******************************************************************************
 * Defines structure and helper functions for the game's state
 ******************************************************************************/

var mongoose = require('mongoose');
var _ = require("underscore");
var log = require('./log').log;

module.exports = {
  getGameModel: getGameModel,
};

var Color = require('../shared/color.js').Color;
var ResearchType = require('../shared/researchType.js').ResearchType;

var Schema = mongoose.Schema;

//------------------------------------------------------------------------------
// Game Data

// Schema for a server node's location
var nodeLocationSchema = new Schema({
  color : { type: String, default: '' }, // The color of the player domain this node is in
  index : { type: Number, default: 0 },  // The index of the node
}, { _id: false });

// Schema for research
var research = {};
_.each(ResearchType, function(type) { research[type] = { type: Number, default: 0 }});
var researchSchema = new Schema(research, { _id: false });

// Schema for an action order
var orderSchema = new Schema({
  action : { type: String, default: '' }, // The ActionType of the action to perform
  node   : nodeLocationSchema,            // The node to perform the action on
  color  : { type: String, default: '' }, // (Manipulate actions only) The color to use for the action
}, { _id: false });

// Schema for a player
var playerSchema = new Schema({
  name        : { type: String, default: '' }, // The player's name
  color       : { type: String, default: '' }, // What color the player is playing as
  research    : researchSchema,                // What research this player has done
  investments : researchSchema,                // How much the player invested in each research type this turn
  orders      : [orderSchema],                 // The actions the player wants to take this turn
}, { _id: false });

// Schema for a server node
var serverNodeSchema = new Schema({
  location   : nodeLocationSchema,            // The node's location
  ownerColor : { type: String, default: '' }, // The color of the node's owner
  strength   : { type: Number, default: 0 },  // The current server node strength
}, { _id: false });

// Schema for a server node
var overtLinkSchema = new Schema({
  nodeA : nodeLocationSchema, // One of the linked nodes
  nodeB : nodeLocationSchema, // The other linked node
}, { _id: false });

// Schema that defines the state of the game for one turn
var turnSchema = new Schema({
  roundNumber : { type: Number, default: 0 }, // Which round number is it
  players     : [playerSchema],               // The state of all players at the beginning of this turn
  serverNodes : [serverNodeSchema],           // The list of all server nodes on the board
  overtLinks  : [overtLinkSchema],            // The list of all overt links on the board
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
