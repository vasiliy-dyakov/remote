describe('Service path', function() {
    var service;

    beforeEach(module('app'));

    beforeEach(inject(function(path) {
        service = path;
    }));

    it('should return method staticRoot', function() {
        expect(service.staticRoot).toBeDefined();
    });

    it('should define correct method staticRoot', function() {
        expect(service.staticRoot('/views/app.less')).toEqual('/static/views/app.less');
    });

});
