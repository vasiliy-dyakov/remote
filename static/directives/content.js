app.directive('content', function(path) {
    return {
        templateUrl: path.staticRoot('/views/content/content.html'),
        restrict: 'E',
        transclude: true,
        scope: false,
        link: function($scope, $element, $attrs) {
            $scope.title = $attrs.title;
        }
    };
});
