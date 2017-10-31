angular.module('CyberWar')
.directive('serverNode', ['GameState', 'GameUtil', '$rootScope', '$timeout', function(GameState, GameUtil, $rootScope, $timeout) {
  function link($scope, element, attrs) {
    GameState.addListener(onGameStateChanged);

    var hex = GameUtil.getHex($scope.color, $scope.index);
    var text = GameUtil.getHexText($scope.color, $scope.index);

    // ----------------------------------------------------------------------------
    $scope.$on('$destroy', function() {
      GameState.removeListener(onGameStateChanged);
    });

    function onGameStateChanged() {
      var serverNode = GameUtil.getServerNode(GameState.currentGameState.serverNodes, $scope.color, $scope.index);
      hex.fill(GameUtil.getColor(serverNode.ownerColor));
      text.text(serverNode.strength);
      domainsGroup.draw();
    }

    // add server point to the domain
    domainsGroup.add(hex, text);

    var nodePosition = GameUtil.getHexPosition($scope.color, $scope.index);
    var options = {
      x: nodePosition.x,
      y: nodePosition.y,
      sides: 6,
      radius: radius,
      stroke: 'black',
      strokeWidth: 2,
      rotation: 90,
      id: 'r1HexListener'
    }

    $scope.konvaobj = new Konva.RegularPolygon(options);
    // add cursor styling
    $scope.konvaobj.on('mouseover', function () {
      document.body.style.cursor = 'pointer';
    });
    $scope.konvaobj.on('mouseout', function () {
      document.body.style.cursor = 'default';
      $rootScope.$emit("CANVAS-MOUSEOUT");
    });

    $scope.konvaobj.on('click', function () {
      console.log($scope.color + " Hex " + $scope.index);
      $timeout(function() {
        // Implement server point on-click logic here
      });

      // TESTING
      // Modal Callback Function (ATTEMPT TO FILL A HEX ONCLICK)
      // scope.callbackFnTest(r1Hex.fill(purpleColor));
      domainsLayer.draw();
    });
    domainsGroup.add($scope.konvaobj);
  }
  return {
    link: link,
    restrict: 'E',
    scope: {
      callbackFn: '&',
      color: '=',
      index: '='
    },
  }
}]);
