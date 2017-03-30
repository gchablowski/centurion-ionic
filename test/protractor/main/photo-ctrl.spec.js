'use strict';

describe('photo page', function () {

    beforeAll(function () {
        browser.get('/#/login');
        var email = element(protractor.By.model('loginData.email'));
        var password = element(protractor.By.model('loginData.password'));

        email.sendKeys('bob@bob.com');
        password.sendKeys('bob');

        var form = element(protractor.By.css('.login-form'));

        form.submit().then(function () {
            browser.sleep(2000);
        });
    });

    afterAll(function () {

        browser.get('/#/account');
        
        browser.sleep(2000);
        
        element(protractor.By.id('logout')).click().then(function () {
            browser.sleep(2000);
        });
    });

    beforeEach(function () {
         browser.get('/#/menu/photo');
    });

    it('Should have a title', function () {
        expect(browser.getTitle()).toEqual('Change Photo');
    });

    it("should show me two button", function () {

        var btns = element.all(protractor.By.css('.btn'));

        expect(btns.count()).toEqual(2);
    });

});