/**
 * Created by yclee on 1/26/16.
 */

(function () {
  'use strict';

  describe('Wordpress API Test: ', function () {
    var wordpress;

    var $httpBackend;
    var $http;
    var API_VALUES;
    var PROFILE;

    var SUCCESS = 200;

    function getRequestUrl(userName) {
      var uriUser = '/'+ userName + API_VALUES.WORDPRESS.USER_NAME_SUFFIX;
      return API_VALUES.WORDPRESS.URL + uriUser + API_VALUES.WORDPRESS.POSTS;
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

    beforeEach(inject(function (_wordpress_) {
      wordpress = _wordpress_;
    }));

    afterEach(function() {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    describe('API request', function () {
      it('should be made to correct URL', function () {
        $httpBackend.expectGET(getRequestUrl(PROFILE.GITHUB.USER_NAME)).respond(SUCCESS);

        wordpress.getPosts();

        $httpBackend.flush();
      });
    });
  });
})();
