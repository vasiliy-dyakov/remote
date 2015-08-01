app.config(function($stateProvider) {

    $stateProvider
        .state('index', {
            url: '',
            views: {
                header: { templateUrl: 'views/layout/header.html' },
                left: { templateUrl: 'views/layout/footer.html' },
                content: { templateUrl: 'views/layout/header.html' },
                footer: { templateUrl: 'views/layout/footer.html' }
            }
        });

});
