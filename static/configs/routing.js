app.config(function($stateProvider) {
    var staticRoot = function(path) {
        return '/static' + path;
    };

    $stateProvider
        .state('index', {
            url: '',
            views: {
                header: { templateUrl: staticRoot('/views/layout/header.html') },
                promo: { templateUrl: staticRoot('/views/promo/promo.html') },
                left: { templateUrl: staticRoot('/views/layout/left.html') },
                content: { templateUrl: staticRoot('/views/layout/content.html') },
                footer: { templateUrl: staticRoot('/views/layout/footer.html') }
            }
        });

});
