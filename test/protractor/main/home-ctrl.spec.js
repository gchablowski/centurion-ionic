'use strict';

describe('home page', function () {

    beforeAll(function () {
        browser.get('/#/login');
    });

    it('Should have a title', function () {
        expect(browser.getTitle()).toEqual('Home');
    });

    it('should allow me to go to the reciprocals page when I click on reciprocals link', function () {
        var elements = element.all(protractor.By.css('#news'));

        elements.click();

        expect(browser.getCurrentUrl()).toEqual("http://localhost:8100/#/news");
    });

    it('should allow me to go to the account page when I click on account link', function () {
        var elements = element.all(protractor.By.css('#account'));

        elements.click();

        expect(browser.getCurrentUrl()).toEqual("http://localhost:8100/#/account");
    });

    it('should allow me to go to the account page when I click on account link', function () {
        var elements = element.all(protractor.By.css('#accounttitle'));

        elements.click();

        expect(browser.getCurrentUrl()).toEqual("http://localhost:8100/#/account");
    });

    it('should allow me to go to the reciprocals page when I click on reciprocals link', function () {
        browser.get('/#/');

        var elements = element.all(protractor.By.css('#reciprocals'));

        elements.click();

        expect(browser.getCurrentUrl()).toEqual("http://localhost:8100/#/reciprocals");
    });

    it('should allow me to go to the contact page when I click on contact link', function () {
        browser.get('/#/');

        var contact = element(protractor.By.css('#contact'));

        browser.actions().mouseMove(contact).perform();

        contact.click();

        expect(browser.getCurrentUrl()).toEqual("http://localhost:8100/#/contact");

    });

});