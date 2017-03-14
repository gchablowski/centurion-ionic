'use strict';

describe('reciprocal page', function () {

    beforeEach(function () {
        browser.get('/#/reciprocal/38');
    });

    it('Should have a title', function () {
        expect(browser.getTitle()).toEqual('Reciprocal');
    });

    it('Should show a text', function () {
        var elements = element.all(protractor.By.css('.reception-text'));
        elements.then(function (text) {
            expect(text.length).toBeGreaterThan(0);
        })
    });


});