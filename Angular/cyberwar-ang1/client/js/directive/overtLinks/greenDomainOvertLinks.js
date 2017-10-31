// Green Domain Links
app.directive('gameBoardGBaseG1OvertLink', ['GameState', function (GameState) {
  return {
    restrict: 'A',
    link: function (scope) {
      linksGroup.add(gBaseToG1Hex);
      gBaseToG1Hex.stroke(noColor);

      GameState.addListener(onGameStateChanged);

      // ----------------------------------------------------------------------------
      scope.$on('$destroy', function() {
        GameState.removeListener(onGameStateChanged);
      });

      function onGameStateChanged() {
        if((gBase.fill() === blueColor) && (g1Hex.fill() === blueColor)) {
          gBaseToG1Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((g1Hex.fill() === grayColor)) {
          console.log("BBaseToG1BreakLink")
          gBaseToG1Hex.stroke(noColor);
          domainsLayer.draw();
        }
        // Positive link building to base is allowed but no one can control/occupy another player's base.
      };
    }
  }
}]);

app.directive('gameBoardGBaseG2OvertLink', ['GameState', function (GameState) {
  return {
    restrict: 'A',
    link: function (scope) {
      linksGroup.add(gBaseToG2Hex);
      gBaseToG2Hex.stroke(noColor);

      GameState.addListener(onGameStateChanged);

      // ----------------------------------------------------------------------------
      scope.$on('$destroy', function() {
        GameState.removeListener(onGameStateChanged);
      });

      function onGameStateChanged() {
        if((gBase.fill() === blueColor) && (g2Hex.fill() === blueColor)) {
          gBaseToG2Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        else {
          gBaseToG2Hex.stroke(noColor);
          domainsLayer.batchDraw();
        }
      };
    }
  }
}]);

app.directive('gameBoardG1G3OvertLink', ['GameState', function (GameState) {
  return {
    restrict: 'A',
    link: function (scope) {
      linksGroup.add(g1HexToG3Hex);
      g1HexToG3Hex.stroke(noColor);

      GameState.addListener(onGameStateChanged);

      // ----------------------------------------------------------------------------
      scope.$on('$destroy', function() {
        GameState.removeListener(onGameStateChanged);
      });

      function onGameStateChanged() {
        if ((g1Hex.fill() === redColor) && (g3Hex.fill() === redColor)) {
          g1HexToG3Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((g1Hex.fill() === purpleColor) && (g3Hex.fill() === purpleColor)) {
          g1HexToG3Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((g1Hex.fill() === blueColor) && (g3Hex.fill() === blueColor)) {
          g1HexToG3Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((g1Hex.fill() === greenColor) && (g3Hex.fill() === greenColor)) {
          g1HexToG3Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((g1Hex.fill() === yellowColor) && (g3Hex.fill() === yellowColor)) {
          g1HexToG3Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((g1Hex.fill() === orangeColor) && (g3Hex.fill() === orangeColor)) {
          g1HexToG3Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((g1Hex.fill() === redColor) && (g3Hex.fill() === grayColor)) {
          console.log("G1toG3BreakLink")
          g1HexToG3Hex.stroke(noColor);
          domainsLayer.draw();
        }

        // Reverse link.
        if ((g3Hex.fill() === redColor) && (g1Hex.fill() === redColor)) {
          g1HexToG3Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((g3Hex.fill() === purpleColor) && (g1Hex.fill() === purpleColor)) {
          g1HexToG3Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((g3Hex.fill() === blueColor) && (g1Hex.fill() === blueColor)) {
          g1HexToG3Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((g3Hex.fill() === greenColor) && (g1Hex.fill() === greenColor)) {
          g1HexToG3Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((g3Hex.fill() === yellowColor) && (g1Hex.fill() === yellowColor)) {
          g1HexToG3Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((g3Hex.fill() === orangeColor) && (g1Hex.fill() === orangeColor)) {
          g1HexToG3Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((g3Hex.fill() === redColor) && (g1Hex.fill() === grayColor)) {
          console.log("G1toG3BreakLink")
          g1HexToG3Hex.stroke(noColor);
          domainsLayer.draw();
        }
      };
    }
  }
}]);

app.directive('gameBoardG2G5OvertLink', ['GameState', function (GameState) {
  return {
    restrict: 'A',
    link: function (scope) {
      linksGroup.add(g2HexToG5Hex);
      g2HexToG5Hex.stroke(noColor);

      GameState.addListener(onGameStateChanged);

      // ----------------------------------------------------------------------------
      scope.$on('$destroy', function() {
        GameState.removeListener(onGameStateChanged);
      });

      function onGameStateChanged() {
        if ((g2Hex.fill() === redColor) && (g5Hex.fill() === redColor)) {
          g2HexToG5Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((g2Hex.fill() === purpleColor) && (g5Hex.fill() === purpleColor)) {
          g2HexToG5Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((g2Hex.fill() === blueColor) && (g5Hex.fill() === blueColor)) {
          g2HexToG5Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((g2Hex.fill() === greenColor) && (g5Hex.fill() === greenColor)) {
          g2HexToG5Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((g2Hex.fill() === yellowColor) && (g5Hex.fill() === yellowColor)) {
          g2HexToG5Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((g2Hex.fill() === orangeColor) && (g5Hex.fill() === orangeColor)) {
          g2HexToG5Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((g2Hex.fill() === redColor) && (g5Hex.fill() === grayColor)) {
          console.log("G2toG5BreakLink")
          g2HexToG5Hex.stroke(noColor);
          domainsLayer.draw();
        }

        // Reverse link.
        if ((g5Hex.fill() === redColor) && (g2Hex.fill() === redColor)) {
          g2HexToG5Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((g5Hex.fill() === purpleColor) && (g2Hex.fill() === purpleColor)) {
          g2HexToG5Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((g5Hex.fill() === blueColor) && (g2Hex.fill() === blueColor)) {
          g2HexToG5Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((g5Hex.fill() === greenColor) && (g2Hex.fill() === greenColor)) {
          g2HexToG5Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((g5Hex.fill() === yellowColor) && (g2Hex.fill() === yellowColor)) {
          g2HexToG5Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((g5Hex.fill() === orangeColor) && (g2Hex.fill() === orangeColor)) {
          g2HexToG5Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((g5Hex.fill() === redColor) && (g2Hex.fill() === grayColor)) {
          console.log("G2toG5BreakLink")
          g2HexToG5Hex.stroke(noColor);
          domainsLayer.draw();
        }
      };
    }
  }
}]);

app.directive('gameBoardG3G4OvertLink', ['GameState', function (GameState) {
  return {
    restrict: 'A',
    link: function (scope) {
      linksGroup.add(g3HexToG4Hex);
      g3HexToG4Hex.stroke(noColor);

      GameState.addListener(onGameStateChanged);

      // ----------------------------------------------------------------------------
      scope.$on('$destroy', function() {
        GameState.removeListener(onGameStateChanged);
      });

      function onGameStateChanged() {
        if ((g3Hex.fill() === redColor) && (g4Hex.fill() === redColor)) {
          g3HexToG4Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((g3Hex.fill() === purpleColor) && (g4Hex.fill() === purpleColor)) {
          g3HexToG4Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((g3Hex.fill() === blueColor) && (g4Hex.fill() === blueColor)) {
          g3HexToG4Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((g3Hex.fill() === greenColor) && (g4Hex.fill() === greenColor)) {
          g3HexToG4Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((g3Hex.fill() === yellowColor) && (g4Hex.fill() === yellowColor)) {
          g3HexToG4Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((g3Hex.fill() === orangeColor) && (g4Hex.fill() === orangeColor)) {
          g3HexToG4Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((g3Hex.fill() === redColor) && (g4Hex.fill() === grayColor)) {
          console.log("G3toG4BreakLink")
          g3HexToG4Hex.stroke(noColor);
          domainsLayer.draw();
        }

        // Reverse link.
        if ((g4Hex.fill() === redColor) && (g3Hex.fill() === redColor)) {
          g3HexToG4Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((g4Hex.fill() === purpleColor) && (g3Hex.fill() === purpleColor)) {
          g3HexToG4Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((g4Hex.fill() === blueColor) && (g3Hex.fill() === blueColor)) {
          g3HexToG4Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((g4Hex.fill() === greenColor) && (g3Hex.fill() === greenColor)) {
          g3HexToG4Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((g4Hex.fill() === yellowColor) && (g3Hex.fill() === yellowColor)) {
          g3HexToG4Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((g4Hex.fill() === orangeColor) && (g3Hex.fill() === orangeColor)) {
          g3HexToG4Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((g4Hex.fill() === redColor) && (g3Hex.fill() === grayColor)) {
          console.log("G3toG4BreakLink")
          g3HexToG4Hex.stroke(noColor);
          domainsLayer.draw();
        }
      };
    }
  }
}]);

app.directive('gameBoardG5G4OvertLink', ['GameState', function (GameState) {
  return {
    restrict: 'A',
    link: function (scope) {
      linksGroup.add(g5HexToG4Hex);
      g5HexToG4Hex.stroke(noColor);

      GameState.addListener(onGameStateChanged);

      // ----------------------------------------------------------------------------
      scope.$on('$destroy', function() {
        GameState.removeListener(onGameStateChanged);
      });

      function onGameStateChanged() {
        if ((g5Hex.fill() === redColor) && (g4Hex.fill() === redColor)) {
          g5HexToG4Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((g5Hex.fill() === purpleColor) && (g4Hex.fill() === purpleColor)) {
          g5HexToG4Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((g5Hex.fill() === blueColor) && (g4Hex.fill() === blueColor)) {
          g5HexToG4Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((g5Hex.fill() === greenColor) && (g4Hex.fill() === greenColor)) {
          g5HexToG4Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((g5Hex.fill() === yellowColor) && (g4Hex.fill() === yellowColor)) {
          g5HexToG4Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((g5Hex.fill() === orangeColor) && (g4Hex.fill() === orangeColor)) {
          g5HexToG4Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((g5Hex.fill() === redColor) && (g4Hex.fill() === grayColor)) {
          console.log("G5toG4BreakLink")
          g5HexToG4Hex.stroke(noColor);
          domainsLayer.draw();
        }

        // Reverse link.
        if ((g4Hex.fill() === redColor) && (g5Hex.fill() === redColor)) {
          g5HexToG4Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((g4Hex.fill() === purpleColor) && (g5Hex.fill() === purpleColor)) {
          g5HexToG4Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((g4Hex.fill() === blueColor) && (g5Hex.fill() === blueColor)) {
          g5HexToG4Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((g4Hex.fill() === greenColor) && (g5Hex.fill() === greenColor)) {
          g5HexToG4Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((g4Hex.fill() === yellowColor) && (g5Hex.fill() === yellowColor)) {
          g5HexToG4Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((g4Hex.fill() === orangeColor) && (g5Hex.fill() === orangeColor)) {
          g5HexToG4Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((g4Hex.fill() === redColor) && (g5Hex.fill() === grayColor)) {
          console.log("G5toG4BreakLink")
          g5HexToG4Hex.stroke(noColor);
          domainsLayer.draw();
        }
      };
    }
  }
}]);

app.directive('gameBoardG3G6OvertLink', ['GameState', function (GameState) {
  return {
    restrict: 'A',
    link: function (scope) {
      linksGroup.add(g3HexToG6Hex);
      g3HexToG6Hex.stroke(noColor);

      GameState.addListener(onGameStateChanged);

      // ----------------------------------------------------------------------------
      scope.$on('$destroy', function() {
        GameState.removeListener(onGameStateChanged);
      });

      function onGameStateChanged() {
        if ((g3Hex.fill() === redColor) && (g6Hex.fill() === redColor)) {
          g3HexToG6Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((g3Hex.fill() === purpleColor) && (g6Hex.fill() === purpleColor)) {
          g3HexToG6Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((g3Hex.fill() === blueColor) && (g6Hex.fill() === blueColor)) {
          g3HexToG6Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((g3Hex.fill() === greenColor) && (g6Hex.fill() === greenColor)) {
          g3HexToG6Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((g3Hex.fill() === yellowColor) && (g6Hex.fill() === yellowColor)) {
          g3HexToG6Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((g3Hex.fill() === orangeColor) && (g6Hex.fill() === orangeColor)) {
          g3HexToG6Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((g3Hex.fill() === redColor) && (g6Hex.fill() === grayColor)) {
          console.log("G3toG6BreakLink")
          g3HexToG6Hex.stroke(noColor);
          domainsLayer.draw();
        }

        // Reverse link.
        if ((g6Hex.fill() === redColor) && (g3Hex.fill() === redColor)) {
          g3HexToG6Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((g6Hex.fill() === purpleColor) && (g3Hex.fill() === purpleColor)) {
          g3HexToG6Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((g6Hex.fill() === blueColor) && (g3Hex.fill() === blueColor)) {
          g3HexToG6Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((g6Hex.fill() === greenColor) && (g3Hex.fill() === greenColor)) {
          g3HexToG6Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((g6Hex.fill() === yellowColor) && (g3Hex.fill() === yellowColor)) {
          g3HexToG6Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((g6Hex.fill() === orangeColor) && (g3Hex.fill() === orangeColor)) {
          g3HexToG6Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((g6Hex.fill() === redColor) && (g3Hex.fill() === grayColor)) {
          console.log("G3toG6BreakLink")
          g3HexToG6Hex.stroke(noColor);
          domainsLayer.draw();
        }
      };
    }
  }
}]);

app.directive('gameBoardG5G7OvertLink', ['GameState', function (GameState) {
  return {
    restrict: 'A',
    link: function (scope) {
      linksGroup.add(g5HexToG7Hex);
      g5HexToG7Hex.stroke(noColor);

      GameState.addListener(onGameStateChanged);

      // ----------------------------------------------------------------------------
      scope.$on('$destroy', function() {
        GameState.removeListener(onGameStateChanged);
      });

      function onGameStateChanged() {
        if ((g5Hex.fill() === redColor) && (g7Hex.fill() === redColor)) {
          g5HexToG7Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((g5Hex.fill() === purpleColor) && (g7Hex.fill() === purpleColor)) {
          g5HexToG7Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((g5Hex.fill() === blueColor) && (g7Hex.fill() === blueColor)) {
          g5HexToG7Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((g5Hex.fill() === greenColor) && (g7Hex.fill() === greenColor)) {
          g5HexToG7Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((g5Hex.fill() === yellowColor) && (g7Hex.fill() === yellowColor)) {
          g5HexToG7Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((g5Hex.fill() === orangeColor) && (g7Hex.fill() === orangeColor)) {
          g5HexToG7Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((g5Hex.fill() === redColor) && (g7Hex.fill() === grayColor)) {
          console.log("G5toG7BreakLink")
          g5HexToG7Hex.stroke(noColor);
          domainsLayer.draw();
        }

        // Reverse link.
        if ((g7Hex.fill() === redColor) && (g5Hex.fill() === redColor)) {
          g5HexToG7Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((g7Hex.fill() === purpleColor) && (g5Hex.fill() === purpleColor)) {
          g5HexToG7Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((g7Hex.fill() === blueColor) && (g5Hex.fill() === blueColor)) {
          g5HexToG7Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((g7Hex.fill() === greenColor) && (g5Hex.fill() === greenColor)) {
          g5HexToG7Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((g7Hex.fill() === yellowColor) && (g5Hex.fill() === yellowColor)) {
          g5HexToG7Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((g7Hex.fill() === orangeColor) && (g5Hex.fill() === orangeColor)) {
          g5HexToG7Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((g7Hex.fill() === redColor) && (g5Hex.fill() === grayColor)) {
          console.log("G5toG7BreakLink")
          g5HexToG7Hex.stroke(noColor);
          domainsLayer.draw();
        }
      };
    }
  }
}]);

app.directive('gameBoardG4G6OvertLink', ['GameState', function (GameState) {
  return {
    restrict: 'A',
    link: function (scope) {
      linksGroup.add(g4HexToG6Hex);
      g4HexToG6Hex.stroke(noColor);

      GameState.addListener(onGameStateChanged);

      // ----------------------------------------------------------------------------
      scope.$on('$destroy', function() {
        GameState.removeListener(onGameStateChanged);
      });

      function onGameStateChanged() {
        if ((g4Hex.fill() === redColor) && (g6Hex.fill() === redColor)) {
          g4HexToG6Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((g4Hex.fill() === purpleColor) && (g6Hex.fill() === purpleColor)) {
          g4HexToG6Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((g4Hex.fill() === blueColor) && (g6Hex.fill() === blueColor)) {
          g4HexToG6Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((g4Hex.fill() === greenColor) && (g6Hex.fill() === greenColor)) {
          g4HexToG6Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((g4Hex.fill() === yellowColor) && (g6Hex.fill() === yellowColor)) {
          g4HexToG6Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((g4Hex.fill() === orangeColor) && (g6Hex.fill() === orangeColor)) {
          g4HexToG6Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((g4Hex.fill() === redColor) && (g6Hex.fill() === grayColor)) {
          console.log("G4toG6BreakLink")
          g4HexToG6Hex.stroke(noColor);
          domainsLayer.draw();
        }

        // Reverse link.
        if ((g6Hex.fill() === redColor) && (g4Hex.fill() === redColor)) {
          g4HexToG6Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((g6Hex.fill() === purpleColor) && (g4Hex.fill() === purpleColor)) {
          g4HexToG6Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((g6Hex.fill() === blueColor) && (g4Hex.fill() === blueColor)) {
          g4HexToG6Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((g6Hex.fill() === greenColor) && (g4Hex.fill() === greenColor)) {
          g4HexToG6Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((g6Hex.fill() === yellowColor) && (g4Hex.fill() === yellowColor)) {
          g4HexToG6Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((g6Hex.fill() === orangeColor) && (g4Hex.fill() === orangeColor)) {
          g4HexToG6Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((g6Hex.fill() === redColor) && (g4Hex.fill() === grayColor)) {
          console.log("G4toG6BreakLink")
          g4HexToG6Hex.stroke(noColor);
          domainsLayer.draw();
        }
      };
    }
  }
}]);

app.directive('gameBoardG4G7OvertLink', ['GameState', function (GameState) {
  return {
    restrict: 'A',
    link: function (scope) {
      linksGroup.add(g4HexToG7Hex);
      g4HexToG7Hex.stroke(noColor);

      GameState.addListener(onGameStateChanged);

      // ----------------------------------------------------------------------------
      scope.$on('$destroy', function() {
        GameState.removeListener(onGameStateChanged);
      });

      function onGameStateChanged() {
        if ((g4Hex.fill() === redColor) && (g7Hex.fill() === redColor)) {
          g4HexToG7Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((g4Hex.fill() === purpleColor) && (g7Hex.fill() === purpleColor)) {
          g4HexToG7Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((g4Hex.fill() === blueColor) && (g7Hex.fill() === blueColor)) {
          g4HexToG7Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((g4Hex.fill() === greenColor) && (g7Hex.fill() === greenColor)) {
          g4HexToG7Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((g4Hex.fill() === yellowColor) && (g7Hex.fill() === yellowColor)) {
          g4HexToG7Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((g4Hex.fill() === orangeColor) && (g7Hex.fill() === orangeColor)) {
          g4HexToG7Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((g4Hex.fill() === redColor) && (g7Hex.fill() === grayColor)) {
          console.log("G4toG7BreakLink")
          g4HexToG7Hex.stroke(noColor);
          domainsLayer.draw();
        }

        // Reverse link.
        if ((g7Hex.fill() === redColor) && (g4Hex.fill() === redColor)) {
          g4HexToG7Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((g7Hex.fill() === purpleColor) && (g4Hex.fill() === purpleColor)) {
          g4HexToG7Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((g7Hex.fill() === blueColor) && (g4Hex.fill() === blueColor)) {
          g4HexToG7Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((g7Hex.fill() === greenColor) && (g4Hex.fill() === greenColor)) {
          g4HexToG7Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((g7Hex.fill() === yellowColor) && (g4Hex.fill() === yellowColor)) {
          g4HexToG7Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((g7Hex.fill() === orangeColor) && (g4Hex.fill() === orangeColor)) {
          g4HexToG7Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((g7Hex.fill() === redColor) && (g4Hex.fill() === grayColor)) {
          console.log("G4toG7BreakLink")
          g4HexToG7Hex.stroke(noColor);
          domainsLayer.draw();
        }
      };
    }
  }
}]);

app.directive('gameBoardG6G7OvertLink', ['GameState', function (GameState) {
  return {
    restrict: 'A',
    link: function (scope) {
      linksGroup.add(g6HexToG7Hex);
      g6HexToG7Hex.stroke(noColor);

      GameState.addListener(onGameStateChanged);

      // ----------------------------------------------------------------------------
      scope.$on('$destroy', function() {
        GameState.removeListener(onGameStateChanged);
      });

      function onGameStateChanged() {
        if ((g6Hex.fill() === redColor) && (g7Hex.fill() === redColor)) {
          g6HexToG7Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((g6Hex.fill() === purpleColor) && (g7Hex.fill() === purpleColor)) {
          g6HexToG7Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((g6Hex.fill() === blueColor) && (g7Hex.fill() === blueColor)) {
          g6HexToG7Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((g6Hex.fill() === greenColor) && (g7Hex.fill() === greenColor)) {
          g6HexToG7Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((g6Hex.fill() === yellowColor) && (g7Hex.fill() === yellowColor)) {
          g6HexToG7Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((g6Hex.fill() === orangeColor) && (g7Hex.fill() === orangeColor)) {
          g6HexToG7Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((g6Hex.fill() === redColor) && (g7Hex.fill() === grayColor)) {
          console.log("G6toG7BreakLink")
          g6HexToG7Hex.stroke(noColor);
          domainsLayer.draw();
        }

        // Reverse link.
        if ((g7Hex.fill() === redColor) && (g6Hex.fill() === redColor)) {
          g6HexToG7Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((g7Hex.fill() === purpleColor) && (g6Hex.fill() === purpleColor)) {
          g6HexToG7Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((g7Hex.fill() === blueColor) && (g6Hex.fill() === blueColor)) {
          g6HexToG7Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((g7Hex.fill() === greenColor) && (g6Hex.fill() === greenColor)) {
          g6HexToG7Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((g7Hex.fill() === yellowColor) && (g6Hex.fill() === yellowColor)) {
          g6HexToG7Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((g7Hex.fill() === orangeColor) && (g6Hex.fill() === orangeColor)) {
          g6HexToG7Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((g7Hex.fill() === redColor) && (g6Hex.fill() === grayColor)) {
          console.log("G6toG7BreakLink")
          g6HexToG7Hex.stroke(noColor);
          domainsLayer.draw();
        }
      };
    }
  }
}]);

app.directive('gameBoardG6G8OvertLink', ['GameState', function (GameState) {
  return {
    restrict: 'A',
    link: function (scope) {
      linksGroup.add(g6HexToG8Hex);
      g6HexToG8Hex.stroke(noColor);

      GameState.addListener(onGameStateChanged);

      // ----------------------------------------------------------------------------
      scope.$on('$destroy', function() {
        GameState.removeListener(onGameStateChanged);
      });

      function onGameStateChanged() {
        if ((g6Hex.fill() === redColor) && (g8Hex.fill() === redColor)) {
          g6HexToG8Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((g6Hex.fill() === purpleColor) && (g8Hex.fill() === purpleColor)) {
          g6HexToG8Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((g6Hex.fill() === blueColor) && (g8Hex.fill() === blueColor)) {
          g6HexToG8Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((g6Hex.fill() === greenColor) && (g8Hex.fill() === greenColor)) {
          g6HexToG8Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((g6Hex.fill() === yellowColor) && (g8Hex.fill() === yellowColor)) {
          g6HexToG8Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((g6Hex.fill() === orangeColor) && (g8Hex.fill() === orangeColor)) {
          g6HexToG8Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((g6Hex.fill() === redColor) && (g8Hex.fill() === grayColor)) {
          console.log("G6toG8BreakLink")
          g6HexToG8Hex.stroke(noColor);
          domainsLayer.draw();
        }

        // Reverse link.
        if ((g8Hex.fill() === redColor) && (g6Hex.fill() === redColor)) {
          g6HexToG8Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((g8Hex.fill() === purpleColor) && (g6Hex.fill() === purpleColor)) {
          g6HexToG8Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((g8Hex.fill() === blueColor) && (g6Hex.fill() === blueColor)) {
          g6HexToG8Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((g8Hex.fill() === greenColor) && (g6Hex.fill() === greenColor)) {
          g6HexToG8Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((g8Hex.fill() === yellowColor) && (g6Hex.fill() === yellowColor)) {
          g6HexToG8Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((g8Hex.fill() === orangeColor) && (g6Hex.fill() === orangeColor)) {
          g6HexToG8Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((g8Hex.fill() === redColor) && (g6Hex.fill() === grayColor)) {
          console.log("G6toG8BreakLink")
          g6HexToG8Hex.stroke(noColor);
          domainsLayer.draw();
        }
      };
    }
  }
}]);

app.directive('gameBoardG7G8OvertLink', ['GameState', function (GameState) {
  return {
    restrict: 'A',
    link: function (scope) {
      linksGroup.add(g7HexToG8Hex);
      g7HexToG8Hex.stroke(noColor);

      GameState.addListener(onGameStateChanged);

      // ----------------------------------------------------------------------------
      scope.$on('$destroy', function() {
        GameState.removeListener(onGameStateChanged);
      });

      function onGameStateChanged() {
        if ((g7Hex.fill() === redColor) && (g8Hex.fill() === redColor)) {
          g7HexToG8Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((g7Hex.fill() === purpleColor) && (g8Hex.fill() === purpleColor)) {
          g7HexToG8Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((g7Hex.fill() === blueColor) && (g8Hex.fill() === blueColor)) {
          g7HexToG8Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((g7Hex.fill() === greenColor) && (g8Hex.fill() === greenColor)) {
          g7HexToG8Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((g7Hex.fill() === yellowColor) && (g8Hex.fill() === yellowColor)) {
          g7HexToG8Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((g7Hex.fill() === orangeColor) && (g8Hex.fill() === orangeColor)) {
          g7HexToG8Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((g7Hex.fill() === redColor) && (g8Hex.fill() === grayColor)) {
          console.log("G7toG8BreakLink")
          g7HexToG8Hex.stroke(noColor);
          domainsLayer.draw();
        }

        // Reverse link.
        if ((g8Hex.fill() === redColor) && (g7Hex.fill() === redColor)) {
          g7HexToG8Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((g8Hex.fill() === purpleColor) && (g7Hex.fill() === purpleColor)) {
          g7HexToG8Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((g8Hex.fill() === blueColor) && (g7Hex.fill() === blueColor)) {
          g7HexToG8Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((g8Hex.fill() === greenColor) && (g7Hex.fill() === greenColor)) {
          g7HexToG8Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((g8Hex.fill() === yellowColor) && (g7Hex.fill() === yellowColor)) {
          g7HexToG8Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((g8Hex.fill() === orangeColor) && (g7Hex.fill() === orangeColor)) {
          g7HexToG8Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((g8Hex.fill() === redColor) && (g7Hex.fill() === grayColor)) {
          console.log("G7toG8BreakLink")
          g7HexToG8Hex.stroke(noColor);
          domainsLayer.draw();
        }
      };
    }
  }
}]);
