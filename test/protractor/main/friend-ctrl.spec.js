'use strict';

describe('friend page', function () {

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
        browser.get('/#/menu/friend/121');
    });

    it('Should have a title', function () {
        expect(browser.getTitle()).toEqual('bob');
    });

    it('Should have a button', function () {
        var button = element.all(protractor.By.css('.btn'));

        expect(button.count()).toEqual(1);
    });

});
