describe('Index page', function() {
    beforeEach(function() {
        browser.get('/');
    });

    it('should have promo', function() {
        expect(element(by.css('.promo')).isDisplayed()).toBe(true);
    });

    it('should have title', function() {
        expect(browser.getTitle()).toBeDefined(true);
        expect(browser.getTitle()).toBe('Удаленная работа в команде');
    });
});
