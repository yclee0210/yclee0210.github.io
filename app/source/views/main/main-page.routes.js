/**
 * Created by yclee on 1/6/16.
 */

(function () {
  'use strict';

  angular
    .module('angularApp')
    .config(function ($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/welcome');
      $stateProvider
        .state('main', {
          url: '/welcome',
          templateUrl: 'source/views/main/main-page.html'
        });
    });
})();
