/*******************************************************************************
 * A set of helper functions for both server and client-side object equality checks
 ******************************************************************************/
this.EqualityUtil = function() {
  //------------------------------------------------------------------------------
  this.isSameLocation = function(locationA, locationB) {
    return locationA.color == locationB.color && locationA.index == locationB.index;
  }

  //------------------------------------------------------------------------------
  this.isSameLink = function(linkA, linkB) {
    return this.isSameLocation(linkA.nodeA, linkB.nodeA) && this.isSameLocation(linkA.nodeB, linkB.nodeB);
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
}
