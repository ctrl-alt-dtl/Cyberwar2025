// Inter Domain Links
/*
RED DOMAIN
 */
app.directive('gameBoardR1P2OvertLink', ['GameState', function (GameState) {
    return {
      restrict: 'A',
      link: function (scope) {
        // console.log("gameBoardR1P2OvertLinkLoading");
        linksGroup.add(R1HexP2Hex);
        // R1HexP2Hex.stroke(noColor);
        R1HexP2Hex.stroke(redColor); // This is just for testing. It's supposed to be noColor.

        GameState.addListener(onGameStateChanged);

        // ----------------------------------------------------------------------------
        scope.$on('$destroy', function() {
          GameState.removeListener(onGameStateChanged);
        });

        function onGameStateChanged() {
          if((r1Hex.fill() === redColor) && (p2Hex.fill() === redColor)) {
            R1HexP2Hex.stroke(redColor);
            domainsLayer.draw();
          }
          if((r1Hex.fill() === purpleColor) && (p2Hex.fill() === purpleColor)) {
            R1HexP2Hex.stroke(purpleColor);
            domainsLayer.draw();
          }
          if((r1Hex.fill() === blueColor) && (p2Hex.fill() === blueColor)) {
            R1HexP2Hex.stroke(blueColor);
            domainsLayer.draw();
          }
          if((r1Hex.fill() === greenColor) && (p2Hex.fill() === greenColor)) {
            R1HexP2Hex.stroke(greenColor);
            domainsLayer.draw();
          }
          if((r1Hex.fill() === yellowColor) && (p2Hex.fill() === yellowColor)) {
            R1HexP2Hex.stroke(darkYellowColor);
            domainsLayer.draw();
          }
          if((r1Hex.fill() === orangeColor) && (p2Hex.fill() === orangeColor)) {
            R1HexP2Hex.stroke(orangeColor);
            domainsLayer.draw();
          }
        };
      }
    }
}]);

