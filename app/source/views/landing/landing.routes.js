/**
 * Created by yclee on 1/6/16.
 */

(function () {
  'use strict';

  angular
    .module('angularApp')
    .config(function ($stateProvider) {
      $stateProvider
        .state('landing', {
          url: '',
          templateUrl: 'source/views/landing/landing.html'
        });
    });
})();