angular.module("CyberWar")
.service('GameUtil', function() {
  var UtilFunctions = new SharedUtil(_);
  // Add all shared UtilFunctions to the GameUtil service object
  Object.getOwnPropertyNames(UtilFunctions).forEach(function(propertyName) {
    if (typeof UtilFunctions[propertyName] === 'function') {
      this[propertyName] = UtilFunctions[propertyName];
    }
  }, this);
});
