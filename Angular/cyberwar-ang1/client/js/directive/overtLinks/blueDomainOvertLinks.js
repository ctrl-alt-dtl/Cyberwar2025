// Blue Domain Links
app.directive('gameBoardBbaseB1OvertLink', function () {
  return {
    restrict: 'A',
    link: function (scope) {
      linksGroup.add(bBaseToB1Hex);
      bBaseToB1Hex.stroke(noColor);

      scope.$watch(function() {
        if((bBase.fill() === blueColor) && (b1Hex.fill() === blueColor)) {
          bBaseToB1Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((b1Hex.fill() === grayColor)) {
          console.log("BBaseToB1BreakLink")
          bBaseToB1Hex.stroke(noColor);
          domainsLayer.draw();
        }
        // Positive link building to base is allowed but no one can control/occupy another player's base.
      });
    }
  }
});

app.directive('gameBoardBbaseB2OvertLink', function () {
  return {
    restrict: 'A',
    link: function (scope) {
      linksGroup.add(bBaseToB2Hex);
      bBaseToB2Hex.stroke(noColor);

      scope.$watch(function() {
        if((bBase.fill() === blueColor) && (b2Hex.fill() === blueColor)) {
          bBaseToB2Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        else {
          bBaseToB2Hex.stroke(noColor);
          domainsLayer.batchDraw();
        }
      });
    }
  }
});

app.directive('gameBoardB1B3OvertLink', function () {
  return {
    restrict: 'A',
    link: function (scope) {
      linksGroup.add(b1HexToB3Hex);
      b1HexToB3Hex.stroke(noColor);

      scope.$watch(function() {
        if ((b1Hex.fill() === redColor) && (b3Hex.fill() === redColor)) {
          b1HexToB3Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((b1Hex.fill() === purpleColor) && (b3Hex.fill() === purpleColor)) {
          b1HexToB3Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((b1Hex.fill() === blueColor) && (b3Hex.fill() === blueColor)) {
          b1HexToB3Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((b1Hex.fill() === greenColor) && (b3Hex.fill() === greenColor)) {
          b1HexToB3Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((b1Hex.fill() === yellowColor) && (b3Hex.fill() === yellowColor)) {
          b1HexToB3Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((b1Hex.fill() === orangeColor) && (b3Hex.fill() === orangeColor)) {
          b1HexToB3Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((b1Hex.fill() === redColor) && (b3Hex.fill() === grayColor)) {
          console.log("B1toB3BreakLink")
          b1HexToB3Hex.stroke(noColor);
          domainsLayer.draw();
        }

        // Reverse link.
        if ((b3Hex.fill() === redColor) && (b1Hex.fill() === redColor)) {
          b1HexToB3Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((b3Hex.fill() === purpleColor) && (b1Hex.fill() === purpleColor)) {
          b1HexToB3Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((b3Hex.fill() === blueColor) && (b1Hex.fill() === blueColor)) {
          b1HexToB3Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((b3Hex.fill() === greenColor) && (b1Hex.fill() === greenColor)) {
          b1HexToB3Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((b3Hex.fill() === yellowColor) && (b1Hex.fill() === yellowColor)) {
          b1HexToB3Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((b3Hex.fill() === orangeColor) && (b1Hex.fill() === orangeColor)) {
          b1HexToB3Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((b3Hex.fill() === redColor) && (b1Hex.fill() === grayColor)) {
          console.log("B1toB3BreakLink")
          b1HexToB3Hex.stroke(noColor);
          domainsLayer.draw();
        }
      });
    }
  }
});

app.directive('gameBoardB2B5OvertLink', function () {
  return {
    restrict: 'A',
    link: function (scope) {
      linksGroup.add(b2HexToB5Hex);
      b2HexToB5Hex.stroke(noColor);

      scope.$watch(function() {
        if ((b2Hex.fill() === redColor) && (b5Hex.fill() === redColor)) {
          b2HexToB5Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((b2Hex.fill() === purpleColor) && (b5Hex.fill() === purpleColor)) {
          b2HexToB5Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((b2Hex.fill() === blueColor) && (b5Hex.fill() === blueColor)) {
          b2HexToB5Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((b2Hex.fill() === greenColor) && (b5Hex.fill() === greenColor)) {
          b2HexToB5Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((b2Hex.fill() === yellowColor) && (b5Hex.fill() === yellowColor)) {
          b2HexToB5Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((b2Hex.fill() === orangeColor) && (b5Hex.fill() === orangeColor)) {
          b2HexToB5Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((b2Hex.fill() === redColor) && (b5Hex.fill() === grayColor)) {
          console.log("B2toB5BreakLink")
          b2HexToB5Hex.stroke(noColor);
          domainsLayer.draw();
        }

        // Reverse link.
        if ((b5Hex.fill() === redColor) && (b2Hex.fill() === redColor)) {
          b2HexToB5Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((b5Hex.fill() === purpleColor) && (b2Hex.fill() === purpleColor)) {
          b2HexToB5Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((b5Hex.fill() === blueColor) && (b2Hex.fill() === blueColor)) {
          b2HexToB5Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((b5Hex.fill() === greenColor) && (b2Hex.fill() === greenColor)) {
          b2HexToB5Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((b5Hex.fill() === yellowColor) && (b2Hex.fill() === yellowColor)) {
          b2HexToB5Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((b5Hex.fill() === orangeColor) && (b2Hex.fill() === orangeColor)) {
          b2HexToB5Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((b5Hex.fill() === redColor) && (b2Hex.fill() === grayColor)) {
          console.log("B2toB5BreakLink")
          b2HexToB5Hex.stroke(noColor);
          domainsLayer.draw();
        }
      });
    }
  }
});

app.directive('gameBoardB3B4OvertLink', function () {
  return {
    restrict: 'A',
    link: function (scope) {
      linksGroup.add(b3HexToB4Hex);
      b3HexToB4Hex.stroke(noColor);

      scope.$watch(function() {
        if ((b3Hex.fill() === redColor) && (b4Hex.fill() === redColor)) {
          b3HexToB4Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((b3Hex.fill() === purpleColor) && (b4Hex.fill() === purpleColor)) {
          b3HexToB4Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((b3Hex.fill() === blueColor) && (b4Hex.fill() === blueColor)) {
          b3HexToB4Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((b3Hex.fill() === greenColor) && (b4Hex.fill() === greenColor)) {
          b3HexToB4Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((b3Hex.fill() === yellowColor) && (b4Hex.fill() === yellowColor)) {
          b3HexToB4Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((b3Hex.fill() === orangeColor) && (b4Hex.fill() === orangeColor)) {
          b3HexToB4Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((b3Hex.fill() === redColor) && (b4Hex.fill() === grayColor)) {
          console.log("B3toB4BreakLink")
          b3HexToB4Hex.stroke(noColor);
          domainsLayer.draw();
        }

        // Reverse link.
        if ((b4Hex.fill() === redColor) && (b3Hex.fill() === redColor)) {
          b3HexToB4Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((b4Hex.fill() === purpleColor) && (b3Hex.fill() === purpleColor)) {
          b3HexToB4Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((b4Hex.fill() === blueColor) && (b3Hex.fill() === blueColor)) {
          b3HexToB4Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((b4Hex.fill() === greenColor) && (b3Hex.fill() === greenColor)) {
          b3HexToB4Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((b4Hex.fill() === yellowColor) && (b3Hex.fill() === yellowColor)) {
          b3HexToB4Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((b4Hex.fill() === orangeColor) && (b3Hex.fill() === orangeColor)) {
          b3HexToB4Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((b4Hex.fill() === redColor) && (b3Hex.fill() === grayColor)) {
          console.log("B3toB4BreakLink")
          b3HexToB4Hex.stroke(noColor);
          domainsLayer.draw();
        }
      });
    }
  }
});

app.directive('gameBoardB5B4OvertLink', function () {
  return {
    restrict: 'A',
    link: function (scope) {
      linksGroup.add(b5HexToB4Hex);
      b5HexToB4Hex.stroke(noColor);

      scope.$watch(function() {
        if ((b5Hex.fill() === redColor) && (b4Hex.fill() === redColor)) {
          b5HexToB4Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((b5Hex.fill() === purpleColor) && (b4Hex.fill() === purpleColor)) {
          b5HexToB4Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((b5Hex.fill() === blueColor) && (b4Hex.fill() === blueColor)) {
          b5HexToB4Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((b5Hex.fill() === greenColor) && (b4Hex.fill() === greenColor)) {
          b5HexToB4Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((b5Hex.fill() === yellowColor) && (b4Hex.fill() === yellowColor)) {
          b5HexToB4Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((b5Hex.fill() === orangeColor) && (b4Hex.fill() === orangeColor)) {
          b5HexToB4Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((b5Hex.fill() === redColor) && (b4Hex.fill() === grayColor)) {
          console.log("B5toB4BreakLink")
          b5HexToB4Hex.stroke(noColor);
          domainsLayer.draw();
        }

        // Reverse link.
        if ((b4Hex.fill() === redColor) && (b5Hex.fill() === redColor)) {
          b5HexToB4Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((b4Hex.fill() === purpleColor) && (b5Hex.fill() === purpleColor)) {
          b5HexToB4Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((b4Hex.fill() === blueColor) && (b5Hex.fill() === blueColor)) {
          b5HexToB4Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((b4Hex.fill() === greenColor) && (b5Hex.fill() === greenColor)) {
          b5HexToB4Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((b4Hex.fill() === yellowColor) && (b5Hex.fill() === yellowColor)) {
          b5HexToB4Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((b4Hex.fill() === orangeColor) && (b5Hex.fill() === orangeColor)) {
          b5HexToB4Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((b4Hex.fill() === redColor) && (b5Hex.fill() === grayColor)) {
          console.log("B5toB4BreakLink")
          b5HexToB4Hex.stroke(noColor);
          domainsLayer.draw();
        }
      });
    }
  }
});

app.directive('gameBoardB3B6OvertLink', function () {
  return {
    restrict: 'A',
    link: function (scope) {
      linksGroup.add(b3HexToB6Hex);
      b3HexToB6Hex.stroke(noColor);

      scope.$watch(function() {
        if ((b3Hex.fill() === redColor) && (b6Hex.fill() === redColor)) {
          b3HexToB6Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((b3Hex.fill() === purpleColor) && (b6Hex.fill() === purpleColor)) {
          b3HexToB6Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((b3Hex.fill() === blueColor) && (b6Hex.fill() === blueColor)) {
          b3HexToB6Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((b3Hex.fill() === greenColor) && (b6Hex.fill() === greenColor)) {
          b3HexToB6Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((b3Hex.fill() === yellowColor) && (b6Hex.fill() === yellowColor)) {
          b3HexToB6Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((b3Hex.fill() === orangeColor) && (b6Hex.fill() === orangeColor)) {
          b3HexToB6Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((b3Hex.fill() === redColor) && (b6Hex.fill() === grayColor)) {
          console.log("B3toB6BreakLink")
          b3HexToB6Hex.stroke(noColor);
          domainsLayer.draw();
        }

        // Reverse link.
        if ((b6Hex.fill() === redColor) && (b3Hex.fill() === redColor)) {
          b3HexToB6Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((b6Hex.fill() === purpleColor) && (b3Hex.fill() === purpleColor)) {
          b3HexToB6Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((b6Hex.fill() === blueColor) && (b3Hex.fill() === blueColor)) {
          b3HexToB6Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((b6Hex.fill() === greenColor) && (b3Hex.fill() === greenColor)) {
          b3HexToB6Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((b6Hex.fill() === yellowColor) && (b3Hex.fill() === yellowColor)) {
          b3HexToB6Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((b6Hex.fill() === orangeColor) && (b3Hex.fill() === orangeColor)) {
          b3HexToB6Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((b6Hex.fill() === redColor) && (b3Hex.fill() === grayColor)) {
          console.log("B3toB6BreakLink")
          b3HexToB6Hex.stroke(noColor);
          domainsLayer.draw();
        }
      });
    }
  }
});

app.directive('gameBoardB5B7OvertLink', function () {
  return {
    restrict: 'A',
    link: function (scope) {
      linksGroup.add(b5HexToB7Hex);
      b5HexToB7Hex.stroke(noColor);

      scope.$watch(function() {
        if ((b5Hex.fill() === redColor) && (b7Hex.fill() === redColor)) {
          b5HexToB7Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((b5Hex.fill() === purpleColor) && (b7Hex.fill() === purpleColor)) {
          b5HexToB7Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((b5Hex.fill() === blueColor) && (b7Hex.fill() === blueColor)) {
          b5HexToB7Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((b5Hex.fill() === greenColor) && (b7Hex.fill() === greenColor)) {
          b5HexToB7Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((b5Hex.fill() === yellowColor) && (b7Hex.fill() === yellowColor)) {
          b5HexToB7Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((b5Hex.fill() === orangeColor) && (b7Hex.fill() === orangeColor)) {
          b5HexToB7Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((b5Hex.fill() === redColor) && (b7Hex.fill() === grayColor)) {
          console.log("B5toB7BreakLink")
          b5HexToB7Hex.stroke(noColor);
          domainsLayer.draw();
        }

        // Reverse link.
        if ((b7Hex.fill() === redColor) && (b5Hex.fill() === redColor)) {
          b5HexToB7Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((b7Hex.fill() === purpleColor) && (b5Hex.fill() === purpleColor)) {
          b5HexToB7Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((b7Hex.fill() === blueColor) && (b5Hex.fill() === blueColor)) {
          b5HexToB7Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((b7Hex.fill() === greenColor) && (b5Hex.fill() === greenColor)) {
          b5HexToB7Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((b7Hex.fill() === yellowColor) && (b5Hex.fill() === yellowColor)) {
          b5HexToB7Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((b7Hex.fill() === orangeColor) && (b5Hex.fill() === orangeColor)) {
          b5HexToB7Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((b7Hex.fill() === redColor) && (b5Hex.fill() === grayColor)) {
          console.log("B5toB7BreakLink")
          b5HexToB7Hex.stroke(noColor);
          domainsLayer.draw();
        }
      });
    }
  }
});

app.directive('gameBoardB4B6OvertLink', function () {
  return {
    restrict: 'A',
    link: function (scope) {
      linksGroup.add(b4HexToB6Hex);
      b4HexToB6Hex.stroke(noColor);

      scope.$watch(function() {
        if ((b4Hex.fill() === redColor) && (b6Hex.fill() === redColor)) {
          b4HexToB6Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((b4Hex.fill() === purpleColor) && (b6Hex.fill() === purpleColor)) {
          b4HexToB6Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((b4Hex.fill() === blueColor) && (b6Hex.fill() === blueColor)) {
          b4HexToB6Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((b4Hex.fill() === greenColor) && (b6Hex.fill() === greenColor)) {
          b4HexToB6Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((b4Hex.fill() === yellowColor) && (b6Hex.fill() === yellowColor)) {
          b4HexToB6Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((b4Hex.fill() === orangeColor) && (b6Hex.fill() === orangeColor)) {
          b4HexToB6Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((b4Hex.fill() === redColor) && (b6Hex.fill() === grayColor)) {
          console.log("B4toB6BreakLink")
          b4HexToB6Hex.stroke(noColor);
          domainsLayer.draw();
        }

        // Reverse link.
        if ((b6Hex.fill() === redColor) && (b4Hex.fill() === redColor)) {
          b4HexToB6Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((b6Hex.fill() === purpleColor) && (b4Hex.fill() === purpleColor)) {
          b4HexToB6Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((b6Hex.fill() === blueColor) && (b4Hex.fill() === blueColor)) {
          b4HexToB6Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((b6Hex.fill() === greenColor) && (b4Hex.fill() === greenColor)) {
          b4HexToB6Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((b6Hex.fill() === yellowColor) && (b4Hex.fill() === yellowColor)) {
          b4HexToB6Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((b6Hex.fill() === orangeColor) && (b4Hex.fill() === orangeColor)) {
          b4HexToB6Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((b6Hex.fill() === redColor) && (b4Hex.fill() === grayColor)) {
          console.log("B4toB6BreakLink")
          b4HexToB6Hex.stroke(noColor);
          domainsLayer.draw();
        }
      });
    }
  }
});

app.directive('gameBoardB4B7OvertLink', function () {
  return {
    restrict: 'A',
    link: function (scope) {
      linksGroup.add(b4HexToB7Hex);
      b4HexToB7Hex.stroke(noColor);

      scope.$watch(function() {
        if ((b4Hex.fill() === redColor) && (b7Hex.fill() === redColor)) {
          b4HexToB7Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((b4Hex.fill() === purpleColor) && (b7Hex.fill() === purpleColor)) {
          b4HexToB7Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((b4Hex.fill() === blueColor) && (b7Hex.fill() === blueColor)) {
          b4HexToB7Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((b4Hex.fill() === greenColor) && (b7Hex.fill() === greenColor)) {
          b4HexToB7Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((b4Hex.fill() === yellowColor) && (b7Hex.fill() === yellowColor)) {
          b4HexToB7Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((b4Hex.fill() === orangeColor) && (b7Hex.fill() === orangeColor)) {
          b4HexToB7Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((b4Hex.fill() === redColor) && (b7Hex.fill() === grayColor)) {
          console.log("B4toB7BreakLink")
          b4HexToB7Hex.stroke(noColor);
          domainsLayer.draw();
        }

        // Reverse link.
        if ((b7Hex.fill() === redColor) && (b4Hex.fill() === redColor)) {
          b4HexToB7Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((b7Hex.fill() === purpleColor) && (b4Hex.fill() === purpleColor)) {
          b4HexToB7Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((b7Hex.fill() === blueColor) && (b4Hex.fill() === blueColor)) {
          b4HexToB7Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((b7Hex.fill() === greenColor) && (b4Hex.fill() === greenColor)) {
          b4HexToB7Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((b7Hex.fill() === yellowColor) && (b4Hex.fill() === yellowColor)) {
          b4HexToB7Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((b7Hex.fill() === orangeColor) && (b4Hex.fill() === orangeColor)) {
          b4HexToB7Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((b7Hex.fill() === redColor) && (b4Hex.fill() === grayColor)) {
          console.log("B4toB7BreakLink")
          b4HexToB7Hex.stroke(noColor);
          domainsLayer.draw();
        }
      });
    }
  }
});

app.directive('gameBoardB6B7OvertLink', function () {
  return {
    restrict: 'A',
    link: function (scope) {
      linksGroup.add(b6HexToB7Hex);
      b6HexToB7Hex.stroke(noColor);

      scope.$watch(function() {
        if ((b6Hex.fill() === redColor) && (b7Hex.fill() === redColor)) {
          b6HexToB7Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((b6Hex.fill() === purpleColor) && (b7Hex.fill() === purpleColor)) {
          b6HexToB7Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((b6Hex.fill() === blueColor) && (b7Hex.fill() === blueColor)) {
          b6HexToB7Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((b6Hex.fill() === greenColor) && (b7Hex.fill() === greenColor)) {
          b6HexToB7Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((b6Hex.fill() === yellowColor) && (b7Hex.fill() === yellowColor)) {
          b6HexToB7Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((b6Hex.fill() === orangeColor) && (b7Hex.fill() === orangeColor)) {
          b6HexToB7Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((b6Hex.fill() === redColor) && (b7Hex.fill() === grayColor)) {
          console.log("B6toB7BreakLink")
          b6HexToB7Hex.stroke(noColor);
          domainsLayer.draw();
        }

        // Reverse link.
        if ((b7Hex.fill() === redColor) && (b6Hex.fill() === redColor)) {
          b6HexToB7Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((b7Hex.fill() === purpleColor) && (b6Hex.fill() === purpleColor)) {
          b6HexToB7Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((b7Hex.fill() === blueColor) && (b6Hex.fill() === blueColor)) {
          b6HexToB7Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((b7Hex.fill() === greenColor) && (b6Hex.fill() === greenColor)) {
          b6HexToB7Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((b7Hex.fill() === yellowColor) && (b6Hex.fill() === yellowColor)) {
          b6HexToB7Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((b7Hex.fill() === orangeColor) && (b6Hex.fill() === orangeColor)) {
          b6HexToB7Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((b7Hex.fill() === redColor) && (b6Hex.fill() === grayColor)) {
          console.log("B6toB7BreakLink")
          b6HexToB7Hex.stroke(noColor);
          domainsLayer.draw();
        }
      });
    }
  }
});

app.directive('gameBoardB6B8OvertLink', function () {
  return {
    restrict: 'A',
    link: function (scope) {
      linksGroup.add(b6HexToB8Hex);
      b6HexToB8Hex.stroke(noColor);

      scope.$watch(function() {
        if ((b6Hex.fill() === redColor) && (b8Hex.fill() === redColor)) {
          b6HexToB8Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((b6Hex.fill() === purpleColor) && (b8Hex.fill() === purpleColor)) {
          b6HexToB8Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((b6Hex.fill() === blueColor) && (b8Hex.fill() === blueColor)) {
          b6HexToB8Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((b6Hex.fill() === greenColor) && (b8Hex.fill() === greenColor)) {
          b6HexToB8Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((b6Hex.fill() === yellowColor) && (b8Hex.fill() === yellowColor)) {
          b6HexToB8Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((b6Hex.fill() === orangeColor) && (b8Hex.fill() === orangeColor)) {
          b6HexToB8Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((b6Hex.fill() === redColor) && (b8Hex.fill() === grayColor)) {
          console.log("B6toB8BreakLink")
          b6HexToB8Hex.stroke(noColor);
          domainsLayer.draw();
        }

        // Reverse link.
        if ((b8Hex.fill() === redColor) && (b6Hex.fill() === redColor)) {
          b6HexToB8Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((b8Hex.fill() === purpleColor) && (b6Hex.fill() === purpleColor)) {
          b6HexToB8Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((b8Hex.fill() === blueColor) && (b6Hex.fill() === blueColor)) {
          b6HexToB8Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((b8Hex.fill() === greenColor) && (b6Hex.fill() === greenColor)) {
          b6HexToB8Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((b8Hex.fill() === yellowColor) && (b6Hex.fill() === yellowColor)) {
          b6HexToB8Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((b8Hex.fill() === orangeColor) && (b6Hex.fill() === orangeColor)) {
          b6HexToB8Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((b8Hex.fill() === redColor) && (b6Hex.fill() === grayColor)) {
          console.log("B6toB8BreakLink")
          b6HexToB8Hex.stroke(noColor);
          domainsLayer.draw();
        }
      });
    }
  }
});

app.directive('gameBoardB7B8OvertLink', function () {
  return {
    restrict: 'A',
    link: function (scope) {
      linksGroup.add(b7HexToB8Hex);
      b7HexToB8Hex.stroke(noColor);

      scope.$watch(function() {
        if ((b7Hex.fill() === redColor) && (b8Hex.fill() === redColor)) {
          b7HexToB8Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((b7Hex.fill() === purpleColor) && (b8Hex.fill() === purpleColor)) {
          b7HexToB8Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((b7Hex.fill() === blueColor) && (b8Hex.fill() === blueColor)) {
          b7HexToB8Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((b7Hex.fill() === greenColor) && (b8Hex.fill() === greenColor)) {
          b7HexToB8Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((b7Hex.fill() === yellowColor) && (b8Hex.fill() === yellowColor)) {
          b7HexToB8Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((b7Hex.fill() === orangeColor) && (b8Hex.fill() === orangeColor)) {
          b7HexToB8Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((b7Hex.fill() === redColor) && (b8Hex.fill() === grayColor)) {
          console.log("B7toB8BreakLink")
          b7HexToB8Hex.stroke(noColor);
          domainsLayer.draw();
        }

        // Reverse link.
        if ((b8Hex.fill() === redColor) && (b7Hex.fill() === redColor)) {
          b7HexToB8Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((b8Hex.fill() === purpleColor) && (b7Hex.fill() === purpleColor)) {
          b7HexToB8Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((b8Hex.fill() === blueColor) && (b7Hex.fill() === blueColor)) {
          b7HexToB8Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((b8Hex.fill() === greenColor) && (b7Hex.fill() === greenColor)) {
          b7HexToB8Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((b8Hex.fill() === yellowColor) && (b7Hex.fill() === yellowColor)) {
          b7HexToB8Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((b8Hex.fill() === orangeColor) && (b7Hex.fill() === orangeColor)) {
          b7HexToB8Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((b8Hex.fill() === redColor) && (b7Hex.fill() === grayColor)) {
          console.log("B7toB8BreakLink")
          b7HexToB8Hex.stroke(noColor);
          domainsLayer.draw();
        }
      });
    }
  }
});
