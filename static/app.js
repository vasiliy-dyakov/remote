var app;

require.config({
    shim: {
        angular: { exports: 'angular' }
    },
    baseUrl: './',
    paths: {
        lodash: 'libs/lodash/lodash',
        angular: 'libs/angular/angular'
    }
});

require([
    'angular',
    'lodash'
], function(angular, _) {
    app = angular.module('app', []);

    app.factory('_', function() {
        return _;
    });

    require([
        'controllers/controllers',
        'directives/directives',
        'filters/filters',
        'services/services'
    ], function() {
        angular.bootstrap(document, ['app']);
    });
});
