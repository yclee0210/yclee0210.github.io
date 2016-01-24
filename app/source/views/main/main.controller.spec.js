/**
 * Created by yclee on 1/24/16.
 */

(function () {
  'use strict';

  describe('Main Page Controller Test: ', function () {
    var MainPageController;

    var repositoryList;
    var mediumPostList;

    beforeEach(module('angularApp'));
    beforeEach(inject(function ($controller) {
      MainPageController = $controller('MainPageController', {
        repositoryList: repositoryList,
        mediumPostList: mediumPostList
      });
    }));

    describe('Initialization', function () {
      it('should define Github repository list', function () {
        expect(MainPageController.repositoryList).toBeDefined();
      });

      it('should define mediumPostList', function () {
        expect(MainPageController.mediumPostList).toBeDefined();
      });
    });
  });
})();
