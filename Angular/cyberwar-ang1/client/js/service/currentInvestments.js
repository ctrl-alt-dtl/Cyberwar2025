angular.module('CyberWar')
.service('CurrentInvestments', [function() {
  var cbListener = new Gambit.CallbackListener();

  var investments = {};

  //---------------------------------------------------------------------------
  this.addListener = function(callback) {
    cbListener.addListener(callback);
  }

  //---------------------------------------------------------------------------
  this.removeListener = function(callback) {
    cbListener.removeListener(callback);
  }

  //---------------------------------------------------------------------------
  this.getInvestments = function() {
    return investments;
  }

  //---------------------------------------------------------------------------
  this.hasInvestments = function() {
    return _.any(investments, function(investment) { return investment > 0; });
  }

  //---------------------------------------------------------------------------
  this.setInvestments = function(newInvestments) {
    investments = newInvestments;
    cbListener.triggerAll();
  }

  //---------------------------------------------------------------------------
  this.getInvestment = function(researchType) {
    if (investments.hasOwnProperty(researchType)) {
      return investments[researchType];
    }
    return 0;
  }

  //---------------------------------------------------------------------------
  this.setInvestment = function(researchType, amount) {
    investments[researchType] = amount;
    cbListener.triggerAll();
  }
}]);
