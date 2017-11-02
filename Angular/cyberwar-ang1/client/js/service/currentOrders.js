angular.module('CyberWar')
.service('CurrentOrders', [function() {
  var cbListener = new Gambit.CallbackListener();

  var orders = [];

  //---------------------------------------------------------------------------
  this.addListener = function(callback) {
    cbListener.addListener(callback);
  }

  //---------------------------------------------------------------------------
  this.removeListener = function(callback) {
    cbListener.removeListener(callback);
  }

  //---------------------------------------------------------------------------
  this.getOrders = function() {
    return orders;
  }

  //---------------------------------------------------------------------------
  this.setOrders = function(newOrders) {
    orders = newOrders;
    cbListener.triggerAll();
  }

  //---------------------------------------------------------------------------
  this.hasOrders = function() {
    return orders.length > 0;
  }

  //---------------------------------------------------------------------------
  this.addOrder = function(order) {
    orders.push(order);
    cbListener.triggerAll();
  }

  //---------------------------------------------------------------------------
  this.removeOrder = function(index) {
    orders.splice(index, 1);
    cbListener.triggerAll();
  }

  //---------------------------------------------------------------------------
  this.getOrder = function(index) {
    return orders[index];
  }
}]);
