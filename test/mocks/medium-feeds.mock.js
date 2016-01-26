/**
 * Created by yclee on 1/24/16.
 */

var MEDIUM_FEED_PROCESSED = [
  {
    title: "Test Post #2",
    link: "https://medium.com/@yclee0210/test-post-bd4a163b0dd6?source=rss-723e5430b26d------2",
    author: "Yun Chan Clemence Lee",
    publishedDate: "Wed, 06 Jan 2016 01:08:30 -0800",
    categories: [],
    image: {
      src: "https://d262ilb51hltx0.cloudfront.net/fit/c/600/200/1*6h6eOlzkh_NqfmIKzTSCBg.jpeg",
      width: "600",
      height: "200"
    },
    snippet: "Testing"
  },
  {
    title: "Test Post #1",
    link: "https://medium.com/@yclee0210/test-post-1-2c9f4852be36?source=rss-723e5430b26d------2",
    author: "Yun Chan Clemence Lee",
    publishedDate: "Wed, 06 Jan 2016 00:59:06 -0800",
    categories: [],
    image: {
      src: "http://placehold.it/300x200",
      width: 300,
      height: 200
    },
    snippet: "Test Post Here"
  }
];

var RAW_MEDIUM_RESPONSE = {
  "responseData": {
    "feed": {
      "feedUrl": "http://medium.com/feed/@yclee0210",
      "title": "Clemence Yun Chan Lee on Medium",
      "link": "https://medium.com/@yclee0210?source\u003drss-723e5430b26d------2",
      "author": "",
      "description": "Latest posts by Clemence Yun Chan Lee on Medium",
      "type": "rss20",
      "entries": [{
        "title": "Test Post #2",
        "link": "https://medium.com/@yclee0210/test-post-bd4a163b0dd6?source\u003drss-723e5430b26d------2",
        "author": "Clemence Yun Chan Lee",
        "publishedDate": "Wed, 06 Jan 2016 01:08:30 -0800",
        "contentSnippet": "TestingContinue reading on Medium »",
        "content": "\u003cdiv\u003e\u003cp\u003e\u003ca href\u003d\"https://medium.com/@yclee0210/test-post-bd4a163b0dd6?source\u003drss-723e5430b26d------2\"\u003e\u003cimg src\u003d\"https://d262ilb51hltx0.cloudfront.net/fit/c/600/200/1*6h6eOlzkh_NqfmIKzTSCBg.jpeg\" width\u003d\"600\" height\u003d\"200\"\u003e\u003c/a\u003e\u003c/p\u003e\u003cp\u003eTesting\u003c/p\u003e\u003cp\u003e\u003ca href\u003d\"https://medium.com/@yclee0210/test-post-bd4a163b0dd6?source\u003drss-723e5430b26d------2\"\u003eContinue reading on Medium »\u003c/a\u003e\u003c/p\u003e\u003c/div\u003e",
        "categories": []
      }, {
        "title": "Test Post #1",
        "link": "https://medium.com/@yclee0210/test-post-1-2c9f4852be36?source\u003drss-723e5430b26d------2",
        "author": "Clemence Yun Chan Lee",
        "publishedDate": "Wed, 06 Jan 2016 00:59:06 -0800",
        "contentSnippet": "Test Post HereContinue reading on Medium »",
        "content": "\u003cdiv\u003e\u003cp\u003eTest Post Here\u003c/p\u003e\u003cp\u003e\u003ca href\u003d\"https://medium.com/@yclee0210/test-post-1-2c9f4852be36?source\u003drss-723e5430b26d------2\"\u003eContinue reading on Medium »\u003c/a\u003e\u003c/p\u003e\u003c/div\u003e",
        "categories": []
      }]
    }
  }, "responseDetails": null, "responseStatus": 200
};
