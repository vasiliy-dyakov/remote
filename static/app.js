var app;

require.config({
    shim: {
        angular: { exports: 'angular' },
        'angular-ui-router': ['angular']
    },
    baseUrl: '/static',
    paths: {
        lodash: 'libs/lodash/lodash',
        angular: 'libs/angular/angular',
        'angular-ui-router': 'libs/angular-ui-router/release/angular-ui-router'
    }
});

require([
    'angular',
    'lodash',
    'angular-ui-router'
], function(angular, _) {
    app = angular.module('app', ['ui.router']);

    app.factory('_', function() {
        return _;
    });

    require([
        'configs/configs.deps',
        'services/services.deps',
        'controllers/controllers.deps',
        'directives/directives.deps',
        'filters/filters.deps'
    ], function() {
        angular.bootstrap(document, ['app']);
    });
});
