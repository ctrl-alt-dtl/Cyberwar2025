/**
 * Visualization of inter-domain links between each player. These are the visible paths for capture maneuvers only.
 * Order goes clockwise starting from the RED DOMAIN.
 */

/**
 * RED/PURPLE DOMAIN
 */
var R1HexP2Hex = new Konva.Line({
  points: [
    pt_r1Hex_X,
    pt_r1Hex_Y,
    pt_p2Hex_X,
    pt_p2Hex_Y
  ],
  stroke: redColor,
  strokeWidth: 2,
  lineCap: 'round',
  lineJoin: 'round',
  visible: true,
  id: R1HexP2Hex
});

var R3HexP5Hex = new Konva.Line({
  points: [
    pt_r3Hex_X,
    pt_r3Hex_Y,
    pt_p5Hex_X,
    pt_p5Hex_Y
  ],
  stroke: redColor,
  strokeWidth: 2,
  lineCap: 'round',
  lineJoin: 'round',
  visible: true,
  id: R3HexP5Hex
});

var R6HexP7Hex = new Konva.Line({
  points: [
    pt_r6Hex_X,
    pt_r6Hex_Y,
    pt_p7Hex_X,
    pt_p7Hex_Y
  ],
  stroke: redColor,
  strokeWidth: 2,
  lineCap: 'round',
  lineJoin: 'round',
  visible: true,
  id: R6HexP7Hex
});

var R8HexP8Hex = new Konva.Line({
  points: [
    pt_r8Hex_X,
    pt_r8Hex_Y,
    pt_p8Hex_X,
    pt_p8Hex_Y
  ],
  stroke: redColor,
  strokeWidth: 2,
  lineCap: 'round',
  lineJoin: 'round',
  visible: true,
  id: R8HexP8Hex
});

/**
 * PURPLE/BLUE DOMAIN
 */
var P1HexB2Hex = new Konva.Line({
  points: [
    pt_p1Hex_X,
    pt_p1Hex_Y,
    pt_b2Hex_X,
    pt_b2Hex_Y
  ],
  stroke: purpleColor,
  strokeWidth: 2,
  lineCap: 'round',
  lineJoin: 'round',
  visible: true,
  id: P1HexB2Hex
});

var P3HexB5Hex = new Konva.Line({
  points: [
    pt_p3Hex_X,
    pt_p3Hex_Y,
    pt_b5Hex_X,
    pt_b5Hex_Y
  ],
  stroke: purpleColor,
  strokeWidth: 2,
  lineCap: 'round',
  lineJoin: 'round',
  visible: true,
  id: P3HexB5Hex
});

var P6HexB7Hex = new Konva.Line({
  points: [
    pt_p6Hex_X,
    pt_p6Hex_Y,
    pt_b7Hex_X,
    pt_b7Hex_Y
  ],
  stroke: purpleColor,
  strokeWidth: 2,
  lineCap: 'round',
  lineJoin: 'round',
  visible: true,
  id: P6HexB7Hex
});

var P8HexB8Hex = new Konva.Line({
  points: [
    pt_p8Hex_X,
    pt_p8Hex_Y,
    pt_b8Hex_X,
    pt_b8Hex_Y
  ],
  stroke: purpleColor,
  strokeWidth: 2,
  lineCap: 'round',
  lineJoin: 'round',
  visible: true,
  id: P8HexB8Hex
});

/**
 * BLUE/GREEN DOMAIN
 */
var B1HexG2Hex = new Konva.Line({
  points: [
    pt_b1Hex_X,
    pt_b1Hex_Y,
    pt_g2Hex_X,
    pt_g2Hex_Y
  ],
  stroke: blueColor,
  strokeWidth: 2,
  lineCap: 'round',
  lineJoin: 'round',
  visible: true,
  id: B1HexG2Hex
});

var B3HexG5Hex = new Konva.Line({
  points: [
    pt_b3Hex_X,
    pt_b3Hex_Y,
    pt_g5Hex_X,
    pt_g5Hex_Y
  ],
  stroke: blueColor,
  strokeWidth: 2,
  lineCap: 'round',
  lineJoin: 'round',
  visible: true,
  id: B3HexG5Hex
});

var B6HexG7Hex = new Konva.Line({
  points: [
    pt_b6Hex_X,
    pt_b6Hex_Y,
    pt_g7Hex_X,
    pt_g7Hex_Y
  ],
  stroke: blueColor,
  strokeWidth: 2,
  lineCap: 'round',
  lineJoin: 'round',
  visible: true,
  id: B6HexG7Hex
});

var B8HexG8Hex = new Konva.Line({
  points: [
    pt_b8Hex_X,
    pt_b8Hex_Y,
    pt_g8Hex_X,
    pt_g8Hex_Y
  ],
  stroke: blueColor,
  strokeWidth: 2,
  lineCap: 'round',
  lineJoin: 'round',
  visible: true,
  id: B8HexG8Hex
});

/**
 * GREEN/YELLOW DOMAIN
 */
