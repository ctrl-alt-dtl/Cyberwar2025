// MODAL TEST
app.controller('ModalInstanceCtrl', function ($uibModalInstance, items, parentId) {
  var $ctrl = this;
  $ctrl.items = items;
  $ctrl.selected = {
    item: $ctrl.items[0]
  };

  $ctrl.parentId = parentId; // Trying to pass this in (but not calling it correctly)

  $ctrl.ok = function () {
    $uibModalInstance.close($ctrl.selected.item);
  };

  $ctrl.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
}); // END MODAL TEST