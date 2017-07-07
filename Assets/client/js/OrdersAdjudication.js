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
 * PvP Dual Combat
 *                  [B]            [A]
 * Success/Fail = Defense / (Attack + Defense)
 *
 *                  [B]            [A]
 * Success/Fail = Defense / (SUM(Attack[1]:Attack[4]) + Defense)
 *
 * PvP Multi Combat
 *                  [B]             [A, C, D, ...]
 * Success/Fail = Defender / (Attack[PLAYER] + Defense[PLAYER]) << Repeat until Defender or one Attacker succeeds
 *
 * PvP Dual/Multi on Empty Server
 *                  [B]       [A, C, D, ...]
 * Success/Fail = Defense / (Attack + Defense)
 *
 */

var dice, odds, attackSum = 0;

// 100 sided die for calculation
function diceRoll(){
  return dice = Math.floor(Math.random() * 100) + 1;
}

// This is an A->B scenario in which B is the defender.
function captureOddsOneVsOne(defense, attack){
  dice = diceRoll();
  odds = Math.round(defense/(attack + defense)*100);
  if(odds > dice){
    console.log('Dice: ' + dice + ' ' + 'Odds: ' + odds + ': Success to Defender!')
    return 'Success';
  }
  else if (odds <= dice){
    console.log('Dice: ' + dice + ' ' + 'Odds: ' + odds + ': Fail to Defender!')
    return 'Fail';
  }
}

function captureOddsOneVsMany(defense, attack1, attack2, attack3, attack4, attack5){
  dice = diceRoll();
  attackSum = attack1 + attack2 + attack3 + attack4 + attack5;
  odds = Math.round(defense/(attackSum + defense)*100);
}

//Using Vue Directives for testing now.
new Vue({
  el: '#app',
  data: {
    a1result: '',
    a2result: '',
    a3result: '',
    a4result: '',
    a5result: '',
    defender: '',
    attacker1: '',
    attacker2: '',
    attacker3: '',
    attacker4: '',
    attacker5: ''
  },
  methods: {
    btnSubmit() {
      captureOddsOneVsOne(parseInt(this.defender), parseInt(this.attacker1));
    }
  }
});