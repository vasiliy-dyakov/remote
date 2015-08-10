app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    var staticRoot = function(path) {
        return STATIC_ROOT + path;
    };

    $stateProvider
        .state('index', {
            url: '/',
            views: {
                header: { templateUrl: staticRoot('/views/layout/header.html') },
                promo: { templateUrl: staticRoot('/views/promo/promo.html') },
                content: { templateUrl: staticRoot('/views/pages/index.html') },
                footer: { templateUrl: staticRoot('/views/layout/footer.html') }
            }
        })
        .state('second', {
            url: '^/second',
            views: {
                header: { templateUrl: staticRoot('/views/layout/header.html') },
                footer: { templateUrl: staticRoot('/views/layout/footer.html') }
            }
        })
        .state('demo', {
            url: '^/demo',
            views: {
                header: { templateUrl: staticRoot('/views/layout/header.html') },
                content: {templateUrl: staticRoot('/views/pages/demo.html')},
                footer: { templateUrl: staticRoot('/views/layout/footer.html') }
            }
        });

    $locationProvider.html5Mode(true);
});
