/*******************************************************************************
 * The main game logic controller that manages the current game state
 ******************************************************************************/
var _ = require("underscore");
var Util = require("./util.js");
var ActionType = require("../../shared/actionType.js").ActionType;
var AdjudicationMath = require("../../shared/adjudicationMath.js").AdjudicationMath;

//------------------------------------------------------------------------------
this.performOrders = function(prevTurn, newTurn) {
  _.each(prevTurn.players, function(player) {
    _.each(player.orders, function(order) {
      if (order.action == ActionType.SCAN) {
        var newTurnPlayer = Util.Shared.List.findPlayerByName(newTurn.players, player.name);
        var serverNode = Util.Shared.List.getServerNode(newTurn.serverNodes, order.node.color, order.node.index);
        if (serverNode) {
          performScan(newTurn, newTurnPlayer, serverNode, ActionType.SCAN);
        }
      }
      else if (order.action == ActionType.ANALYZE) {
        var newTurnPlayer = Util.Shared.List.findPlayerByName(newTurn.players, player.name);
        var positivelyLinkedNodes = Util.Shared.Network.getPositivelyLinkedNodes(player.color, newTurn.serverNodes, player.exploitLinks);
        _.each(positivelyLinkedNodes, function(linkedNode) {
          var serverNode = Util.Shared.List.getServerNode(newTurn.serverNodes, linkedNode.color, linkedNode.index);
          if (serverNode) {
            performScan(newTurn, newTurnPlayer, serverNode, ActionType.ANALYZE);
          }
        });
      }
    });
  });
}

//------------------------------------------------------------------------------
var performScan = function(turn, actingPlayer, serverNode, actionType) {
  console.log('Scanning node: ' + serverNode.location.color + ' ' + serverNode.location.index);
  var foundExploitLinks = [];

  actingPlayer.scannedNodes.push(serverNode);
  _.each(turn.players, function(player) {
    if (player.color != actingPlayer.color) {
      _.each(player.exploitLinks, function(exploitLink) {
        if (Util.Shared.Equality.isLocationInLink(exploitLink, serverNode.location)) {
          actingPlayer.scannedExploitLinks.push(exploitLink);
          foundExploitLinks.push({ owner: player.color, link: exploitLink })
        }
      });
    }
  });

  // Add a report of this action to the acting player
  var reportParams = {
    owner: serverNode.ownerColor,
    manipulatedOwner: serverNode.manipulateColor,
    strength: serverNode.strength,
    exploitLinksFound: foundExploitLinks
  };
  Util.addReport(actingPlayer, actionType, serverNode.location, reportParams);
}
