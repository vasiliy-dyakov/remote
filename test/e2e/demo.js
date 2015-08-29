describe('Demo page', function() {
    beforeEach(function() {
        browser.get('/demo');
    });

    it('should have title', function() {
        expect(element(by.css('h1')).isDisplayed()).toBe(true);
    });

    it('should have correct input drawed by form-by-config', function() {
        var input = element(by.css('[name=city]'));
        expect(input.isDisplayed()).toBe(true);
        expect(input.getAttribute('name')).toEqual('city');
        expect(input.getAttribute('placeholder')).toEqual('Укажите город');
        expect(input.getAttribute('value')).toEqual('');
        expect(element(by.css('.field-row_name_city .field-row__title')).getText()).toEqual('Место рождения');
    });
});
