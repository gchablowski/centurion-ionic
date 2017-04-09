'use strict';

describe('add users page', function () {

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
        browser.get('/#/menu/users');
    });

    it('Should have a title', function () {
        expect(browser.getTitle()).toEqual('Members');
    });

    it('Should have 3 share buttons', function () {
        var message = element(protractor.By.css('.no-bookings.content-padded'));

        expect(message.getText()).toEqual("Please enter members name or email address");
    });


    it('Should allow me to search a friend and got ot his page', function () {
        var search = element(protractor.By.model('search'));

        search.sendKeys('bob');
        
        var message = element(protractor.By.css('.no-bookings.content-padded'));

        expect(message.isDisplayed()).toEqual(false);;

        var card = element.all(protractor.By.css('.card')).first();

        card.click();

        expect(browser.getCurrentUrl()).toEqual("http://localhost:8100/#/menu/friend/122");
    });
   
});
