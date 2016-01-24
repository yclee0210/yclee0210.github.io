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

    vm.repositoryList = setGhPageUrl(repositoryList);
    vm.mediumPostList = mediumPostList;

    function setGhPageUrl(repositoryList) {
      var mainPageDomainMatcher = new RegExp('\.github\.io');

      angular.forEach(repositoryList, function (repository) {
        var domain = 'http://' + repository.owner.login + '.github.io';

        repository.ghPageUrl = mainPageDomainMatcher.test(repository.name) ? domain : domain + '/' + repository.name;
      });

      return repositoryList;
    }
  }
})();