app.directive('gameBoardR3P5OvertLink', ['GameState', function (GameState) {
  return {
    restrict: 'A',
    link: function (scope) {
      // console.log("gameBoardR3P5OvertLinkLoading");
      linksGroup.add(R3HexP5Hex);
      // R3HexP5Hex.stroke(noColor);
      R3HexP5Hex.stroke(redColor); // This is just for testing. It's supposed to be noColor.

      GameState.addListener(onGameStateChanged);

      // ----------------------------------------------------------------------------
      scope.$on('$destroy', function() {
        GameState.removeListener(onGameStateChanged);
      });

      function onGameStateChanged() {
        if((r3Hex.fill() === redColor) && (p5Hex.fill() === redColor)) {
          R3HexP5Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if((r3Hex.fill() === purpleColor) && (p5Hex.fill() === purpleColor)) {
          R3HexP5Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if((r3Hex.fill() === blueColor) && (p5Hex.fill() === blueColor)) {
          R3HexP5Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if((r3Hex.fill() === greenColor) && (p5Hex.fill() === greenColor)) {
          R3HexP5Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if((r3Hex.fill() === yellowColor) && (p5Hex.fill() === yellowColor)) {
          R3HexP5Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if((r3Hex.fill() === orangeColor) && (p5Hex.fill() === orangeColor)) {
          R3HexP5Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
      };
    }
  }
}]);

app.directive('gameBoardR6P7OvertLink', ['GameState', function (GameState) {
  return {
    restrict: 'A',
    link: function (scope) {
      // console.log("gameBoardR6P7OvertLinkLoading");
      linksGroup.add(R6HexP7Hex);
      // R6HexP7Hex.stroke(noColor);
      R6HexP7Hex.stroke(redColor); // This is just for testing. It's supposed to be noColor.

      GameState.addListener(onGameStateChanged);

      // ----------------------------------------------------------------------------
      scope.$on('$destroy', function() {
        GameState.removeListener(onGameStateChanged);
      });

      function onGameStateChanged() {
        if((r6Hex.fill() === redColor) && (p7Hex.fill() === redColor)) {
          R6HexP7Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if((r6Hex.fill() === purpleColor) && (p7Hex.fill() === purpleColor)) {
          R6HexP7Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if((r6Hex.fill() === blueColor) && (p7Hex.fill() === blueColor)) {
          R6HexP7Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if((r6Hex.fill() === greenColor) && (p7Hex.fill() === greenColor)) {
          R6HexP7Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if((r6Hex.fill() === yellowColor) && (p7Hex.fill() === yellowColor)) {
          R6HexP7Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if((r6Hex.fill() === orangeColor) && (p7Hex.fill() === orangeColor)) {
          R6HexP7Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
      };
    }
  }
}]);

app.directive('gameBoardR8P8OvertLink', ['GameState', function (GameState) {
  return {
    restrict: 'A',
    link: function (scope) {
      // console.log("gameBoardR8P8OvertLinkLoading");
      linksGroup.add(R8HexP8Hex);
      // R8HexP8Hex.stroke(noColor);
      R8HexP8Hex.stroke(redColor); // This is just for testing. It's supposed to be noColor.

      GameState.addListener(onGameStateChanged);

      // ----------------------------------------------------------------------------
      scope.$on('$destroy', function() {
        GameState.removeListener(onGameStateChanged);
      });

      function onGameStateChanged() {
        if((r8Hex.fill() === redColor) && (p8Hex.fill() === redColor)) {
          R8HexP8Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if((r8Hex.fill() === purpleColor) && (p8Hex.fill() === purpleColor)) {
          R8HexP8Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if((r8Hex.fill() === blueColor) && (p8Hex.fill() === blueColor)) {
          R8HexP8Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if((r8Hex.fill() === greenColor) && (p8Hex.fill() === greenColor)) {
          R8HexP8Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if((r8Hex.fill() === yellowColor) && (p8Hex.fill() === yellowColor)) {
          R8HexP8Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if((r8Hex.fill() === orangeColor) && (p8Hex.fill() === orangeColor)) {
          R8HexP8Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
      };
    }
  }
}]);


/*
PURPLE DOMAIN
 */
app.directive('gameBoardP1B2OvertLink', ['GameState', function (GameState) {
  return {
    restrict: 'A',
    link: function (scope) {
      // console.log("gameBoardP1B2OvertLinkLoading");
      linksGroup.add(P1HexB2Hex);
      // P1HexB2Hex.stroke(noColor);
      P1HexB2Hex.stroke(purpleColor); // This is just for testing. It's supposed to be noColor.

      GameState.addListener(onGameStateChanged);

      // ----------------------------------------------------------------------------
      scope.$on('$destroy', function() {
        GameState.removeListener(onGameStateChanged);
      });

      function onGameStateChanged() {
        if((p1Hex.fill() === redColor) && (b2Hex.fill() === redColor)) {
          P1HexB2Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if((p1Hex.fill() === purpleColor) && (b2Hex.fill() === purpleColor)) {
          P1HexB2Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if((p1Hex.fill() === blueColor) && (b2Hex.fill() === blueColor)) {
          P1HexB2Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if((p1Hex.fill() === greenColor) && (b2Hex.fill() === greenColor)) {
          P1HexB2Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if((p1Hex.fill() === yellowColor) && (b2Hex.fill() === yellowColor)) {
          P1HexB2Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if((p1Hex.fill() === orangeColor) && (b2Hex.fill() === orangeColor)) {
          P1HexB2Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
      };
    }
  }
}]);

app.directive('gameBoardP3B5OvertLink', ['GameState', function (GameState) {
  return {
    restrict: 'A',
    link: function (scope) {
      // console.log("gameBoardP3B5OvertLinkLoading");
      linksGroup.add(P3HexB5Hex);
      // P3HexB5Hex.stroke(noColor);
      P3HexB5Hex.stroke(purpleColor); // This is just for testing. It's supposed to be noColor.

      GameState.addListener(onGameStateChanged);

      // ----------------------------------------------------------------------------
      scope.$on('$destroy', function() {
        GameState.removeListener(onGameStateChanged);
      });

      function onGameStateChanged() {
        if((p3Hex.fill() === redColor) && (b5Hex.fill() === redColor)) {
          P3HexB5Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if((p3Hex.fill() === purpleColor) && (b5Hex.fill() === purpleColor)) {
          P3HexB5Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if((p3Hex.fill() === blueColor) && (b5Hex.fill() === blueColor)) {
          P3HexB5Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if((p3Hex.fill() === greenColor) && (b5Hex.fill() === greenColor)) {
          P3HexB5Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if((p3Hex.fill() === yellowColor) && (b5Hex.fill() === yellowColor)) {
          P3HexB5Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if((p3Hex.fill() === orangeColor) && (b5Hex.fill() === orangeColor)) {
          P3HexB5Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
      };
    }
  }
}]);

app.directive('gameBoardP6B7OvertLink', ['GameState', function (GameState) {
  return {
    restrict: 'A',
    link: function (scope) {
      // console.log("gameBoardP6B7OvertLinkLoading");
      linksGroup.add(P6HexB7Hex);
      // P6HexB7Hex.stroke(noColor);
      P6HexB7Hex.stroke(purpleColor); // This is just for testing. It's supposed to be noColor.

      GameState.addListener(onGameStateChanged);

      // ----------------------------------------------------------------------------
      scope.$on('$destroy', function() {
        GameState.removeListener(onGameStateChanged);
      });

      function onGameStateChanged() {
        if((p6Hex.fill() === redColor) && (b7Hex.fill() === redColor)) {
          P6HexB7Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if((p6Hex.fill() === purpleColor) && (b7Hex.fill() === purpleColor)) {
          P6HexB7Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if((p6Hex.fill() === blueColor) && (b7Hex.fill() === blueColor)) {
          P6HexB7Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if((p6Hex.fill() === greenColor) && (b7Hex.fill() === greenColor)) {
          P6HexB7Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if((p6Hex.fill() === yellowColor) && (b7Hex.fill() === yellowColor)) {
          P6HexB7Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if((p6Hex.fill() === orangeColor) && (b7Hex.fill() === orangeColor)) {
          P6HexB7Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
      };
    }
  }
}]);

app.directive('gameBoardP8B8OvertLink', ['GameState', function (GameState) {
  return {
    restrict: 'A',
    link: function (scope) {
      // console.log("gameBoardP8B8OvertLinkLoading");
      linksGroup.add(P8HexB8Hex);
      // P8HexB8Hex.stroke(noColor);
      P8HexB8Hex.stroke(purpleColor); // This is just for testing. It's supposed to be noColor.

      GameState.addListener(onGameStateChanged);

      // ----------------------------------------------------------------------------
      scope.$on('$destroy', function() {
        GameState.removeListener(onGameStateChanged);
      });

      function onGameStateChanged() {
        if((p8Hex.fill() === redColor) && (b8Hex.fill() === redColor)) {
          P8HexB8Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if((p8Hex.fill() === purpleColor) && (b8Hex.fill() === purpleColor)) {
          P8HexB8Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if((p8Hex.fill() === blueColor) && (b8Hex.fill() === blueColor)) {
          P8HexB8Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if((p8Hex.fill() === greenColor) && (b8Hex.fill() === greenColor)) {
          P8HexB8Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if((p8Hex.fill() === yellowColor) && (b8Hex.fill() === yellowColor)) {
          P8HexB8Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if((p8Hex.fill() === orangeColor) && (b8Hex.fill() === orangeColor)) {
          P8HexB8Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
      };
    }
  }
}]);

/*
BLUE DOMAIN
 */
app.directive('gameBoardB1G2OvertLink', ['GameState', function (GameState) {
  return {
    restrict: 'A',
    link: function (scope) {
      // console.log("gameBoardB1G2OvertLinkLoading");
      linksGroup.add(B1HexG2Hex);
      // B1HexG2Hex.stroke(noColor);
      B1HexG2Hex.stroke(blueColor); // This is just for testing. It's supposed to be noColor.

      GameState.addListener(onGameStateChanged);

      // ----------------------------------------------------------------------------
      scope.$on('$destroy', function() {
        GameState.removeListener(onGameStateChanged);
      });

      function onGameStateChanged() {
        if((b1Hex.fill() === redColor) && (g2Hex.fill() === redColor)) {
          B1HexG2Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if((b1Hex.fill() === purpleColor) && (g2Hex.fill() === purpleColor)) {
          B1HexG2Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if((b1Hex.fill() === blueColor) && (g2Hex.fill() === blueColor)) {
          B1HexG2Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if((b1Hex.fill() === greenColor) && (g2Hex.fill() === greenColor)) {
          B1HexG2Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if((b1Hex.fill() === yellowColor) && (g2Hex.fill() === yellowColor)) {
          B1HexG2Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if((b1Hex.fill() === orangeColor) && (g2Hex.fill() === orangeColor)) {
          B1HexG2Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
      };
    }
  }
}]);

app.directive('gameBoardB3G5OvertLink', ['GameState', function (GameState) {
  return {
    restrict: 'A',
    link: function (scope) {
      // console.log("gameBoardB3G5OvertLinkLoading");
      linksGroup.add(B3HexG5Hex);
      // B3HexG5Hex.stroke(noColor);
      B3HexG5Hex.stroke(blueColor); // This is just for testing. It's supposed to be noColor.

      GameState.addListener(onGameStateChanged);

      // ----------------------------------------------------------------------------
      scope.$on('$destroy', function() {
        GameState.removeListener(onGameStateChanged);
      });

      function onGameStateChanged() {
        if((b3Hex.fill() === redColor) && (g5Hex.fill() === redColor)) {
          B3HexG5Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if((b3Hex.fill() === purpleColor) && (g5Hex.fill() === purpleColor)) {
          B3HexG5Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if((b3Hex.fill() === blueColor) && (g5Hex.fill() === blueColor)) {
          B3HexG5Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if((b3Hex.fill() === greenColor) && (g5Hex.fill() === greenColor)) {
          B3HexG5Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if((b3Hex.fill() === yellowColor) && (g5Hex.fill() === yellowColor)) {
          B3HexG5Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if((b3Hex.fill() === orangeColor) && (g5Hex.fill() === orangeColor)) {
          B3HexG5Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
      };
    }
  }
}]);

app.directive('gameBoardB6G7OvertLink', ['GameState', function (GameState) {
  return {
    restrict: 'A',
    link: function (scope) {
      // console.log("gameBoardB6G7OvertLinkLoading");
      linksGroup.add(B6HexG7Hex);
      // B6HexG7Hex.stroke(noColor);
      B6HexG7Hex.stroke(blueColor); // This is just for testing. It's supposed to be noColor.

      GameState.addListener(onGameStateChanged);

      // ----------------------------------------------------------------------------
      scope.$on('$destroy', function() {
        GameState.removeListener(onGameStateChanged);
      });

      function onGameStateChanged() {
        if((b6Hex.fill() === redColor) && (g7Hex.fill() === redColor)) {
          B6HexG7Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if((b6Hex.fill() === purpleColor) && (g7Hex.fill() === purpleColor)) {
          B6HexG7Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if((b6Hex.fill() === blueColor) && (g7Hex.fill() === blueColor)) {
          B6HexG7Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if((b6Hex.fill() === greenColor) && (g7Hex.fill() === greenColor)) {
          B6HexG7Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if((b6Hex.fill() === yellowColor) && (g7Hex.fill() === yellowColor)) {
          B6HexG7Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if((b6Hex.fill() === orangeColor) && (g7Hex.fill() === orangeColor)) {
          B6HexG7Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
      };
    }
  }
}]);

app.directive('gameBoardB8G8OvertLink', ['GameState', function (GameState) {
  return {
    restrict: 'A',
    link: function (scope) {
      // console.log("gameBoardB8G8OvertLinkLoading");
      linksGroup.add(B8HexG8Hex);
      // B8HexG8Hex.stroke(noColor);
      B8HexG8Hex.stroke(blueColor); // This is just for testing. It's supposed to be noColor.

      GameState.addListener(onGameStateChanged);

      // ----------------------------------------------------------------------------
      scope.$on('$destroy', function() {
        GameState.removeListener(onGameStateChanged);
      });

      function onGameStateChanged() {
        if((b8Hex.fill() === redColor) && (g8Hex.fill() === redColor)) {
          B8HexG8Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if((b8Hex.fill() === purpleColor) && (g8Hex.fill() === purpleColor)) {
          B8HexG8Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if((b8Hex.fill() === blueColor) && (g8Hex.fill() === blueColor)) {
          B8HexG8Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if((b8Hex.fill() === greenColor) && (g8Hex.fill() === greenColor)) {
          B8HexG8Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if((b8Hex.fill() === yellowColor) && (g8Hex.fill() === yellowColor)) {
          B8HexG8Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if((b8Hex.fill() === orangeColor) && (g8Hex.fill() === orangeColor)) {
          B8HexG8Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
      };
    }
  }
}]);

/*
GREEN DOMAIN
 */
app.directive('gameBoardG1Y2OvertLink', ['GameState', function (GameState) {
  return {
    restrict: 'A',
    link: function (scope) {
      // console.log("gameBoardG1Y2OvertLinkLoading");
      linksGroup.add(G1HexY2Hex);
      // G1HexY2Hex.stroke(noColor);
      G1HexY2Hex.stroke(greenColor); // This is just for testing. It's supposed to be noColor.

      GameState.addListener(onGameStateChanged);

      // ----------------------------------------------------------------------------
      scope.$on('$destroy', function() {
        GameState.removeListener(onGameStateChanged);
      });

      function onGameStateChanged() {
        if((g1Hex.fill() === redColor) && (y2Hex.fill() === redColor)) {
          G1HexY2Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if((g1Hex.fill() === purpleColor) && (y2Hex.fill() === purpleColor)) {
          G1HexY2Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if((g1Hex.fill() === blueColor) && (y2Hex.fill() === blueColor)) {
          G1HexY2Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if((g1Hex.fill() === greenColor) && (y2Hex.fill() === greenColor)) {
          G1HexY2Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if((g1Hex.fill() === yellowColor) && (y2Hex.fill() === yellowColor)) {
          G1HexY2Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if((g1Hex.fill() === orangeColor) && (y2Hex.fill() === orangeColor)) {
          G1HexY2Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
      };
    }
  }
}]);

app.directive('gameBoardG3Y5OvertLink', ['GameState', function (GameState) {
  return {
    restrict: 'A',
    link: function (scope) {
      // console.log("gameBoardG3Y5OvertLinkLoading");
      linksGroup.add(G3HexY5Hex);
      // G3HexY5Hex.stroke(noColor);
      G3HexY5Hex.stroke(greenColor); // This is just for testing. It's supposed to be noColor.

      GameState.addListener(onGameStateChanged);

      // ----------------------------------------------------------------------------
      scope.$on('$destroy', function() {
        GameState.removeListener(onGameStateChanged);
      });

      function onGameStateChanged() {
        if((g3Hex.fill() === redColor) && (y5Hex.fill() === redColor)) {
          G3HexY5Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if((g3Hex.fill() === purpleColor) && (y5Hex.fill() === purpleColor)) {
          G3HexY5Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if((g3Hex.fill() === blueColor) && (y5Hex.fill() === blueColor)) {
          G3HexY5Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if((g3Hex.fill() === greenColor) && (y5Hex.fill() === greenColor)) {
          G3HexY5Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if((g3Hex.fill() === yellowColor) && (y5Hex.fill() === yellowColor)) {
          G3HexY5Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if((g3Hex.fill() === orangeColor) && (y5Hex.fill() === orangeColor)) {
          G3HexY5Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
      };
    }
  }
}]);

app.directive('gameBoardG6Y7OvertLink', ['GameState', function (GameState) {
  return {
    restrict: 'A',
    link: function (scope) {
      // console.log("gameBoardG6Y7OvertLinkLoading");
      linksGroup.add(G6HexY7Hex);
      // G6HexY7Hex.stroke(noColor);
      G6HexY7Hex.stroke(greenColor); // This is just for testing. It's supposed to be noColor.

      GameState.addListener(onGameStateChanged);

      // ----------------------------------------------------------------------------
      scope.$on('$destroy', function() {
        GameState.removeListener(onGameStateChanged);
      });

      function onGameStateChanged() {
        if((g6Hex.fill() === redColor) && (y7Hex.fill() === redColor)) {
          G6HexY7Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if((g6Hex.fill() === purpleColor) && (y7Hex.fill() === purpleColor)) {
          G6HexY7Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if((g6Hex.fill() === blueColor) && (y7Hex.fill() === blueColor)) {
          G6HexY7Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if((g6Hex.fill() === greenColor) && (y7Hex.fill() === greenColor)) {
          G6HexY7Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if((g6Hex.fill() === yellowColor) && (y7Hex.fill() === yellowColor)) {
          G6HexY7Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if((g6Hex.fill() === orangeColor) && (y7Hex.fill() === orangeColor)) {
          G6HexY7Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
      };
    }
  }
}]);

app.directive('gameBoardG8Y8OvertLink', ['GameState', function (GameState) {
  return {
    restrict: 'A',
    link: function (scope) {
      // console.log("gameBoardG8Y8OvertLinkLoading");
      linksGroup.add(G8HexY8Hex);
      // G8HexY8Hex.stroke(noColor);
      G8HexY8Hex.stroke(greenColor); // This is just for testing. It's supposed to be noColor.

      GameState.addListener(onGameStateChanged);

      // ----------------------------------------------------------------------------
      scope.$on('$destroy', function() {
        GameState.removeListener(onGameStateChanged);
      });

      function onGameStateChanged() {
        if((g8Hex.fill() === redColor) && (y8Hex.fill() === redColor)) {
          G8HexY8Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if((g8Hex.fill() === purpleColor) && (y8Hex.fill() === purpleColor)) {
          G8HexY8Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if((g8Hex.fill() === blueColor) && (y8Hex.fill() === blueColor)) {
          G8HexY8Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if((g8Hex.fill() === greenColor) && (y8Hex.fill() === greenColor)) {
          G8HexY8Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if((g8Hex.fill() === yellowColor) && (y8Hex.fill() === yellowColor)) {
          G8HexY8Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if((g8Hex.fill() === orangeColor) && (y8Hex.fill() === orangeColor)) {
          G8HexY8Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
      };
    }
  }
}]);

/*
YELLOW DOMAIN
 */
app.directive('gameBoardY1O2OvertLink', ['GameState', function (GameState) {
  return {
    restrict: 'A',
    link: function (scope) {
      // console.log("gameBoardY1O2OvertLinkLoading");
      linksGroup.add(Y1HexO2Hex);
      // Y1HexO2Hex.stroke(noColor);
      Y1HexO2Hex.stroke(darkYellowColor); // This is just for testing. It's supposed to be noColor.

      GameState.addListener(onGameStateChanged);

      // ----------------------------------------------------------------------------
      scope.$on('$destroy', function() {
        GameState.removeListener(onGameStateChanged);
      });

      function onGameStateChanged() {
        if((y1Hex.fill() === redColor) && (o2Hex.fill() === redColor)) {
          Y1HexO2Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if((y1Hex.fill() === purpleColor) && (o2Hex.fill() === purpleColor)) {
          Y1HexO2Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if((y1Hex.fill() === blueColor) && (o2Hex.fill() === blueColor)) {
          Y1HexO2Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if((y1Hex.fill() === greenColor) && (o2Hex.fill() === greenColor)) {
          Y1HexO2Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if((y1Hex.fill() === yellowColor) && (o2Hex.fill() === yellowColor)) {
          Y1HexO2Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if((y1Hex.fill() === orangeColor) && (o2Hex.fill() === orangeColor)) {
          Y1HexO2Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
      };
    }
  }
}]);

app.directive('gameBoardY3O5OvertLink', ['GameState', function (GameState) {
  return {
    restrict: 'A',
    link: function (scope) {
      // console.log("gameBoardY3O5OvertLinkLoading");
      linksGroup.add(Y3HexO5Hex);
      // Y3HexO5Hex.stroke(noColor);
      Y3HexO5Hex.stroke(darkYellowColor); // This is just for testing. It's supposed to be noColor.

      GameState.addListener(onGameStateChanged);

      // ----------------------------------------------------------------------------
      scope.$on('$destroy', function() {
        GameState.removeListener(onGameStateChanged);
      });

      function onGameStateChanged() {
        if((y3Hex.fill() === redColor) && (o5Hex.fill() === redColor)) {
          Y3HexO5Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if((y3Hex.fill() === purpleColor) && (o5Hex.fill() === purpleColor)) {
          Y3HexO5Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if((y3Hex.fill() === blueColor) && (o5Hex.fill() === blueColor)) {
          Y3HexO5Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if((y3Hex.fill() === greenColor) && (o5Hex.fill() === greenColor)) {
          Y3HexO5Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if((y3Hex.fill() === yellowColor) && (o5Hex.fill() === yellowColor)) {
          Y3HexO5Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if((y3Hex.fill() === orangeColor) && (o5Hex.fill() === orangeColor)) {
          Y3HexO5Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
      };
    }
  }
}]);

app.directive('gameBoardY6O7OvertLink', ['GameState', function (GameState) {
  return {
    restrict: 'A',
    link: function (scope) {
      // console.log("gameBoardY6O7OvertLinkLoading");
      linksGroup.add(Y6HexO7Hex);
      // Y6HexO7Hex.stroke(noColor);
      Y6HexO7Hex.stroke(darkYellowColor); // This is just for testing. It's supposed to be noColor.

      GameState.addListener(onGameStateChanged);

      // ----------------------------------------------------------------------------
      scope.$on('$destroy', function() {
        GameState.removeListener(onGameStateChanged);
      });

      function onGameStateChanged() {
        if((y6Hex.fill() === redColor) && (o7Hex.fill() === redColor)) {
          Y6HexO7Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if((y6Hex.fill() === purpleColor) && (o7Hex.fill() === purpleColor)) {
          Y6HexO7Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if((y6Hex.fill() === blueColor) && (o7Hex.fill() === blueColor)) {
          Y6HexO7Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if((y6Hex.fill() === greenColor) && (o7Hex.fill() === greenColor)) {
          Y6HexO7Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if((y6Hex.fill() === yellowColor) && (o7Hex.fill() === yellowColor)) {
          Y6HexO7Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if((y6Hex.fill() === orangeColor) && (o7Hex.fill() === orangeColor)) {
          Y6HexO7Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
      };
    }
  }
}]);

app.directive('gameBoardY8O8OvertLink', ['GameState', function (GameState) {
  return {
    restrict: 'A',
    link: function (scope) {
      // console.log("gameBoardY8O8OvertLinkLoading");
      linksGroup.add(Y8HexO8Hex);
      // Y8HexO8Hex.stroke(noColor);
      Y8HexO8Hex.stroke(darkYellowColor); // This is just for testing. It's supposed to be noColor.

      GameState.addListener(onGameStateChanged);

      // ----------------------------------------------------------------------------
      scope.$on('$destroy', function() {
        GameState.removeListener(onGameStateChanged);
      });

      function onGameStateChanged() {
        if((y8Hex.fill() === redColor) && (o8Hex.fill() === redColor)) {
          Y8HexO8Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if((y8Hex.fill() === purpleColor) && (o8Hex.fill() === purpleColor)) {
          Y8HexO8Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if((y8Hex.fill() === blueColor) && (o8Hex.fill() === blueColor)) {
          Y8HexO8Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if((y8Hex.fill() === greenColor) && (o8Hex.fill() === greenColor)) {
          Y8HexO8Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if((y8Hex.fill() === yellowColor) && (o8Hex.fill() === yellowColor)) {
          Y8HexO8Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if((y8Hex.fill() === orangeColor) && (o8Hex.fill() === orangeColor)) {
          Y8HexO8Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
      };
    }
  }
}]);

/*
ORANGE DOMAIN
 */
app.directive('gameBoardO1R2OvertLink', ['GameState', function (GameState) {
  return {
    restrict: 'A',
    link: function (scope) {
      // console.log("gameBoardO1R2OvertLinkLoading");
      linksGroup.add(O1HexR2Hex);
      // O1HexR2Hex.stroke(noColor);
      O1HexR2Hex.stroke(orangeColor); // This is just for testing. It's supposed to be noColor.

      GameState.addListener(onGameStateChanged);

      // ----------------------------------------------------------------------------
      scope.$on('$destroy', function() {
        GameState.removeListener(onGameStateChanged);
      });

      function onGameStateChanged() {
        if((o1Hex.fill() === redColor) && (r2Hex.fill() === redColor)) {
          O1HexR2Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if((o1Hex.fill() === purpleColor) && (r2Hex.fill() === purpleColor)) {
          O1HexR2Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if((o1Hex.fill() === blueColor) && (r2Hex.fill() === blueColor)) {
          O1HexR2Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if((o1Hex.fill() === greenColor) && (r2Hex.fill() === greenColor)) {
          O1HexR2Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if((o1Hex.fill() === yellowColor) && (r2Hex.fill() === yellowColor)) {
          O1HexR2Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if((o1Hex.fill() === orangeColor) && (r2Hex.fill() === orangeColor)) {
          O1HexR2Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
      };
    }
  }
}]);

app.directive('gameBoardO3R5OvertLink', ['GameState', function (GameState) {
  return {
    restrict: 'A',
    link: function (scope) {
      // console.log("gameBoardO3R5OvertLinkLoading");
      linksGroup.add(O3HexR5Hex);
      // O3HexR5Hex.stroke(noColor);
      O3HexR5Hex.stroke(orangeColor); // This is just for testing. It's supposed to be noColor.

      GameState.addListener(onGameStateChanged);

      // ----------------------------------------------------------------------------
      scope.$on('$destroy', function() {
        GameState.removeListener(onGameStateChanged);
      });

      function onGameStateChanged() {
        if((o3Hex.fill() === redColor) && (r5Hex.fill() === redColor)) {
          O3HexR5Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if((o3Hex.fill() === purpleColor) && (r5Hex.fill() === purpleColor)) {
          O3HexR5Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if((o3Hex.fill() === blueColor) && (r5Hex.fill() === blueColor)) {
          O3HexR5Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if((o3Hex.fill() === greenColor) && (r5Hex.fill() === greenColor)) {
          O3HexR5Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if((o3Hex.fill() === yellowColor) && (r5Hex.fill() === yellowColor)) {
          O3HexR5Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if((o3Hex.fill() === orangeColor) && (r5Hex.fill() === orangeColor)) {
          O3HexR5Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
      };
    }
  }
}]);

app.directive('gameBoardO6R7OvertLink', ['GameState', function (GameState) {
  return {
    restrict: 'A',
    link: function (scope) {
      // console.log("gameBoardO6R7OvertLinkLoading");
      linksGroup.add(O6HexR7Hex);
      // O6HexR7Hex.stroke(noColor);
      O6HexR7Hex.stroke(orangeColor); // This is just for testing. It's supposed to be noColor.

      GameState.addListener(onGameStateChanged);

      // ----------------------------------------------------------------------------
      scope.$on('$destroy', function() {
        GameState.removeListener(onGameStateChanged);
      });

      function onGameStateChanged() {
        if((o6Hex.fill() === redColor) && (r7Hex.fill() === redColor)) {
          O6HexR7Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if((o6Hex.fill() === purpleColor) && (r7Hex.fill() === purpleColor)) {
          O6HexR7Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if((o6Hex.fill() === blueColor) && (r7Hex.fill() === blueColor)) {
          O6HexR7Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if((o6Hex.fill() === greenColor) && (r7Hex.fill() === greenColor)) {
          O6HexR7Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if((o6Hex.fill() === yellowColor) && (r7Hex.fill() === yellowColor)) {
          O6HexR7Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if((o6Hex.fill() === orangeColor) && (r7Hex.fill() === orangeColor)) {
          O6HexR7Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
      };
    }
  }
}]);

app.directive('gameBoardO8R8OvertLink', ['GameState', function (GameState) {
  return {
    restrict: 'A',
    link: function (scope) {
      // console.log("gameBoardO8R8OvertLinkLoading");
      linksGroup.add(O8HexR8Hex);
      // O8HexR8Hex.stroke(noColor);
      O8HexR8Hex.stroke(orangeColor); // This is just for testing. It's supposed to be noColor.

      GameState.addListener(onGameStateChanged);

      // ----------------------------------------------------------------------------
      scope.$on('$destroy', function() {
        GameState.removeListener(onGameStateChanged);
      });

      function onGameStateChanged() {
        if((o8Hex.fill() === redColor) && (r8Hex.fill() === redColor)) {
          O8HexR8Hex.stroke(redColor);
          domainsLayer.draw();
        }
        if((o8Hex.fill() === purpleColor) && (r8Hex.fill() === purpleColor)) {
          O8HexR8Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        if((o8Hex.fill() === blueColor) && (r8Hex.fill() === blueColor)) {
          O8HexR8Hex.stroke(blueColor);
          domainsLayer.draw();
        }
        if((o8Hex.fill() === greenColor) && (r8Hex.fill() === greenColor)) {
          O8HexR8Hex.stroke(greenColor);
          domainsLayer.draw();
        }
        if((o8Hex.fill() === yellowColor) && (r8Hex.fill() === yellowColor)) {
          O8HexR8Hex.stroke(darkYellowColor);
          domainsLayer.draw();
        }
        if((o8Hex.fill() === orangeColor) && (r8Hex.fill() === orangeColor)) {
          O8HexR8Hex.stroke(orangeColor);
          domainsLayer.draw();
        }
      };
    }
  }
}]);

