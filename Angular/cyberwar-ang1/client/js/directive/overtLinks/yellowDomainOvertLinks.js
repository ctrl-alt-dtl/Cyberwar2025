// Blue Domain Links
app.directive('gameBoardYBaseY1OvertLink', function () {
  return {
    restrict: 'A',
    link: function (scope) {
      linksGroup.add(yBaseToY1Hex);
      yBaseToY1Hex.stroke(noColor);

      scope.$watch(function() {
        if((yBase.fill() === blueColor) && (y1Hex.fill() === blueColor)) {
          yBaseToY1Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((y1Hex.fill() === grayColor)) {
          console.log("BBaseToY1BreakLink")
          yBaseToY1Hex.stroke(noColor);
          domainsLayer.draw();
        }
        // Positive link building to base is allowed but no one can control/occupy another player's base.
      });
    }
  }
});

app.directive('gameBoardYBaseY2OvertLink', function () {
  return {
    restrict: 'A',
    link: function (scope) {
      linksGroup.add(yBaseToY2Hex);
      yBaseToY2Hex.stroke(noColor);

      scope.$watch(function() {
        if((yBase.fill() === blueColor) && (y2Hex.fill() === blueColor)) {
          yBaseToY2Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        else {
          yBaseToY2Hex.stroke(noColor);
          domainsLayer.batchDraw();
        }
      });
    }
  }
});

app.directive('gameBoardY1Y3OvertLink', function () {
  return {
    restrict: 'A',
    link: function (scope) {
      linksGroup.add(y1HexToY3Hex);
      y1HexToY3Hex.stroke(noColor);

      scope.$watch(function() {
        if ((y1Hex.fill() === redColor) && (y3Hex.fill() === redColor)) {
          y1HexToY3Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((y1Hex.fill() === purpleColor) && (y3Hex.fill() === purpleColor)) {
          y1HexToY3Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((y1Hex.fill() === blueColor) && (y3Hex.fill() === blueColor)) {
          y1HexToY3Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((y1Hex.fill() === greenColor) && (y3Hex.fill() === greenColor)) {
          y1HexToY3Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((y1Hex.fill() === yellowColor) && (y3Hex.fill() === yellowColor)) {
          y1HexToY3Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((y1Hex.fill() === orangeColor) && (y3Hex.fill() === orangeColor)) {
          y1HexToY3Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((y1Hex.fill() === redColor) && (y3Hex.fill() === grayColor)) {
          console.log("Y1toY3BreakLink")
          y1HexToY3Hex.stroke(noColor);
          domainsLayer.draw();
        }

        // Reverse link.
        if ((y3Hex.fill() === redColor) && (y1Hex.fill() === redColor)) {
          y1HexToY3Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((y3Hex.fill() === purpleColor) && (y1Hex.fill() === purpleColor)) {
          y1HexToY3Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((y3Hex.fill() === blueColor) && (y1Hex.fill() === blueColor)) {
          y1HexToY3Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((y3Hex.fill() === greenColor) && (y1Hex.fill() === greenColor)) {
          y1HexToY3Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((y3Hex.fill() === yellowColor) && (y1Hex.fill() === yellowColor)) {
          y1HexToY3Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((y3Hex.fill() === orangeColor) && (y1Hex.fill() === orangeColor)) {
          y1HexToY3Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((y3Hex.fill() === redColor) && (y1Hex.fill() === grayColor)) {
          console.log("Y1toY3BreakLink")
          y1HexToY3Hex.stroke(noColor);
          domainsLayer.draw();
        }
      });
    }
  }
});

app.directive('gameBoardY2Y5OvertLink', function () {
  return {
    restrict: 'A',
    link: function (scope) {
      linksGroup.add(y2HexToY5Hex);
      y2HexToY5Hex.stroke(noColor);

      scope.$watch(function() {
        if ((y2Hex.fill() === redColor) && (y5Hex.fill() === redColor)) {
          y2HexToY5Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((y2Hex.fill() === purpleColor) && (y5Hex.fill() === purpleColor)) {
          y2HexToY5Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((y2Hex.fill() === blueColor) && (y5Hex.fill() === blueColor)) {
          y2HexToY5Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((y2Hex.fill() === greenColor) && (y5Hex.fill() === greenColor)) {
          y2HexToY5Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((y2Hex.fill() === yellowColor) && (y5Hex.fill() === yellowColor)) {
          y2HexToY5Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((y2Hex.fill() === orangeColor) && (y5Hex.fill() === orangeColor)) {
          y2HexToY5Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((y2Hex.fill() === redColor) && (y5Hex.fill() === grayColor)) {
          console.log("Y2toY5BreakLink")
          y2HexToY5Hex.stroke(noColor);
          domainsLayer.draw();
        }

        // Reverse link.
        if ((y5Hex.fill() === redColor) && (y2Hex.fill() === redColor)) {
          y2HexToY5Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((y5Hex.fill() === purpleColor) && (y2Hex.fill() === purpleColor)) {
          y2HexToY5Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((y5Hex.fill() === blueColor) && (y2Hex.fill() === blueColor)) {
          y2HexToY5Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((y5Hex.fill() === greenColor) && (y2Hex.fill() === greenColor)) {
          y2HexToY5Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((y5Hex.fill() === yellowColor) && (y2Hex.fill() === yellowColor)) {
          y2HexToY5Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((y5Hex.fill() === orangeColor) && (y2Hex.fill() === orangeColor)) {
          y2HexToY5Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((y5Hex.fill() === redColor) && (y2Hex.fill() === grayColor)) {
          console.log("Y2toY5BreakLink")
          y2HexToY5Hex.stroke(noColor);
          domainsLayer.draw();
        }
      });
    }
  }
});

app.directive('gameBoardY3Y4OvertLink', function () {
  return {
    restrict: 'A',
    link: function (scope) {
      linksGroup.add(y3HexToY4Hex);
      y3HexToY4Hex.stroke(noColor);

      scope.$watch(function() {
        if ((y3Hex.fill() === redColor) && (y4Hex.fill() === redColor)) {
          y3HexToY4Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((y3Hex.fill() === purpleColor) && (y4Hex.fill() === purpleColor)) {
          y3HexToY4Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((y3Hex.fill() === blueColor) && (y4Hex.fill() === blueColor)) {
          y3HexToY4Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((y3Hex.fill() === greenColor) && (y4Hex.fill() === greenColor)) {
          y3HexToY4Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((y3Hex.fill() === yellowColor) && (y4Hex.fill() === yellowColor)) {
          y3HexToY4Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((y3Hex.fill() === orangeColor) && (y4Hex.fill() === orangeColor)) {
          y3HexToY4Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((y3Hex.fill() === redColor) && (y4Hex.fill() === grayColor)) {
          console.log("Y3toY4BreakLink")
          y3HexToY4Hex.stroke(noColor);
          domainsLayer.draw();
        }

        // Reverse link.
        if ((y4Hex.fill() === redColor) && (y3Hex.fill() === redColor)) {
          y3HexToY4Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((y4Hex.fill() === purpleColor) && (y3Hex.fill() === purpleColor)) {
          y3HexToY4Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((y4Hex.fill() === blueColor) && (y3Hex.fill() === blueColor)) {
          y3HexToY4Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((y4Hex.fill() === greenColor) && (y3Hex.fill() === greenColor)) {
          y3HexToY4Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((y4Hex.fill() === yellowColor) && (y3Hex.fill() === yellowColor)) {
          y3HexToY4Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((y4Hex.fill() === orangeColor) && (y3Hex.fill() === orangeColor)) {
          y3HexToY4Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((y4Hex.fill() === redColor) && (y3Hex.fill() === grayColor)) {
          console.log("Y3toY4BreakLink")
          y3HexToY4Hex.stroke(noColor);
          domainsLayer.draw();
        }
      });
    }
  }
});

app.directive('gameBoardY5Y4OvertLink', function () {
  return {
    restrict: 'A',
    link: function (scope) {
      linksGroup.add(y5HexToY4Hex);
      y5HexToY4Hex.stroke(noColor);

      scope.$watch(function() {
        if ((y5Hex.fill() === redColor) && (y4Hex.fill() === redColor)) {
          y5HexToY4Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((y5Hex.fill() === purpleColor) && (y4Hex.fill() === purpleColor)) {
          y5HexToY4Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((y5Hex.fill() === blueColor) && (y4Hex.fill() === blueColor)) {
          y5HexToY4Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((y5Hex.fill() === greenColor) && (y4Hex.fill() === greenColor)) {
          y5HexToY4Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((y5Hex.fill() === yellowColor) && (y4Hex.fill() === yellowColor)) {
          y5HexToY4Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((y5Hex.fill() === orangeColor) && (y4Hex.fill() === orangeColor)) {
          y5HexToY4Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((y5Hex.fill() === redColor) && (y4Hex.fill() === grayColor)) {
          console.log("Y5toY4BreakLink")
          y5HexToY4Hex.stroke(noColor);
          domainsLayer.draw();
        }

        // Reverse link.
        if ((y4Hex.fill() === redColor) && (y5Hex.fill() === redColor)) {
          y5HexToY4Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((y4Hex.fill() === purpleColor) && (y5Hex.fill() === purpleColor)) {
          y5HexToY4Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((y4Hex.fill() === blueColor) && (y5Hex.fill() === blueColor)) {
          y5HexToY4Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((y4Hex.fill() === greenColor) && (y5Hex.fill() === greenColor)) {
          y5HexToY4Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((y4Hex.fill() === yellowColor) && (y5Hex.fill() === yellowColor)) {
          y5HexToY4Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((y4Hex.fill() === orangeColor) && (y5Hex.fill() === orangeColor)) {
          y5HexToY4Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((y4Hex.fill() === redColor) && (y5Hex.fill() === grayColor)) {
          console.log("Y5toY4BreakLink")
          y5HexToY4Hex.stroke(noColor);
          domainsLayer.draw();
        }
      });
    }
  }
});

app.directive('gameBoardY3Y6OvertLink', function () {
  return {
    restrict: 'A',
    link: function (scope) {
      linksGroup.add(y3HexToY6Hex);
      y3HexToY6Hex.stroke(noColor);

      scope.$watch(function() {
        if ((y3Hex.fill() === redColor) && (y6Hex.fill() === redColor)) {
          y3HexToY6Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((y3Hex.fill() === purpleColor) && (y6Hex.fill() === purpleColor)) {
          y3HexToY6Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((y3Hex.fill() === blueColor) && (y6Hex.fill() === blueColor)) {
          y3HexToY6Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((y3Hex.fill() === greenColor) && (y6Hex.fill() === greenColor)) {
          y3HexToY6Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((y3Hex.fill() === yellowColor) && (y6Hex.fill() === yellowColor)) {
          y3HexToY6Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((y3Hex.fill() === orangeColor) && (y6Hex.fill() === orangeColor)) {
          y3HexToY6Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((y3Hex.fill() === redColor) && (y6Hex.fill() === grayColor)) {
          console.log("Y3toY6BreakLink")
          y3HexToY6Hex.stroke(noColor);
          domainsLayer.draw();
        }

        // Reverse link.
        if ((y6Hex.fill() === redColor) && (y3Hex.fill() === redColor)) {
          y3HexToY6Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((y6Hex.fill() === purpleColor) && (y3Hex.fill() === purpleColor)) {
          y3HexToY6Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((y6Hex.fill() === blueColor) && (y3Hex.fill() === blueColor)) {
          y3HexToY6Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((y6Hex.fill() === greenColor) && (y3Hex.fill() === greenColor)) {
          y3HexToY6Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((y6Hex.fill() === yellowColor) && (y3Hex.fill() === yellowColor)) {
          y3HexToY6Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((y6Hex.fill() === orangeColor) && (y3Hex.fill() === orangeColor)) {
          y3HexToY6Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((y6Hex.fill() === redColor) && (y3Hex.fill() === grayColor)) {
          console.log("Y3toY6BreakLink")
          y3HexToY6Hex.stroke(noColor);
          domainsLayer.draw();
        }
      });
    }
  }
});

app.directive('gameBoardY5Y7OvertLink', function () {
  return {
    restrict: 'A',
    link: function (scope) {
      linksGroup.add(y5HexToY7Hex);
      y5HexToY7Hex.stroke(noColor);

      scope.$watch(function() {
        if ((y5Hex.fill() === redColor) && (y7Hex.fill() === redColor)) {
          y5HexToY7Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((y5Hex.fill() === purpleColor) && (y7Hex.fill() === purpleColor)) {
          y5HexToY7Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((y5Hex.fill() === blueColor) && (y7Hex.fill() === blueColor)) {
          y5HexToY7Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((y5Hex.fill() === greenColor) && (y7Hex.fill() === greenColor)) {
          y5HexToY7Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((y5Hex.fill() === yellowColor) && (y7Hex.fill() === yellowColor)) {
          y5HexToY7Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((y5Hex.fill() === orangeColor) && (y7Hex.fill() === orangeColor)) {
          y5HexToY7Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((y5Hex.fill() === redColor) && (y7Hex.fill() === grayColor)) {
          console.log("Y5toY7BreakLink")
          y5HexToY7Hex.stroke(noColor);
          domainsLayer.draw();
        }

        // Reverse link.
        if ((y7Hex.fill() === redColor) && (y5Hex.fill() === redColor)) {
          y5HexToY7Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((y7Hex.fill() === purpleColor) && (y5Hex.fill() === purpleColor)) {
          y5HexToY7Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((y7Hex.fill() === blueColor) && (y5Hex.fill() === blueColor)) {
          y5HexToY7Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((y7Hex.fill() === greenColor) && (y5Hex.fill() === greenColor)) {
          y5HexToY7Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((y7Hex.fill() === yellowColor) && (y5Hex.fill() === yellowColor)) {
          y5HexToY7Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((y7Hex.fill() === orangeColor) && (y5Hex.fill() === orangeColor)) {
          y5HexToY7Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((y7Hex.fill() === redColor) && (y5Hex.fill() === grayColor)) {
          console.log("Y5toY7BreakLink")
          y5HexToY7Hex.stroke(noColor);
          domainsLayer.draw();
        }
      });
    }
  }
});

app.directive('gameBoardY4Y6OvertLink', function () {
  return {
    restrict: 'A',
    link: function (scope) {
      linksGroup.add(y4HexToY6Hex);
      y4HexToY6Hex.stroke(noColor);

      scope.$watch(function() {
        if ((y4Hex.fill() === redColor) && (y6Hex.fill() === redColor)) {
          y4HexToY6Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((y4Hex.fill() === purpleColor) && (y6Hex.fill() === purpleColor)) {
          y4HexToY6Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((y4Hex.fill() === blueColor) && (y6Hex.fill() === blueColor)) {
          y4HexToY6Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((y4Hex.fill() === greenColor) && (y6Hex.fill() === greenColor)) {
          y4HexToY6Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((y4Hex.fill() === yellowColor) && (y6Hex.fill() === yellowColor)) {
          y4HexToY6Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((y4Hex.fill() === orangeColor) && (y6Hex.fill() === orangeColor)) {
          y4HexToY6Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((y4Hex.fill() === redColor) && (y6Hex.fill() === grayColor)) {
          console.log("Y4toY6BreakLink")
          y4HexToY6Hex.stroke(noColor);
          domainsLayer.draw();
        }

        // Reverse link.
        if ((y6Hex.fill() === redColor) && (y4Hex.fill() === redColor)) {
          y4HexToY6Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((y6Hex.fill() === purpleColor) && (y4Hex.fill() === purpleColor)) {
          y4HexToY6Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((y6Hex.fill() === blueColor) && (y4Hex.fill() === blueColor)) {
          y4HexToY6Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((y6Hex.fill() === greenColor) && (y4Hex.fill() === greenColor)) {
          y4HexToY6Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((y6Hex.fill() === yellowColor) && (y4Hex.fill() === yellowColor)) {
          y4HexToY6Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((y6Hex.fill() === orangeColor) && (y4Hex.fill() === orangeColor)) {
          y4HexToY6Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((y6Hex.fill() === redColor) && (y4Hex.fill() === grayColor)) {
          console.log("Y4toY6BreakLink")
          y4HexToY6Hex.stroke(noColor);
          domainsLayer.draw();
        }
      });
    }
  }
});

app.directive('gameBoardY4Y7OvertLink', function () {
  return {
    restrict: 'A',
    link: function (scope) {
      linksGroup.add(y4HexToY7Hex);
      y4HexToY7Hex.stroke(noColor);

      scope.$watch(function() {
        if ((y4Hex.fill() === redColor) && (y7Hex.fill() === redColor)) {
          y4HexToY7Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((y4Hex.fill() === purpleColor) && (y7Hex.fill() === purpleColor)) {
          y4HexToY7Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((y4Hex.fill() === blueColor) && (y7Hex.fill() === blueColor)) {
          y4HexToY7Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((y4Hex.fill() === greenColor) && (y7Hex.fill() === greenColor)) {
          y4HexToY7Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((y4Hex.fill() === yellowColor) && (y7Hex.fill() === yellowColor)) {
          y4HexToY7Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((y4Hex.fill() === orangeColor) && (y7Hex.fill() === orangeColor)) {
          y4HexToY7Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((y4Hex.fill() === redColor) && (y7Hex.fill() === grayColor)) {
          console.log("Y4toY7BreakLink")
          y4HexToY7Hex.stroke(noColor);
          domainsLayer.draw();
        }

        // Reverse link.
        if ((y7Hex.fill() === redColor) && (y4Hex.fill() === redColor)) {
          y4HexToY7Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((y7Hex.fill() === purpleColor) && (y4Hex.fill() === purpleColor)) {
          y4HexToY7Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((y7Hex.fill() === blueColor) && (y4Hex.fill() === blueColor)) {
          y4HexToY7Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((y7Hex.fill() === greenColor) && (y4Hex.fill() === greenColor)) {
          y4HexToY7Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((y7Hex.fill() === yellowColor) && (y4Hex.fill() === yellowColor)) {
          y4HexToY7Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((y7Hex.fill() === orangeColor) && (y4Hex.fill() === orangeColor)) {
          y4HexToY7Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((y7Hex.fill() === redColor) && (y4Hex.fill() === grayColor)) {
          console.log("Y4toY7BreakLink")
          y4HexToY7Hex.stroke(noColor);
          domainsLayer.draw();
        }
      });
    }
  }
});

app.directive('gameBoardY6Y7OvertLink', function () {
  return {
    restrict: 'A',
    link: function (scope) {
      linksGroup.add(y6HexToY7Hex);
      y6HexToY7Hex.stroke(noColor);

      scope.$watch(function() {
        if ((y6Hex.fill() === redColor) && (y7Hex.fill() === redColor)) {
          y6HexToY7Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((y6Hex.fill() === purpleColor) && (y7Hex.fill() === purpleColor)) {
          y6HexToY7Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((y6Hex.fill() === blueColor) && (y7Hex.fill() === blueColor)) {
          y6HexToY7Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((y6Hex.fill() === greenColor) && (y7Hex.fill() === greenColor)) {
          y6HexToY7Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((y6Hex.fill() === yellowColor) && (y7Hex.fill() === yellowColor)) {
          y6HexToY7Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((y6Hex.fill() === orangeColor) && (y7Hex.fill() === orangeColor)) {
          y6HexToY7Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((y6Hex.fill() === redColor) && (y7Hex.fill() === grayColor)) {
          console.log("Y6toY7BreakLink")
          y6HexToY7Hex.stroke(noColor);
          domainsLayer.draw();
        }

        // Reverse link.
        if ((y7Hex.fill() === redColor) && (y6Hex.fill() === redColor)) {
          y6HexToY7Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((y7Hex.fill() === purpleColor) && (y6Hex.fill() === purpleColor)) {
          y6HexToY7Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((y7Hex.fill() === blueColor) && (y6Hex.fill() === blueColor)) {
          y6HexToY7Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((y7Hex.fill() === greenColor) && (y6Hex.fill() === greenColor)) {
          y6HexToY7Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((y7Hex.fill() === yellowColor) && (y6Hex.fill() === yellowColor)) {
          y6HexToY7Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((y7Hex.fill() === orangeColor) && (y6Hex.fill() === orangeColor)) {
          y6HexToY7Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((y7Hex.fill() === redColor) && (y6Hex.fill() === grayColor)) {
          console.log("Y6toY7BreakLink")
          y6HexToY7Hex.stroke(noColor);
          domainsLayer.draw();
        }
      });
    }
  }
});

app.directive('gameBoardY6Y8OvertLink', function () {
  return {
    restrict: 'A',
    link: function (scope) {
      linksGroup.add(y6HexToY8Hex);
      y6HexToY8Hex.stroke(noColor);

      scope.$watch(function() {
        if ((y6Hex.fill() === redColor) && (y8Hex.fill() === redColor)) {
          y6HexToY8Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((y6Hex.fill() === purpleColor) && (y8Hex.fill() === purpleColor)) {
          y6HexToY8Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((y6Hex.fill() === blueColor) && (y8Hex.fill() === blueColor)) {
          y6HexToY8Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((y6Hex.fill() === greenColor) && (y8Hex.fill() === greenColor)) {
          y6HexToY8Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((y6Hex.fill() === yellowColor) && (y8Hex.fill() === yellowColor)) {
          y6HexToY8Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((y6Hex.fill() === orangeColor) && (y8Hex.fill() === orangeColor)) {
          y6HexToY8Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((y6Hex.fill() === redColor) && (y8Hex.fill() === grayColor)) {
          console.log("Y6toY8BreakLink")
          y6HexToY8Hex.stroke(noColor);
          domainsLayer.draw();
        }

        // Reverse link.
        if ((y8Hex.fill() === redColor) && (y6Hex.fill() === redColor)) {
          y6HexToY8Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((y8Hex.fill() === purpleColor) && (y6Hex.fill() === purpleColor)) {
          y6HexToY8Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((y8Hex.fill() === blueColor) && (y6Hex.fill() === blueColor)) {
          y6HexToY8Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((y8Hex.fill() === greenColor) && (y6Hex.fill() === greenColor)) {
          y6HexToY8Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((y8Hex.fill() === yellowColor) && (y6Hex.fill() === yellowColor)) {
          y6HexToY8Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((y8Hex.fill() === orangeColor) && (y6Hex.fill() === orangeColor)) {
          y6HexToY8Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((y8Hex.fill() === redColor) && (y6Hex.fill() === grayColor)) {
          console.log("Y6toY8BreakLink")
          y6HexToY8Hex.stroke(noColor);
          domainsLayer.draw();
        }
      });
    }
  }
});

app.directive('gameBoardY7Y8OvertLink', function () {
  return {
    restrict: 'A',
    link: function (scope) {
      linksGroup.add(y7HexToY8Hex);
      y7HexToY8Hex.stroke(noColor);

      scope.$watch(function() {
        if ((y7Hex.fill() === redColor) && (y8Hex.fill() === redColor)) {
          y7HexToY8Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((y7Hex.fill() === purpleColor) && (y8Hex.fill() === purpleColor)) {
          y7HexToY8Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((y7Hex.fill() === blueColor) && (y8Hex.fill() === blueColor)) {
          y7HexToY8Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((y7Hex.fill() === greenColor) && (y8Hex.fill() === greenColor)) {
          y7HexToY8Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((y7Hex.fill() === yellowColor) && (y8Hex.fill() === yellowColor)) {
          y7HexToY8Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((y7Hex.fill() === orangeColor) && (y8Hex.fill() === orangeColor)) {
          y7HexToY8Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((y7Hex.fill() === redColor) && (y8Hex.fill() === grayColor)) {
          console.log("Y7toY8BreakLink")
          y7HexToY8Hex.stroke(noColor);
          domainsLayer.draw();
        }

        // Reverse link.
        if ((y8Hex.fill() === redColor) && (y7Hex.fill() === redColor)) {
          y7HexToY8Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((y8Hex.fill() === purpleColor) && (y7Hex.fill() === purpleColor)) {
          y7HexToY8Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((y8Hex.fill() === blueColor) && (y7Hex.fill() === blueColor)) {
          y7HexToY8Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((y8Hex.fill() === greenColor) && (y7Hex.fill() === greenColor)) {
          y7HexToY8Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((y8Hex.fill() === yellowColor) && (y7Hex.fill() === yellowColor)) {
          y7HexToY8Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((y8Hex.fill() === orangeColor) && (y7Hex.fill() === orangeColor)) {
          y7HexToY8Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((y8Hex.fill() === redColor) && (y7Hex.fill() === grayColor)) {
          console.log("Y7toY8BreakLink")
          y7HexToY8Hex.stroke(noColor);
          domainsLayer.draw();
        }
      });
    }
  }
});
