/**
 * Управляет содержимым страницы
 */
app.controller('mainController', function($scope, staticRoot) {
    $scope.$root.pageTitle = 'Hi!';
    $scope.$root.staticRoot = staticRoot;
});
