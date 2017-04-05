'use strict';

describe('news list page', function () {

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

        element(protractor.By.id('logout')).click().then(function () {
            browser.sleep(2000);
        });
    });

    beforeEach(function () {
        browser.get('/#/menu/weather');
    });

    it('Should have a title', function () {
        expect(browser.getTitle()).toEqual('Weather');
    });

    it('Should get a list of elements', function () {
        var elements = element.all(protractor.By.css('.weather-card'));
        expect(elements.count()).toEqual(21);
    });
    
});
