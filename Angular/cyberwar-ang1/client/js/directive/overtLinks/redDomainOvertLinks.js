// Red Domain Links
app.directive('gameBoardR1R3OvertLink', function ($rootScope) {
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