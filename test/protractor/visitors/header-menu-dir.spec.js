'use strict';

describe('menu', function () {

    beforeEach(function () {
        browser.get('/#/membership');
    });

    it('Should have a title', function () {
        var title = element.all(protractor.By.css('.title'));
        expect(title.getText()).toEqual([ 'Membership' ]);
    });

    it('Should go to visitor home when the back button is clicked', function () {
        var elements = element.all(protractor.By.css('.back-button'));

        elements.click();

        expect(browser.getCurrentUrl()).toEqual("http://localhost:8100/#/visitors");
    });
    
        it('Should go to visitor home when the home button is clicked', function () {
        var elements = element.all(protractor.By.css('.home-button'));

        elements.click();

        expect(browser.getCurrentUrl()).toEqual("http://localhost:8100/#/visitors");
    });

});