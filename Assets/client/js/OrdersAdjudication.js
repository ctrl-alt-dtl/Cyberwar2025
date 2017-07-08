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
var server1, server2, server3, server4, server5 = 0;
var polycolor = '';

// 100 sided die for calculation
function diceRoll(){
  return dice = Math.floor(Math.random() * 100) + 1;
}

// This is an A->B scenario, in which A is the sole attacker.
function captureOddsOneVsOne(defense, attack){
  dice = diceRoll();
  odds = Math.round(defense/(attack + defense)*100);
  //this.resultOdds = "Dice: " + dice + ' ' + "Odds: " + odds;

  if(odds > dice){
    console.log('Dice: ' + dice + ' ' + 'Odds: ' + odds + ': Success to Defender!')
    return true;
  }
  else if (odds <= dice){
    console.log('Dice: ' + dice + ' ' + 'Odds: ' + odds + ': Fail to Defender!')
    return false;
  }
}

// This is an A+[n]->B scenario, in which A has multiple servers attacking.
// Could also be used when there's an alliance formed between two or more players.
function captureOddsOneVsMany(defense, server1, server2, server3, server4, server5){
  dice = diceRoll();
  attackSum = server1 + server2 + server3 + server4 + server5;
  odds = Math.round(defense/(attackSum + defense)*100);
  //console.log(odds, defense, server1, server2, server3, server4, server5, attackSum);
  //this.resultOdds = "Dice: " + dice + ' ' + "Odds: " + odds;

  if(odds > dice){
    console.log('Dice: ' + dice + ' ' + 'Odds: ' + odds + ': Success to Defender!')
    return true;
  }
  else if (odds <= dice){
    console.log('Dice: ' + dice + ' ' + 'Odds: ' + odds + ': Fail to Defender!')
    return false;
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
    defender: '', defenderResult: '', resultOdds: '',
    attacker: '', server1: 0, server2: 0, server3: 0, server4: 0, server5: 0,
    greenResult: '', blueResult: '', purpleResult: '', redResult: '', orangeResult: '', yellowResult: '',
    green: '', blue: '', purple: '', red: '', orange: '', yellow: ''
  },
  methods: {
    btnSubmit() {

      // Success and Failure are pointed to Defender, but the Attacker shows the result.
      if (this.defender && this.attacker){
        if (captureOddsOneVsOne(parseInt(this.defender), parseInt(this.attacker)) === false) {
          this.a1result = "Success";
          this.resultOdds = "Dice: " + dice + ' ' + "Odds: " + odds + '%';
          polycolor = 'red';
        } else {
          this.a1result = "Fail";
          this.resultOdds = "Dice: " + dice + ' ' + "Odds: " + odds + '%';
          polycolor = 'green';
        }

        //SVG Hexagon Test
        var draw = SVG('#svg').size(300, 300);
        var polyline = draw.polyline([[80, 65], [73, 78], [58, 78], [50, 65], [58, 52], [73, 52], [80, 65]]);
        polyline.fill(polycolor).move(20, 20);
        polyline.stroke({color: '#f06', width: 2, linecap: 'round', linejoin: 'round'});
      }

      //Multiple 'A' servers against a single 'B' server.
      if (this.defender && this.server1){
        if(captureOddsOneVsMany(
            parseInt(this.defender),
            parseInt(this.server1),
            parseInt(this.server2),
            parseInt(this.server3),
            parseInt(this.server4),
            parseInt(this.server5)) === false){
          this.s1result = "Success";
          this.resultOdds = "Dice: " + dice + ' ' + "Odds: " + odds + '%';
          polycolor = 'red';
        } else {
          this.s1result = "Fail";
          this.resultOdds = "Dice: " + dice + ' ' + "Odds: " + odds + '%';
          polycolor = 'green';
        }
      }
    }
  }
});

//SVG static placeholder, will be overwritten by update.
var draw = SVG('#svg').size(300, 300);
var polyline = draw.polyline([[80,65],[73,78],[58,78],[50,65],[58,52],[73,52], [80,65]]);
polyline.fill('white').move(20, 20);
polyline.stroke({ color: '#000', width: 2, linecap: 'round', linejoin: 'round' });

