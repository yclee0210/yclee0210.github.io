/**
 * Created by yclee on 1/6/16.
 */

module.exports = function (config) {
  'use strict';

  config.set({
    port: 8080,
    autoWatch: true,
    basePath: '../',
    singleRun: false,
    colors: true,
    logLevel: config.LOG_INFO,
    frameworks: [
      'jasmine'
    ],

    browsers: [
      'PhantomJS'
    ],

    files: [
      // bower:js
      'bower_components/angular/angular.js',
      'bower_components/angular-ui-router/release/angular-ui-router.js',
      'bower_components/angular-resource/angular-resource.js',
      'bower_components/angular-animate/angular-animate.js',
      'bower_components/angular-aria/angular-aria.js',
      'bower_components/angular-messages/angular-messages.js',
      'bower_components/ngstorage/ngStorage.js',
      'bower_components/angular-translate/angular-translate.js',
      'bower_components/angular-sanitize/angular-sanitize.js',
      'bower_components/angular-mocks/angular-mocks.js',
      // endbower
      'app/source/app.module.js',
      'app/source/**/!(*.spec).js',
      {
        pattern: 'app/source/**/*.spec.js',
        included: true
      }
    ],

    preprocessors: {
      'app/source/**/!(*.spec).js': 'coverage'
    },

    reporters: ['progress', 'junit', 'coverage'],
    junitReporter: {
      outputDir: './test/results/unit',
      outputFile: 'test-results.xml'
    },
    coverageReporter: {
      dir: './test/coverage/unit',
      reporters: [
        {type: 'cobertura', file: 'coverage.xml'}
      ]
    },

    // Which plugins to enable
    plugins: [
      "karma-phantomjs-launcher",
      "karma-jasmine",
      "karma-junit-reporter",
      "karma-coverage"
    ]
  });
};
