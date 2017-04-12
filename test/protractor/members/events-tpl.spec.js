'use strict';

describe('events list page', function () {

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
        browser.get('/#/menu/events');
    });

    it('Should have a title', function () {
        expect(browser.getTitle()).toEqual('Events');
    });

    it('Should get a list of elements', function () {
        var elements = element.all(protractor.By.css('.card'));
        expect(elements.count()).toEqual(20);
        expect(elements.get(0).getText()).toContain('Lorem ipsum');
    });


    it('should allow me to go to the menu item page when I click on a elment', function () {
        var elements = element.all(protractor.By.css('.card')).first();

        elements.click();

        expect(browser.getCurrentUrl()).toEqual("http://localhost:8100/#/menu/event/18");
    });
    
});