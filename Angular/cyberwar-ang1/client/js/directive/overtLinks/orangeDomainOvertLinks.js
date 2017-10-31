// Blue Domain Links
app.directive('gameBoardOBaseO1OvertLink', ['GameState', function (GameState) {
  return {
    restrict: 'A',
    link: function (scope) {
      linksGroup.add(oBaseToO1Hex);
      oBaseToO1Hex.stroke(noColor);

      GameState.addListener(onGameStateChanged);

      // ----------------------------------------------------------------------------
      scope.$on('$destroy', function() {
        GameState.removeListener(onGameStateChanged);
      });

      function onGameStateChanged() {
        if((oBase.fill() === blueColor) && (o1Hex.fill() === blueColor)) {
          oBaseToO1Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((o1Hex.fill() === grayColor)) {
          console.log("BBaseToO1BreakLink")
          oBaseToO1Hex.stroke(noColor);
          domainsLayer.draw();
        }
        // Positive link building to base is allowed but no one can control/occupy another player's base.
      };
    }
  }
}]);

app.directive('gameBoardOBaseO2OvertLink', ['GameState', function (GameState) {
  return {
    restrict: 'A',
    link: function (scope) {
      linksGroup.add(oBaseToO2Hex);
      oBaseToO2Hex.stroke(noColor);

      GameState.addListener(onGameStateChanged);

      // ----------------------------------------------------------------------------
      scope.$on('$destroy', function() {
        GameState.removeListener(onGameStateChanged);
      });

      function onGameStateChanged() {
        if((oBase.fill() === blueColor) && (o2Hex.fill() === blueColor)) {
          oBaseToO2Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        else {
          oBaseToO2Hex.stroke(noColor);
          domainsLayer.batchDraw();
        }
      };
    }
  }
}]);

app.directive('gameBoardO1O3OvertLink', ['GameState', function (GameState) {
  return {
    restrict: 'A',
    link: function (scope) {
      linksGroup.add(o1HexToO3Hex);
      o1HexToO3Hex.stroke(noColor);

      GameState.addListener(onGameStateChanged);

      // ----------------------------------------------------------------------------
      scope.$on('$destroy', function() {
        GameState.removeListener(onGameStateChanged);
      });

      function onGameStateChanged() {
        if ((o1Hex.fill() === redColor) && (o3Hex.fill() === redColor)) {
          o1HexToO3Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((o1Hex.fill() === purpleColor) && (o3Hex.fill() === purpleColor)) {
          o1HexToO3Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((o1Hex.fill() === blueColor) && (o3Hex.fill() === blueColor)) {
          o1HexToO3Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((o1Hex.fill() === greenColor) && (o3Hex.fill() === greenColor)) {
          o1HexToO3Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((o1Hex.fill() === yellowColor) && (o3Hex.fill() === yellowColor)) {
          o1HexToO3Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((o1Hex.fill() === orangeColor) && (o3Hex.fill() === orangeColor)) {
          o1HexToO3Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((o1Hex.fill() === redColor) && (o3Hex.fill() === grayColor)) {
          console.log("O1toO3BreakLink")
          o1HexToO3Hex.stroke(noColor);
          domainsLayer.draw();
        }

        // Reverse link.
        if ((o3Hex.fill() === redColor) && (o1Hex.fill() === redColor)) {
          o1HexToO3Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((o3Hex.fill() === purpleColor) && (o1Hex.fill() === purpleColor)) {
          o1HexToO3Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((o3Hex.fill() === blueColor) && (o1Hex.fill() === blueColor)) {
          o1HexToO3Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((o3Hex.fill() === greenColor) && (o1Hex.fill() === greenColor)) {
          o1HexToO3Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((o3Hex.fill() === yellowColor) && (o1Hex.fill() === yellowColor)) {
          o1HexToO3Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((o3Hex.fill() === orangeColor) && (o1Hex.fill() === orangeColor)) {
          o1HexToO3Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((o3Hex.fill() === redColor) && (o1Hex.fill() === grayColor)) {
          console.log("O1toO3BreakLink")
          o1HexToO3Hex.stroke(noColor);
          domainsLayer.draw();
        }
      };
    }
  }
}]);

app.directive('gameBoardO2O5OvertLink', ['GameState', function (GameState) {
  return {
    restrict: 'A',
    link: function (scope) {
      linksGroup.add(o2HexToO5Hex);
      o2HexToO5Hex.stroke(noColor);

      GameState.addListener(onGameStateChanged);

      // ----------------------------------------------------------------------------
      scope.$on('$destroy', function() {
        GameState.removeListener(onGameStateChanged);
      });

      function onGameStateChanged() {
        if ((o2Hex.fill() === redColor) && (o5Hex.fill() === redColor)) {
          o2HexToO5Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((o2Hex.fill() === purpleColor) && (o5Hex.fill() === purpleColor)) {
          o2HexToO5Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((o2Hex.fill() === blueColor) && (o5Hex.fill() === blueColor)) {
          o2HexToO5Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((o2Hex.fill() === greenColor) && (o5Hex.fill() === greenColor)) {
          o2HexToO5Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((o2Hex.fill() === yellowColor) && (o5Hex.fill() === yellowColor)) {
          o2HexToO5Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((o2Hex.fill() === orangeColor) && (o5Hex.fill() === orangeColor)) {
          o2HexToO5Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((o2Hex.fill() === redColor) && (o5Hex.fill() === grayColor)) {
          console.log("O2toO5BreakLink")
          o2HexToO5Hex.stroke(noColor);
          domainsLayer.draw();
        }

        // Reverse link.
        if ((o5Hex.fill() === redColor) && (o2Hex.fill() === redColor)) {
          o2HexToO5Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((o5Hex.fill() === purpleColor) && (o2Hex.fill() === purpleColor)) {
          o2HexToO5Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((o5Hex.fill() === blueColor) && (o2Hex.fill() === blueColor)) {
          o2HexToO5Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((o5Hex.fill() === greenColor) && (o2Hex.fill() === greenColor)) {
          o2HexToO5Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((o5Hex.fill() === yellowColor) && (o2Hex.fill() === yellowColor)) {
          o2HexToO5Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((o5Hex.fill() === orangeColor) && (o2Hex.fill() === orangeColor)) {
          o2HexToO5Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((o5Hex.fill() === redColor) && (o2Hex.fill() === grayColor)) {
          console.log("O2toO5BreakLink")
          o2HexToO5Hex.stroke(noColor);
          domainsLayer.draw();
        }
      };
    }
  }
}]);

app.directive('gameBoardO3O4OvertLink', ['GameState', function (GameState) {
  return {
    restrict: 'A',
    link: function (scope) {
      linksGroup.add(o3HexToO4Hex);
      o3HexToO4Hex.stroke(noColor);

      GameState.addListener(onGameStateChanged);

      // ----------------------------------------------------------------------------
      scope.$on('$destroy', function() {
        GameState.removeListener(onGameStateChanged);
      });

      function onGameStateChanged() {
        if ((o3Hex.fill() === redColor) && (o4Hex.fill() === redColor)) {
          o3HexToO4Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((o3Hex.fill() === purpleColor) && (o4Hex.fill() === purpleColor)) {
          o3HexToO4Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((o3Hex.fill() === blueColor) && (o4Hex.fill() === blueColor)) {
          o3HexToO4Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((o3Hex.fill() === greenColor) && (o4Hex.fill() === greenColor)) {
          o3HexToO4Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((o3Hex.fill() === yellowColor) && (o4Hex.fill() === yellowColor)) {
          o3HexToO4Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((o3Hex.fill() === orangeColor) && (o4Hex.fill() === orangeColor)) {
          o3HexToO4Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((o3Hex.fill() === redColor) && (o4Hex.fill() === grayColor)) {
          console.log("O3toO4BreakLink")
          o3HexToO4Hex.stroke(noColor);
          domainsLayer.draw();
        }

        // Reverse link.
        if ((o4Hex.fill() === redColor) && (o3Hex.fill() === redColor)) {
          o3HexToO4Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((o4Hex.fill() === purpleColor) && (o3Hex.fill() === purpleColor)) {
          o3HexToO4Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((o4Hex.fill() === blueColor) && (o3Hex.fill() === blueColor)) {
          o3HexToO4Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((o4Hex.fill() === greenColor) && (o3Hex.fill() === greenColor)) {
          o3HexToO4Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((o4Hex.fill() === yellowColor) && (o3Hex.fill() === yellowColor)) {
          o3HexToO4Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((o4Hex.fill() === orangeColor) && (o3Hex.fill() === orangeColor)) {
          o3HexToO4Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((o4Hex.fill() === redColor) && (o3Hex.fill() === grayColor)) {
          console.log("O3toO4BreakLink")
          o3HexToO4Hex.stroke(noColor);
          domainsLayer.draw();
        }
      };
    }
  }
}]);

app.directive('gameBoardO5O4OvertLink', ['GameState', function (GameState) {
  return {
    restrict: 'A',
    link: function (scope) {
      linksGroup.add(o5HexToO4Hex);
      o5HexToO4Hex.stroke(noColor);

      GameState.addListener(onGameStateChanged);

      // ----------------------------------------------------------------------------
      scope.$on('$destroy', function() {
        GameState.removeListener(onGameStateChanged);
      });

      function onGameStateChanged() {
        if ((o5Hex.fill() === redColor) && (o4Hex.fill() === redColor)) {
          o5HexToO4Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((o5Hex.fill() === purpleColor) && (o4Hex.fill() === purpleColor)) {
          o5HexToO4Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((o5Hex.fill() === blueColor) && (o4Hex.fill() === blueColor)) {
          o5HexToO4Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((o5Hex.fill() === greenColor) && (o4Hex.fill() === greenColor)) {
          o5HexToO4Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((o5Hex.fill() === yellowColor) && (o4Hex.fill() === yellowColor)) {
          o5HexToO4Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((o5Hex.fill() === orangeColor) && (o4Hex.fill() === orangeColor)) {
          o5HexToO4Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((o5Hex.fill() === redColor) && (o4Hex.fill() === grayColor)) {
          console.log("O5toO4BreakLink")
          o5HexToO4Hex.stroke(noColor);
          domainsLayer.draw();
        }

        // Reverse link.
        if ((o4Hex.fill() === redColor) && (o5Hex.fill() === redColor)) {
          o5HexToO4Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((o4Hex.fill() === purpleColor) && (o5Hex.fill() === purpleColor)) {
          o5HexToO4Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((o4Hex.fill() === blueColor) && (o5Hex.fill() === blueColor)) {
          o5HexToO4Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((o4Hex.fill() === greenColor) && (o5Hex.fill() === greenColor)) {
          o5HexToO4Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((o4Hex.fill() === yellowColor) && (o5Hex.fill() === yellowColor)) {
          o5HexToO4Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((o4Hex.fill() === orangeColor) && (o5Hex.fill() === orangeColor)) {
          o5HexToO4Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((o4Hex.fill() === redColor) && (o5Hex.fill() === grayColor)) {
          console.log("O5toO4BreakLink")
          o5HexToO4Hex.stroke(noColor);
          domainsLayer.draw();
        }
      };
    }
  }
}]);

app.directive('gameBoardO3O6OvertLink', ['GameState', function (GameState) {
  return {
    restrict: 'A',
    link: function (scope) {
      linksGroup.add(o3HexToO6Hex);
      o3HexToO6Hex.stroke(noColor);

      GameState.addListener(onGameStateChanged);

      // ----------------------------------------------------------------------------
      scope.$on('$destroy', function() {
        GameState.removeListener(onGameStateChanged);
      });

      function onGameStateChanged() {
        if ((o3Hex.fill() === redColor) && (o6Hex.fill() === redColor)) {
          o3HexToO6Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((o3Hex.fill() === purpleColor) && (o6Hex.fill() === purpleColor)) {
          o3HexToO6Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((o3Hex.fill() === blueColor) && (o6Hex.fill() === blueColor)) {
          o3HexToO6Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((o3Hex.fill() === greenColor) && (o6Hex.fill() === greenColor)) {
          o3HexToO6Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((o3Hex.fill() === yellowColor) && (o6Hex.fill() === yellowColor)) {
          o3HexToO6Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((o3Hex.fill() === orangeColor) && (o6Hex.fill() === orangeColor)) {
          o3HexToO6Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((o3Hex.fill() === redColor) && (o6Hex.fill() === grayColor)) {
          console.log("O3toO6BreakLink")
          o3HexToO6Hex.stroke(noColor);
          domainsLayer.draw();
        }

        // Reverse link.
        if ((o6Hex.fill() === redColor) && (o3Hex.fill() === redColor)) {
          o3HexToO6Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((o6Hex.fill() === purpleColor) && (o3Hex.fill() === purpleColor)) {
          o3HexToO6Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((o6Hex.fill() === blueColor) && (o3Hex.fill() === blueColor)) {
          o3HexToO6Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((o6Hex.fill() === greenColor) && (o3Hex.fill() === greenColor)) {
          o3HexToO6Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((o6Hex.fill() === yellowColor) && (o3Hex.fill() === yellowColor)) {
          o3HexToO6Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((o6Hex.fill() === orangeColor) && (o3Hex.fill() === orangeColor)) {
          o3HexToO6Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((o6Hex.fill() === redColor) && (o3Hex.fill() === grayColor)) {
          console.log("O3toO6BreakLink")
          o3HexToO6Hex.stroke(noColor);
          domainsLayer.draw();
        }
      };
    }
  }
}]);

app.directive('gameBoardO5O7OvertLink', ['GameState', function (GameState) {
  return {
    restrict: 'A',
    link: function (scope) {
      linksGroup.add(o5HexToO7Hex);
      o5HexToO7Hex.stroke(noColor);

      GameState.addListener(onGameStateChanged);

      // ----------------------------------------------------------------------------
      scope.$on('$destroy', function() {
        GameState.removeListener(onGameStateChanged);
      });

      function onGameStateChanged() {
        if ((o5Hex.fill() === redColor) && (o7Hex.fill() === redColor)) {
          o5HexToO7Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((o5Hex.fill() === purpleColor) && (o7Hex.fill() === purpleColor)) {
          o5HexToO7Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((o5Hex.fill() === blueColor) && (o7Hex.fill() === blueColor)) {
          o5HexToO7Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((o5Hex.fill() === greenColor) && (o7Hex.fill() === greenColor)) {
          o5HexToO7Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((o5Hex.fill() === yellowColor) && (o7Hex.fill() === yellowColor)) {
          o5HexToO7Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((o5Hex.fill() === orangeColor) && (o7Hex.fill() === orangeColor)) {
          o5HexToO7Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((o5Hex.fill() === redColor) && (o7Hex.fill() === grayColor)) {
          console.log("O5toO7BreakLink")
          o5HexToO7Hex.stroke(noColor);
          domainsLayer.draw();
        }

        // Reverse link.
        if ((o7Hex.fill() === redColor) && (o5Hex.fill() === redColor)) {
          o5HexToO7Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((o7Hex.fill() === purpleColor) && (o5Hex.fill() === purpleColor)) {
          o5HexToO7Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((o7Hex.fill() === blueColor) && (o5Hex.fill() === blueColor)) {
          o5HexToO7Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((o7Hex.fill() === greenColor) && (o5Hex.fill() === greenColor)) {
          o5HexToO7Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((o7Hex.fill() === yellowColor) && (o5Hex.fill() === yellowColor)) {
          o5HexToO7Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((o7Hex.fill() === orangeColor) && (o5Hex.fill() === orangeColor)) {
          o5HexToO7Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((o7Hex.fill() === redColor) && (o5Hex.fill() === grayColor)) {
          console.log("O5toO7BreakLink")
          o5HexToO7Hex.stroke(noColor);
          domainsLayer.draw();
        }
      };
    }
  }
}]);

app.directive('gameBoardO4O6OvertLink', ['GameState', function (GameState) {
  return {
    restrict: 'A',
    link: function (scope) {
      linksGroup.add(o4HexToO6Hex);
      o4HexToO6Hex.stroke(noColor);

      GameState.addListener(onGameStateChanged);

      // ----------------------------------------------------------------------------
      scope.$on('$destroy', function() {
        GameState.removeListener(onGameStateChanged);
      });

      function onGameStateChanged() {
        if ((o4Hex.fill() === redColor) && (o6Hex.fill() === redColor)) {
          o4HexToO6Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((o4Hex.fill() === purpleColor) && (o6Hex.fill() === purpleColor)) {
          o4HexToO6Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((o4Hex.fill() === blueColor) && (o6Hex.fill() === blueColor)) {
          o4HexToO6Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((o4Hex.fill() === greenColor) && (o6Hex.fill() === greenColor)) {
          o4HexToO6Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((o4Hex.fill() === yellowColor) && (o6Hex.fill() === yellowColor)) {
          o4HexToO6Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((o4Hex.fill() === orangeColor) && (o6Hex.fill() === orangeColor)) {
          o4HexToO6Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((o4Hex.fill() === redColor) && (o6Hex.fill() === grayColor)) {
          console.log("O4toO6BreakLink")
          o4HexToO6Hex.stroke(noColor);
          domainsLayer.draw();
        }

        // Reverse link.
        if ((o6Hex.fill() === redColor) && (o4Hex.fill() === redColor)) {
          o4HexToO6Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((o6Hex.fill() === purpleColor) && (o4Hex.fill() === purpleColor)) {
          o4HexToO6Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((o6Hex.fill() === blueColor) && (o4Hex.fill() === blueColor)) {
          o4HexToO6Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((o6Hex.fill() === greenColor) && (o4Hex.fill() === greenColor)) {
          o4HexToO6Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((o6Hex.fill() === yellowColor) && (o4Hex.fill() === yellowColor)) {
          o4HexToO6Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((o6Hex.fill() === orangeColor) && (o4Hex.fill() === orangeColor)) {
          o4HexToO6Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((o6Hex.fill() === redColor) && (o4Hex.fill() === grayColor)) {
          console.log("O4toO6BreakLink")
          o4HexToO6Hex.stroke(noColor);
          domainsLayer.draw();
        }
      };
    }
  }
}]);

app.directive('gameBoardO4O7OvertLink', ['GameState', function (GameState) {
  return {
    restrict: 'A',
    link: function (scope) {
      linksGroup.add(o4HexToO7Hex);
      o4HexToO7Hex.stroke(noColor);

      GameState.addListener(onGameStateChanged);

      // ----------------------------------------------------------------------------
      scope.$on('$destroy', function() {
        GameState.removeListener(onGameStateChanged);
      });

      function onGameStateChanged() {
        if ((o4Hex.fill() === redColor) && (o7Hex.fill() === redColor)) {
          o4HexToO7Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((o4Hex.fill() === purpleColor) && (o7Hex.fill() === purpleColor)) {
          o4HexToO7Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((o4Hex.fill() === blueColor) && (o7Hex.fill() === blueColor)) {
          o4HexToO7Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((o4Hex.fill() === greenColor) && (o7Hex.fill() === greenColor)) {
          o4HexToO7Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((o4Hex.fill() === yellowColor) && (o7Hex.fill() === yellowColor)) {
          o4HexToO7Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((o4Hex.fill() === orangeColor) && (o7Hex.fill() === orangeColor)) {
          o4HexToO7Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((o4Hex.fill() === redColor) && (o7Hex.fill() === grayColor)) {
          console.log("O4toO7BreakLink")
          o4HexToO7Hex.stroke(noColor);
          domainsLayer.draw();
        }

        // Reverse link.
        if ((o7Hex.fill() === redColor) && (o4Hex.fill() === redColor)) {
          o4HexToO7Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((o7Hex.fill() === purpleColor) && (o4Hex.fill() === purpleColor)) {
          o4HexToO7Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((o7Hex.fill() === blueColor) && (o4Hex.fill() === blueColor)) {
          o4HexToO7Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((o7Hex.fill() === greenColor) && (o4Hex.fill() === greenColor)) {
          o4HexToO7Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((o7Hex.fill() === yellowColor) && (o4Hex.fill() === yellowColor)) {
          o4HexToO7Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((o7Hex.fill() === orangeColor) && (o4Hex.fill() === orangeColor)) {
          o4HexToO7Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((o7Hex.fill() === redColor) && (o4Hex.fill() === grayColor)) {
          console.log("O4toO7BreakLink")
          o4HexToO7Hex.stroke(noColor);
          domainsLayer.draw();
        }
      };
    }
  }
}]);

app.directive('gameBoardO6O7OvertLink', ['GameState', function (GameState) {
  return {
    restrict: 'A',
    link: function (scope) {
      linksGroup.add(o6HexToO7Hex);
      o6HexToO7Hex.stroke(noColor);

      GameState.addListener(onGameStateChanged);

      // ----------------------------------------------------------------------------
      scope.$on('$destroy', function() {
        GameState.removeListener(onGameStateChanged);
      });

      function onGameStateChanged() {
        if ((o6Hex.fill() === redColor) && (o7Hex.fill() === redColor)) {
          o6HexToO7Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((o6Hex.fill() === purpleColor) && (o7Hex.fill() === purpleColor)) {
          o6HexToO7Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((o6Hex.fill() === blueColor) && (o7Hex.fill() === blueColor)) {
          o6HexToO7Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((o6Hex.fill() === greenColor) && (o7Hex.fill() === greenColor)) {
          o6HexToO7Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((o6Hex.fill() === yellowColor) && (o7Hex.fill() === yellowColor)) {
          o6HexToO7Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((o6Hex.fill() === orangeColor) && (o7Hex.fill() === orangeColor)) {
          o6HexToO7Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((o6Hex.fill() === redColor) && (o7Hex.fill() === grayColor)) {
          console.log("O6toO7BreakLink")
          o6HexToO7Hex.stroke(noColor);
          domainsLayer.draw();
        }

        // Reverse link.
        if ((o7Hex.fill() === redColor) && (o6Hex.fill() === redColor)) {
          o6HexToO7Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((o7Hex.fill() === purpleColor) && (o6Hex.fill() === purpleColor)) {
          o6HexToO7Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((o7Hex.fill() === blueColor) && (o6Hex.fill() === blueColor)) {
          o6HexToO7Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((o7Hex.fill() === greenColor) && (o6Hex.fill() === greenColor)) {
          o6HexToO7Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((o7Hex.fill() === yellowColor) && (o6Hex.fill() === yellowColor)) {
          o6HexToO7Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((o7Hex.fill() === orangeColor) && (o6Hex.fill() === orangeColor)) {
          o6HexToO7Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((o7Hex.fill() === redColor) && (o6Hex.fill() === grayColor)) {
          console.log("O6toO7BreakLink")
          o6HexToO7Hex.stroke(noColor);
          domainsLayer.draw();
        }
      };
    }
  }
}]);

app.directive('gameBoardO6O8OvertLink', ['GameState', function (GameState) {
  return {
    restrict: 'A',
    link: function (scope) {
      linksGroup.add(o6HexToO8Hex);
      o6HexToO8Hex.stroke(noColor);

      GameState.addListener(onGameStateChanged);

      // ----------------------------------------------------------------------------
      scope.$on('$destroy', function() {
        GameState.removeListener(onGameStateChanged);
      });

      function onGameStateChanged() {
        if ((o6Hex.fill() === redColor) && (o8Hex.fill() === redColor)) {
          o6HexToO8Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((o6Hex.fill() === purpleColor) && (o8Hex.fill() === purpleColor)) {
          o6HexToO8Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((o6Hex.fill() === blueColor) && (o8Hex.fill() === blueColor)) {
          o6HexToO8Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((o6Hex.fill() === greenColor) && (o8Hex.fill() === greenColor)) {
          o6HexToO8Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((o6Hex.fill() === yellowColor) && (o8Hex.fill() === yellowColor)) {
          o6HexToO8Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((o6Hex.fill() === orangeColor) && (o8Hex.fill() === orangeColor)) {
          o6HexToO8Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((o6Hex.fill() === redColor) && (o8Hex.fill() === grayColor)) {
          console.log("O6toO8BreakLink")
          o6HexToO8Hex.stroke(noColor);
          domainsLayer.draw();
        }

        // Reverse link.
        if ((o8Hex.fill() === redColor) && (o6Hex.fill() === redColor)) {
          o6HexToO8Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((o8Hex.fill() === purpleColor) && (o6Hex.fill() === purpleColor)) {
          o6HexToO8Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((o8Hex.fill() === blueColor) && (o6Hex.fill() === blueColor)) {
          o6HexToO8Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((o8Hex.fill() === greenColor) && (o6Hex.fill() === greenColor)) {
          o6HexToO8Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((o8Hex.fill() === yellowColor) && (o6Hex.fill() === yellowColor)) {
          o6HexToO8Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((o8Hex.fill() === orangeColor) && (o6Hex.fill() === orangeColor)) {
          o6HexToO8Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((o8Hex.fill() === redColor) && (o6Hex.fill() === grayColor)) {
          console.log("O6toO8BreakLink")
          o6HexToO8Hex.stroke(noColor);
          domainsLayer.draw();
        }
      };
    }
  }
}]);

app.directive('gameBoardO7O8OvertLink', ['GameState', function (GameState) {
  return {
    restrict: 'A',
    link: function (scope) {
      linksGroup.add(o7HexToO8Hex);
      o7HexToO8Hex.stroke(noColor);

      GameState.addListener(onGameStateChanged);

      // ----------------------------------------------------------------------------
      scope.$on('$destroy', function() {
        GameState.removeListener(onGameStateChanged);
      });

      function onGameStateChanged() {
        if ((o7Hex.fill() === redColor) && (o8Hex.fill() === redColor)) {
          o7HexToO8Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((o7Hex.fill() === purpleColor) && (o8Hex.fill() === purpleColor)) {
          o7HexToO8Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((o7Hex.fill() === blueColor) && (o8Hex.fill() === blueColor)) {
          o7HexToO8Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((o7Hex.fill() === greenColor) && (o8Hex.fill() === greenColor)) {
          o7HexToO8Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((o7Hex.fill() === yellowColor) && (o8Hex.fill() === yellowColor)) {
          o7HexToO8Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((o7Hex.fill() === orangeColor) && (o8Hex.fill() === orangeColor)) {
          o7HexToO8Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((o7Hex.fill() === redColor) && (o8Hex.fill() === grayColor)) {
          console.log("O7toO8BreakLink")
          o7HexToO8Hex.stroke(noColor);
          domainsLayer.draw();
        }

        // Reverse link.
        if ((o8Hex.fill() === redColor) && (o7Hex.fill() === redColor)) {
          o7HexToO8Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if ((o8Hex.fill() === purpleColor) && (o7Hex.fill() === purpleColor)) {
          o7HexToO8Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if ((o8Hex.fill() === blueColor) && (o7Hex.fill() === blueColor)) {
          o7HexToO8Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if ((o8Hex.fill() === greenColor) && (o7Hex.fill() === greenColor)) {
          o7HexToO8Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if ((o8Hex.fill() === yellowColor) && (o7Hex.fill() === yellowColor)) {
          o7HexToO8Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if ((o8Hex.fill() === orangeColor) && (o7Hex.fill() === orangeColor)) {
          o7HexToO8Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
        if ((o8Hex.fill() === redColor) && (o7Hex.fill() === grayColor)) {
          console.log("O7toO8BreakLink")
          o7HexToO8Hex.stroke(noColor);
          domainsLayer.draw();
        }
      };
    }
  }
}]);
