/**
 * INTERACTIVE BOXES
 * Chat, Submit Orders, Cyber Effects, and Notes & Rules
 * Requires:
 *    ../domainLibs/konvaConfigSettings.js
 *    ../domainLibs/serverPointCoordinates.js
 */

var submitOrdersBtn = new Konva.Rect({
  x: BASE_BOARD_WIDTH / 1.235,
  y: BASE_BOARD_HEIGHT / 1.44,
  width: BASE_BOARD_WIDTH / 8.53,
  height: BASE_BOARD_HEIGHT / 15.36,
  fill: 'gray',
  stroke: 'red',
  strokeWidth: 2,
});

var ordersQueue = new Konva.Rect({
  x: BASE_BOARD_WIDTH / 1.335,
  y: BASE_BOARD_HEIGHT / 1.29,
  width: BASE_BOARD_WIDTH / 4.18,
  height: BASE_BOARD_HEIGHT / 4.8,
  fill: 'gray',
  stroke: 'red',
  strokeWidth: 2,
});

var effectsWindow = new Konva.Rect({
  x: BASE_BOARD_WIDTH / 1.355,
  y: BASE_BOARD_HEIGHT / 100,
  width: BASE_BOARD_WIDTH / 3.968,
  height: BASE_BOARD_HEIGHT / 4.955,
  fill: 'gray',
  stroke: 'red',
  strokeWidth: 2,
});

var chatWindow = new Konva.Rect({
  x: BASE_BOARD_WIDTH / 100,
  y: BASE_BOARD_HEIGHT / 1.38,
  width: BASE_BOARD_WIDTH / 4.45,
  height: BASE_BOARD_HEIGHT / 3.84,
  fill: 'gray',
  stroke: 'red',
  strokeWidth: 2,
});

var notesRulesWindow = new Konva.Rect({
  x: BASE_BOARD_WIDTH / 100,
  y: BASE_BOARD_HEIGHT / 100,
  width: BASE_BOARD_WIDTH / 4.45,
  height: BASE_BOARD_HEIGHT / 3.84,
  fill: 'gray',
  stroke: 'red',
  strokeWidth: 2,
});