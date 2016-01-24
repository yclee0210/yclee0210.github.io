/**
 * Created by yclee on 1/11/16.
 */

(function () {
  'use strict';

  angular
    .module('angularApp')
    .constant('API_VALUES', {
      XML: 'http://ajax.googleapis.com/ajax/services/feed/load',
      MEDIUM: {
        URL: 'http://medium.com',
        FEED: '/feed/@yclee0210'
      },
      GITHUB: {
        URL: 'https://api.github.com',
        USER: '/users',
        USER_NAME: '/:userName',
        REPOSITORIES: '/repos'
      },
      WORDPRESS: {
        URL: 'https://public-api.wordpress.com/rest/v1.1/sites',
        USER_NAME: '/:userName',
        USER_NAME_SUFFIX: '.wordpress.com',
        POSTS: '/posts'
      }
    })

})();
