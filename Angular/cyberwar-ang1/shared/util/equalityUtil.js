/*******************************************************************************
 * A set of helper functions for both server and client-side object equality checks
 ******************************************************************************/
this.EqualityUtil = function() {
  //------------------------------------------------------------------------------
  this.isSameLocation = function(locationA, locationB) {
    return locationA.color == locationB.color && locationA.index == locationB.index;
  }

  //------------------------------------------------------------------------------
  this.isSourceInLink = function(link, location) {
    return this.isSameLocation(link.nodeA, location);
  }

  //------------------------------------------------------------------------------
  this.isDestinationInLink = function(link, location) {
    return this.isSameLocation(link.nodeB, location);
  }

  //------------------------------------------------------------------------------
  this.isLocationInLink = function(link, location) {
    return this.isSameLocation(link.nodeA, location) || this.isSameLocation(link.nodeB, location);
  }

  //------------------------------------------------------------------------------
  this.areLocationsLinked = function(locationA, locationB, linkList) {
    return linkList.some(link => (this.isSameLocation(link.nodeA, locationA) && this.isSameLocation(link.nodeB, locationB)) ||
                                 (this.isSameLocation(link.nodeA, locationB) && this.isSameLocation(link.nodeB, locationA)));
  }
}
