angular.module('CyberWar')
.directive('researchTable', ['CurrentInvestments', 'CurrentOrders', 'GameState', function(CurrentInvestments, CurrentOrders, GameState) {
  function link($scope, element, attrs) {
    CurrentInvestments.addListener(onInvestmentsChanged);
    CurrentOrders.addListener(onActionPointsChanged);
    $scope.ResearchType = ResearchType;
    $scope.Tier1CyberEffects = Tier1CyberEffects;
    $scope.Tier2CyberEffects = Tier2CyberEffects;
    $scope.Tier3CyberEffects = Tier3CyberEffects;
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
  }
  return {
    link: link,
    restrict: 'E',
    templateUrl: 'researchTable.html',
  }
}]);