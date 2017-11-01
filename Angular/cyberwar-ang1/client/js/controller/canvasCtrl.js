var app = angular.module('CyberWar');
app.controller('canvasCtrl', ['$scope', 'GameState', 'GameUtil', '$uibModal', '$log', '$document', function($scope, GameState, GameUtil, $uibModal, $log, $document){
  GameState.addListener(onGameStateChanged);
  $scope.Color = Color;
  $scope.nodesPerDomain = new Array(GameUtil.Config.SERVER_NODES_PER_DOMAIN);

  // ----------------------------------------------------------------------------
  $scope.$on('$destroy', function() {
    GameState.removeListener(onGameStateChanged);
  });

  // ----------------------------------------------------------------------------
  $scope.playerBaseClicked = function(color, index) {
    console.log(color + " Base Clicked");
  }

  // ----------------------------------------------------------------------------
  $scope.serverNodeClicked = function(color, index) {
    console.log(color + " Hex " + index + " Clicked");
  }

  // ----------------------------------------------------------------------------
  function onGameStateChanged() {
    drawBoard(GameState.currentPlayerData);
    $scope.overtLinks = GameState.currentGameState.overtLinks;
    //$scope.exploitLinks = GameState.currentGameState.overtLinks;
  }

  // MODAL TEST
  var $ctrl = this;
  $ctrl.items = [
    "Red",
    "Purple",
    "Blue",
    "Green",
    "Yellow",
    "Orange"
  ];

 /*
  $ctrl.items = [
    "Secure",
    "Expel",
    "Analyze",
    "Acquire",
    "Manipulate",
    "Deny",
    "Scan",
    "Exploit",
    "Implant"
  ];
  */
  $ctrl.buttonStyle='btn-success';

  $ctrl.animationsEnabled = true;

  $ctrl.open = function (size, parentSelector) {
    var parentElem = parentSelector ?
      app.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;

    var modalInstance = $uibModal.open({
      animation: $ctrl.animationsEnabled,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      controllerAs: '$ctrl',
      size: size,
      appendTo: parentElem,
      resolve: {
        items: function () {
          return $ctrl.items;
        },
        parentId: function () {
          return 'test';
        }
      }
    });

    modalInstance.result.then(function (selectedItem, parentId) {
      $ctrl.selected = selectedItem;
      $ctrl.parentId = parentId; // I want this to be the id of the calling hex (e.g. r1Hex).

      console.log("Selected: " + $ctrl.selected + " From: " + $ctrl.parentId);
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

  $ctrl.toggleAnimation = function () {
    $ctrl.animationsEnabled = !$ctrl.animationsEnabled;
  }; //MODAL TEST END
}]);
