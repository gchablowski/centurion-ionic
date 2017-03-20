// Karma configuration
// Generated on Mon Mar 13 2017 09:43:48 GMT+0100 (CET)

'use strict';

module.exports = function (config) {
    // retrieve main files from bower
    var wiredep = require('wiredep');
    var bowerFiles = wiredep({devDependencies: true}).js;

    config.set({
        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',
        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: [ 'jasmine', 'angular-filesort'],
        
         // sort www/**/*.js files
         angularFilesort: {
            whitelist: [
                'www/lib/**/*.js'
            ]
        },
    
        // list of files / patterns to load in the browser
        files: bowerFiles.concat([
            'www/js/**/main.js',
            'www/js/**/visitors.js',
            'www/js/**/*.js',
            // other
            'www/lib/ionic/js/ionic.bundle.js',
            'www/lib/angular-resource/angular-resource.js',
            'www/lib/swiper/dist/js/swiper.js',
            'www/lib/angular-swiper/dist/angular-swiper.js',
            'http://maps.google.com/maps/api/js',
            'www/lib/ngmap/build/scripts/ng-map.min.js',
            'www/lib/ngstorage/ngStorage.js',
            
            // test
            'test/karma/**/*.js',
            // templates
            'www/templates/**/*.html'
        ]),
        // list of files to exclude
        exclude: [],
        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'www/templates/**/*.html': ['ng-html2js']
        },
        // use template cache to avoid unexpected $http requests from ui-router
        // https://github.com/angular-ui/ui-router/issues/212#issuecomment-69974072
        ngHtml2JsPreprocessor: {
            moduleName: 'ngHtml2Js',
            stripPrefix: 'www/' // the path must be relative to the app.js
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
        browsers: ['PhantomJS'],
        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false
    })
};
