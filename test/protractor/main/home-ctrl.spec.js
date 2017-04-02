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

    it('should allow me to go to the news page when I click on news link', function () {
        var elements = element.all(protractor.By.id('news'));

        elements.click();

        expect(browser.getCurrentUrl()).toEqual("http://localhost:8100/#/menu/news");
    });

    it('should allow me to go to the events page when I click on events link', function () {
        var elements = element.all(protractor.By.id('events'));

        elements.click();

        expect(browser.getCurrentUrl()).toEqual("http://localhost:8100/#/menu/events");
    });

    it('should allow me to go to the account page when I click on account link', function () {
        var elements = element.all(protractor.By.id('account'));

        elements.click();

        expect(browser.getCurrentUrl()).toEqual("http://localhost:8100/#/account");
    });

    it('should allow me to go to the account page when I click on account link', function () {
        var elements = element.all(protractor.By.id('accounttitle'));

        elements.click();

        expect(browser.getCurrentUrl()).toEqual("http://localhost:8100/#/account");
    });

    it('should allow me to go to the reciprocals page when I click on reciprocals link', function () {

        var elements = element.all(protractor.By.id('reciprocals'));

        elements.click();

        expect(browser.getCurrentUrl()).toEqual("http://localhost:8100/#/menu/reciprocals");
    });

    it('should allow me to go to the contact page when I click on contact link', function () {

        var contact = element(protractor.By.id('contact'));

        browser.actions().mouseMove(contact).perform();

        contact.click();

        expect(browser.getCurrentUrl()).toEqual("http://localhost:8100/#/menu/contact");

    });

    it('should allow me to go to the new booking page page when I click on + icon', function () {

        var newBooking = element(protractor.By.id('new-booking'));

        newBooking.click();

        expect(browser.getCurrentUrl()).toEqual("http://localhost:8100/#/menu/new-booking");

    });

});