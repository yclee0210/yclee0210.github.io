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
      }
    })

})();
