'use strict';

describe('visitors page', function () {

    beforeEach(function () {
        browser.get('/#/menu/terms');
    });

    it('Should have a title', function () {
        expect(browser.getTitle()).toEqual('Terms and Conditions');
    });
    
    it('should contain a text', function () {
        var elements = element.all(protractor.By.css('#terms-text p')).first();

        expect(elements.getText()).toContain("The use of the App is subject to the terms and");
    });

});