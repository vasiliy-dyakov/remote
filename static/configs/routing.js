app.config(function($stateProvider) {

    $stateProvider
        .state('index', {
            url: '',
            views: {
                header: { templateUrl: 'views/layout/header.html' },
                promo: { templateUrl: 'views/promo/promo.html' },
                left: { templateUrl: 'views/layout/left.html' },
                content: { templateUrl: 'views/layout/content.html' },
                footer: { templateUrl: 'views/layout/footer.html' }
            }
        });

});
