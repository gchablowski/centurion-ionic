'use strict';

describe('club finder List page', function () {

    beforeEach(function () {
        browser.get('/#/visitors');
    });

    it('Should have a title', function () {
        expect(browser.getTitle()).toEqual('visitor');
    });

    it('should allow me to go to the menbership page when I click on membership link', function () {
        var elements = element.all(protractor.By.css('#membership'));

        elements.click();

        expect(browser.getCurrentUrl()).toEqual("http://localhost:8100/#/membership");
    });

});