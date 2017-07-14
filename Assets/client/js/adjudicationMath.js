/**
 * File: OrdersAdjudication.js
 * Created by: David "Ty" Long (Math developed by: Niels Blom Areth)
 * Date: 7/2/17
 * Info: Used for mathematically equating the actions of players' move using the "Niels' Method".
 *
 * Note: This uses a 100 sided die (PRNG) to adjudicate success/fail.
 * It's untweaked and might seem unfair, because of the 100d for every action.
 * TODO: Modify math for 'closer to reality results' on adjudication. Need more data!!!
 */

/**
 * Valid Capture ("Secure") moves consist in the following scenarios.
 *
 * 1.  A -> B (A attacks B)
 *
 * 2. A+[n] -> B (A[1] + A[2] + [...] attacks B)
 *
 * 3. A <-> B (A and B attack each other)
 *
 * 4. A -> B <- C [...] (A attacks B and C, and possibly others, attack B)
 *
 * 5. A -> Empty Space <- B (A and B attack an empty space)
 *
 * 6. A -> B -> C [...] (A attacks B and B attacks C and so on)
 *
 * Invalid move: A-> A <- B (A is attacked by B, but A pre-attacks its own point)
 */

/**
 * >>> PvP Dual Combat <<<
 *                  [B]            [A]
 * Success/Fail = Defense / (Attack + Defense)
 *
 *                  [B]            [A]
 * Success/Fail = Defense / (SUM(Attack[1]:Attack[4]) + Defense)
 *
 * TODO: Factor in alliance combat (attack and supported roles)
 *
 *
 * >>> PvP Multi Combat <<<
 *                  [B]             [A, C, D, ...]
 * Success/Fail = Defender / (Attack[PLAYER] + Defense[PLAYER]) << Repeat until Defender or one Attacker succeeds
 *
 *
 * >>> PvP Dual/Multi on Empty Server <<<
 *                  [B]       [A, C, D, ...]
 * Success/Fail = Defense / (Attack + Defense)
 *
 */

// Initialization
var dice, odds, attackSum, diceAbove, margin = 0;
var greenMargin, blueMargin, purpleMargin, redMargin, orangeMargin, yellowMargin = 0;
var defender, attacker = 0
var server1, server2, server3, server4, server5 = 0;
// 'pl' stands for player
var attackerName = '';
var plGreen, plBlue, plPurple, plRed, plOrange, plYellow = 0;
var greenResult, blueResult, purpleResult, redResult, orangeResult, yellowResult = 0;
var polycolor = '';

// 100 sided die for calculation
function diceRoll() {
  return dice = Math.floor(Math.random() * 100) + 1;
}

// This is an A->B scenario, in which A is the sole attacker.
function captureOddsOneVsOne(defender, attacker){
  dice = diceRoll();
  odds = Math.round(defender / (attacker + defender) * 100);

  // this.resultOdds = "Dice: " + dice + ' ' + "Odds: " + odds;

  if(odds > dice) {
    console.log('Dice: ' + dice + ' Odds: ' + odds + ': Success to Defender!')
    return true;
  }
  else if (odds <= dice) {
    console.log('Dice: ' + dice + ' Odds: ' + odds + ': Fail to Defender!')
    return false;
  }
}

// This is an A+[n]->B scenario, in which A has multiple servers attacking.
// Could also be used when there's an alliance formed between two or more players.
function captureOddsOneVsMany(defender, server1, server2, server3, server4, server5){
  dice = diceRoll();
  attackSum = server1 + server2 + server3 + server4 + server5;
  odds = Math.round(defender / (attackSum + defender) * 100);

  // console.log(odds, defense, server1, server2, server3, server4, server5, attackSum);
  // this.resultOdds = "Dice: " + dice + ' ' + "Odds: " + odds;

  if(odds > dice) {
    console.log('Dice: ' + dice + ' Odds: ' + odds + ': Success to Defender!')
    return true;
  }
  else if (odds <= dice) {
    console.log('Dice: ' + dice + ' Odds: ' + odds + ': Fail to Defender!')
    return false;
  }
}

// Helper function for captureMultiCombat()
function multiCombatPerPlayer(defender, attacker, attackerName){
  dice = diceRoll();
  diceAbove = Math.round(defender / (defender + attacker) * 100);
  margin = dice -  diceAbove;
  console.log('Attacker: ' + attackerName + ' Dice: ' + dice + ' Dice Above: ' + diceAbove + '% Margin: ' + margin);
  return margin;
}

