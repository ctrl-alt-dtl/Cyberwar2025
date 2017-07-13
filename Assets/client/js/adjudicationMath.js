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
var dice, odds, attackSum = 0;
var diceAboveGreen, diceAboveBlue, diceAbovePurple, diceAboveRed, diceAboveOrange, diceAboveYellow = 0;
var defender, attacker = 0
var server1, server2, server3, server4, server5 = 0;
// 'pl' stands for player
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
    console.log('Dice: ' + dice + ' ' + 'Odds: ' + odds + ': Success to Defender!')
    return true;
  }
  else if (odds <= dice) {
    console.log('Dice: ' + dice + ' ' + 'Odds: ' + odds + ': Fail to Defender!')
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
    console.log('Dice: ' + dice + ' ' + 'Odds: ' + odds + ': Success to Defender!')
    return true;
  }
  else if (odds <= dice) {
    console.log('Dice: ' + dice + ' ' + 'Odds: ' + odds + ': Fail to Defender!')
    return false;
  }
}

// Helper function for captureMultiCombat()
function multiCombatPerPlayer(defender, attacker){
  dice = diceRoll();
  diceAbove = Math.round(defender/(attacker + defender) * 100);
  margin = dice - (100 * diceAbove);
  return margin;
}

// This is an A->B<-C,[...] scenario, in which multiple players attack the defender.
// The max amount of attacks if five, but they can be from each player or from two or more from a sole player.
// For example: pBlue attack is 8 (2x level 4 servers), pRed is 4, and the defender pOrange is 4.
// The first roll goes to pBlue, since they have a higher margin of success.
// However, both attacks will adjudicated simultaneously and compared at the end. The highest number out of all rolls
// that are above zero is considered the winner and takes control of that server.
// However, if no one succeeds on the first roll, (e.g. the defender wins) then there is no re-roll.
function captureMultiCombat(defender, plGreen, plBlue, plPurple, plRed, plOrange, plYellow){
  if(plGreen != 0){
    // dice = diceRoll();
    // diceAboveGreen = Math.round(defender / (plGreen + defender) * 100);
    greenResult = multiCombatPerPlayer(defender, plGreen);

  }
  if(plBlue != 0){
    dice = diceRoll();
    diceAboveBlue = Math.round(defender / (plBlue + defender) * 100);
  }
  if(plPurple != 0){
    dice = diceRoll();
    diceAbovePurple = Math.round(defender / (plPurple + defender) * 100);
  }
  if(plRed != 0){
    dice = diceRoll();
    diceAboveRed = Math.round(defender / (plRed + defender) * 100);
  }
  if(plOrange != 0){
    dice = diceRoll();
    diceAboveOrange = Math.round(defender / (plOrange + defender) * 100);
  }
  if(plYellow != 0){
    dice = diceRoll();
    diceAboveYellow = Math.round(defender / (plYellow + defender) * 100);
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
      if((this.attacker && (this.server1 || this.server2 || this.server3 || this.server4 || this.server5)) ||
        (this.plGreen || this.plBlue || this.plPurple || this.plRed || this.plOrange || this.plYellow)) {
        alert("Too many variables!");
        location.reload();

      } else {
        // Success and Failure are pointed to Defender, but the Attacker shows the result.
        if (this.defender && this.attacker) {
          if (captureOddsOneVsOne(parseInt(this.defender), parseInt(this.attacker)) === false) {
            this.a1result = "Success";
            this.defenderResult = "Fail";
            this.resultOdds = "Dice: " + dice + ' ' + "Odds: " + odds + '%';
            polycolor = 'red';

          } else {
            this.a1result = "Fail";
            this.defenderResult = "Success";
            this.resultOdds = "Dice: " + dice + ' ' + "Odds: " + odds + '%';
            polycolor = 'green';
          }

          // SVG Hexagon Test
          var hex1 = SVG('#hex1').size(100, 100);
          var hex1poly = hex1.polyline([[80, 65], [73, 78], [58, 78], [50, 65], [58, 52], [73, 52], [80, 65]]);
          hex1poly.fill(polycolor).move(20, 20);
          hex1poly.stroke({color: '#f06', width: 2, linecap: 'round', linejoin: 'round'});

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
            this.resultOdds = "Dice: " + dice + ' ' + "Odds: " + odds + '%';
            polycolor = 'red';

          } else {
            this.s1result = "Fail";
            this.defenderResult = "Success";
            this.resultOdds = "Dice: " + dice + ' ' + "Odds: " + odds + '%';
            polycolor = 'green';

          }

        } else if (!this.defender && (!this.attacker && !this.plBlue)) {
          alert("Check your inputs!");
        } // End captureOddsOneVsMany()

        // Multi-player/Multi-combat. Many servers (A, C, D, ...) against a single 'B' server.
        if (this.defender && (this.plGreen || this.plBlue || this.plPurple || this.plRed || plOrange || plYellow)){
          if(captureMultiCombat(
              parseInt(this.defender),
              parseInt(this.plGreen),
              parseInt(this.plBlue),
              parseInt(this.plPurple),
              parseInt(this.plRed),
              parseInt(this.plOrange),
              parseInt(this.plYellow)) === false){

          }
        }
      }
    }
  }
});

//SVG static placeholder, will be overwritten by update.
var hex1 = SVG('#hex1').size(100, 100);
//                              BR       BR      BL      CL     TL       TR       TR
var hex1poly = hex1.polyline([[80, 65], [73, 78], [58, 78], [50, 65], [58, 52], [73, 52], [80, 65]]);
hex1poly.fill('white').move(20, 20);
hex1poly.stroke({ color: '#000', width: 2, linecap: 'round', linejoin: 'round' });

var hex2 = SVG('#hex2').size(300, 300);
//                         Start Point   P1        P2          P3          P4         P5      End Pt.
var hex2poly = hex2.polyline([[100,0],[200,0], [240, 75], [200, 150], [100, 150], [60, 75], [100, 0]]);
//                       (Right, Down)
hex2poly.fill('black').move(5, 5)
hex2poly.stroke({color: '#f06', width: 3, linecap: 'round', linejoin: 'round'});
