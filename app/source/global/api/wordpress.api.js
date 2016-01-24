/**
 * Created by yclee on 1/24/16.
 */

(function () {
  'use strict';

  angular
    .module('angularApp')
    .factory('wordpress', wordpress);

  function wordpress($resource, API_VALUES, PROFILE) {
    var requestUrl = API_VALUES.WORDPRESS.URL + API_VALUES.WORDPRESS.USER_NAME + API_VALUES.WORDPRESS.USER_NAME_SUFFIX;

    return $resource(requestUrl, {userName: PROFILE.GITHUB.USER_NAME}, {
      getPosts: {
        method: 'GET',
        url: requestUrl + API_VALUES.WORDPRESS.POSTS,
        transformResponse: function (response) {
          return extractMainImage(angular.fromJson(response));
        }
      }
    });
  }

  function extractMainImage(content) {
    angular.forEach(content.posts, function (post) {
      var imageTag = new RegExp('<img.+src=\\"(.+jpg).+/>');
      var mainImage = imageTag.exec(post.content)[IMAGE_URL_CAPTURE_GROUP_INDEX];
      if (mainImage) {
        post.img = {
          src: mainImage,
          width: 400,
          height: 150
        };
      }
    });
    return content;
  }

  var IMAGE_URL_CAPTURE_GROUP_INDEX = 1;

  wordpress.$inject = ['$resource', 'API_VALUES', 'PROFILE'];
})();
