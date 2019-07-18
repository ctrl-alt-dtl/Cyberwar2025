/*******************************************************************************
 * An enum representing possible chat requests
 ******************************************************************************/
this.GameRequest = {
  GET: "Get", // Request to get data for current turn
  GET_TURN_NUMBER: "Get Turn Number", // Request to get data for a specific turn
  SUBMIT: "Submit", // Request to submit a turn
  CHAT_HISTORY: "History", // Request to get all chat history
  SEND_CHAT: "Send", // Request to send a chat message
  CHANGE_OBSERVED_PLAYER: "Change Observed Player", // Request to change an observer's observed player
  TOGGLE_OBSERVER_BOARD_VIEW: "Toggle Observer Board View", // Request to toggle observer player's board view from full view to player view
  FORCE_PLAYER_FORFEIT: "Force Player Forfeit", // Request to force a player to forfeit
}
