/**
 * Created by yclee on 1/24/16.
 */

(function () {
  'use strict';

  angular
    .module('angularApp')
    .factory('github', github);

  function github($resource, API_VALUES, PROFILE) {
    var requestUrl = API_VALUES.GITHUB.URL + API_VALUES.GITHUB.USER + API_VALUES.GITHUB.USER_NAME;

    return $resource(requestUrl, {userName: PROFILE.GITHUB}, {
      getRepositories: {
        method: 'GET',
        url: requestUrl + API_VALUES.GITHUB.REPOSITORIES,
        isArray: true
      }
    });
  }

  github.$inject = ['$resource', 'API_VALUES', 'PROFILE'];
})();
