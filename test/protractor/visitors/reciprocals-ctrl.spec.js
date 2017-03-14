'use strict';

describe('club finder List page', function () {

    beforeEach(function () {
        browser.get('/#/reciprocals');
    });

    it('Should have a title', function () {
        expect(browser.getTitle()).toEqual('Reciprocals');
    });

    it('Should get a list of elements', function () {
        var elements = element.all(protractor.By.css('.section-image'));
        expect(elements.count()).toEqual(20);
        expect(elements.get(0).getText()).toEqual('Troon Golf - Golf Network');
    });

   
   /* 
    it('should allow me to go to the details page when I click on a  elment', function () {
        var elements = element.all(protractor.By.css('.golfs')).first();
        
        elements.click();
        
        expect(browser.getCurrentUrl()).toEqual("http://localhost:3000/#/main/club-finders/list/detail/1");
    });
    */
    
});