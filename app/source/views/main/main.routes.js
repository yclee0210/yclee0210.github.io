/**
 * Created by yclee on 1/6/16.
 */

(function () {
  'use strict';

  angular
    .module('angularApp')
    .config(function ($stateProvider) {
      $stateProvider
        .state('app.main', {
          url: '/main',
          templateUrl: 'source/views/main/main.html'
        });
    });
})();
