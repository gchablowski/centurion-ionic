'use strict';

describe('news list page', function () {

    beforeAll(function () {
        browser.get('/#/news');
    });

    it('Should have a title', function () {
        expect(browser.getTitle()).toEqual('News');
    });

    it('Should get a list of elements', function () {
        var elements = element.all(protractor.By.css('.news-headline'));
        expect(elements.count()).toEqual(20);
        expect(elements.get(0).getText()).toContain('Introducing Oli');
    });

    it('should allow me to go to the news-item page when I clik on one of the post', function () {
        var elements = element.all(protractor.By.css('.news-headline')).first();

        elements.click();

        expect(browser.getCurrentUrl()).toEqual("http://localhost:8100/#/news-item/20");

    });

});