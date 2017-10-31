angular.module('CyberWar')
.directive('researchTable', ['GameState', function(GameState) {
  function link($scope, element, attrs) {
    GameState.addListener(onGameStateChanged);
    $scope.ResearchType = ResearchType;

    // ----------------------------------------------------------------------------
    $scope.$on('$destroy', function() {
      GameState.removeListener(onGameStateChanged);
    });

    // ----------------------------------------------------------------------------
    function onGameStateChanged() {
      updateMeters();
    }

    // ----------------------------------------------------------------------------
    $scope.getCurrentInvestment = function(type) {
      if (GameState.currentPlayerData) {
        return GameState.currentInvestments[type];
      }
      return 0;
    }

    // ----------------------------------------------------------------------------
    $scope.canInvest = function() {
      return !GameState.submittedTurn();
    }

    // ----------------------------------------------------------------------------
    $scope.invest = function(type, amount) {
      if ($scope.canInvest()) {
        GameState.invest(type, amount);
        updateMeters();
      }
    }

    // ----------------------------------------------------------------------------
    var updateMeters = function() {
      $scope.actionPoints = GameState.currentActionPoints;
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
  }
  return {
    link: link,
    restrict: 'E',
    templateUrl: 'researchTable.html',
  }
}]);