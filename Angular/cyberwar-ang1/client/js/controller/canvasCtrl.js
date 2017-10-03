var app = angular.module('CyberWar', ['ui.bootstrap', 'ui.grid']);

app.controller('canvasCtrl', function($scope, $uibModal, $log, $document){
  $scope.canvasKonvaObj = false;
  $scope.canvaskonvaStageObj = false;


  // MODAL TEST
  var $ctrl = this;
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
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $ctrl.selected = selectedItem;
      console.log("Selected: " + $ctrl.selected)
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

  $ctrl.toggleAnimation = function () {
    $ctrl.animationsEnabled = !$ctrl.animationsEnabled;
  }; //MODAL TEST END
});