// Helper function to determine if multiple success happen due to Math.Random()
function equalToAny(el, gre, blu, pur, red, org, yel){
  var args = [].slice.call(arguments, 1);
  if (args.length === 0) return false;
  for (var i = 0, l = args.length; i < l; i++) {
    if (el === args[i]) {
      return true;
    }
  }
  return false;

}

// This is an A->B<-C,[...] scenario, in which multiple players attack the defender.
// The max amount of attacks if five, but they can be from each player or from two or more from a sole player.
// For example: pBlue attack is 8 (2x level 4 servers), pRed is 4, and the defender pOrange is 4.
// The first roll goes to pBlue, since they have a higher margin of success.
// However, both attacks will adjudicated simultaneously and compared at the end. The highest number out of all rolls
// that are above zero is considered the winner and takes control of that server.
// However, if no one succeeds on the first roll, (e.g. the defender wins) then there is no re-roll.
function captureMultiCombat(defender, plGreen, plBlue, plPurple, plRed, plOrange, plYellow) {
  // TODO: This is not perfect, clean up this logic!
  // TODO: If two or more are the same margin, then we have a random() issue and this might cause problems.
  if(plGreen > 0 && plBlue > 0 && plPurple > 0 && plRed > 0 && plOrange > 0 && plYellow > 0) {
    alert("Too many inputs!");
    // TODO: Remove this after testing!
    location.reload();
  }
  // Calculate the margin for success.
  greenMargin = multiCombatPerPlayer(defender, plGreen, 'Green');
  blueMargin = multiCombatPerPlayer(defender, plBlue, 'Blue');
  purpleMargin = multiCombatPerPlayer(defender, plPurple, 'Purple');
  redMargin = multiCombatPerPlayer(defender, plRed, 'Red');
  orangeMargin = multiCombatPerPlayer(defender, plOrange, 'Orange');
  yellowMargin = multiCombatPerPlayer(defender, plYellow, 'Yellow');

  // Math.Random() edge case testing.
  // greenMargin = 1;
  // blueMargin = 1;

  // Display of who won the roll. Go down the line of who had the higher margin of success.
  // THIS SETS THE STATE OF WINNER

  // DEFENDER
  if (greenMargin   < 0             &&
    blueMargin      < 0             &&
    purpleMargin    < 0             &&
    redMargin       < 0             &&
    orangeMargin    < 0             &&
    yellowMargin    < 0) {

    greenResult   = 'Fail';
    blueResult    = 'Fail';
    purpleResult  = 'Fail';
    redResult     = 'Fail';
    orangeResult  = 'Fail';
    yellowResult  = 'Fail';
    return true;

  } else {
    // PLAYER GREEN
    if (greenMargin > blueMargin            &&
      greenMargin > purpleMargin            &&
      greenMargin > redMargin               &&
      greenMargin > orangeMargin            &&
      greenMargin > yellowMargin) {

      greenResult   = 'Success';
      blueResult    = 'Fail';
      purpleResult  = 'Fail';
      redResult     = 'Fail';
      orangeResult  = 'Fail';
      yellowResult  = 'Fail';
      return false;

      // PLAYER BLUE
    } else if (blueMargin > greenMargin     &&
      blueMargin > purpleMargin             &&
      blueMargin > redMargin                &&
      blueMargin > orangeMargin             &&
      blueMargin > yellowMargin) {

      greenResult   = 'Fail';
      blueResult    = 'Success';
      purpleResult  = 'Fail';
      redResult     = 'Fail';
      orangeResult  = 'Fail';
      yellowResult  = 'Fail';
      return false;

      // PLAYER PURPLE
    } else if (purpleMargin > greenMargin   &&
      purpleMargin > blueMargin             &&
      purpleMargin > redMargin              &&
      purpleMargin > orangeMargin           &&
      purpleMargin > yellowMargin) {

      greenResult   = 'Fail';
      blueResult    = 'Fail';
      purpleResult  = 'Success';
      redResult     = 'Fail';
      orangeResult  = 'Fail';
      yellowResult  = 'Fail';
      return false;

      // PLAYER RED
    } else if (redMargin > greenMargin      &&
      redMargin > blueMargin                &&
      redMargin > purpleMargin              &&
      redMargin > orangeMargin              &&
      redMargin > yellowMargin) {

      greenResult   = 'Fail';
      blueResult    = 'Fail';
      purpleResult  = 'Fail';
      redResult     = 'Success';
      orangeResult  = 'Fail';
      yellowResult  = 'Fail';
      return false;

      // PLAYER ORANGE
    } else if (orangeMargin > greenMargin   &&
      orangeMargin > blueMargin             &&
      orangeMargin > purpleMargin           &&
      orangeMargin > redMargin              &&
      orangeMargin > yellowMargin) {

      greenResult   = 'Fail';
      blueResult    = 'Fail';
      purpleResult  = 'Fail';
      redResult     = 'Fail';
      orangeResult  = 'Success';
      yellowResult  = 'Fail';
      return false;

      // PLAYER YELLOW
    } else if (yellowMargin > greenMargin   &&
      yellowMargin > blueMargin             &&
      yellowMargin > purpleMargin           &&
      yellowMargin > redMargin              &&
      yellowMargin > orangeMargin) {

      greenResult   = 'Fail';
      blueResult    = 'Fail';
      purpleResult  = 'Fail';
      redResult     = 'Fail';
      orangeResult  = 'Fail';
      yellowResult  = 'Success';
      return false;
    } else {
      // If two or more winning values are the same number then we are presented with this. Which happens when
      // Math.Random() chooses the same number per each roll.
      // TODO: Fix this edge case.
      if (equalToAny(greenMargin, blueMargin, purpleMargin, redMargin, orangeMargin, yellowMargin)) {
        alert("Two or more values are equal!");
      }
    }
  }
}

