describe('Index page', function() {
    beforeEach(function() {
        browser.get('/');
    });

    it('should have promo', function() {
        expect(element(by.css('.promo')).isDisplayed()).toBe(true);
    });
});
