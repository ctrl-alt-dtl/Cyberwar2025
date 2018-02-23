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
        var newTurnPlayer = Util.Shared.findPlayerByColor(newTurn.players, player.color);
        var serverNode = Util.Shared.getServerNode(newTurn.serverNodes, order.node.color, order.node.index);
        if (serverNode) {
          performScan(newTurn, newTurnPlayer, serverNode);
        }
      }
      else if (order.action == ActionType.ANALYZE) {
        var newTurnPlayer = Util.Shared.findPlayerByColor(newTurn.players, player.color);
        var positivelyLinkedNodes = Util.Shared.getPositivelyLinkedNodes(player.color, newTurn.serverNodes, player.exploitLinks);
        _.each(positivelyLinkedNodes, function(linkedNode) {
          var serverNode = Util.Shared.getServerNode(newTurn.serverNodes, linkedNode.color, linkedNode.index);
          if (serverNode) {
            performScan(newTurn, newTurnPlayer, serverNode);
          }
        });
      }
    });
  });
}

//------------------------------------------------------------------------------
var performScan = function(turn, actingPlayer, serverNode) {
  console.log('Scanning node: ' + serverNode.location.color + ' ' + serverNode.location.index);
  actingPlayer.scannedNodes.push(serverNode);
  _.each(turn.players, function(player) {
    if (player.color != actingPlayer.color) {
      _.each(player.exploitLinks, function(exploitLink) {
        if (Util.Shared.isLocationInLink(exploitLink, serverNode.location)) {
          actingPlayer.scannedExploitLinks.push(exploitLink);
        }
      });
    }
  });
}
