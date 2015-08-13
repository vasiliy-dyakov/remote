describe('Directive content', function() {
    beforeEach(module('app'));

    var compile, httpBackend, rootScope, staticRoot;

    beforeEach(inject(function($compile, $httpBackend, $rootScope, path) {
        compile = $compile;
        httpBackend = $httpBackend;
        rootScope = $rootScope;
        staticRoot = path.staticRoot;
    }));

    it('should set title on scope', function() {
        var scope = rootScope.$new(),
            element = compile('<content title="Заголовок страницы"></content>')(scope);

        httpBackend.expectGET(staticRoot('/views/content/content.html'))
            .respond('');

        httpBackend.flush();
        element.scope().$digest();

        expect(element.scope().title).toEqual('Заголовок страницы');
    });
});
