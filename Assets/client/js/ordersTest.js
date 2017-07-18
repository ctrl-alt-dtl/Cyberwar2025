
/**
 * Test/Scratch Code
 */

//Using Vue for testing.
new Vue({
  el: '#app',
  data: {
    attackResult: '', s1result: '', s2result: '', s3result: '', s4result: '', s5result: '',
    defender: 0, defenderResult: '', defenderOdds: '',
    attacker: 0, server1: 0, server2: 0, server3: 0, server4: 0, server5: 0,
    greenResult: '', blueResult: '', purpleResult: '', redResult: '', orangeResult: '', yellowResult: '',
    plGreen: 0, plBlue: 0, plPurple: 0, plRed: 0, plOrange: 0, plYellow: 0
  },
  methods: {
    btnSubmit() {

      // Input checking. We do not want extra inputs to confuse our math.
      if((this.attacker && (this.server1 || this.server2 || this.server3 || this.server4 || this.server5)) ||
        (this.plGreen || this.plBlue || this.plPurple || this.plRed || this.plOrange || this.plYellow)) {
        // alert("Too many variables!");
        console.error("Too many variables!");
        // throw new Error("Too many variables!");
        // location.reload();

      } else {
        // Single 'A' server against a single 'B' server.
        // Success and Failure are pointed to Defender, but the Attacker shows the result.
        if (this.defender && this.attacker) {
          if (captureOddsOneVsOne(parseInt(this.defender), parseInt(this.attacker)) === false) {
            this.attackResult   = "Success";
            this.defenderResult = "Fail";
            this.defenderOdds   = "Dice: " + dice + ' Odds: ' + odds + '%';

          } else {
            this.attackResult   = "Fail";
            this.defenderResult = "Success";
            this.defenderOdds   = "Dice: " + dice + ' Odds: ' + odds + '%';
          }

        } else if (!this.defender && (!this.server1 && !this.plBlue)) {
          console.error("Invalid or too many inputs!");
          throw new Error("Invalid or too many inputs!");
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
            this.attackResult   = "Success";
            this.defenderResult = "Fail";
            this.defenderOdds   = "Dice: " + dice + ' Odds: ' + odds + '%';

          } else {
            this.attackResult   = "Fail";
            this.defenderResult = "Success";
            this.defenderOdds   = "Dice: " + dice + ' Odds: ' + odds + '%';

          }

        } else if (!this.defender && (!this.attacker && !this.plBlue)) {
          console.error("Invalid or too many inputs!");
          throw new Error("Invalid or too many inputs!");
        } // End captureOddsOneVsMany()

        // Multi-player/Multi-combat. Many servers (A, C, D, ...) against a single 'B' server.
        if (this.defender && (this.plGreen || this.plBlue || this.plPurple || this.plRed || plOrange || plYellow)) {
          if (captureMultiCombat(
              parseInt(this.defender),
              parseInt(this.plGreen),
              parseInt(this.plBlue),
              parseInt(this.plPurple),
              parseInt(this.plRed),
              parseInt(this.plOrange),
              parseInt(this.plYellow)) === true){

            this.defenderResult   = "Success";
            this.greenResult      = "Fail";
            this.blueResult       = "Fail";
            this.purpleResult     = "Fail";
            this.redResult        = "Fail";
            this.orangeResult     = "Fail";
            this.yellowResult     = "Fail";

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

            } else{
              console.log("Output Error in captureMultiCombat()");
            }
          }
          // If we happen to have no defending value.
        } else if (!this.defender && (this.plGreen || this.plBlue || this.plPurple || this.plRed || plOrange || plYellow)) {
          console.error("Invalid or too many inputs!");
          throw new Error("Invalid or too many inputs!");
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
