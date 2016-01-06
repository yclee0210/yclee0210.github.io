/**
 * Created by yclee on 1/6/16.
 */

(function () {
  'use strict';

  angular
    .module('angularApp')
    .controller('ShellController', ShellController);

  ShellController.$inject = ['$rootScope', 'SHELL'];

  function ShellController($rootScope, SHELL) {
    $rootScope.layout = SHELL;
  }
})();
