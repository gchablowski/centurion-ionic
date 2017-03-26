'use strict';

describe('login page', function () {

    beforeEach(function () {
        browser.get('/#/login');
    });

    it('Should have a title', function () {
        expect(browser.getTitle()).toEqual('Login');
    });

    it('should allow me to go to the vistors page when I clik the visitor button', function () {
        var elements = element.all(protractor.By.css('.visitors-link'));

        elements.click();

        expect(browser.getCurrentUrl()).toEqual("http://localhost:8100/#/visitors");

    });

    it("should show me an error message if I don't enter an email", function () {

        var email = element.all(protractor.By.name('email'));

        email.click();

        var password = element.all(protractor.By.name('password'));

        password.click();

        var message = element(protractor.By.id('email-require'));

        expect(message.isDisplayed()).toBe(true);
    });

    it("should show an error when I don't fill the email properly", function () {

        var email = element.all(protractor.By.name('email'));

        email.sendKeys("aaa");

        var password = element.all(protractor.By.name('password'));

        password.click();

        var message = element(protractor.By.id('email-valid'));

        expect(message.isDisplayed()).toBe(true);

    });

    it("should show an error when I don't fill the password", function () {

        var password = element.all(protractor.By.name('password'));

        password.click();

        var email = element.all(protractor.By.name('email'));

        email.sendKeys("aaa");

        var message = element(protractor.By.id('password-valid'));

        expect(message.isDisplayed()).toBe(true);

    });

    it('should show me an error message if I submit a false login and password', function () {
        var email = element.all(protractor.By.model('loginData.email'));
        var password = element.all(protractor.By.model('loginData.password'));

        email.sendKeys('boba@boba.com');
        password.sendKeys('boba');

        var form = element.all(protractor.By.css('.login-form'));

        form.submit().then(function () {
            var message = element.all(protractor.By.css('.popup'));
            var title = element.all(protractor.By.css('.popup-head h3'));

            expect(message.count()).toEqual(1);
            expect(title.getText()).toEqual(['Invalid Details']);
        });
    });

    it('should allow me to enter my login and password and to login in the app and to return to the menber page if I am already logged', function () {
        var email = element.all(protractor.By.model('loginData.email'));
        var password = element.all(protractor.By.model('loginData.password'));

        email.sendKeys('matt@back9solutions.com');
        password.sendKeys('centurion');

        var form = element.all(protractor.By.css('.login-form'));

        form.submit().then(function () {
            expect(browser.getCurrentUrl()).toEqual("http://localhost:8100/#/");

            browser.get('/#/login');

            expect(browser.getCurrentUrl()).toEqual("http://localhost:8100/#/");
        });

    });

});