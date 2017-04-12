'use strict';

describe('news item page', function () {

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
        browser.get('/#/menu/news-item/20');
    });

    it('Should have a title', function () {
        expect(browser.getTitle()).toEqual('7:04PM 30 Mar');
    });

    it('should get a title', function () {
        var elements = element(protractor.By.css('.news-title'));

        expect(elements.getText()).toEqual("Introducing Oli");

    });

    it('should get a text', function () {
        var elements = element.all(protractor.By.css('.news-info'));

        elements.then(function (text) {
            expect(text.length).toBeGreaterThan(0);
        })

    });

});