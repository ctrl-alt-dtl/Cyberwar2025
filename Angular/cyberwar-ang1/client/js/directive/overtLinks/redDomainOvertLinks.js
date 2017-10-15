// Red Domain Links
app.directive('gameBoardRbaseR2OvertLink', function () {
  return {
    restrict: 'A',
    link: function (scope) {
      console.log("gameBoardRedRBaseR2OvertLinkLoading");
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

      console.log("gameBoardRedRBaseR2OvertLinkLoaded");
    }
  }
});

// Red Domain Links
app.directive('gameBoardRbaseR1OvertLink', function () {
  return {
    restrict: 'A',
    link: function (scope) {
      console.log("gameBoardRedRBaseR1OvertLinkLoading");
      linksGroup.add(rBaseToR1Hex);
      rBaseToR1Hex.stroke(noColor);

      scope.$watch(function() {
        if((rBase.fill() === redColor) && (r1Hex.fill() === redColor)) {
          rBaseToR1Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((r1Hex.fill() === grayColor)) {
          console.log("RBaseToR1BreakLink")
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

      console.log("gameBoardRedRBaseR1OvertLinkLoaded");
    }
  }
});

app.directive('gameBoardR1R3OvertLink', function () {
  return {
    restrict: 'A',
    link: function (scope) {
      console.log("gameBoardRedR1R3OvertLinkLoading");
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
          console.log("R3toR4BreakLink")
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
          console.log("R3toR4BreakLink")
          r1HexToR3Hex.stroke(noColor);
          domainsLayer.draw();
        }
      });
      console.log("gameBoardRedR1R3OvertLinkLoaded");
    }
  }
});

app.directive('gameBoardR2R5OvertLink', function () {
  return {
    restrict: 'A',
    link: function (scope) {
      console.log("gameBoardRedR2R5OvertLinkLoading");
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
          console.log("R2toR5BreakLink")
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
          console.log("R2toR5BreakLink")
          r2HexToR5Hex.stroke(noColor);
          domainsLayer.draw();
        }
      });
      console.log("gameBoardRedR2R5OvertLinkLoaded");
    }
  }
});

app.directive('gameBoardR3R4OvertLink', function () {
  return {
    restrict: 'A',
    link: function (scope) {
      console.log("gameBoardRedR3R4OvertLinkLoading");
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
          console.log("R3toR4BreakLink")
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
          console.log("R3toR4BreakLink")
          r3HexToR4Hex.stroke(noColor);
          domainsLayer.draw();
        }
      });
      console.log("gameBoardRedR3R4OvertLinkLoaded");
    }
  }
});

app.directive('gameBoardR5R4OvertLink', function () {
  return {
    restrict: 'A',
    link: function (scope) {
      console.log("gameBoardRedR3R4OvertLinkLoading");
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
          console.log("R5toR4BreakLink")
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
          console.log("R5toR4BreakLink")
          r5HexToR4Hex.stroke(noColor);
          domainsLayer.draw();
        }
      });
      console.log("gameBoardRedR5R4OvertLinkLoaded");
    }
  }
});
