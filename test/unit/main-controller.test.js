describe('mainController', function() {
    var scope;

    beforeEach(function() {
        beforeEach(module('app'));
    })

    beforeEach(inject(function($rootScope, $controller) {
        scope = $rootScope.$new();
        $controller('mainController', {
            $scope: scope
        });
    }));

    it('should set title value equal Hi!', function() {
        expect(scope.$root.pageTitle).toBe('Hi!');
    });

    it('$root.staticRoot must be defined', function() {
        expect(scope.$root.staticRoot).toBeDefined();
        expect(scope.$root.staticRoot('/views/app.less')).toBe('/static/views/app.less');
    });
});
