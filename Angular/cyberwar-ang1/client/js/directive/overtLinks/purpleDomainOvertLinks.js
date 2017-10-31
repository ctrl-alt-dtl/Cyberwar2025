// Purple Domain Links
app.directive('gameBoardPbaseP1OvertLink', ['GameState', function (GameState) {
  return {
    restrict: 'A',
    link: function (scope) {
      linksGroup.add(pBaseToP1Hex);
      pBaseToP1Hex.stroke(noColor);

      GameState.addListener(onGameStateChanged);

      // ----------------------------------------------------------------------------
      scope.$on('$destroy', function() {
        GameState.removeListener(onGameStateChanged);
      });

      function onGameStateChanged() {
        if((pBase.fill() === purpleColor) && (p1Hex.fill() === purpleColor)) {
          pBaseToP1Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((p1Hex.fill() === grayColor)) {
          console.log("PBaseToP1BreakLink")
          pBaseToP1Hex.stroke(noColor);
          domainsLayer.draw();
        }
      };
    }
  }
}]);

app.directive('gameBoardPbaseP2OvertLink', ['GameState', function (GameState) {
  return {
    restrict: 'A',
    link: function (scope) {
      linksGroup.add(pBaseToP2Hex);
      pBaseToP2Hex.stroke(noColor);

      GameState.addListener(onGameStateChanged);

      // ----------------------------------------------------------------------------
      scope.$on('$destroy', function() {
        GameState.removeListener(onGameStateChanged);
      });

      function onGameStateChanged() {
        if((pBase.fill() === purpleColor) && (p2Hex.fill() === purpleColor)) {
          pBaseToP2Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        else {
          pBaseToP2Hex.stroke(noColor);
          domainsLayer.batchDraw();
        }
      };
    }
  }
}]);

app.directive('gameBoardP1P3OvertLink', ['GameState', function (GameState) {
  return {
    restrict: 'A',
    link: function (scope) {
      linksGroup.add(p1HexToP3Hex);
      p1HexToP3Hex.stroke(noColor);

      GameState.addListener(onGameStateChanged);

      // ----------------------------------------------------------------------------
      scope.$on('$destroy', function() {
        GameState.removeListener(onGameStateChanged);
      });

      function onGameStateChanged() {
        if ((p1Hex.fill() === redColor) && (p3Hex.fill() === redColor)) {
          p1HexToP3Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((p1Hex.fill() === purpleColor) && (p3Hex.fill() === purpleColor)) {
          p1HexToP3Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((p1Hex.fill() === blueColor) && (p3Hex.fill() === blueColor)) {
          p1HexToP3Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((p1Hex.fill() === greenColor) && (p3Hex.fill() === greenColor)) {
          p1HexToP3Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((p1Hex.fill() === yellowColor) && (p3Hex.fill() === yellowColor)) {
          p1HexToP3Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((p1Hex.fill() === orangeColor) && (p3Hex.fill() === orangeColor)) {
          p1HexToP3Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((p1Hex.fill() === redColor) && (p3Hex.fill() === grayColor)) {
          console.log("P1toP3BreakLink")
          p1HexToP3Hex.stroke(noColor);
          domainsLayer.draw();
        }

        // Reverse link.
        if ((p3Hex.fill() === redColor) && (p1Hex.fill() === redColor)) {
          p1HexToP3Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((p3Hex.fill() === purpleColor) && (p1Hex.fill() === purpleColor)) {
          p1HexToP3Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((p3Hex.fill() === blueColor) && (p1Hex.fill() === blueColor)) {
          p1HexToP3Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((p3Hex.fill() === greenColor) && (p1Hex.fill() === greenColor)) {
          p1HexToP3Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((p3Hex.fill() === yellowColor) && (p1Hex.fill() === yellowColor)) {
          p1HexToP3Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((p3Hex.fill() === orangeColor) && (p1Hex.fill() === orangeColor)) {
          p1HexToP3Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((p3Hex.fill() === redColor) && (p1Hex.fill() === grayColor)) {
          console.log("P1toP3BreakLink")
          p1HexToP3Hex.stroke(noColor);
          domainsLayer.draw();
        }
      };
    }
  }
}]);

app.directive('gameBoardP2P5OvertLink', ['GameState', function (GameState) {
  return {
    restrict: 'A',
    link: function (scope) {
      linksGroup.add(p2HexToP5Hex);
      p2HexToP5Hex.stroke(noColor);

      GameState.addListener(onGameStateChanged);

      // ----------------------------------------------------------------------------
      scope.$on('$destroy', function() {
        GameState.removeListener(onGameStateChanged);
      });

      function onGameStateChanged() {
        if ((p2Hex.fill() === redColor) && (p5Hex.fill() === redColor)) {
          p2HexToP5Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((p2Hex.fill() === purpleColor) && (p5Hex.fill() === purpleColor)) {
          p2HexToP5Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((p2Hex.fill() === blueColor) && (p5Hex.fill() === blueColor)) {
          p2HexToP5Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((p2Hex.fill() === greenColor) && (p5Hex.fill() === greenColor)) {
          p2HexToP5Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((p2Hex.fill() === yellowColor) && (p5Hex.fill() === yellowColor)) {
          p2HexToP5Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((p2Hex.fill() === orangeColor) && (p5Hex.fill() === orangeColor)) {
          p2HexToP5Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((p2Hex.fill() === redColor) && (p5Hex.fill() === grayColor)) {
          console.log("P2toP5BreakLink")
          p2HexToP5Hex.stroke(noColor);
          domainsLayer.draw();
        }

        // Reverse link.
        if ((p5Hex.fill() === redColor) && (p2Hex.fill() === redColor)) {
          p2HexToP5Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((p5Hex.fill() === purpleColor) && (p2Hex.fill() === purpleColor)) {
          p2HexToP5Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((p5Hex.fill() === blueColor) && (p2Hex.fill() === blueColor)) {
          p2HexToP5Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((p5Hex.fill() === greenColor) && (p2Hex.fill() === greenColor)) {
          p2HexToP5Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((p5Hex.fill() === yellowColor) && (p2Hex.fill() === yellowColor)) {
          p2HexToP5Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((p5Hex.fill() === orangeColor) && (p2Hex.fill() === orangeColor)) {
          p2HexToP5Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((p5Hex.fill() === redColor) && (p2Hex.fill() === grayColor)) {
          console.log("P2toP5BreakLink")
          p2HexToP5Hex.stroke(noColor);
          domainsLayer.draw();
        }
      };
    }
  }
}]);

app.directive('gameBoardP3P4OvertLink', ['GameState', function (GameState) {
  return {
    restrict: 'A',
    link: function (scope) {
      linksGroup.add(p3HexToP4Hex);
      p3HexToP4Hex.stroke(noColor);

      GameState.addListener(onGameStateChanged);

      // ----------------------------------------------------------------------------
      scope.$on('$destroy', function() {
        GameState.removeListener(onGameStateChanged);
      });

      function onGameStateChanged() {
        if ((p3Hex.fill() === redColor) && (p4Hex.fill() === redColor)) {
          p3HexToP4Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((p3Hex.fill() === purpleColor) && (p4Hex.fill() === purpleColor)) {
          p3HexToP4Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((p3Hex.fill() === blueColor) && (p4Hex.fill() === blueColor)) {
          p3HexToP4Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((p3Hex.fill() === greenColor) && (p4Hex.fill() === greenColor)) {
          p3HexToP4Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((p3Hex.fill() === yellowColor) && (p4Hex.fill() === yellowColor)) {
          p3HexToP4Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((p3Hex.fill() === orangeColor) && (p4Hex.fill() === orangeColor)) {
          p3HexToP4Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((p3Hex.fill() === redColor) && (p4Hex.fill() === grayColor)) {
          console.log("P3toP4BreakLink")
          p3HexToP4Hex.stroke(noColor);
          domainsLayer.draw();
        }

        // Reverse link.
        if ((p4Hex.fill() === redColor) && (p3Hex.fill() === redColor)) {
          p3HexToP4Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((p4Hex.fill() === purpleColor) && (p3Hex.fill() === purpleColor)) {
          p3HexToP4Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((p4Hex.fill() === blueColor) && (p3Hex.fill() === blueColor)) {
          p3HexToP4Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((p4Hex.fill() === greenColor) && (p3Hex.fill() === greenColor)) {
          p3HexToP4Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((p4Hex.fill() === yellowColor) && (p3Hex.fill() === yellowColor)) {
          p3HexToP4Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((p4Hex.fill() === orangeColor) && (p3Hex.fill() === orangeColor)) {
          p3HexToP4Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((p4Hex.fill() === redColor) && (p3Hex.fill() === grayColor)) {
          console.log("P3toP4BreakLink")
          p3HexToP4Hex.stroke(noColor);
          domainsLayer.draw();
        }
      };
    }
  }
}]);

app.directive('gameBoardP5P4OvertLink', ['GameState', function (GameState) {
  return {
    restrict: 'A',
    link: function (scope) {
      linksGroup.add(p5HexToP4Hex);
      p5HexToP4Hex.stroke(noColor);

      GameState.addListener(onGameStateChanged);

      // ----------------------------------------------------------------------------
      scope.$on('$destroy', function() {
        GameState.removeListener(onGameStateChanged);
      });

      function onGameStateChanged() {
        if ((p5Hex.fill() === redColor) && (p4Hex.fill() === redColor)) {
          p5HexToP4Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((p5Hex.fill() === purpleColor) && (p4Hex.fill() === purpleColor)) {
          p5HexToP4Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((p5Hex.fill() === blueColor) && (p4Hex.fill() === blueColor)) {
          p5HexToP4Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((p5Hex.fill() === greenColor) && (p4Hex.fill() === greenColor)) {
          p5HexToP4Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((p5Hex.fill() === yellowColor) && (p4Hex.fill() === yellowColor)) {
          p5HexToP4Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((p5Hex.fill() === orangeColor) && (p4Hex.fill() === orangeColor)) {
          p5HexToP4Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((p5Hex.fill() === redColor) && (p4Hex.fill() === grayColor)) {
          console.log("P5toP4BreakLink")
          p5HexToP4Hex.stroke(noColor);
          domainsLayer.draw();
        }

        // Reverse link.
        if ((p4Hex.fill() === redColor) && (p5Hex.fill() === redColor)) {
          p5HexToP4Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((p4Hex.fill() === purpleColor) && (p5Hex.fill() === purpleColor)) {
          p5HexToP4Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((p4Hex.fill() === blueColor) && (p5Hex.fill() === blueColor)) {
          p5HexToP4Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((p4Hex.fill() === greenColor) && (p5Hex.fill() === greenColor)) {
          p5HexToP4Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((p4Hex.fill() === yellowColor) && (p5Hex.fill() === yellowColor)) {
          p5HexToP4Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((p4Hex.fill() === orangeColor) && (p5Hex.fill() === orangeColor)) {
          p5HexToP4Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((p4Hex.fill() === redColor) && (p5Hex.fill() === grayColor)) {
          console.log("P5toP4BreakLink")
          p5HexToP4Hex.stroke(noColor);
          domainsLayer.draw();
        }
      };
    }
  }
}]);

app.directive('gameBoardP3P6OvertLink', ['GameState', function (GameState) {
  return {
    restrict: 'A',
    link: function (scope) {
      linksGroup.add(p3HexToP6Hex);
      p3HexToP6Hex.stroke(noColor);

      GameState.addListener(onGameStateChanged);

      // ----------------------------------------------------------------------------
      scope.$on('$destroy', function() {
        GameState.removeListener(onGameStateChanged);
      });

      function onGameStateChanged() {
        if ((p3Hex.fill() === redColor) && (p6Hex.fill() === redColor)) {
          p3HexToP6Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((p3Hex.fill() === purpleColor) && (p6Hex.fill() === purpleColor)) {
          p3HexToP6Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((p3Hex.fill() === blueColor) && (p6Hex.fill() === blueColor)) {
          p3HexToP6Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((p3Hex.fill() === greenColor) && (p6Hex.fill() === greenColor)) {
          p3HexToP6Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((p3Hex.fill() === yellowColor) && (p6Hex.fill() === yellowColor)) {
          p3HexToP6Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((p3Hex.fill() === orangeColor) && (p6Hex.fill() === orangeColor)) {
          p3HexToP6Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((p3Hex.fill() === redColor) && (p6Hex.fill() === grayColor)) {
          console.log("P3toP6BreakLink")
          p3HexToP6Hex.stroke(noColor);
          domainsLayer.draw();
        }

        // Reverse link.
        if ((p6Hex.fill() === redColor) && (p3Hex.fill() === redColor)) {
          p3HexToP6Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((p6Hex.fill() === purpleColor) && (p3Hex.fill() === purpleColor)) {
          p3HexToP6Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((p6Hex.fill() === blueColor) && (p3Hex.fill() === blueColor)) {
          p3HexToP6Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((p6Hex.fill() === greenColor) && (p3Hex.fill() === greenColor)) {
          p3HexToP6Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((p6Hex.fill() === yellowColor) && (p3Hex.fill() === yellowColor)) {
          p3HexToP6Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((p6Hex.fill() === orangeColor) && (p3Hex.fill() === orangeColor)) {
          p3HexToP6Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((p6Hex.fill() === redColor) && (p3Hex.fill() === grayColor)) {
          console.log("P3toP6BreakLink")
          p3HexToP6Hex.stroke(noColor);
          domainsLayer.draw();
        }
      };
    }
  }
}]);

app.directive('gameBoardP5P7OvertLink', ['GameState', function (GameState) {
  return {
    restrict: 'A',
    link: function (scope) {
      linksGroup.add(p5HexToP7Hex);
      p5HexToP7Hex.stroke(noColor);

      GameState.addListener(onGameStateChanged);

      // ----------------------------------------------------------------------------
      scope.$on('$destroy', function() {
        GameState.removeListener(onGameStateChanged);
      });

      function onGameStateChanged() {
        if ((p5Hex.fill() === redColor) && (p7Hex.fill() === redColor)) {
          p5HexToP7Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((p5Hex.fill() === purpleColor) && (p7Hex.fill() === purpleColor)) {
          p5HexToP7Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((p5Hex.fill() === blueColor) && (p7Hex.fill() === blueColor)) {
          p5HexToP7Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((p5Hex.fill() === greenColor) && (p7Hex.fill() === greenColor)) {
          p5HexToP7Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((p5Hex.fill() === yellowColor) && (p7Hex.fill() === yellowColor)) {
          p5HexToP7Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((p5Hex.fill() === orangeColor) && (p7Hex.fill() === orangeColor)) {
          p5HexToP7Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((p5Hex.fill() === redColor) && (p7Hex.fill() === grayColor)) {
          console.log("P5toP7BreakLink")
          p5HexToP7Hex.stroke(noColor);
          domainsLayer.draw();
        }

        // Reverse link.
        if ((p7Hex.fill() === redColor) && (p5Hex.fill() === redColor)) {
          p5HexToP7Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((p7Hex.fill() === purpleColor) && (p5Hex.fill() === purpleColor)) {
          p5HexToP7Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((p7Hex.fill() === blueColor) && (p5Hex.fill() === blueColor)) {
          p5HexToP7Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((p7Hex.fill() === greenColor) && (p5Hex.fill() === greenColor)) {
          p5HexToP7Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((p7Hex.fill() === yellowColor) && (p5Hex.fill() === yellowColor)) {
          p5HexToP7Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((p7Hex.fill() === orangeColor) && (p5Hex.fill() === orangeColor)) {
          p5HexToP7Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((p7Hex.fill() === redColor) && (p5Hex.fill() === grayColor)) {
          console.log("P5toP7BreakLink")
          p5HexToP7Hex.stroke(noColor);
          domainsLayer.draw();
        }
      };
    }
  }
}]);

app.directive('gameBoardP4P6OvertLink', ['GameState', function (GameState) {
  return {
    restrict: 'A',
    link: function (scope) {
      linksGroup.add(p4HexToP6Hex);
      p4HexToP6Hex.stroke(noColor);

      GameState.addListener(onGameStateChanged);

      // ----------------------------------------------------------------------------
      scope.$on('$destroy', function() {
        GameState.removeListener(onGameStateChanged);
      });

      function onGameStateChanged() {
        if ((p4Hex.fill() === redColor) && (p6Hex.fill() === redColor)) {
          p4HexToP6Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((p4Hex.fill() === purpleColor) && (p6Hex.fill() === purpleColor)) {
          p4HexToP6Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((p4Hex.fill() === blueColor) && (p6Hex.fill() === blueColor)) {
          p4HexToP6Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((p4Hex.fill() === greenColor) && (p6Hex.fill() === greenColor)) {
          p4HexToP6Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((p4Hex.fill() === yellowColor) && (p6Hex.fill() === yellowColor)) {
          p4HexToP6Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((p4Hex.fill() === orangeColor) && (p6Hex.fill() === orangeColor)) {
          p4HexToP6Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((p4Hex.fill() === redColor) && (p6Hex.fill() === grayColor)) {
          console.log("P4toP6BreakLink")
          p4HexToP6Hex.stroke(noColor);
          domainsLayer.draw();
        }

        // Reverse link.
        if ((p6Hex.fill() === redColor) && (p4Hex.fill() === redColor)) {
          p4HexToP6Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((p6Hex.fill() === purpleColor) && (p4Hex.fill() === purpleColor)) {
          p4HexToP6Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((p6Hex.fill() === blueColor) && (p4Hex.fill() === blueColor)) {
          p4HexToP6Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((p6Hex.fill() === greenColor) && (p4Hex.fill() === greenColor)) {
          p4HexToP6Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((p6Hex.fill() === yellowColor) && (p4Hex.fill() === yellowColor)) {
          p4HexToP6Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((p6Hex.fill() === orangeColor) && (p4Hex.fill() === orangeColor)) {
          p4HexToP6Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((p6Hex.fill() === redColor) && (p4Hex.fill() === grayColor)) {
          console.log("P4toP6BreakLink")
          p4HexToP6Hex.stroke(noColor);
          domainsLayer.draw();
        }
      };
    }
  }
}]);

app.directive('gameBoardP4P7OvertLink', ['GameState', function (GameState) {
  return {
    restrict: 'A',
    link: function (scope) {
      linksGroup.add(p4HexToP7Hex);
      p4HexToP7Hex.stroke(noColor);

      GameState.addListener(onGameStateChanged);

      // ----------------------------------------------------------------------------
      scope.$on('$destroy', function() {
        GameState.removeListener(onGameStateChanged);
      });

      function onGameStateChanged() {
        if ((p4Hex.fill() === redColor) && (p7Hex.fill() === redColor)) {
          p4HexToP7Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((p4Hex.fill() === purpleColor) && (p7Hex.fill() === purpleColor)) {
          p4HexToP7Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((p4Hex.fill() === blueColor) && (p7Hex.fill() === blueColor)) {
          p4HexToP7Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((p4Hex.fill() === greenColor) && (p7Hex.fill() === greenColor)) {
          p4HexToP7Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((p4Hex.fill() === yellowColor) && (p7Hex.fill() === yellowColor)) {
          p4HexToP7Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((p4Hex.fill() === orangeColor) && (p7Hex.fill() === orangeColor)) {
          p4HexToP7Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((p4Hex.fill() === redColor) && (p7Hex.fill() === grayColor)) {
          console.log("P4toP7BreakLink")
          p4HexToP7Hex.stroke(noColor);
          domainsLayer.draw();
        }

        // Reverse link.
        if ((p7Hex.fill() === redColor) && (p4Hex.fill() === redColor)) {
          p4HexToP7Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((p7Hex.fill() === purpleColor) && (p4Hex.fill() === purpleColor)) {
          p4HexToP7Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((p7Hex.fill() === blueColor) && (p4Hex.fill() === blueColor)) {
          p4HexToP7Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((p7Hex.fill() === greenColor) && (p4Hex.fill() === greenColor)) {
          p4HexToP7Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((p7Hex.fill() === yellowColor) && (p4Hex.fill() === yellowColor)) {
          p4HexToP7Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((p7Hex.fill() === orangeColor) && (p4Hex.fill() === orangeColor)) {
          p4HexToP7Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((p7Hex.fill() === redColor) && (p4Hex.fill() === grayColor)) {
          console.log("P4toP7BreakLink")
          p4HexToP7Hex.stroke(noColor);
          domainsLayer.draw();
        }
      };
    }
  }
}]);

app.directive('gameBoardP6P7OvertLink', ['GameState', function (GameState) {
  return {
    restrict: 'A',
    link: function (scope) {
      linksGroup.add(p6HexToP7Hex);
      p6HexToP7Hex.stroke(noColor);

      GameState.addListener(onGameStateChanged);

      // ----------------------------------------------------------------------------
      scope.$on('$destroy', function() {
        GameState.removeListener(onGameStateChanged);
      });

      function onGameStateChanged() {
        if ((p6Hex.fill() === redColor) && (p7Hex.fill() === redColor)) {
          p6HexToP7Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((p6Hex.fill() === purpleColor) && (p7Hex.fill() === purpleColor)) {
          p6HexToP7Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((p6Hex.fill() === blueColor) && (p7Hex.fill() === blueColor)) {
          p6HexToP7Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((p6Hex.fill() === greenColor) && (p7Hex.fill() === greenColor)) {
          p6HexToP7Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((p6Hex.fill() === yellowColor) && (p7Hex.fill() === yellowColor)) {
          p6HexToP7Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((p6Hex.fill() === orangeColor) && (p7Hex.fill() === orangeColor)) {
          p6HexToP7Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((p6Hex.fill() === redColor) && (p7Hex.fill() === grayColor)) {
          console.log("P6toP7BreakLink")
          p6HexToP7Hex.stroke(noColor);
          domainsLayer.draw();
        }

        // Reverse link.
        if ((p7Hex.fill() === redColor) && (p6Hex.fill() === redColor)) {
          p6HexToP7Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((p7Hex.fill() === purpleColor) && (p6Hex.fill() === purpleColor)) {
          p6HexToP7Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((p7Hex.fill() === blueColor) && (p6Hex.fill() === blueColor)) {
          p6HexToP7Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((p7Hex.fill() === greenColor) && (p6Hex.fill() === greenColor)) {
          p6HexToP7Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((p7Hex.fill() === yellowColor) && (p6Hex.fill() === yellowColor)) {
          p6HexToP7Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((p7Hex.fill() === orangeColor) && (p6Hex.fill() === orangeColor)) {
          p6HexToP7Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((p7Hex.fill() === redColor) && (p6Hex.fill() === grayColor)) {
          console.log("P6toP7BreakLink")
          p6HexToP7Hex.stroke(noColor);
          domainsLayer.draw();
        }
      };
    }
  }
}]);

app.directive('gameBoardP6P8OvertLink', ['GameState', function (GameState) {
  return {
    restrict: 'A',
    link: function (scope) {
      linksGroup.add(p6HexToP8Hex);
      p6HexToP8Hex.stroke(noColor);

      GameState.addListener(onGameStateChanged);

      // ----------------------------------------------------------------------------
      scope.$on('$destroy', function() {
        GameState.removeListener(onGameStateChanged);
      });

      function onGameStateChanged() {
        if ((p6Hex.fill() === redColor) && (p8Hex.fill() === redColor)) {
          p6HexToP8Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((p6Hex.fill() === purpleColor) && (p8Hex.fill() === purpleColor)) {
          p6HexToP8Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((p6Hex.fill() === blueColor) && (p8Hex.fill() === blueColor)) {
          p6HexToP8Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((p6Hex.fill() === greenColor) && (p8Hex.fill() === greenColor)) {
          p6HexToP8Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((p6Hex.fill() === yellowColor) && (p8Hex.fill() === yellowColor)) {
          p6HexToP8Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((p6Hex.fill() === orangeColor) && (p8Hex.fill() === orangeColor)) {
          p6HexToP8Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((p6Hex.fill() === redColor) && (p8Hex.fill() === grayColor)) {
          console.log("P6toP8BreakLink")
          p6HexToP8Hex.stroke(noColor);
          domainsLayer.draw();
        }

        // Reverse link.
        if ((p8Hex.fill() === redColor) && (p6Hex.fill() === redColor)) {
          p6HexToP8Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((p8Hex.fill() === purpleColor) && (p6Hex.fill() === purpleColor)) {
          p6HexToP8Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((p8Hex.fill() === blueColor) && (p6Hex.fill() === blueColor)) {
          p6HexToP8Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((p8Hex.fill() === greenColor) && (p6Hex.fill() === greenColor)) {
          p6HexToP8Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((p8Hex.fill() === yellowColor) && (p6Hex.fill() === yellowColor)) {
          p6HexToP8Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((p8Hex.fill() === orangeColor) && (p6Hex.fill() === orangeColor)) {
          p6HexToP8Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((p8Hex.fill() === redColor) && (p6Hex.fill() === grayColor)) {
          console.log("P6toP8BreakLink")
          p6HexToP8Hex.stroke(noColor);
          domainsLayer.draw();
        }
      };
    }
  }
}]);

app.directive('gameBoardP7P8OvertLink', ['GameState', function (GameState) {
  return {
    restrict: 'A',
    link: function (scope) {
      linksGroup.add(p7HexToP8Hex);
      p7HexToP8Hex.stroke(noColor);

      GameState.addListener(onGameStateChanged);

      // ----------------------------------------------------------------------------
      scope.$on('$destroy', function() {
        GameState.removeListener(onGameStateChanged);
      });

      function onGameStateChanged() {
        if ((p7Hex.fill() === redColor) && (p8Hex.fill() === redColor)) {
          p7HexToP8Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((p7Hex.fill() === purpleColor) && (p8Hex.fill() === purpleColor)) {
          p7HexToP8Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((p7Hex.fill() === blueColor) && (p8Hex.fill() === blueColor)) {
          p7HexToP8Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((p7Hex.fill() === greenColor) && (p8Hex.fill() === greenColor)) {
          p7HexToP8Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((p7Hex.fill() === yellowColor) && (p8Hex.fill() === yellowColor)) {
          p7HexToP8Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((p7Hex.fill() === orangeColor) && (p8Hex.fill() === orangeColor)) {
          p7HexToP8Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((p7Hex.fill() === redColor) && (p8Hex.fill() === grayColor)) {
          console.log("P7toP8BreakLink")
          p7HexToP8Hex.stroke(noColor);
          domainsLayer.draw();
        }

        // Reverse link.
        if ((p8Hex.fill() === redColor) && (p7Hex.fill() === redColor)) {
          p7HexToP8Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((p8Hex.fill() === purpleColor) && (p7Hex.fill() === purpleColor)) {
          p7HexToP8Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((p8Hex.fill() === blueColor) && (p7Hex.fill() === blueColor)) {
          p7HexToP8Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((p8Hex.fill() === greenColor) && (p7Hex.fill() === greenColor)) {
          p7HexToP8Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((p8Hex.fill() === yellowColor) && (p7Hex.fill() === yellowColor)) {
          p7HexToP8Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((p8Hex.fill() === orangeColor) && (p7Hex.fill() === orangeColor)) {
          p7HexToP8Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((p8Hex.fill() === redColor) && (p7Hex.fill() === grayColor)) {
          console.log("P7toP8BreakLink")
          p7HexToP8Hex.stroke(noColor);
          domainsLayer.draw();
        }
      };
    }
  }
}]);
