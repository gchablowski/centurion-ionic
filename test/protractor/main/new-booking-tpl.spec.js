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
        browser.get('/#/menu/new-booking');
    });

    it('Should have a title', function () {
        expect(browser.getTitle()).toEqual('New Booking');
    });

    it('Should get a list of elements', function () {
        var elements = element.all(protractor.By.css('.section-image'));
        expect(elements.count()).toEqual(20);
        expect(elements.get(0).getText()).toContain('Tee Time Bookings');
        expect(elements.get(1).getText()).toContain('Galvin @ Centurion');
    });


    it('should allow me to go to the golf-booking page when the tee bookings button is clicked', function () {
        var elements = element.all(protractor.By.css('.section-image')).first();

        elements.click();

        expect(browser.getCurrentUrl()).toEqual("http://localhost:8100/#/menu/golf-booking/7");

    });
    
        it('should allow me to go to the restaurant-booking page when the restaurant bookings button is clicked', function () {
        var elements = element.all(protractor.By.css('.section-image'));

        elements.get(1).click();

        expect(browser.getCurrentUrl()).toEqual("http://localhost:8100/#/menu/golf-booking/8");

    });

});
