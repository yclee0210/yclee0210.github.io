/**
 * Created by yclee on 1/26/16.
 */

(function () {
  'use strict';

  describe('Wordpress API Test: ', function () {
    var $state;

    var $httpBackend;
    var $http;
    var $httpParamSerializer;
    var API_VALUES;
    var PROFILE;

    var SUCCESS = 200;

    function getGithubRequestUrl(userName) {
      var uriUser = API_VALUES.GITHUB.USER + '/' + userName;
      return API_VALUES.GITHUB.URL + uriUser + API_VALUES.GITHUB.REPOSITORIES;
    }

    function getWordpressRequestUrl(userName) {
      var uriUser = '/'+ userName + API_VALUES.WORDPRESS.USER_NAME_SUFFIX;
      return API_VALUES.WORDPRESS.URL + uriUser + API_VALUES.WORDPRESS.POSTS;
    }

    function getMediumRequestUrl(userName) {
      var uriUser = '/feed/@' + userName;
      var params = {
        v: '1.0',
        num: 10,
        q:  API_VALUES.MEDIUM.URL + uriUser,
        callback: 'JSON_CALLBACK'
      };

      return API_VALUES.XML + '?' + $httpParamSerializer(params);
    }

    beforeEach(module('angularApp'));
    beforeEach(module(function($urlRouterProvider) {
      $urlRouterProvider.deferIntercept();
    }));

    beforeEach(inject(function (_$http_, _$httpBackend_, _$httpParamSerializer_, _API_VALUES_, _PROFILE_) {
      $http = _$http_;
      $httpBackend = _$httpBackend_;
      $httpParamSerializer = _$httpParamSerializer_;
      API_VALUES = _API_VALUES_;
      PROFILE = _PROFILE_;
    }));

    beforeEach(inject(function (_$state_) {
      $state = _$state_;
    }));

    afterEach(function() {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    describe('State change to main', function () {
      it('should resolve appropriate lists', function () {
        $httpBackend.expectGET(getGithubRequestUrl(PROFILE.GITHUB.USER_NAME)).respond(SUCCESS, REPOSITORY_LIST);
        $httpBackend.expectJSONP(getMediumRequestUrl(PROFILE.GITHUB.USER_NAME)).respond(SUCCESS, RAW_MEDIUM_RESPONSE);
        $httpBackend.expectGET(getWordpressRequestUrl(PROFILE.GITHUB.USER_NAME)).respond(SUCCESS, WORDPRESS_POST_LIST);
        $httpBackend.expectGET('source/views/main/main-page.html').respond(SUCCESS);

        $state.go('main');
        $httpBackend.flush();
      });
    });
  });
})();
