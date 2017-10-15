// Red Domain Links
app.directive('gameBoardPbaseP2OvertLink', function () {
  return {
    restrict: 'A',
    link: function (scope) {
      console.log("gameBoardPurpleBaseP2OvertLinkLoading");
      linksGroup.add(pBaseToP2Hex);
      pBaseToP2Hex.stroke(noColor);

      scope.$watch(function() {
        if((pBase.fill() === purpleColor) && (p2Hex.fill() === purpleColor)) {
          pBaseToP2Hex.stroke(purpleColor);
          domainsLayer.draw();
        }
        else {
          pBaseToP2Hex.stroke(noColor);
          domainsLayer.batchDraw();
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

      console.log("gameBoardPurpleBaseP2OvertLinkLoaded");
    }
  }
});
