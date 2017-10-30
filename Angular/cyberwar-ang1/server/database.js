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

// Schema for research
var research = {};
_.each(ResearchType, function(type) { research[type] = { type: Number, default: 0 }});
var researchSchema = new Schema(research, { _id: false });

// Schema for a player
var playerSchema = new Schema({
  name     : { type: String, default: '' },            // The player's name
  color    : { type: String, default: Color.INVALID }, // What color the player is playing as
  research : researchSchema,                           // What research this player has done
}, { _id: false });

// Schema that defines the state of the game for one turn
var turnSchema = new Schema({
  roundNumber : { type: Number, default: 0 }, // Which round number is it
  players     : [playerSchema],               // The state of all players at the beginning of this turn
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
