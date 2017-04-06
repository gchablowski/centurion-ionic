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
        });
    });

    afterAll(function () {
        browser.get('/#/account');

        element(protractor.By.id('logout')).click().then(function () {
            browser.sleep(2000);
        });
    });

    beforeEach(function () {
        browser.get('/#/menu/friends');
    });

    it('Should have a title', function () {
        expect(browser.getTitle()).toEqual('Friends');
    });

    it('Should have some cards', function () {
        var cards = element.all(protractor.By.css('.card'));
        
        expect(cards.count()).toEqual(3);
    });
    
    it('Should have 3 share buttons', function () {
        var share = element.all(protractor.By.css('.share-button'));
        
        expect(share.count()).toEqual(3);
    });

    /*
     it('should allow me to go to the new bookings page', function () {
     var elements = element(protractor.By.css('.new-booking'));
     
     elements.click();
     
     expect(browser.getCurrentUrl()).toEqual("http://localhost:8100/#/menu/new-booking");
     
     });
     */
});
