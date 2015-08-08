module.exports = function(config){
  config.set({

    basePath : '../',

    files : [
        'static/libs/angular/angular.js',
        'static/libs/angular-mocks/angular-mocks.js',
        'static/libs/lodash/lodash.js',
        'test/app.js',
        'static/services/**/*.js',
        'static/controllers/**/*.js',
        'test/unit/**/*.js',
    ],

    exclude: [
        'static/controllers/controllers.js',
        'static/services/services.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
        'karma-chrome-launcher',
        'karma-jasmine'
    ],

    junitReporter : {
        outputFile: 'test_out/unit.xml',
        suite: 'unit'
    },

    singleRun: false

  });
};
