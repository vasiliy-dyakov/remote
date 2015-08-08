/**
 * Управляет содержимым страницы
 */
app.controller('mainController', function($scope, path) {
    $scope.$root.pageTitle = 'Hi!';
    $scope.$root.staticRoot = path.staticRoot;
});
