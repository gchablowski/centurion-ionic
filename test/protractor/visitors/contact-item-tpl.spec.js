'use strict';

describe('contact page', function () {

    beforeEach(function () {
        browser.get('/#/menu/contact-item/11');
    });

    it('Should have a title', function () {
        expect(browser.getTitle()).toEqual('Contact Us');
    });

    it('Should show a text', function () {
        var elements = element.all(protractor.By.css('.reception-text'));
        elements.then(function (text) {
            expect(text.length).toBeGreaterThan(0);
        })
    });

    
});