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
        browser.get('/#/menu/bookings/status/196');
    });

    it('Should have a title', function () {
        expect(browser.getTitle()).toEqual('May 3, 2017');
    });

    it('Should get a list of infos', function () {
        var elements = element.all(protractor.By.css('.card-info'));
        expect(elements.get(0).getText()).toContain('People 2');
        expect(elements.get(1).getText()).toContain('Time 10:00');
    });

    it('Should get 3 buttons', function () {
        var elements = element.all(protractor.By.css('.btn-block'));
        expect(elements.count()).toEqual(3);
    });

    //TODO see to test cancel and rescheldule

});
