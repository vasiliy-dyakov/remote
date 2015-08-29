describe('Directive formByConfig', function() {
    beforeEach(module('app'));

    var compile, httpBackend, rootScope, staticRoot;

    beforeEach(inject(function($compile, $httpBackend, $rootScope, path) {
        compile = $compile;
        httpBackend = $httpBackend;
        rootScope = $rootScope;
        staticRoot = path.staticRoot;
    }));

    it('should correct build input type text', function() {
        var scope = rootScope.$new(),
            element;

        scope.formConfig = {
            fields: [
                {
                    type: 'text',
                    name: 'city',
                    placeholder: 'Укажите город',
                    value: ''
                }
            ]
        };

        element = compile('<form-by-config form-config="formConfig"></form-by-config>')(scope);

        httpBackend.expectGET(staticRoot('/views/form-by-config/form-by-config.html'))
            .respond('');

        httpBackend.flush();
        element.scope().$digest();

        expect(element.scope().formConfig.fields[0].name).toEqual('city');
        expect(element.scope().formConfig.fields[0].templateUrl).toEqual(staticRoot('/views/fields/text.html'));
    });
});
