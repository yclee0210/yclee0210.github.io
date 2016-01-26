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

    return $resource(requestUrl, {userName: PROFILE.GITHUB.USER_NAME}, {
      getRepositories: {
        method: 'GET',
        url: requestUrl + API_VALUES.GITHUB.REPOSITORIES,
        isArray: true,
        transformResponse: function (response) {
          response = angular.fromJson(response);
          return removeFromList(response, PROFILE.GITHUB.REPO.BLACK_LIST);
        }
      }
    });
  }

  function removeFromList(originalList, blackList) {
    var response = [];

    angular.forEach(originalList, function (item) {
      if (itemNotInBlackList(item, blackList)) {
        response.push(item);
      }
    });

    return response;
  }

  function itemNotInBlackList(item, blackList) {
    return blackList.indexOf(item.name) === DOES_NOT_EXIST;
  }

  var DOES_NOT_EXIST = -1;

  github.$inject = ['$resource', 'API_VALUES', 'PROFILE'];
})();
