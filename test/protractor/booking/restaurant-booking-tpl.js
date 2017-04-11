'use strict';

describe('restaurant booking page', function () {

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
        browser.get('/#/menu/restaurant-booking/8');
    });

    it('Should have a title', function () {
        expect(browser.getTitle()).toEqual('New Booking');
    });

    it('Should get a form', function () {
        var elements = element.all(protractor.By.css('form'));
        expect(elements.count()).toEqual(1);
    });

});
