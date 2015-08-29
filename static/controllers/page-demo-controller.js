app.controller('pageDemoController', function($scope) {
    $scope.exampleForm = {
        action: '',
        fields: [{
            type: 'text',
            name: 'city',
            placeholder: 'Укажите город',
            title: 'Место рождения',
            value: ''
        }]
    };
});
