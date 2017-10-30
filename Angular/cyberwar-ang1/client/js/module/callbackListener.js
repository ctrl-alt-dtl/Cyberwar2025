window.Gambit = window.Gambit || {};

Gambit.CallbackListener = function() {
  var callbacks = [];

  //---------------------------------------------------------------------------
  this.addListener = function(callback) {
    callbacks.push(callback);
  }

  //---------------------------------------------------------------------------
  this.removeListener = function(callback) {
    callbacks = callbacks.filter(function(existingCallback) {
      return existingCallback != callback;
    });
  }

  //---------------------------------------------------------------------------
  // Trigger all the callbacks regardless of the callback's return value
  this.triggerAll = function() {
    // Store the arguments passed to this function call to give to each callback
    var callbackArguments = arguments;
    callbacks.forEach(function(callback) {
      callback.apply(null, callbackArguments);
    });
  }

  //---------------------------------------------------------------------------
  // Trigger the callbacks until the first one that returns true
  this.triggerUntilFirstHandled = function() {
    // Store the arguments passed to this function call to give to each callback
    var callbackArguments = arguments;
    return callbacks.some(function(callback) {
      return callback.apply(null, callbackArguments);
    })
  }
};
