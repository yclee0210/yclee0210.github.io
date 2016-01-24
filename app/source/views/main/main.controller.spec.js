/**
 * Created by yclee on 1/24/16.
 */

(function () {
  'use strict';

  describe('Main Page Controller Test: ', function () {
    var MainPageController;

    var repositoryList = angular.copy(REPOSITORY_LIST);
    var mediumPostList = angular.copy(MEDIUM_FEED_PROCESSED);
    var wordPressPostList = angular.copy(WORDPRESS_POST_LIST);

    beforeEach(module('angularApp'));
    beforeEach(inject(function ($controller) {
      MainPageController = $controller('MainPageController', {
        repositoryList: repositoryList,
        mediumPostList: mediumPostList,
        wordPressPostList: wordPressPostList
      });
    }));

    describe('Initialization', function () {
      it('should define Github repository list', function () {
        expect(MainPageController.repositoryList).toBeDefined();
      });

      it('should define mediumPostList', function () {
        expect(MainPageController.mediumPostList).toBeDefined();
      });

      it('should set demo page url', function () {
        var mainPageDomainMatcher = new RegExp('\.github\.io');
        angular.forEach(MainPageController.repositoryList, function (repository) {
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
