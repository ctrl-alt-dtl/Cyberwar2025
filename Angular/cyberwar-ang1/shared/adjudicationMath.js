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
 * >>> Valid Capture ("Secure") moves consist in the following scenarios. <<<
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

/**
 * 100 sided die for calculation
 *
 * @returns {number}
 */
var diceRoll = function() {
  return Math.floor(Math.random() * 100) + 1;
}

/**
 * Helper function for captureMultiCombat()
 *
 * @param defender
 * @param attacker
 * @param attackerName
 * @returns {number}
 */
var multiCombatPerPlayer = function(defender, attacker, attackerName) {
  var dice = diceRoll();
  var diceAbove = Math.round(defender / (defender + attacker) * 100);
  var margin = dice -  diceAbove;
  console.log('Attacker: ' + attackerName + ' Dice: ' + dice + ' Dice Above: ' + diceAbove + '% Margin: ' + margin);
  return margin;
}

/**
 * Helper function to determine if multiple success happen due to Math.Random()
 *
 * @param el
 * @param gre
 * @param blu
 * @param pur
 * @param red
 * @param org
 * @param yel
 * @returns {boolean}
 */
var equalToAny = function(el, gre, blu, pur, red, org, yel) {
  var args = [].slice.call(arguments, 1);
  if (args.length === 0) return false;
  for (var i = 0, l = args.length; i < l; i++) {
    if (el === args[i]) {
      return true;
    }
  }
  return false;
}

  this.AdjudicationMath = {
  /**
   * This is an A->B scenario, in which A is the sole attacker.
   *
   * @param defender
   * @param attacker
   * @returns {boolean}
   */
  captureOddsOneVsOne: function(defender, attacker) {
    var dice = diceRoll();
    var odds = Math.round(defender / (attacker + defender) * 100);

    // this.resultOdds = "Dice: " + dice + ' ' + "Odds: " + odds;

    if(odds > dice) {
      console.log('Dice: ' + dice + ' Odds: ' + odds + ': Success to Defender!\n')
      return false;
    }
    else {
      console.log('Dice: ' + dice + ' Odds: ' + odds + ': Fail to Defender!\n')
      return true;
    }
  },

  /**
   * This is an A+[n]->B scenario, in which A has multiple servers attacking.
   * Could also be used when there's an alliance formed between two or more players.
   *
   * @param defender
   * @param servers
   * @returns {boolean}
   */
  captureOddsOneVsMany: function(defender, servers) {
    var dice = diceRoll();
    var attackSum = 0;
    for (var index = 0; index < servers.length; ++index) {
      attackSum += servers[index];
    }
    var odds = Math.round(defender / (attackSum + defender) * 100);

    // console.log(odds, defense, server1, server2, server3, server4, server5, attackSum);
    // this.resultOdds = "Dice: " + dice + ' ' + "Odds: " + odds;

    if(odds > dice) {
      console.log('Dice: ' + dice + ' Odds: ' + odds + ': Success to Defender!')
      return false;
    }
    else {
      console.log('Dice: ' + dice + ' Odds: ' + odds + ': Fail to Defender!')
      return true;
    }
  },

  /**
   * This is an A->B<-C,[...] scenario, in which multiple players attack the defender.
   * The max amount of attacks if five, but they can be from each player or from two or more from a sole player.
   * For example: pBlue attack is 8 (2x level 4 servers), pRed is 4, and the defender pOrange is 4.
   * The first roll goes to pBlue, since they have a higher margin of success.
   * However, both attacks will adjudicated simultaneously and compared at the end. The highest number out of all rolls
   * that are above zero is considered the winner and takes control of that server.
   * However, if no one succeeds on the first roll, (e.g. the defender wins) then there is no re-roll.
   *
   * @param defender
   * @param plGreen
   * @param plBlue
   * @param plPurple
   * @param plRed
   * @param plOrange
   * @param plYellow
   * @returns {boolean}
   */
  captureMultiCombat: function(defender, plGreen, plBlue, plPurple, plRed, plOrange, plYellow) {
    var winner = { red: false, orange: false, yellow: false, green: false, blue: false, purple: false };

    // TODO: This is not perfect, clean up this logic!
    if(plGreen > 0 && plBlue > 0 && plPurple > 0 && plRed > 0 && plOrange > 0 && plYellow > 0) {
      // alert("Check your inputs!");
      console.error("Invalid or too many inputs!");
      // throw new Error("Invalid or too many inputs!");
      // location.reload();
      return winner;
    }

    // Calculate the margin for success for each player.
    var greenMargin = plGreen ? multiCombatPerPlayer(defender, plGreen, 'Green') : -1;
    var blueMargin = plBlue ? multiCombatPerPlayer(defender, plBlue, 'Blue') : -1;
    var purpleMargin = plPurple ? multiCombatPerPlayer(defender, plPurple, 'Purple') : -1;
    var redMargin = plRed ? multiCombatPerPlayer(defender, plRed, 'Red') : -1;
    var orangeMargin = plOrange ? multiCombatPerPlayer(defender, plOrange, 'Orange') : -1;
    var yellowMargin = plYellow ? multiCombatPerPlayer(defender, plYellow, 'Yellow') : -1;

    // Math.Random() edge case testing.
    // greenMargin = 1;
    // blueMargin = 1;

    // Display of who won the roll, going down the line of who had the higher margin of success and set their win state.
    // DEFENDER
    if (greenMargin   < 0             &&
      blueMargin      < 0             &&
      purpleMargin    < 0             &&
      redMargin       < 0             &&
      orangeMargin    < 0             &&
      yellowMargin    < 0) {

      winner.red    = false;
      winner.orange = false;
      winner.yellow = false;
      winner.green  = false;
      winner.blue   = false;
      winner.purple = false;

    } else {
      // PLAYER GREEN
      if (greenMargin > blueMargin            &&
        greenMargin > purpleMargin            &&
        greenMargin > redMargin               &&
        greenMargin > orangeMargin            &&
        greenMargin > yellowMargin) {

        winner.red    = false;
        winner.orange = false;
        winner.yellow = false;
        winner.green  = true;
        winner.blue   = false;
        winner.purple = false;

        // PLAYER BLUE
      } else if (blueMargin > greenMargin     &&
        blueMargin > purpleMargin             &&
        blueMargin > redMargin                &&
        blueMargin > orangeMargin             &&
        blueMargin > yellowMargin) {

        winner.red    = false;
        winner.orange = false;
        winner.yellow = false;
        winner.green  = false;
        winner.blue   = true;
        winner.purple = false;

        // PLAYER PURPLE
      } else if (purpleMargin > greenMargin   &&
        purpleMargin > blueMargin             &&
        purpleMargin > redMargin              &&
        purpleMargin > orangeMargin           &&
        purpleMargin > yellowMargin) {

        winner.red    = false;
        winner.orange = false;
        winner.yellow = false;
        winner.green  = false;
        winner.blue   = false;
        winner.purple = true;

        // PLAYER RED
      } else if (redMargin > greenMargin      &&
        redMargin > blueMargin                &&
        redMargin > purpleMargin              &&
        redMargin > orangeMargin              &&
        redMargin > yellowMargin) {

        winner.red    = true;
        winner.orange = false;
        winner.yellow = false;
        winner.green  = false;
        winner.blue   = false;
        winner.purple = false;

        // PLAYER ORANGE
      } else if (orangeMargin > greenMargin   &&
        orangeMargin > blueMargin             &&
        orangeMargin > purpleMargin           &&
        orangeMargin > redMargin              &&
        orangeMargin > yellowMargin) {

        winner.red    = false;
        winner.orange = true;
        winner.yellow = false;
        winner.green  = false;
        winner.blue   = false;
        winner.purple = false;

        // PLAYER YELLOW
      } else if (yellowMargin > greenMargin   &&
        yellowMargin > blueMargin             &&
        yellowMargin > purpleMargin           &&
        yellowMargin > redMargin              &&
        yellowMargin > orangeMargin) {

        winner.red    = false;
        winner.orange = false;
        winner.yellow = true;
        winner.green  = false;
        winner.blue   = false;
        winner.purple = false;
      } else {
        // If two or more winning values are the same number then we are presented with this.
        // Which happens when Math.Random() chooses the same number per each roll. Best action is to re-roll.
        if (equalToAny(greenMargin, blueMargin, purpleMargin, redMargin, orangeMargin, yellowMargin)) {
          // alert("Two or more values are equal!");
          console.log("Notice: Same Winning Value Error! Re-rolling!!");
          winner = this.captureMultiCombat(defender, plGreen, plBlue, plPurple, plRed, plOrange, plYellow);
        }
      }
    }

    return winner;
  },
};
