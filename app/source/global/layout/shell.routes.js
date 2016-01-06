/**
 * Created by yclee on 1/6/16.
 */

(function () {
  'use strict';

  angular
    .module('angularApp')
    .config(function ($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/main');
      $stateProvider
        .state('app', {
          url: '',
          templateUrl: 'source/global/layout/shell.html',
          controller: 'ShellController',
          controllerAs: 'vm',
          defaultChild: 'app.main'
        });
    });
})();
