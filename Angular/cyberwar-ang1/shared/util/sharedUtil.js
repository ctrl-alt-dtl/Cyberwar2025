/*******************************************************************************
 * A set of helper functions for both server and client-side game logic
 ******************************************************************************/
this.SharedUtil = function(ActionType, Color, ActionUtil, EqualityUtil, ListUtil, NetworkUtil, PlayerUtil) {
  //------------------------------------------------------------------------------
  this.Config = {
    SERVER_NODES_PER_DOMAIN: 8,
    MAX_RESEARCH_POINTS: 8,
    MAX_RESEARCH_LEVELS: 3,
    MAX_NODE_STRENGTH: 4,
    SECURE_STRENGTH: 1,
    IMPLANT_STRENGTH: 1,
    IMPLANT_BASE_STRENGTH: 1,
    IMPLANT_BASE_DEFENSE: 4
  }

  this.Action = new ActionUtil(ActionType);
  this.Equality = new EqualityUtil();
  this.List = new ListUtil(this.Equality);
  this.Network = new NetworkUtil(Color, this.Equality, this.List);
  this.Player = new PlayerUtil(ActionType, this.Action, this.List, this.Network);
}
