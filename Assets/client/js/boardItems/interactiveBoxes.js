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
  width: 120,
  height: 50,
  fill: 'gray',
  stroke: 'red',
  strokeWidth: 2,
});

var ordersQueue = new Konva.Rect({
  x: BASE_BOARD_WIDTH / 1.335,
  y: BASE_BOARD_HEIGHT / 1.29,
  width: 245,
  height: 160,
  fill: 'gray',
  stroke: 'red',
  strokeWidth: 2,
});

var effectsWindow = new Konva.Rect({
  x: BASE_BOARD_WIDTH / 1.355,
  y: BASE_BOARD_HEIGHT / 100,
  width: 258,
  height: 155,
  fill: 'gray',
  stroke: 'red',
  strokeWidth: 2,
});

var chatWindow = new Konva.Rect({
  x: BASE_BOARD_WIDTH / 100,
  y: BASE_BOARD_HEIGHT / 1.38,
  width: 230,
  height: 200,
  fill: 'gray',
  stroke: 'red',
  strokeWidth: 2,
});

var notesRulesWindow = new Konva.Rect({
  x: BASE_BOARD_WIDTH / 100,
  y: BASE_BOARD_HEIGHT / 100,
  width: 230,
  height: 200,
  fill: 'gray',
  stroke: 'red',
  strokeWidth: 2,
});