/**
 * Created by yclee on 1/24/16.
 */

(function () {
  'use strict';

  angular
    .module('angularApp')
    .controller('MainPageController', MainPageController);

  function MainPageController(repositoryList, mediumPostList) {
    var vm = this;

    vm.repositoryList = repositoryList;
    vm.mediumPostList = mediumPostList;
  }
})();
