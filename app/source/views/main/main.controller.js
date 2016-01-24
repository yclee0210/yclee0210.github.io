/**
 * Created by yclee on 1/24/16.
 */

(function () {
  'use strict';

  angular
    .module('angularApp')
    .controller('MainPageController', MainPageController);

  function MainPageController(repositoryList, mediumPostList, wordPressPostList) {
    var vm = this;

    vm.repositoryList = setRepositoryList(repositoryList, wordPressPostList);
    vm.mediumPostList = mediumPostList;

    function setRepositoryList(repositoryList, wordPressPostList) {
      angular.forEach(repositoryList, function (repository) {
        setPostsByProjects(repository, wordPressPostList);
        setGhPageUrl(repository);
        setWordPressUrl(repository);
      });

      return repositoryList;
    }

    function setGhPageUrl(repository) {
      var mainPageDomainMatcher = new RegExp('\.github\.io');
      var domain = 'http://' + repository.owner.login + '.github.io';

      repository.ghPageUrl = mainPageDomainMatcher.test(repository.name) ? domain : domain + '/' + repository.name;
    }

    function setPostsByProjects(repository, wordPressPostList) {
      repository.posts = [];
      angular.forEach(wordPressPostList.posts, function (post) {
        if (post.categories[repository.name]) {
          repository.posts.push(post);
        }
      });

      repository.postLength = repository.posts.length;
      repository.blankListStyle = {
        'height': 96 * (3 - repository.posts.length) + 'px'
      };
    }

    function setWordPressUrl(repository) {
      var wordPressUri = angular.copy(repository.name).replace(/\./g, '-');
      repository.wordPressUrl = 'https://' + repository.owner.login + '.wordpress.com/category/' + wordPressUri;
    }
  }

  MainPageController.$inject = ['repositoryList', 'mediumPostList', 'wordPressPostList'];
})();
