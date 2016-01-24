/**
 * Created by yclee on 1/24/16.
 */

(function () {
    'use strict';

  angular
    .module('angularApp')
    .constant('PROFILE', {
      GITHUB: {
        USER_NAME: 'yclee0210',
        REPO: {
          BLACK_LIST: [
            'blog-proj',
            'django-tutorial',
            'python-study'
          ]
        }
      }
    });
})();
