// Karma configuration
// Generated on Sat Aug 08 2015 08:41:48 GMT-0300 (Hora oficial do Brasil)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


      // list of files / patterns to load in the browser
      //C:\Users\JeffersonAlves\Source\Repos\trabalho-final\SistemaAcademico.Presentation\Web\assets\vendors
    files: [
        'web/assets/vendors/angular/angular.js',
        'web/assets/vendors/angular-mocks/angular-mocks.js',
        'web/assets/vendors/angular-route/angular-route.js',
        'web/assets/vendors/angular-local-storage/dist/angular-local-storage.min.js',
        'web/assets/js/main.js',
        'web/assets/js/*.js',
        'web/test/unit/*.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  })
}
