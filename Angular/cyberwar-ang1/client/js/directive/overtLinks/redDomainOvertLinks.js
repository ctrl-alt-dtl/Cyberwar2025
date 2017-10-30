// Red Domain Links
app.directive('gameBoardRbaseR1OvertLink', function () {
  return {
    restrict: 'A',
    link: function (scope) {
      linksGroup.add(rBaseToR1Hex);
      rBaseToR1Hex.stroke(noColor);

      scope.$watch(function() {
        if((rBase.fill() === redColor) && (r1Hex.fill() === redColor)) {
          rBaseToR1Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((r1Hex.fill() === grayColor)) {
          console.debug("RBaseToR1BreakLink")
          rBaseToR1Hex.stroke(noColor);
          domainsLayer.draw();
        }
        /* Positive link building to base is allowed but no one can control/occupy another player's base.
        if((rBase.fill() === purpleColor) && (r2Hex.fill() === purpleColor)) {
          rBaseToR2Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if((rBase.fill() === blueColor) && (r2Hex.fill() === blueColor)) {
          rBaseToR2Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if((rBase.fill() === greenColor) && (r2Hex.fill() === greenColor)) {
          rBaseToR2Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if((rBase.fill() === yellowColor) && (r2Hex.fill() === yellowColor)) {
          rBaseToR2Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if((rBase.fill() === orangeColor) && (r2Hex.fill() === orangeColor)) {
          rBaseToR2Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        */
      });
    }
  }
});

app.directive('gameBoardRbaseR2OvertLink', function () {
  return {
    restrict: 'A',
    link: function (scope) {
      linksGroup.add(rBaseToR2Hex);
      rBaseToR2Hex.stroke(noColor);

      scope.$watch(function() {
        if((rBase.fill() === redColor) && (r2Hex.fill() === redColor)) {
          rBaseToR2Hex.stroke(redColor);
          domainsLayer.draw();
        }
        /* Positive link building to base is allowed but no one can control/occupy another player's base.
        if((rBase.fill() === purpleColor) && (r2Hex.fill() === purpleColor)) {
          rBaseToR2Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if((rBase.fill() === blueColor) && (r2Hex.fill() === blueColor)) {
          rBaseToR2Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if((rBase.fill() === greenColor) && (r2Hex.fill() === greenColor)) {
          rBaseToR2Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if((rBase.fill() === yellowColor) && (r2Hex.fill() === yellowColor)) {
          rBaseToR2Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if((rBase.fill() === orangeColor) && (r2Hex.fill() === orangeColor)) {
          rBaseToR2Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        */
      });
    }
  }
});

app.directive('gameBoardR1R3OvertLink', function () {
  return {
    restrict: 'A',
    link: function (scope) {
      linksGroup.add(r1HexToR3Hex);
      r1HexToR3Hex.stroke(noColor);

      scope.$watch(function() {
        if ((r1Hex.fill() === redColor) && (r3Hex.fill() === redColor)) {
          r1HexToR3Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((r1Hex.fill() === purpleColor) && (r3Hex.fill() === purpleColor)) {
          r1HexToR3Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((r1Hex.fill() === blueColor) && (r3Hex.fill() === blueColor)) {
          r1HexToR3Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((r1Hex.fill() === greenColor) && (r3Hex.fill() === greenColor)) {
          r1HexToR3Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((r1Hex.fill() === yellowColor) && (r3Hex.fill() === yellowColor)) {
          r1HexToR3Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((r1Hex.fill() === orangeColor) && (r3Hex.fill() === orangeColor)) {
          r1HexToR3Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((r1Hex.fill() === redColor) && (r3Hex.fill() === grayColor)) {
          console.debug("R1toR3BreakLink")
          r1HexToR3Hex.stroke(noColor);
          domainsLayer.draw();
        }

        // Reverse link.
        if ((r3Hex.fill() === redColor) && (r1Hex.fill() === redColor)) {
          r1HexToR3Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((r3Hex.fill() === purpleColor) && (r1Hex.fill() === purpleColor)) {
          r1HexToR3Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((r3Hex.fill() === blueColor) && (r1Hex.fill() === blueColor)) {
          r1HexToR3Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((r3Hex.fill() === greenColor) && (r1Hex.fill() === greenColor)) {
          r1HexToR3Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((r3Hex.fill() === yellowColor) && (r1Hex.fill() === yellowColor)) {
          r1HexToR3Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((r3Hex.fill() === orangeColor) && (r1Hex.fill() === orangeColor)) {
          r1HexToR3Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((r3Hex.fill() === redColor) && (r1Hex.fill() === grayColor)) {
          console.debug("R1toR3BreakLink")
          r1HexToR3Hex.stroke(noColor);
          domainsLayer.draw();
        }
      });
    }
  }
});

app.directive('gameBoardR2R5OvertLink', function () {
  return {
    restrict: 'A',
    link: function (scope) {
      linksGroup.add(r2HexToR5Hex);
      r2HexToR5Hex.stroke(noColor);

      scope.$watch(function() {
        if ((r2Hex.fill() === redColor) && (r5Hex.fill() === redColor)) {
          r2HexToR5Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((r2Hex.fill() === purpleColor) && (r5Hex.fill() === purpleColor)) {
          r2HexToR5Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((r2Hex.fill() === blueColor) && (r5Hex.fill() === blueColor)) {
          r2HexToR5Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((r2Hex.fill() === greenColor) && (r5Hex.fill() === greenColor)) {
          r2HexToR5Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((r2Hex.fill() === yellowColor) && (r5Hex.fill() === yellowColor)) {
          r2HexToR5Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((r2Hex.fill() === orangeColor) && (r5Hex.fill() === orangeColor)) {
          r2HexToR5Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((r2Hex.fill() === redColor) && (r5Hex.fill() === grayColor)) {
          console.debug("R2toR5BreakLink")
          r2HexToR5Hex.stroke(noColor);
          domainsLayer.draw();
        }

        // Reverse link.
        if ((r5Hex.fill() === redColor) && (r2Hex.fill() === redColor)) {
          r2HexToR5Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((r5Hex.fill() === purpleColor) && (r2Hex.fill() === purpleColor)) {
          r2HexToR5Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((r5Hex.fill() === blueColor) && (r2Hex.fill() === blueColor)) {
          r2HexToR5Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((r5Hex.fill() === greenColor) && (r2Hex.fill() === greenColor)) {
          r2HexTor5Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((r5Hex.fill() === yellowColor) && (r2Hex.fill() === yellowColor)) {
          r2HexToR5Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((r5Hex.fill() === orangeColor) && (r2Hex.fill() === orangeColor)) {
          r2HexToR5Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((r5Hex.fill() === redColor) && (r2Hex.fill() === grayColor)) {
          console.debug("R2toR5BreakLink")
          r2HexToR5Hex.stroke(noColor);
          domainsLayer.draw();
        }
      });
    }
  }
});

app.directive('gameBoardR3R4OvertLink', function () {
  return {
    restrict: 'A',
    link: function (scope) {
      linksGroup.add(r3HexToR4Hex);
      r1HexToR3Hex.stroke(noColor);

      scope.$watch(function() {
        if ((r3Hex.fill() === redColor) && (r4Hex.fill() === redColor)) {
          r3HexToR4Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((r3Hex.fill() === purpleColor) && (r4Hex.fill() === purpleColor)) {
          r3HexToR4Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((r3Hex.fill() === blueColor) && (r4Hex.fill() === blueColor)) {
          r3HexToR4Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((r3Hex.fill() === greenColor) && (r4Hex.fill() === greenColor)) {
          r3HexToR4Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((r3Hex.fill() === yellowColor) && (r4Hex.fill() === yellowColor)) {
          r3HexToR4Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((r3Hex.fill() === orangeColor) && (r4Hex.fill() === orangeColor)) {
          r3HexToR4Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((r3Hex.fill() === redColor) && (r4Hex.fill() === grayColor)) {
          console.debug("R3toR4BreakLink")
          r3HexToR4Hex.stroke(noColor);
          domainsLayer.draw();
        }

        // Reverse link.
        if ((r4Hex.fill() === redColor) && (r3Hex.fill() === redColor)) {
          r3HexToR4Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((r4Hex.fill() === purpleColor) && (r3Hex.fill() === purpleColor)) {
          r3HexToR4Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((r4Hex.fill() === blueColor) && (r3Hex.fill() === blueColor)) {
          r3HexToR4Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((r4Hex.fill() === greenColor) && (r3Hex.fill() === greenColor)) {
          r3HexToR4Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((r4Hex.fill() === yellowColor) && (r3Hex.fill() === yellowColor)) {
          r3HexToR4Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((r4Hex.fill() === orangeColor) && (r3Hex.fill() === orangeColor)) {
          r3HexToR4Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((r4Hex.fill() === redColor) && (r3Hex.fill() === grayColor)) {
          console.debug("R3toR4BreakLink")
          r3HexToR4Hex.stroke(noColor);
          domainsLayer.draw();
        }
      });
    }
  }
});

app.directive('gameBoardR5R4OvertLink', function () {
  return {
    restrict: 'A',
    link: function (scope) {
      linksGroup.add(r5HexToR4Hex);
      r5HexToR4Hex.stroke(noColor);

      scope.$watch(function() {
        if ((r5Hex.fill() === redColor) && (r4Hex.fill() === redColor)) {
          r5HexToR4Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((r5Hex.fill() === purpleColor) && (r4Hex.fill() === purpleColor)) {
          r5HexToR4Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((r5Hex.fill() === blueColor) && (r4Hex.fill() === blueColor)) {
          r5HexToR4Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((r5Hex.fill() === greenColor) && (r4Hex.fill() === greenColor)) {
          r5HexToR4Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((r5Hex.fill() === yellowColor) && (r4Hex.fill() === yellowColor)) {
          r5HexToR4Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((r5Hex.fill() === orangeColor) && (r4Hex.fill() === orangeColor)) {
          r5HexToR4Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((r5Hex.fill() === redColor) && (r4Hex.fill() === grayColor)) {
          console.debug("R5toR4BreakLink")
          r5HexToR4Hex.stroke(noColor);
          domainsLayer.draw();
        }

        // Reverse link.
        if ((r4Hex.fill() === redColor) && (r5Hex.fill() === redColor)) {
          r5HexToR4Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((r4Hex.fill() === purpleColor) && (r5Hex.fill() === purpleColor)) {
          r5HexToR4Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((r4Hex.fill() === blueColor) && (r5Hex.fill() === blueColor)) {
          r5HexToR4Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((r4Hex.fill() === greenColor) && (r5Hex.fill() === greenColor)) {
          r5HexToR4Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((r4Hex.fill() === yellowColor) && (r5Hex.fill() === yellowColor)) {
          r5HexToR4Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((r4Hex.fill() === orangeColor) && (r5Hex.fill() === orangeColor)) {
          r5HexToR4Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((r4Hex.fill() === redColor) && (r5Hex.fill() === grayColor)) {
          console.debug("R5toR4BreakLink")
          r5HexToR4Hex.stroke(noColor);
          domainsLayer.draw();
        }
      });
    }
  }
});

app.directive('gameBoardR3R6OvertLink', function () {
  return {
    restrict: 'A',
    link: function (scope) {
      linksGroup.add(r3HexToR6Hex);
      r3HexToR6Hex.stroke(noColor);

      scope.$watch(function() {
        if ((r3Hex.fill() === redColor) && (r6Hex.fill() === redColor)) {
          r3HexToR6Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((r3Hex.fill() === purpleColor) && (r6Hex.fill() === purpleColor)) {
          r3HexToR6Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((r3Hex.fill() === blueColor) && (r6Hex.fill() === blueColor)) {
          r3HexToR6Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((r3Hex.fill() === greenColor) && (r6Hex.fill() === greenColor)) {
          r3HexToR6Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((r3Hex.fill() === yellowColor) && (r6Hex.fill() === yellowColor)) {
          r3HexToR6Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((r3Hex.fill() === orangeColor) && (r6Hex.fill() === orangeColor)) {
          r3HexToR6Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((r3Hex.fill() === redColor) && (r6Hex.fill() === grayColor)) {
          console.debug("R3toR6BreakLink")
          r3HexToR6Hex.stroke(noColor);
          domainsLayer.draw();
        }

        // Reverse link.
        if ((r6Hex.fill() === redColor) && (r3Hex.fill() === redColor)) {
          r3HexToR6Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((r6Hex.fill() === purpleColor) && (r3Hex.fill() === purpleColor)) {
          r3HexToR6Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((r6Hex.fill() === blueColor) && (r3Hex.fill() === blueColor)) {
          r3HexToR6Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((r6Hex.fill() === greenColor) && (r3Hex.fill() === greenColor)) {
          r3HexToR6Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((r6Hex.fill() === yellowColor) && (r3Hex.fill() === yellowColor)) {
          r3HexToR6Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((r6Hex.fill() === orangeColor) && (r3Hex.fill() === orangeColor)) {
          r3HexToR6Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((r6Hex.fill() === redColor) && (r3Hex.fill() === grayColor)) {
          console.debug("R2toR5BreakLink")
          r3HexToR6Hex.stroke(noColor);
          domainsLayer.draw();
        }
      });
    }
  }
});

app.directive('gameBoardR5R7OvertLink', function () {
  return {
    restrict: 'A',
    link: function (scope) {
      linksGroup.add(r5HexToR7Hex);
      r5HexToR7Hex.stroke(noColor);

      scope.$watch(function() {
        if ((r5Hex.fill() === redColor) && (r7Hex.fill() === redColor)) {
          r5HexToR7Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((r5Hex.fill() === purpleColor) && (r7Hex.fill() === purpleColor)) {
          r5HexToR7Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((r5Hex.fill() === blueColor) && (r7Hex.fill() === blueColor)) {
          r5HexToR7Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((r5Hex.fill() === greenColor) && (r7Hex.fill() === greenColor)) {
          r5HexToR7Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((r5Hex.fill() === yellowColor) && (r7Hex.fill() === yellowColor)) {
          r5HexToR7Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((r5Hex.fill() === orangeColor) && (r7Hex.fill() === orangeColor)) {
          r5HexToR7Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((r5Hex.fill() === redColor) && (r7Hex.fill() === grayColor)) {
          console.debug("R5toR7BreakLink")
          r5HexToR7Hex.stroke(noColor);
          domainsLayer.draw();
        }

        // Reverse link.
        if ((r7Hex.fill() === redColor) && (r5Hex.fill() === redColor)) {
          r5HexToR7Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((r7Hex.fill() === purpleColor) && (r5Hex.fill() === purpleColor)) {
          r5HexToR7Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((r7Hex.fill() === blueColor) && (r5Hex.fill() === blueColor)) {
          r5HexToR7Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((r7Hex.fill() === greenColor) && (r5Hex.fill() === greenColor)) {
          r5HexToR7Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((r7Hex.fill() === yellowColor) && (r5Hex.fill() === yellowColor)) {
          r5HexToR7Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((r7Hex.fill() === orangeColor) && (r5Hex.fill() === orangeColor)) {
          r5HexToR7Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((r7Hex.fill() === redColor) && (r5Hex.fill() === grayColor)) {
          console.debug("R5toR7BreakLink")
          r5HexToR7Hex.stroke(noColor);
          domainsLayer.draw();
        }
      });
    }
  }
});

app.directive('gameBoardR4R6OvertLink', function () {
  return {
    restrict: 'A',
    link: function (scope) {
      linksGroup.add(r4HexToR6Hex);
      r4HexToR6Hex.stroke(noColor);

      scope.$watch(function() {
        if ((r4Hex.fill() === redColor) && (r6Hex.fill() === redColor)) {
          r4HexToR6Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((r4Hex.fill() === purpleColor) && (r6Hex.fill() === purpleColor)) {
          r4HexToR6Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((r4Hex.fill() === blueColor) && (r6Hex.fill() === blueColor)) {
          r4HexToR6Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((r4Hex.fill() === greenColor) && (r6Hex.fill() === greenColor)) {
          r4HexToR6Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((r4Hex.fill() === yellowColor) && (r6Hex.fill() === yellowColor)) {
          r4HexToR6Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((r4Hex.fill() === orangeColor) && (r6Hex.fill() === orangeColor)) {
          r4HexToR6Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((r4Hex.fill() === redColor) && (r6Hex.fill() === grayColor)) {
          console.debug("R4toR6BreakLink")
          r4HexToR6Hex.stroke(noColor);
          domainsLayer.draw();
        }

        // Reverse link.
        if ((r6Hex.fill() === redColor) && (r4Hex.fill() === redColor)) {
          r4HexToR6Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((r6Hex.fill() === purpleColor) && (r4Hex.fill() === purpleColor)) {
          r4HexToR6Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((r6Hex.fill() === blueColor) && (r4Hex.fill() === blueColor)) {
          r4HexToR6Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((r6Hex.fill() === greenColor) && (r4Hex.fill() === greenColor)) {
          r4HexToR6Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((r6Hex.fill() === yellowColor) && (r4Hex.fill() === yellowColor)) {
          r4HexToR6Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((r6Hex.fill() === orangeColor) && (r4Hex.fill() === orangeColor)) {
          r4HexToR6Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((r6Hex.fill() === redColor) && (r4Hex.fill() === grayColor)) {
          console.debug("R4toR6BreakLink")
          r4HexToR6Hex.stroke(noColor);
          domainsLayer.draw();
        }
      });
    }
  }
});

app.directive('gameBoardR4R7OvertLink', function () {
  return {
    restrict: 'A',
    link: function (scope) {
      linksGroup.add(r4HexToR7Hex);
      r4HexToR7Hex.stroke(noColor);

      scope.$watch(function() {
        if ((r4Hex.fill() === redColor) && (r7Hex.fill() === redColor)) {
          r4HexToR7Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((r4Hex.fill() === purpleColor) && (r7Hex.fill() === purpleColor)) {
          r4HexToR7Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((r4Hex.fill() === blueColor) && (r7Hex.fill() === blueColor)) {
          r4HexToR7Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((r4Hex.fill() === greenColor) && (r7Hex.fill() === greenColor)) {
          r4HexToR7Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((r4Hex.fill() === yellowColor) && (r7Hex.fill() === yellowColor)) {
          r4HexToR7Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((r4Hex.fill() === orangeColor) && (r7Hex.fill() === orangeColor)) {
          r4HexToR7Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((r4Hex.fill() === redColor) && (r7Hex.fill() === grayColor)) {
          console.debug("R4toR7BreakLink")
          r4HexToR7Hex.stroke(noColor);
          domainsLayer.draw();
        }

        // Reverse link.
        if ((r7Hex.fill() === redColor) && (r4Hex.fill() === redColor)) {
          r4HexToR7Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((r7Hex.fill() === purpleColor) && (r4Hex.fill() === purpleColor)) {
          r4HexToR7Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((r7Hex.fill() === blueColor) && (r4Hex.fill() === blueColor)) {
          r4HexToR7Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((r7Hex.fill() === greenColor) && (r4Hex.fill() === greenColor)) {
          r4HexToR7Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((r7Hex.fill() === yellowColor) && (r4Hex.fill() === yellowColor)) {
          r4HexToR7Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((r7Hex.fill() === orangeColor) && (r4Hex.fill() === orangeColor)) {
          r4HexToR7Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((r7Hex.fill() === redColor) && (r4Hex.fill() === grayColor)) {
          console.debug("R4toR7BreakLink")
          r4HexToR7Hex.stroke(noColor);
          domainsLayer.draw();
        }
      });
    }
  }
});

app.directive('gameBoardR6R7OvertLink', function () {
  return {
    restrict: 'A',
    link: function (scope) {
      linksGroup.add(r6HexToR7Hex);
      r6HexToR7Hex.stroke(noColor);

      scope.$watch(function() {
        if ((r6Hex.fill() === redColor) && (r7Hex.fill() === redColor)) {
          r6HexToR7Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((r6Hex.fill() === purpleColor) && (r7Hex.fill() === purpleColor)) {
          r6HexToR7Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((r6Hex.fill() === blueColor) && (r7Hex.fill() === blueColor)) {
          r6HexToR7Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((r6Hex.fill() === greenColor) && (r7Hex.fill() === greenColor)) {
          r6HexToR7Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((r6Hex.fill() === yellowColor) && (r7Hex.fill() === yellowColor)) {
          r6HexToR7Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((r6Hex.fill() === orangeColor) && (r7Hex.fill() === orangeColor)) {
          r6HexToR7Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((r6Hex.fill() === redColor) && (r7Hex.fill() === grayColor)) {
          console.debug("R6toR7BreakLink")
          r6HexToR7Hex.stroke(noColor);
          domainsLayer.draw();
        }

        // Reverse link.
        if ((r7Hex.fill() === redColor) && (r6Hex.fill() === redColor)) {
          r6HexToR7Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((r7Hex.fill() === purpleColor) && (r6Hex.fill() === purpleColor)) {
          r6HexToR7Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((r7Hex.fill() === blueColor) && (r6Hex.fill() === blueColor)) {
          r6HexToR7Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((r7Hex.fill() === greenColor) && (r6Hex.fill() === greenColor)) {
          r6HexToR7Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((r7Hex.fill() === yellowColor) && (r6Hex.fill() === yellowColor)) {
          r6HexToR7Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((r7Hex.fill() === orangeColor) && (r6Hex.fill() === orangeColor)) {
          r6HexToR7Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((r7Hex.fill() === redColor) && (r6Hex.fill() === grayColor)) {
          console.debug("R6toR7BreakLink")
          r6HexToR7Hex.stroke(noColor);
          domainsLayer.draw();
        }
      });
    }
  }
});

app.directive('gameBoardR6R8OvertLink', function () {
  return {
    restrict: 'A',
    link: function (scope) {
      linksGroup.add(r6HexToR8Hex);
      r6HexToR8Hex.stroke(noColor);

      scope.$watch(function() {
        if ((r6Hex.fill() === redColor) && (r8Hex.fill() === redColor)) {
          r6HexToR8Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((r6Hex.fill() === purpleColor) && (r8Hex.fill() === purpleColor)) {
          r6HexToR8Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((r6Hex.fill() === blueColor) && (r8Hex.fill() === blueColor)) {
          r6HexToR8Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((r6Hex.fill() === greenColor) && (r8Hex.fill() === greenColor)) {
          r6HexToR8Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((r6Hex.fill() === yellowColor) && (r8Hex.fill() === yellowColor)) {
          r6HexToR8Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((r6Hex.fill() === orangeColor) && (r8Hex.fill() === orangeColor)) {
          r6HexToR8Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((r6Hex.fill() === redColor) && (r8Hex.fill() === grayColor)) {
          console.debug("R6toR8BreakLink")
          r6HexToR8Hex.stroke(noColor);
          domainsLayer.draw();
        }

        // Reverse link.
        if ((r8Hex.fill() === redColor) && (r6Hex.fill() === redColor)) {
          r6HexToR8Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((r8Hex.fill() === purpleColor) && (r6Hex.fill() === purpleColor)) {
          r6HexToR8Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((r8Hex.fill() === blueColor) && (r6Hex.fill() === blueColor)) {
          r6HexToR8Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((r8Hex.fill() === greenColor) && (r6Hex.fill() === greenColor)) {
          r6HexToR8Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((r8Hex.fill() === yellowColor) && (r6Hex.fill() === yellowColor)) {
          r6HexToR8Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((r8Hex.fill() === orangeColor) && (r6Hex.fill() === orangeColor)) {
          r6HexToR8Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((r8Hex.fill() === redColor) && (r6Hex.fill() === grayColor)) {
          console.debug("R6toR8BreakLink")
          r6HexToR8Hex.stroke(noColor);
          domainsLayer.draw();
        }
      });
    }
  }
});

app.directive('gameBoardR7R8OvertLink', function () {
  return {
    restrict: 'A',
    link: function (scope) {
      linksGroup.add(r7HexToR8Hex);
      r7HexToR8Hex.stroke(noColor);

      scope.$watch(function() {
        if ((r7Hex.fill() === redColor) && (r8Hex.fill() === redColor)) {
          r7HexToR8Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((r7Hex.fill() === purpleColor) && (r8Hex.fill() === purpleColor)) {
          r7HexToR8Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((r7Hex.fill() === blueColor) && (r8Hex.fill() === blueColor)) {
          r7HexToR8Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((r7Hex.fill() === greenColor) && (r8Hex.fill() === greenColor)) {
          r7HexToR8Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((r7Hex.fill() === yellowColor) && (r8Hex.fill() === yellowColor)) {
          r7HexToR8Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((r7Hex.fill() === orangeColor) && (r8Hex.fill() === orangeColor)) {
          r7HexToR8Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((r7Hex.fill() === redColor) && (r8Hex.fill() === grayColor)) {
          console.debug("R7toR8BreakLink")
          r7HexToR8Hex.stroke(noColor);
          domainsLayer.draw();
        }

        // Reverse link.
        if ((r8Hex.fill() === redColor) && (r7Hex.fill() === redColor)) {
          r7HexToR8Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((r8Hex.fill() === purpleColor) && (r7Hex.fill() === purpleColor)) {
          r7HexToR8Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((r8Hex.fill() === blueColor) && (r7Hex.fill() === blueColor)) {
          r7HexToR8Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((r8Hex.fill() === greenColor) && (r7Hex.fill() === greenColor)) {
          r7HexToR8Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((r8Hex.fill() === yellowColor) && (r7Hex.fill() === yellowColor)) {
          r7HexToR8Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((r8Hex.fill() === orangeColor) && (r7Hex.fill() === orangeColor)) {
          r7HexToR8Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((r8Hex.fill() === redColor) && (r7Hex.fill() === grayColor)) {
          console.debug("R7toR8BreakLink")
          r7HexToR8Hex.stroke(noColor);
          domainsLayer.draw();
        }
      });
    }
  }
});