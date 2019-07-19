angular.module('CyberWar')
.directive('researchTable', function($uibModal, CurrentInvestments, CurrentOrders, GameState, GameUtil) {
  function link($scope, element, attrs) {
    CurrentInvestments.addListener(onInvestmentsChanged);
    CurrentOrders.addListener(onActionPointsChanged);
    $scope.ResearchType = ResearchType;
    $scope.cyberEffects = [
      getCyberEffectsObject(ActionType.SECURE,  ActionType.ACQUIRE,    ActionType.SCAN   ),
      getCyberEffectsObject(ActionType.EXPEL,   ActionType.MANIPULATE, ActionType.EXPLOIT),
      getCyberEffectsObject(ActionType.ANALYZE, ActionType.DENY,       ActionType.IMPLANT),
    ];
    $scope.isObserver = () => GameState.isObserver();

    // ----------------------------------------------------------------------------
    $scope.$on('$destroy', function() {
      CurrentInvestments.addListener(onInvestmentsChanged);
      CurrentOrders.addListener(onActionPointsChanged);
    });

    // ----------------------------------------------------------------------------
    function onInvestmentsChanged() {
      onActionPointsChanged();
      $scope.researchMeters = {};
      _.each(ResearchType, function(type) {
        var researchPaid = GameState.currentPlayerData.research[type];
        var currentInvestment = $scope.getCurrentInvestment(type);
        var costRemaining = GameState.getInvestmentRemaining(type) - currentInvestment;
        $scope.researchMeters[type] = {
          research: new Array(researchPaid),
          currentInvestment: new Array(currentInvestment),
          costRemaining: new Array(costRemaining),
        };
      });
    }

    // ----------------------------------------------------------------------------
    function onActionPointsChanged() {
      $scope.actionPoints = GameState.currentActionPoints;
    }

    // ----------------------------------------------------------------------------
    $scope.getTooltip = function(actionType) {
      return getShortDescription(actionType);
    }

    // ----------------------------------------------------------------------------
    $scope.getDetails = function(actionType) {
      var description = getLongDescription(actionType);
      var modalInstance = $uibModal.open({
        animation: true,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'actionDetails.html',
        controller: 'ActionDetailsDialogController',
        resolve: {
          actionType: () => actionType,
          description: () => description,
        }
      });
      // Listen for the result of the dialog so we don't get warnings when it is closed
      modalInstance.result.then(() => {}, () => {});
    }

    // ----------------------------------------------------------------------------
    $scope.getUnlockStatus = function(researchType, researchLevel) {
      if (GameState.currentPlayerData) {
        var totalCurrentInvestment = GameState.currentPlayerData.research[researchType] + $scope.getCurrentInvestment(researchType);
        if (GameUtil.isActionUnlocked(totalCurrentInvestment, researchLevel)) {
          return 'unlocked';
        }
        else if (GameUtil.isActionPartiallyUnlocked(totalCurrentInvestment, researchLevel)) {
          return 'partially-unlocked';
        }
      }
      return 'locked';
    }

    // ----------------------------------------------------------------------------
    $scope.getCurrentInvestment = function(type) {
      return CurrentInvestments.getInvestment(type);
    }

    // ----------------------------------------------------------------------------
    $scope.canInvest = function() {
      return !GameState.hasSubmittedTurn();
    }

    // ----------------------------------------------------------------------------
    $scope.invest = function(type, amount) {
      if ($scope.canInvest()) {
        GameState.invest(type, amount);
      }
    }

    // ----------------------------------------------------------------------------
    function getCyberEffectsObject(cndAction, cnaAction, cneAction) {
      var object = {};
      object[ResearchType.CND] = cndAction;
      object[ResearchType.CNA] = cnaAction;
      object[ResearchType.CNE] = cneAction;
      return object;
    }

    // ----------------------------------------------------------------------------
    function getShortDescription(actionType) {
      switch (actionType) {
        case ActionType.SECURE:
          return 'Increase attack/defense odds';
        case ActionType.ACQUIRE:
          return 'Try to take control of node overtly';
        case ActionType.SCAN:
          return 'Reveals all covert links running to and from node as well as node\'s owner and strength';
        case ActionType.EXPEL:
          return 'Removes any exploiting players who reside on your overtly controlled server nodes';
        case ActionType.MANIPULATE:
          return 'Try to acquire node making it look like another player\'s color if successful';
        case ActionType.EXPLOIT:
          return 'Attack node leaving a covert link if successful';
        case ActionType.ANALYZE:
          return 'Scans every node in network and nodes adjacent to network';
        case ActionType.DENY:
          return 'Removes that server node from board';
        case ActionType.IMPLANT:
          return 'Reduces server node defenses or makes player lose turn';
      }
      return '';
    }

    // ----------------------------------------------------------------------------
    function getLongDescription(actionType) {
      switch (actionType) {
        case ActionType.SECURE:
          return 'Increases the value of a server node by one point value to a max of four. The higher value on a server node, the stronger the attack and defense odds are against opposing cyber effects.';
        case ActionType.ACQUIRE:
          return 'Overtly seizes control of targeted server node. The Acquire effect cannot be used against bases. The odds of success for an Acquire effect attempt are determined by comparing the\
                  value of the attacking server node(s) with the value of the defending server node. Thus, using Secure effects increases the likelihood of a successful acquisition using the secured server.\
                  Players also can execute this effect in the blind, or without prior knowledge of someone controlling that server node using the Scan effect.  Acquire action strength stacks when attacking the same node from multiple locations.';
        case ActionType.SCAN:
          return 'Determines the status of a targeted server. It reveals all covert links running to and from the server as well as its current value and owner. Will show manipulated nodes\' true owner with the color they\
                  are faking as the node\'s outline.';
        case ActionType.EXPEL:
          return 'A defensive cyber effect that removes all covertly hidden or exploiting players who reside on your overtly controlled server nodes.';
        case ActionType.MANIPULATE:
          return 'Same as Acquire, but can misattribute the acquire action launched and mask the owner as another player on the board.';
        case ActionType.EXPLOIT:
          return 'Functions like an Acquire action, but on success, you will not actually own the node. You will get action points from it and can perform actions off of it as if it was your node,\
                  but you will not be able to Secure it. Other players will not see you have this link unless they scan one of the two linked nodes.  Exploit actions do not stack.';
        case ActionType.ANALYZE:
          return 'More effective version of Scan because it can scan the player’s entire network of linked server nodes (+1) to reveal any exploited players residing on the player\'s network.';
        case ActionType.DENY:
          return 'Calculates an attack similar to Acquire, but will remove the node from play if successful. Cutting off a player\'s base from the network will eliminate them from the game. Deny actions do not stack and are calculated separately.';
        case ActionType.IMPLANT:
          return 'Reduces the defensive value of that server node to one for one turn. Then the player must launch another OCO or CNE effect to gain access to that server node.\
                  If launched on a base, there is a chance the defending player can be locked out of play for one round.';
      }
      return '';
    }
  }
  return {
    link: link,
    restrict: 'E',
    templateUrl: 'researchTable.html',
  }
});