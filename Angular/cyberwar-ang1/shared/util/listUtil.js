/*******************************************************************************
 * A set of helper functions for both server and client-side lists
 ******************************************************************************/
this.ListUtil = function(Equality) {
  //------------------------------------------------------------------------------
  // Get the player with the given name from the list of players
  this.findPlayerByName = function(players, playerName) {
    return players.find(player => player.name == playerName);
  };

  //------------------------------------------------------------------------------
  // Get the player with the given name from the list of players
  this.findPlayerByColor = function(players, color) {
    return players.find(player => !player.isObserver && player.color == color);
  };

  //------------------------------------------------------------------------------
  // Get the server node from the given domain color and index
  this.getServerNode = function(serverNodes, color, index) {
    return serverNodes.find(serverNode => serverNode.location.color == color && serverNode.location.index == index);
  }

  //------------------------------------------------------------------------------
  this.isSourceInLinkList = function(location, linkList) {
    return linkList.some(link => Equality.isSourceInLink(link, location));
  }

  //------------------------------------------------------------------------------
  this.isDestinationInLinkList = function(location, linkList) {
    return linkList.some(link => Equality.isDestinationInLink(link, location));
  }

  //------------------------------------------------------------------------------
  this.isLocationInLinkList = function(location, linkList) {
    return linkList.some(link => Equality.isLocationInLink(link, location));
  }

  //------------------------------------------------------------------------------
  this.isLocationInNodeList = function(location, nodeList) {
    return nodeList.some(node => Equality.isSameLocation(node.location, location));
  }

  //------------------------------------------------------------------------------
  this.isLocationInList = function(location, list) {
    return list.some(listLocation => Equality.isSameLocation(listLocation, location));
  }

  //------------------------------------------------------------------------------
  this.isLinkInLinkList = function(link, linkList) {
    return linkList.some(listLink => Equality.isSameLink(link, listLink));
  }

  //------------------------------------------------------------------------------
  this.areLocationsLinked = function(locationA, locationB, linkList) {
    return linkList.some(link => (Equality.isSameLocation(link.nodeA, locationA) && Equality.isSameLocation(link.nodeB, locationB)) ||
                                 (Equality.isSameLocation(link.nodeA, locationB) && Equality.isSameLocation(link.nodeB, locationA)));
  }
}
