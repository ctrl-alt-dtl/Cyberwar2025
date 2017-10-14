// Inter Domain Links
app.directive('gameBoardR1P2OvertLink', function ($rootScope) {
    return {
      restrict: 'A',
      link: function (scope) {
        console.log("gameBoardR1P2OvertLinkLoading");
        linksGroup.add(R1HexP2Hex);
        R1HexP2Hex.stroke(noColor);

        scope.$watch(function() {
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
        });

        console.log("gameBoardR1P2OvertLinkLoaded");
      }
    }
  });
