describe('Second page', function() {
    beforeEach(function() {
        browser.get('/second');
    });

    it('should not have promo', function() {
        expect(element(by.css('.promo')).isPresent()).toBe(false);
    });
});
