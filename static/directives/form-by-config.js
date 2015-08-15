app.directive('formByConfig', function(path) {
    return {
        templateUrl: path.staticRoot('/views/form-by-config/form-by-config.html'),
        restrict: 'E',
        scope: {
            formConfig: '='
        }
    };
});
