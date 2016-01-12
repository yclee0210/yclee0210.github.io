/**
 * Created by yclee on 1/11/16.
 */

(function () {
  'use strict';

  angular
    .module('angularApp')
    .factory('mediumFeeds', mediumFeeds);

  function mediumFeeds($resource, API_VALUES) {
    return $resource(API_VALUES.XML, {}, {
      getPosts: {
        method: 'JSONP',
        params: {
          v: '1.0',
          num: 10,
          q:  API_VALUES.MEDIUM.URL + API_VALUES.MEDIUM.FEED,
          callback: 'JSON_CALLBACK'
        },
        isArray: true,
        transformResponse: function (response) {
          return extractContent(response.responseData.feed.entries);
        }
      }
    });

    function extractContent(rawEntryList) {
      angular.forEach(rawEntryList, function (value) {
        value.image = extractImage(value.content);
        value.snippet = extractSnippet(value.contentSnippet);
        delete value.content;
        delete value.contentSnippet;
      });

      return rawEntryList;
    }

    function extractImage(content) {
      var imageProperties = new RegExp('<img src="([^"]+)" width="([^"]+)" height="([^"]+)').exec(content);
      imageProperties = imageProperties ? imageProperties : PLACEHOLDER;

      return {
        src: imageProperties[SOURCE_INDEX],
        width: imageProperties[WIDTH_INDEX],
        height: imageProperties[HEIGHT_INDEX]
      };
    }

    function extractSnippet(snippet) {
      var removeText = new RegExp('(.+)(?:Continue reading on Medium »)');

      return removeText.exec(snippet)[CAPTURE_INDEX];
    }
  }

  var SOURCE_INDEX = 1;
  var WIDTH_INDEX = 2;
  var HEIGHT_INDEX = 3;
  var CAPTURE_INDEX = 1;
  var PLACEHOLDER = ['PLACEHOLDER', 'http://placehold.it/300x200', 300, 200];

  mediumFeeds.$inject = ['$resource', 'API_VALUES'];
})();

