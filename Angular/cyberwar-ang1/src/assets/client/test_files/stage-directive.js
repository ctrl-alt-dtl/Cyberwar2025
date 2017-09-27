(function() {
  'use strict';
  angular.module('konva')
    .directive('stage', ['$rootScope',
      function stageDirective ($rootScope) {
        return {
          restrict: 'EA',
          scope: {
            stageWidth: '=',
            stageHeight: '='
          },
          link: function linkFn (scope, elem, attrs) {
            var id = attrs["id"];
            if (!id) {
              id = Math.random().toString(36).substring(8);
              elem.attr('id', id);
            }
            /**
             * The main Konva (canvas) layer instance.
             */

            var BASE_BOARD_WIDTH = 1280;
            var BASE_BOARD_HEIGHT = 960;

            /**
             * Other Resolutions: 1152x864, 1280x960, 1400x1050, 1440x1080
             */

            var DOMAIN_LAYER_BOARD_ROTATION = 0;

            var konva= {
              stage: new Konva.Stage({
                container: id,
                width: BASE_BOARD_WIDTH,
                height: BASE_BOARD_HEIGHT
              })
            };


            scope.konva= konva;

            $rootScope.$broadcast('KONVA:READY', konva.stage);
          }
        };
      }]);
})();