var G1HexY2Hex = new Konva.Line({
  points: [
    pt_g1Hex_X,
    pt_g1Hex_Y,
    pt_y2Hex_X,
    pt_y2Hex_Y
  ],
  stroke: greenColor,
  strokeWidth: 2,
  lineCap: 'round',
  lineJoin: 'round',
  visible: true,
  id: G1HexY2Hex
});

var G3HexY5Hex = new Konva.Line({
  points: [
    pt_g3Hex_X,
    pt_g3Hex_Y,
    pt_y5Hex_X,
    pt_y5Hex_Y
  ],
  stroke: greenColor,
  strokeWidth: 2,
  lineCap: 'round',
  lineJoin: 'round',
  visible: true,
  id: G3HexY5Hex
});

var G6HexY7Hex = new Konva.Line({
  points: [
    pt_g6Hex_X,
    pt_g6Hex_Y,
    pt_y7Hex_X,
    pt_y7Hex_Y
  ],
  stroke: greenColor,
  strokeWidth: 2,
  lineCap: 'round',
  lineJoin: 'round',
  visible: true,
  id: G6HexY7Hex
});

var G8HexY8Hex = new Konva.Line({
  points: [
    pt_g8Hex_X,
    pt_g8Hex_Y,
    pt_y8Hex_X,
    pt_y8Hex_Y
  ],
  stroke: greenColor,
  strokeWidth: 2,
  lineCap: 'round',
  lineJoin: 'round',
  visible: true,
  id: G8HexY8Hex
});


/**
 * YELLOW/ORANGE DOMAIN
 */
var Y1HexO2Hex = new Konva.Line({
  points: [
    pt_y1Hex_X,
    pt_y1Hex_Y,
    pt_o2Hex_X,
    pt_o2Hex_Y
  ],
  stroke: darkYellowColor,
  strokeWidth: 2,
  lineCap: 'round',
  lineJoin: 'round',
  visible: true,
  id: Y1HexO2Hex
});

var Y3HexO5Hex = new Konva.Line({
  points: [
    pt_y3Hex_X,
    pt_y3Hex_Y,
    pt_o5Hex_X,
    pt_o5Hex_Y
  ],
  stroke: darkYellowColor,
  strokeWidth: 2,
  lineCap: 'round',
  lineJoin: 'round',
  visible: true,
  id: Y3HexO5Hex
});

var Y6HexO7Hex = new Konva.Line({
  points: [
    pt_y6Hex_X,
    pt_y6Hex_Y,
    pt_o7Hex_X,
    pt_o7Hex_Y
  ],
  stroke: darkYellowColor,
  strokeWidth: 2,
  lineCap: 'round',
  lineJoin: 'round',
  visible: true,
  id: Y6HexO7Hex
});

var Y8HexO8Hex = new Konva.Line({
  points: [
    pt_y8Hex_X,
    pt_y8Hex_Y,
    pt_o8Hex_X,
    pt_o8Hex_Y
  ],
  stroke: darkYellowColor,
  strokeWidth: 2,
  lineCap: 'round',
  lineJoin: 'round',
  visible: true,
  id: Y8HexO8Hex
});

/**
 * ORANGE/RED DOMAIN
 */
var O1HexR2Hex = new Konva.Line({
  points: [
    pt_o1Hex_X,
    pt_o1Hex_Y,
    pt_r2Hex_X,
    pt_r2Hex_Y
  ],
  stroke: orangeColor,
  strokeWidth: 2,
  lineCap: 'round',
  lineJoin: 'round',
  visible: true,
  id: O1HexR2Hex
});

var O3HexR5Hex = new Konva.Line({
  points: [
    pt_o3Hex_X,
    pt_o3Hex_Y,
    pt_r5Hex_X,
    pt_r5Hex_Y
  ],
  stroke: orangeColor,
  strokeWidth: 2,
  lineCap: 'round',
  lineJoin: 'round',
  visible: true,
  id: O3HexR5Hex
});

var O6HexR7Hex = new Konva.Line({
  points: [
    pt_o6Hex_X,
    pt_o6Hex_Y,
    pt_r7Hex_X,
    pt_r7Hex_Y
  ],
  stroke: orangeColor,
  strokeWidth: 2,
  lineCap: 'round',
  lineJoin: 'round',
  visible: true,
  id: O6HexR7Hex
});

var O8HexR8Hex = new Konva.Line({
  points: [
    pt_o8Hex_X,
    pt_o8Hex_Y,
    pt_r8Hex_X,
    pt_r8Hex_Y
  ],
  stroke: orangeColor,
  strokeWidth: 2,
  lineCap: 'round',
  lineJoin: 'round',
  visible: true,
  id: O8HexR8Hex
});

/**
 * TIER 1 MULTI DOMAIN
 * These are the links that can go from each of the highest server point to each other.
 * This is an intentionally busy section due to its planned gameplay as a major source of contention among players.
 *
 * Unfortunately due to limited space in such a small and busy error, there might be a bit of overlap in colors.
 * However, with primary links there are only a max of six solid links. With exploit links there are only a max of 30
 * lines drawn which adds to complexity. The best way would be to offset each line away from the origin point
 * in the canvas (the black center dot). Primary Links are 3^2, but only one primary link is active from point to point.
 * Which means, there are no conflicting/shared capture points (e.g. B->R != R->B)
 */

