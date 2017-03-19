'use strict';

describe('login page', function () {

    beforeEach(function () {
        browser.get('/#/login');
    });

    it('Should have a title', function () {
        expect(browser.getTitle()).toEqual('Login');
    });

    it('should show me tan erro message if I submit without login and password', function () {

        var form = element.all(protractor.By.css('.login-form'));

        form.submit().then(function () {
            var message = element.all(protractor.By.css('.show-message'));
            var title = element.all(protractor.By.css('.message-title'));

            expect(message.count()).toEqual(1);
            expect(title.getText()).toEqual(['Invalid Details']);
        });
    });

    it('should show me tan erro message if I submit a false login and password', function () {
        var email = element.all(protractor.By.model('loginData.email'));
        var password = element.all(protractor.By.model('loginData.password'));

        email.sendKeys('bob');
        password.sendKeys('bob');

        var form = element.all(protractor.By.css('.login-form'));

        form.submit().then(function () {
            var message = element.all(protractor.By.css('.show-message'));
            var title = element.all(protractor.By.css('.message-title'));

            expect(message.count()).toEqual(1);
            expect(title.getText()).toEqual(['Invalid Details']);
        });
    });

    it('should allow me to enter my login and password and to login in the app', function () {
        var email = element.all(protractor.By.model('loginData.email'));
        var password = element.all(protractor.By.model('loginData.password'));

        email.sendKeys('matt@back9solutions.com');
        password.sendKeys('centurion');

        var form = element.all(protractor.By.css('.login-form'));

        form.submit().then(function () {
            expect(browser.getCurrentUrl()).toEqual("http://localhost:8100/#/member");
        });
    });

    it('should allow me to go to the vistors page when I clik a button', function () {
        var elements = element.all(protractor.By.css('.visitors-link'));

        elements.click();

        expect(browser.getCurrentUrl()).toEqual("http://localhost:8100/#/visitors");

    });

});