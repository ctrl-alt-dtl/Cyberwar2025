angular.module('CyberWar')
.directive('researchTable', function(CurrentInvestments, CurrentOrders, GameState, GameUtil) {
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
      return !GameState.submittedTurn();
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
  }
  return {
    link: link,
    restrict: 'E',
    templateUrl: 'researchTable.html',
  }
});