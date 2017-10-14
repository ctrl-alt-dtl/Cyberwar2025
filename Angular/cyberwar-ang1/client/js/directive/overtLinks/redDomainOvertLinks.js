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
        if((r1Hex.fill() === redColor) && (r3Hex.fill() === redColor)) {
          r1HexToR3Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if((r1Hex.fill() === purpleColor) && (r3Hex.fill() === purpleColor)) {
          r1HexToR3Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if((r1Hex.fill() === blueColor) && (r3Hex.fill() === blueColor)) {
          r1HexToR3Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if((r1Hex.fill() === greenColor) && (r3Hex.fill() === greenColor)) {
          r1HexToR3Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if((r1Hex.fill() === yellowColor) && (r3Hex.fill() === yellowColor)) {
          r1HexToR3Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if((r1Hex.fill() === orangeColor) && (r3Hex.fill() === orangeColor)) {
          r1HexToR3Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
      });

      console.log("gameBoardRedR1R3OvertLinkLoaded");
    }
  }
});
