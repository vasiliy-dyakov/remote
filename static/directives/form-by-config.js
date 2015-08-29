app.directive('formByConfig', function(path) {
    return {
        templateUrl: path.staticRoot('/views/form-by-config/form-by-config.html'),
        restrict: 'E',
        scope: {
            formConfig: '='
        },
        link: function($scope) {
            ($scope.formConfig.fields || []).forEach(function(field) {
                field.templateUrl = path.staticRoot('/views/fields/' + field.type + '.html');
            });
        }
    };
});
