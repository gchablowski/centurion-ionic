'use strict';

describe('news list page', function () {

    beforeAll(function () {
        browser.get('/#/news-item/20');
    });

    it('Should have a title', function () {
        expect(browser.getTitle()).toEqual('7:04PM 30 Mar');
    });
    
    it('should get a title', function () {
        var elements = element(protractor.By.css('.news-title'));

        expect(elements.getText()).toEqual("Introducing Oli");

    });

    it('should get a text', function () {
        var elements = element.all(protractor.By.css('.news-info'));
        
        elements.then(function (text) {
            expect(text.length).toBeGreaterThan(0);
        })

    });

});