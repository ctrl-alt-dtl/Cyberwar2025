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
          attack = {
            targetPlayer: Util.Shared.findPlayerByColor(newTurn.players, Util.Shared.getServerNode(prevTurn.serverNodes, order.node.color, order.node.index).ownerColor),
            target: order.node,
            defenderStrength: getNodeStrength(newTurn.serverNodes, order.node),
            attackers: []
          };
          attacks.push(attack);
        }
        var attackStrength = getNodeStrength(newTurn.serverNodes, order.params.source);
        attack.attackers.push({
          prevTurnPlayer: player,
          newTurnPlayer: Util.Shared.findPlayerByName(newTurn.players, player.name),
          attackerNode: order.params.source,
          type: order.action,
          strength: attackStrength,
          color: player.color,
          manipulateColor: order.params.color,
          success: false
        });
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
    attack.attackers.find(attacker => attacker.color == winningColor).success = true;
    onAttackSuccess(serverNodes, attack, winningColor);
  }

  // File a report for each player in this attack
  attack.attackers.forEach(attacker => {
    reportAttack(attack, attacker);
  });
}

//------------------------------------------------------------------------------
var performMultipleSourceAttack = function(serverNodes, attack) {
  var attacker = attack.attackers[0];
  var serverStrengths = _.map(attack.attackers, function(attacker) { return attacker.strength; });
  var attackerStrength = _.reduce(serverStrengths, function(tally, strength) { return tally + strength + ' '; }, '');
  console.log('Multi server attack: Defender = ' + attack.defenderStrength + ' Attacker = ' + attackerStrength);
  if (AdjudicationMath.captureOddsOneVsMany(attack.defenderStrength, serverStrengths)) {
    // Attacker won
    attacker.success = true;
    onAttackSuccess(serverNodes, attack, attacker.color);
  }

  // File a report for this attack
  attacker.strength = serverStrengths.reduce((total, strength) => total + strength, 0); // Combine strength for report
  attacker.attackerNode = attack.attackers.map(attacker => attacker.attackerNode); // Combine attacker nodes for report
  reportAttack(attack, attacker);
}

//------------------------------------------------------------------------------
var performBasicAttack = function(serverNodes, attack) {
  var attacker = attack.attackers[0];
  console.log('Basic attack: Defender = ' + attack.defenderStrength + ' Attacker (' + attacker.color + ') = '  + attacker.strength + '\n');
  if (AdjudicationMath.captureOddsOneVsOne(attack.defenderStrength, attacker.strength)) {
    // Attacker won
    attacker.success = true;
    onAttackSuccess(serverNodes, attack, attacker.color);
  }

  // File a report for this attack
  reportAttack(attack, attacker);
}

//------------------------------------------------------------------------------
var onAttackSuccess = function(serverNodes, attack, newOwnerColor) {
  // Change the owner color of the node and reset the strength
  var serverNode = Util.Shared.getServerNode(serverNodes, attack.target.color, attack.target.index);
  delete serverNode.manipulateColor;
  serverNode.ownerColor = newOwnerColor;
  serverNode.strength = 1;
  delete serverNode.previousStrength;

  // Check for manipulates we need to apply
  _.each(attack.attackers, function(attacker) {
    if (attacker.color == newOwnerColor && attacker.type == ActionType.MANIPULATE) {
      serverNode.manipulateColor = attacker.manipulateColor;
    }
  });

  // If there was a previous owner, let them know they lost a node
  if (attack.targetPlayer) {
    var reportParams = {
      // Add the attacked player to the report
      attackedPlayer: attack.targetPlayer.name,
      // Add the defense strength since the attacked player would know that
      defenderStrength: attack.defenderStrength
    };
    Util.addReport(attack.targetPlayer, ActionType.ACQUIRE, attack.target, reportParams);
  }
}

//------------------------------------------------------------------------------
var reportAttack = function(attack, attacker) {
  var previouslyScannedNode = Util.Shared.isLocationInNodeList(attack.target, attacker.prevTurnPlayer.scannedNodes);

  // Add a report of this action to the acting player
  var reportParams = {
    // The node(s) the attack came from
    attackerNode: attacker.attackerNode,
    // If there was a previous owner of this node, add that to the report
    attackedPlayer: attack.targetPlayer ? attack.targetPlayer.name : undefined,
    // Add the attack's strength to the report
    attackStrength: attacker.strength,
    // If the attacker had previously scanned this node, report the node's defense strength
    defenderStrength: previouslyScannedNode ? attack.defenderStrength : undefined,
    // Report whether the attack was a success or not
    success: attacker.success,
  };
  Util.addReport(attacker.newTurnPlayer, attacker.type, attack.target, reportParams);
}