/**
 * Created by yclee on 1/26/16.
 */

(function () {
  'use strict';

  angular
    .module('angularApp')
    .service('repositoryCard', repositoryCard);

  function repositoryCard() {
    var LIST_ITEM_HEIGHT = 96;
    var ITEM_PER_CARD = 3;

    var mainPageDomainMatcher = new RegExp('\.github\.io');

    return {
      setRepositoryList: setRepositoryList
    };

    function setRepositoryList(repositoryList, wordPressPostList) {
      angular.forEach(repositoryList, function (repository) {
        setPostsByProjects(repository, wordPressPostList);
        setGhPageUrl(repository);
        setWordPressUrl(repository);
      });

      return repositoryList;
    }

    function setGhPageUrl(repository) {
      var domain = 'http://' + repository.owner.login + '.github.io';

      repository.ghPageUrl = mainPageDomainMatcher.test(repository.name) ? domain : domain + '/' + repository.name;
    }

    function setPostsByProjects(repository, wordPressPostList) {
      // TODO: Refactor Later
      repository.posts = [];
      angular.forEach(wordPressPostList.posts, function (post) {
        if (post.categories[repository.name]) {
          repository.posts.push(post);
        }
      });

      repository.postLength = repository.posts.length;
      repository.blankListStyle = {
        'height': LIST_ITEM_HEIGHT * (ITEM_PER_CARD - repository.posts.length) + 'px'
      };
    }

    function setWordPressUrl(repository) {
      var wordPressUri = angular.copy(repository.name).replace(/\./g, '-');
      repository.wordPressUrl = 'https://' + repository.owner.login + '.wordpress.com/category/' + wordPressUri;
    }
  }
})();
