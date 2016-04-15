/**
 * Created by yclee on 1/24/16.
 */

(function () {
  'use strict';

  describe('Main Page Controller Test: ', function () {
    var MainPageController;

    var repositoryList = angular.copy(REPOSITORY_LIST);
    var wordPressPostList = angular.copy(WORDPRESS_POST_LIST);

    beforeEach(module('angularApp'));
    beforeEach(inject(function ($controller) {
      MainPageController = $controller('MainPageController', {
        repositoryList: repositoryList,
        wordPressPostList: wordPressPostList
      });
    }));

    describe('Initialization', function () {
      it('should define Github repository list', function () {
        expect(MainPageController.repositoryList).toBeDefined();
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
