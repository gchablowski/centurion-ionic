'use strict';

describe('news list page', function () {

    beforeAll(function () {
        browser.get('/#/login');
        var email = element(protractor.By.model('loginData.email'));
        var password = element(protractor.By.model('loginData.password'));

        email.sendKeys('matt@back9solutions.com');
        password.sendKeys('centurion');

        var form = element(protractor.By.css('.login-form'));

        form.submit().then(function () {
            browser.sleep(2000);
            browser.get('/#/account');
        });
    });


    it('Should have a title', function () {
        expect(browser.getTitle()).toEqual('Account');
    });


    it('should allow me to logout', function () {
        var logout = element(protractor.By.css('#logout'));

        logout.click();

        expect(browser.getCurrentUrl()).toEqual("http://localhost:8100/#/login");

    });

});
