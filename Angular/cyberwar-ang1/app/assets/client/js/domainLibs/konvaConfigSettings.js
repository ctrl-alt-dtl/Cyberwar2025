/**
 * Configuration file for all Konva objects in the canvas.
 */

// For Konva Lines used in both Primary Server Links and Exploit Links
var lineVisible = true;
// For Konva Text used on Server points only
var textVisible = true;

// Used for the Domain Servers and Links
var yellowColor = '#F7E500';
var darkYellowColor = '#CCBE00'
var blueColor = 'blue';
var redColor = 'red';
var purpleColor = 'purple';
var greenColor = 'green';
var orangeColor = 'orange';

// Line dash width and gap for exploit links
var exploitLineDashWidth = 2;
var exploitLineDashGap = 5;

// Resizing math used for all server and link points
var point_x = BASE_BOARD_WIDTH;
var point_y = BASE_BOARD_HEIGHT;

var radius = BASE_BOARD_WIDTH / 55;

// For Server text centering
var text_offset_x = BASE_BOARD_WIDTH / 114;
var text_offset_y = BASE_BOARD_HEIGHT / 55;

// For Base text centering
var base_text_offset_x = BASE_BOARD_WIDTH / 90;
var base_text_offset_y = BASE_BOARD_HEIGHT / 200;

// Server Text Sizes
var serverTextWidth = BASE_BOARD_WIDTH / 4.65;
var serverTextSize =  BASE_BOARD_WIDTH / 34.1;

var baseTextWidth = BASE_BOARD_WIDTH / 4.8;
var baseTextSize = BASE_BOARD_WIDTH / 46.5;

// Cyber Window Title Text Sizes/Widths
var ceWindowTitleTextWidth = BASE_BOARD_WIDTH / 4.8;
var ceWindowTitleTextSize = BASE_BOARD_WIDTH / 80;

// Cyber Window Text Regular Size/Widths
var ceWindowTextWidth = BASE_BOARD_WIDTH / 4.8;
var ceWindowTextSize = BASE_BOARD_WIDTH / 100;

// Cyber Window Action Points Text Size/Widths
var ceWindowAPTextWidth = BASE_BOARD_WIDTH / 4.8;
var ceWindowAPTextSize = BASE_BOARD_WIDTH / 80;

// Cyber Window Research Blocks Minus/Plus Text Size/Widths
var cewResTextWidth = BASE_BOARD_WIDTH / 4.8;
var cewResTextSize = BASE_BOARD_WIDTH / 60;

// Main Board Dashed Line Settings
var dashLength = BASE_BOARD_HEIGHT / 153.6;
var dashSize = BASE_BOARD_HEIGHT / 384;
var dashStroke = BASE_BOARD_HEIGHT / BASE_BOARD_HEIGHT;

// Board Links Size
var mainLinksStroke = BASE_BOARD_HEIGHT / 384;
var exploitLinksStroke = BASE_BOARD_HEIGHT / 256;