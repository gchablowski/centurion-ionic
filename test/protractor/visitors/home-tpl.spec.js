'use strict';

describe('visitors page', function () {

    beforeEach(function () {
        browser.get('/#/visitors');
    });

    it('Should have a title', function () {
        expect(browser.getTitle()).toEqual('visitor');
    });
    
    it('should allow me to go to the booking page when I click on booking link', function () {
        var elements = element.all(protractor.By.css('#visitors-booking'));

        elements.click();

        expect(browser.getCurrentUrl()).toEqual("http://localhost:8100/#/menu/visitors-booking");
    });

    it('should allow me to go to the about page when I click on about link', function () {
        var elements = element.all(protractor.By.css('#about'));

        elements.click();

        expect(browser.getCurrentUrl()).toEqual("http://localhost:8100/#/menu/about");
    });

    it('should allow me to go to the menbership page when I click on membership link', function () {
        var elements = element.all(protractor.By.css('#membership'));

        elements.click();

        expect(browser.getCurrentUrl()).toEqual("http://localhost:8100/#/menu/membership");
    });

    it('should allow me to go to the menbership page when I click on membership link', function () {
        var elements = element.all(protractor.By.css('#contact'));

        elements.click();

        expect(browser.getCurrentUrl()).toEqual("http://localhost:8100/#/menu/contact");
    });

});