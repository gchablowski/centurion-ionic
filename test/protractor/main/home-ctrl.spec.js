'use strict';

describe('home page', function () {

    beforeAll(function () {
        browser.get('/#/login');
        var email = element(protractor.By.model('loginData.email'));
        var password = element(protractor.By.model('loginData.password'));

        email.sendKeys('matt@back9solutions.com');
        password.sendKeys('centurion');

        var form = element(protractor.By.css('.login-form'));

        form.submit().then(function () {
            browser.sleep(2000);
        });
    });
    
    afterAll(function () {
        browser.get('/#/account');

        element(protractor.By.id('logout')).click().then(function () {
            browser.sleep(2000);
        });
    });

    beforeEach(function () {
        browser.get('/#/');
    });


    it('Should have a title', function () {
        expect(browser.getTitle()).toEqual('Home');
    });

    it('should allow me to go to the reciprocals page when I click on reciprocals link', function () {
        var elements = element.all(protractor.By.css('#news'));

        elements.click();

        expect(browser.getCurrentUrl()).toEqual("http://localhost:8100/#/menu/news");
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

        expect(browser.getCurrentUrl()).toEqual("http://localhost:8100/#/menu/reciprocals");
    });

    it('should allow me to go to the contact page when I click on contact link', function () {
        browser.get('/#/');

        var contact = element(protractor.By.css('#contact'));

        browser.actions().mouseMove(contact).perform();

        contact.click();

        expect(browser.getCurrentUrl()).toEqual("http://localhost:8100/#/menu/contact");

    });

});