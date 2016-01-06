/**
 * Created by yclee on 1/6/16.
 */

(function () {
  'use strict';

  angular
    .module('angularApp')
    .run(['$rootScope', '$state', function ($rootScope, $state) {
      $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
        /**
         * @description redirect parent states to default child state for nested states
         */
        if (toState.defaultChild) {
          event.preventDefault();
          $state.go(toState.defaultChild, toParams);
        }
      });
    }]);
})();
