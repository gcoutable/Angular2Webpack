var webpackConfig = require('./webpack.test');

module.exports = function (config) {
  var _config = {
    basePath: '', // The root path location that will be used to resolve all relative paths defined in files and exclude.

    frameworks: ['jasmine'], //  List of test frameworks you want to use.

    files: [ // List of files/patterns to load in the browser.
      {pattern: './config/karma-test-shim.js', watched: false}
    ],

    preprocessors: { // Preprocessors in Karma allow you to do some work with your files before they get served to the browser.
      './config/karma-test-shim.js': [
        'webpack', // Used the webpack preprocessor for karma (https://github.com/webpack/karma-webpack)
        'sourcemap' // Tells karma you uses source map files. Use with the webpack devtool option '*source-map*'
      ]
    },

    // karma watches the test entry points
    // (you don't need to specify the entry option)
    // webpack watches dependencies

    // webpack configuration
    webpack: webpackConfig,

    webpackMiddleware: {
      stats: 'errors-only'
    },

    webpackServer: {
      noInfo: true
    },

    reporters: ['progress'], // A list of reporters to use.
    port: 9876, // The port where the web server will be listening.
    colors: true, // Enable or disable colors in the output (reporters and logs).
    logLevel: config.LOG_INFO, // Level of logging.
    autowatch: false, // Enable or disable watching files and executing the tests whenever one of these files changes.
    browsers: ['PhantomJS'], // A list of browsers to launch and capture
    singleRun: true // If true, Karma will start and capture all configured browsers, run tests and then exit with an exit code of 0 or 1 depending on whether all tests passed or any tests failed.
  };

  config.set(_config);
};