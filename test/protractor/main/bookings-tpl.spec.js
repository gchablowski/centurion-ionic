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
        browser.get('/#/menu/bookings');
    });

    it('Should have a title', function () {
        expect(browser.getTitle()).toEqual('My Bookings');
    });

    /*
     it('Should get a list of elements', function () {
     var elements = element.all(protractor.By.css('.section-image'));
     expect(elements.count()).toEqual(20);
     expect(elements.get(0).getText()).toContain('Tee Time Bookings');
     expect(elements.get(1).getText()).toContain('Galvin @ Centurion');
     });
     */

    it('should allow me to go to the new bookings page', function () {
        var elements = element(protractor.By.css('.new-booking'));

        elements.click();

        expect(browser.getCurrentUrl()).toEqual("http://localhost:8100/#/menu/new-booking");

    });
});
