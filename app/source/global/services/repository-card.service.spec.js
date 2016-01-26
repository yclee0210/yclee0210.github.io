/**
 * Created by yclee on 1/26/16.
 */

(function () {
  'use strict';

  describe('Repository Card Service Test: ', function () {
    var repositoryCard;

    var repositoryList = angular.copy(REPOSITORY_LIST);
    var wordPressPostList = angular.copy(WORDPRESS_POST_LIST);

    beforeEach(module('angularApp'));
    beforeEach(inject(function (_repositoryCard_) {
      repositoryCard = _repositoryCard_;
    }));

    describe('Initialization', function () {
      it('should set demo page url', function () {
        var mainPageDomainMatcher = new RegExp('\.github\.io');
        var newRepositoryList = repositoryCard.setRepositoryList(repositoryList, wordPressPostList);

        angular.forEach(newRepositoryList, function (repository) {
          var domain = 'http://' + repository.owner.login + '.github.io';

          if (mainPageDomainMatcher.test(repository.name)) {
            expect(repository.ghPageUrl).toEqual(domain);
          } else {
            expect(repository.ghPageUrl).toEqual(domain + '/' + repository.name);
          }
        })
      });
    });
  });
})();
