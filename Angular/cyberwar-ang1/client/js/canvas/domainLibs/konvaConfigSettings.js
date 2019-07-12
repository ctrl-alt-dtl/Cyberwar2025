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
var grayColor = 'gray';
var noColor = '';

// Line dash width and gap for exploit links
var exploitLineDashWidth = 2;
var exploitLineDashGap = 11;

// Resizing math used for all server and link points
var point_x = BASE_BOARD_WIDTH;
var point_y = BASE_BOARD_HEIGHT;

var radius = BASE_BOARD_WIDTH / 33;

// For Server Node text centering
var text_offset_x = BASE_BOARD_WIDTH / 90;
var text_offset_y = BASE_BOARD_HEIGHT / 60;

// For Base text centering
var base_text_offset_x = BASE_BOARD_WIDTH / 65;
var base_text_offset_y = BASE_BOARD_HEIGHT / 200;

// Chat Toast Notification Window Centering
var notification_rect_offset_x = 65;
var notification_rect_offset_y = -20;

// Chat Toast Notification Text Centering
var notification_text_offset_x = 57;
var notification_text_offset_y = -30;

// Server Text Sizes
var serverTextWidth = BASE_BOARD_WIDTH / 4;
var serverTextSize =  BASE_BOARD_WIDTH / 25;

var baseTextWidth = BASE_BOARD_WIDTH / 4.8;
var baseTextSize = BASE_BOARD_WIDTH / 46.5;

var exploitLinkTextWidth = BASE_BOARD_WIDTH / 8;
var exploitLinkTextSize =  BASE_BOARD_WIDTH / 50;

// Main Board Dashed Line Settings
var dashLength = BASE_BOARD_HEIGHT / 153.6;
var dashSize = BASE_BOARD_HEIGHT / 384;
var dashStroke = BASE_BOARD_HEIGHT / BASE_BOARD_HEIGHT;

// Board Links Size
var mainLinksStroke = BASE_BOARD_HEIGHT / 80;
var exploitLinksStroke = BASE_BOARD_HEIGHT / 150;