describe('Demo page', function() {
    beforeEach(function() {
        browser.get('/demo');
    });

    it('should have title', function() {
        expect(element(by.css('h1')).isDisplayed()).toBe(true);
    });
});
