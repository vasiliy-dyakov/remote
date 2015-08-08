describe('Controller mainController', function() {
    var scope;

    beforeEach(module('app'));

    beforeEach(inject(function($rootScope, $controller) {
        scope = $rootScope.$new();
        $controller('mainController', {
            $scope: scope
        });
    }));

    it('should set title value equal Hi!', function() {
        expect(scope.$root.pageTitle).toEqual('Hi!');
    });

    it('should define $root.staticRoot', function() {
        expect(scope.$root.staticRoot).toBeDefined();
        expect(typeof scope.$root.staticRoot).toEqual('function');
    });
});
