'use strict';

describe('booking list page with booking', function () {

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
        browser.get('/#/menu/bookings');
    });

    it('Should have a title', function () {
        expect(browser.getTitle()).toEqual('My Bookings');
    });


    it('Should get a list of elements', function () {
        var elements = element.all(protractor.By.css('.bookings'));
        expect(elements.count()).toEqual(20);
        expect(elements.get(0).getText()).toContain('Tee Time Bookings');
    });
    
    it('should allow me to go to the new booking status page', function () {
        var elements = element.all(protractor.By.css('.card')).first();

        elements.click();

        expect(browser.getCurrentUrl()).toEqual("http://localhost:8100/#/menu/bookings/status/204");

    });

    it('should allow me to go to the new bookings page', function () {
        var elements = element(protractor.By.id('new-booking-link'));

        elements.click();

        expect(browser.getCurrentUrl()).toEqual("http://localhost:8100/#/menu/new-booking");

    });
});
