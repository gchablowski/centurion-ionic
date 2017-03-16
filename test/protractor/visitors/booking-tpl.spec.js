'use strict';

describe('reciprocals page', function () {

    beforeEach(function () {
        browser.get('/#/visitors-booking');
    });

    it('Should have a title', function () {
        expect(browser.getTitle()).toEqual('Booking');
    });

    it('Should get a list of elements', function () {
        var elements = element.all(protractor.By.css('.section-image'));
        expect(elements.count()).toEqual(20);
        expect(elements.get(0).getText()).toEqual('Galvin at Centurion');
    });

   
   /* it('should allow me to go to the tour page when I click on the elment', function () {
        var elements = element.all(protractor.By.css('.reciprocals')).first();
        
        elements.click();
        
        expect(browser.getCurrentUrl()).toEqual("http://localhost:8100/#/reciprocal/38");
    });
    */
    
});