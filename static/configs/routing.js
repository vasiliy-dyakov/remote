app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    var staticRoot = function(path) {
        return STATIC_ROOT + path;
    };

    $stateProvider
        .state('index', {
            url: '/',
            views: {
                header: { templateUrl: staticRoot('/views/header/header.html') },
                promo: { templateUrl: staticRoot('/views/promo/promo.html') },
                content: { templateUrl: staticRoot('/views/pages/index.html') },
                footer: { templateUrl: staticRoot('/views/footer/footer.html') }
            }
        })
        .state('second', {
            url: '^/second',
            views: {
                header: { templateUrl: staticRoot('/views/header/header.html') },
                footer: { templateUrl: staticRoot('/views/footer/footer.html') }
            }
        })
        .state('demo', {
            url: '^/demo',
            views: {
                header: { templateUrl: staticRoot('/views/header/header.html') },
                content: {
                    controller: 'pageDemoController',
                    templateUrl: staticRoot('/views/pages/demo.html')
                },
                footer: { templateUrl: staticRoot('/views/footer/footer.html') }
            }
        });

    $locationProvider.html5Mode(true);
});
