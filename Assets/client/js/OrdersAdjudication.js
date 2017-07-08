/**
 * File: OrdersAdjudication.js
 * Created by: David "Ty" Long (Math developed by: Niels Blom Areth)
 * Date: 7/2/17
 * Info: Used for mathematically equating the actions of players' move using the "Niels' Method".
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

// 100 sided die for calculation
function diceRoll(){
  return dice = Math.floor(Math.random() * 100) + 1;
}

// This is an A->B scenario, in which A is the sole attacker.
function captureOddsOneVsOne(defense, attack){
  dice = diceRoll();
  odds = Math.round(defense/(attack + defense)*100);
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
function captureOddsOneVsMany(defense, attack1, attack2, attack3, attack4, attack5){
  dice = diceRoll();
  attackSum = attack1 + attack2 + attack3 + attack4 + attack5;
  odds = Math.round(defense/(attackSum + defense)*100);
}

//Using Vue for testing.
new Vue({
  el: '#app',
  data: {
    a1result: '', a2result: '', a3result: '', a4result: '', a5result: '',
    defender: '', defenderResult: '',
    attacker1: '', attacker2: '', attacker3: '', attacker4: '', attacker5: '',
    greenResult: '', blueResult: '', purpleResult: '', redResult: '', orangeResult: '', yellowResult: '',
    green: '', blue: '', purple: '', red: '', orange: '', yellow: ''
  },
  methods: {
    btnSubmit() {
      // Success and Failure are pointed to Defender, but the Attacker shows the result.
      if (captureOddsOneVsOne(parseInt(this.defender), parseInt(this.attacker1)) == false) {
        this.a1result = "Success";
      } else {
        this.a1result = "Fail";
      }
    }
  }
});

//SVG Hexagon Test
var draw = SVG('#svg').size(600, 600);
var polyline = draw.polyline([[300,150],[225,280],[75,280],[0,150],[75,20],[225,20], [300,150]]);
polyline.fill('none').move(20, 20);
polyline.stroke({ color: '#f06', width: 4, linecap: 'round', linejoin: 'round' });