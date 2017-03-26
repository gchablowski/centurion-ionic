'use strict';

describe('reciprocals page', function () {

    beforeEach(function () {
        browser.get('/#/menu/contact');
    });

    it('Should have a title', function () {
        expect(browser.getTitle()).toEqual('Contact');
    });

    it('Should get a list of elements', function () {
        var elements = element.all(protractor.By.css('.section-image'));
        expect(elements.count()).toEqual(20);
        expect(elements.get(0).getText()).toEqual('Membership Enquiries -');
    });

   
    it('should allow me to go to the Contact us page when I click on the elment', function () {
        var elements = element.all(protractor.By.css('.section-image')).first();
        
        elements.click();
        
        expect(browser.getCurrentUrl()).toEqual("http://localhost:8100/#/menu/contact-item/11");
    });
    
    
});