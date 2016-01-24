/**
 * Created by yclee on 1/24/16.
 */

(function () {
  'use strict';

  describe('Github API Test: ', function () {
    var github;

    var $httpBackend;
    var $http;
    var API_VALUES;
    var PROFILE;

    function getRequestUrl(userName) {
      var uriUser = API_VALUES.GITHUB.USER + '/' + userName;
      return API_VALUES.GITHUB.URL + uriUser + API_VALUES.GITHUB.REPOSITORIES;
    }

    beforeEach(module('angularApp'));
    beforeEach(module(function($urlRouterProvider) {
      $urlRouterProvider.deferIntercept();
    }));

    beforeEach(inject(function (_$http_, _$httpBackend_, _API_VALUES_, _PROFILE_) {
      $http = _$http_;
      $httpBackend = _$httpBackend_;
      API_VALUES = _API_VALUES_;
      PROFILE = _PROFILE_;
    }));

    beforeEach(inject(function (_github_) {
      github = _github_;
    }));

    afterEach(function() {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    describe('API request', function () {
      it('should be made to correct URL', function () {
        $httpBackend.expectGET(getRequestUrl(PROFILE.GITHUB.USER_NAME)).respond(200);

        github.getRepositories();

        $httpBackend.flush();
      });
    });
  });
})();
