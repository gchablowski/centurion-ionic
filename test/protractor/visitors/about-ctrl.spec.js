'use strict';

describe('About page', function () {

    beforeEach(function () {
        browser.get('/#/menu/about');
    });

    it('Should have a title', function () {
        expect(browser.getTitle()).toEqual('About');
    });

    it('Should have a slider on top of the page', function () {
        var elements = element.all(protractor.By.css('.section-image'));
        expect(elements.count()).toEqual(10);
    });

    it('should allow me to open a modal with the fly informations when I click on fly button', function () {
        var elements = element(protractor.By.css('#flybtn'));

        elements.click().then(function () {
            var modal = element(protractor.By.css('.space-modal h2'));

            expect(modal.getText()).toEqual("Fly Thru");
        });

    });

    it('should allow me to open a modal with the video informations when I click on video button', function () {
        var elements = element(protractor.By.css('#videobtn'));

        elements.click().then(function () {
            var modal = element(protractor.By.css('.space-modal'));

            expect(modal.isDisplayed()).toBe(true);
        });

    });

    it('should allow me to open a modal with the location informations when I click on location button', function () {
        var elements = element(protractor.By.css('#locationbtn'));

        elements.click().then(function () {
            var modal = element(protractor.By.css('.space-modal h2'));

            expect(modal.getText()).toEqual("Location");
        });

    });


    it('should allow me to close a modal when I clixk the x button in the modal', function () {
        var elements = element(protractor.By.css('#flybtn'));

        elements.click().then(function () {
            var close = element(protractor.By.css('.space-modal .typcn.typcn-times-outline'));
            close.click();
            expect(close.isDisplayed()).toBe(false);
        });

    });

    it('should allow me to go to the contact page when I click on Contact Us', function () {
        var elements = element.all(protractor.By.css('#contactbtn'));

        elements.click();

        expect(browser.getCurrentUrl()).toEqual("http://localhost:8100/#/menu/contact");
    });

});