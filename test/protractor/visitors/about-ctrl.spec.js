'use strict';

describe('About page', function () {

    beforeEach(function () {
        browser.get('/#/about');
    });

    it('Should have a title', function () {
        expect(browser.getTitle()).toEqual('About');
    });
    
    it('Should have a slider on top of the page', function () {
        var elements = element.all(protractor.By.css('.section-image'));
        expect(elements.count()).toEqual(10);
    });
  
    it('should allow me to go to the contact page when I click on Contact Us', function () {
        var elements = element.all(protractor.By.css('#contactbtn'));

        elements.click();

        expect(browser.getCurrentUrl()).toEqual("http://localhost:8100/#/contact");
    });

});