/**
 * Created by yclee on 1/24/16.
 */

(function () {
  'use strict';

  angular
    .module('angularApp')
    .controller('MainPageController', MainPageController);

  function MainPageController(repositoryList, wordPressPostList, repositoryCard) {
    var vm = this;

    vm.repositoryList = repositoryCard.setRepositoryList(repositoryList, wordPressPostList);
  }

  MainPageController.$inject = ['repositoryList', 'wordPressPostList', 'repositoryCard'];
})();
