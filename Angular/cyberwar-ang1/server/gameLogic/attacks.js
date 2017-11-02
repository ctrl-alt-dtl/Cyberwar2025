/*******************************************************************************
 * The main game logic controller that manages the current game state
 ******************************************************************************/
var _ = require("underscore");
var Util = require("./util.js");
var ActionType = require("../../shared/actionType.js").ActionType;
var AdjudicationMath = require("../../shared/adjudicationMath.js").AdjudicationMath;
var Color = require("../../shared/color.js").Color;

//------------------------------------------------------------------------------
this.performAttacks = function(prevTurn, newTurn) {
  var attacks = getAttacks(prevTurn, newTurn);
  _.each(attacks, function(attack) {
    if (hasMultipleAttackers(attack)) {
      performMultipleAttackerAttack(newTurn.serverNodes, attack);
    }
    else if (hasMultipleSources(attack)) {
      performMultipleSourceAttack(newTurn.serverNodes, attack);
    }
    else {
      performBasicAttack(newTurn.serverNodes, attack);
    }
  });
}

//------------------------------------------------------------------------------
var getAttacks = function(prevTurn, newTurn) {
  var attacks = [];
  _.each(prevTurn.players, function(player) {
    _.each(player.orders, function(order) {
      if (order.action == ActionType.ACQUIRE || order.action == ActionType.MANIPULATE) {
        var attack = getAttackAgainstTarget(attacks, order.node);
        if (!attack) {
          attack = { target: order.node, defenderStrength: getNodeStrength(newTurn.serverNodes, order.node), attackers: [] };
          attacks.push(attack);
        }
        var attackStrength = getNodeStrength(newTurn.serverNodes, order.params.source);
        attack.attackers.push({ type: order.action, strength: attackStrength, color: player.color, manipulateColor: order.params.color });
      }
    });
  });
  return attacks;
}

//------------------------------------------------------------------------------
var getAttackAgainstTarget = function(attacks, target) {
  return _.find(attacks, function(attack) { return Util.Shared.isSameLocation(attack.target, target); });
}

//------------------------------------------------------------------------------
var getNodeStrength = function(serverNodes, node) {
  return Util.Shared.getServerNode(serverNodes, node.color, node.index).strength;
}

//------------------------------------------------------------------------------
var hasMultipleAttackers = function(attack) {
  if (hasMultipleSources(attack)) {
    var previousAttackerColor;
    return _.any(attack.attackers, function(attacker) {
      var attackerColor = attacker.color;
      if (!previousAttackerColor) {
        previousAttackerColor = attackerColor;
      }
      else if (previousAttackerColor != attackerColor) {
        return true;
      }
      return false;
    });
  }
  return false;
}

//------------------------------------------------------------------------------
var hasMultipleSources = function(attack) {
  return attack.attackers.length > 1;
}

//------------------------------------------------------------------------------
var performMultipleAttackerAttack = function(serverNodes, attack) {
  // Calculate attacker strengths
  var redStrength = 0, orangeStrength = 0, yellowStrength = 0, greenStrength = 0, blueStrength = 0, purpleStrength = 0;
  _.each(attack.attackers, function(attacker) {
    switch (attacker.color) {
      case Color.RED:
        redStrength += attacker.strength;
        break;
      case Color.ORANGE:
        orangeStrength += attacker.strength;
        break;
      case Color.YELLOW:
        yellowStrength += attacker.strength;
        break;
      case Color.GREEN:
        greenStrength += attacker.strength;
        break;
      case Color.BLUE:
        blueStrength += attacker.strength;
        break;
      case Color.PURPLE:
        purpleStrength += attacker.strength;
        break;
    }
  });

  // Calculate attack results
  console.log('Multi player attack: Defender = ' + attack.defenderStrength + ' Red = ' + redStrength + ' Orange = ' + orangeStrength + ' Yellow = ' + yellowStrength + ' Green = ' + greenStrength + ' Blue = ' + blueStrength + ' Purple = ' + purpleStrength);
  var winner = AdjudicationMath.captureMultiCombat(attack.defenderStrength, greenStrength, blueStrength, purpleStrength, redStrength, orangeStrength, yellowStrength);
  var winningColor;
  if (winner.red) {
    winningColor = Color.RED;
  }
  else if (winner.orange) {
    winningColor = Color.ORANGE;
  }
  else if (winner.yellow) {
    winningColor = Color.YELLOW;
  }
  else if (winner.green) {
    winningColor = Color.GREEN;
  }
  else if (winner.blue) {
    winningColor = Color.BLUE;
  }
  else if (winner.purple) {
    winningColor = Color.PURPLE;
  }

  // If we have a winner, perform winning logic
  if (winningColor) {
    onAttackSuccess(serverNodes, attack.target, winningColor, attack.attackers);
  }
}

//------------------------------------------------------------------------------
var performMultipleSourceAttack = function(serverNodes, attack) {
  var serverStrengths = _.map(attack.attackers, function(attacker) { return attacker.strength; });
  var attackerStrength = _.reduce(serverStrengths, function(tally, strength) { return tally + strength + ' '; }, '');
  console.log('Multi server attack: Defender = ' + attack.defenderStrength + ' Attacker = ' + attackerStrength);
  if (AdjudicationMath.captureOddsOneVsMany(attack.defenderStrength, serverStrengths)) {
    // Attacker won
    onAttackSuccess(serverNodes, attack.target, attack.attackers[0].color, attack.attackers);
  }
}

//------------------------------------------------------------------------------
var performBasicAttack = function(serverNodes, attack) {
  var attacker = attack.attackers[0];
  console.log('Basic attack: Defender = ' + attack.defenderStrength + ' Attacker = ' + attacker.strength);
  if (AdjudicationMath.captureOddsOneVsOne(attack.defenderStrength, attacker.strength)) {
    // Attacker won
    onAttackSuccess(serverNodes, attack.target, attacker.color, attack.attackers);
  }
}

//------------------------------------------------------------------------------
var onAttackSuccess = function(serverNodes, node, ownerColor, attackers) {
  // Change the owner color of the node and reset the strength
  var serverNode = Util.Shared.getServerNode(serverNodes, node.color, node.index);
  serverNode.ownerColor = ownerColor;
  serverNode.strength = 1;

  // TODO: Check for manipulate actions by new owner and apply manipulate color if there was one
}