/**
 * Test/Scratch Code
 */

//Using Vue for testing.
new Vue({
  el: '#app',
  data: {
    a1result: '', s1result: '', s2result: '', s3result: '', s4result: '', s5result: '',
    defender: 0, defenderResult: '', resultOdds: '',
    attacker: 0, server1: 0, server2: 0, server3: 0, server4: 0, server5: 0,
    greenResult: '', blueResult: '', purpleResult: '', redResult: '', orangeResult: '', yellowResult: '',
    plGreen: 0, plBlue: 0, plPurple: 0, plRed: 0, plOrange: 0, plYellow: 0
  },
  methods: {
    btnSubmit() {

      // Input checking. We do not want extra inputs to confuse our math.
      if((this.attacker && (this.server1 || this.server2 || this.server3 || this.server4 || this.server5)) &&
        (this.plGreen || this.plBlue || this.plPurple || this.plRed || this.plOrange || this.plYellow)) {
        alert("Too many variables!");
        // TODO: Remove this after testing!
        location.reload();

      } else {
        // Success and Failure are pointed to Defender, but the Attacker shows the result.
        if (this.defender && this.attacker) {
          if (captureOddsOneVsOne(parseInt(this.defender), parseInt(this.attacker)) === false) {
            this.a1result = "Success";
            this.defenderResult = "Fail";
            this.resultOdds = "Dice: " + dice + ' Odds: ' + odds + '%';
            polycolor = 'red';

          } else {
            this.a1result = "Fail";
            this.defenderResult = "Success";
            this.resultOdds = "Dice: " + dice + ' Odds: ' + odds + '%';
            polycolor = 'green';
          }

        } else if (!this.defender && (!this.server1 && !this.plBlue)) {
          alert("Check your inputs!");
        } // End captureOddsOneVsOne()

        // Multiple 'A' servers against a single 'B' server.
        if (this.defender && this.server1) {
          if(captureOddsOneVsMany(
              parseInt(this.defender),
              parseInt(this.server1),
              parseInt(this.server2),
              parseInt(this.server3),
              parseInt(this.server4),
              parseInt(this.server5)) === false) {
            this.s1result = "Success";
            this.defenderResult = "Fail";
            this.resultOdds = "Dice: " + dice + ' Odds: ' + odds + '%';
            polycolor = 'red';

          } else {
            this.s1result = "Fail";
            this.defenderResult = "Success";
            this.resultOdds = "Dice: " + dice + ' Odds: ' + odds + '%';
            polycolor = 'green';

          }

        } else if (!this.defender && (!this.attacker && !this.plBlue)) {
          alert("Check your inputs!");
        } // End captureOddsOneVsMany()

        // Multi-player/Multi-combat. Many servers (A, C, D, ...) against a single 'B' server.
        if (this.defender && (this.plGreen || this.plBlue || this.plPurple || this.plRed || plOrange || plYellow)){
          if (captureMultiCombat(
              parseInt(this.defender),
              parseInt(this.plGreen),
              parseInt(this.plBlue),
              parseInt(this.plPurple),
              parseInt(this.plRed),
              parseInt(this.plOrange),
              parseInt(this.plYellow)) === true){

            this.resultOdds = "Dice: " + dice + ' Dice Above: ' + diceAbove + '% Margin: ' + margin;
            this.defenderResult   = "Success";
            this.greenResult      = "Fail";
            this.blueResult       = "Fail";
            this.purpleResult     = "Fail";
            this.redResult        = "Fail";
            this.orangeResult     = "Fail";
            this.yellowResult     = "Fail";
            polycolor = 'red';

          } else {
            // SUCCESS/FAIL results for each player
            if (greenResult === 'Success') {
              this.defenderResult   = "Fail";
              this.greenResult      = "Success";
              this.blueResult       = "Fail";
              this.purpleResult     = "Fail";
              this.redResult        = "Fail";
              this.orangeResult     = "Fail";
              this.yellowResult     = "Fail";
              polycolor = 'green';

            } else if (blueResult === 'Success'){
              this.defenderResult   = "Fail";
              this.greenResult      = "Fail";
              this.blueResult       = "Success";
              this.purpleResult     = "Fail";
              this.redResult        = "Fail";
              this.orangeResult     = "Fail";
              this.yellowResult     = "Fail";

            } else if (purpleResult === 'Success'){
              this.defenderResult   = "Fail";
              this.greenResult      = "Fail";
              this.blueResult       = "Fail";
              this.purpleResult     = "Success";
              this.redResult        = "Fail";
              this.orangeResult     = "Fail";
              this.yellowResult     = "Fail";

            } else if (redResult === 'Success'){
              this.defenderResult   = "Fail";
              this.greenResult      = "Fail";
              this.blueResult       = "Fail";
              this.purpleResult     = "Fail";
              this.redResult        = "Success";
              this.orangeResult     = "Fail";
              this.yellowResult     = "Fail";

            } else if (orangeResult === 'Success'){
              this.defenderResult   = "Fail";
              this.greenResult      = "Fail";
              this.blueResult       = "Fail";
              this.purpleResult     = "Fail";
              this.redResult        = "Fail";
              this.orangeResult     = "Success";
              this.yellowResult     = "Fail";

            } else if (yellowResult === 'Success'){
              this.defenderResult   = "Fail";
              this.greenResult      = "Fail";
              this.blueResult       = "Fail";
              this.purpleResult     = "Fail";
              this.redResult        = "Fail";
              this.orangeResult     = "Fail";
              this.yellowResult     = "Success";

            } else {
              console.alert("Output Error in captureMultiCombat()");
            }
          }
        }
      }
      // TODO: Remove this after testing complete!
      // SVG Hexagon Test
      var hex1 = SVG('#hex1').size(100, 100);
      var hex1poly = hex1.polyline([[80, 65], [73, 78], [58, 78], [50, 65], [58, 52], [73, 52], [80, 65]]);
      hex1poly.fill(polycolor).move(20, 20);
      hex1poly.stroke({color: '#f06', width: 2, linecap: 'round', linejoin: 'round'});
    }
  }
});

// TODO: Remove these after testing complete!
//SVG static placeholder, will be overwritten by update.
var hex1 = SVG('#hex1').size(100, 100);
//                              BR       BR      BL      CL     TL       TR       TR
var hex1poly = hex1.polyline([[80, 65], [73, 78], [58, 78], [50, 65], [58, 52], [73, 52], [80, 65]]);
hex1poly.fill('white').move(20, 20);
hex1poly.stroke({ color: '#000', width: 2, linecap: 'round', linejoin: 'round' });

var hex2 = SVG('#hex2').size(300, 300);
//                         Start Point   P1        P2          P3          P4         P5      End Pt.
var hex2poly = hex2.polyline([[100,0],[200,0], [240, 75], [200, 150], [100, 150], [60, 75], [100, 0]]);
//                     (Right, Down)
hex2poly.fill('black').move(5, 10)
hex2poly.stroke({color: '#06F', width: 3, linecap: 'round', linejoin: 'round'});
