'use strict';

describe('event page', function () {

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
        browser.get('#/menu/event/18');
    });

    it('Should have a title', function () {
        expect(browser.getTitle()).toEqual('Event');
    });

    it('Should get a text elements', function () {
        var elements = element(protractor.By.css('.membership-text'));
        expect(elements.getText()).toContain('Lorem ipsum');
    });

    it('Should get an Enter button to regitster on the events', function () {
        var button = element(protractor.By.id('enter'));

        browser.actions().mouseMove(button).perform();

        button.click().then(function () {
            var text = element(protractor.By.css('.popup .popup-body'));

            expect(text.getText()).toEqual('Are you sure you want to enter the Lorem ipsum 2');

            var yes = element(protractor.By.xpath('.//*[.="Yes"]'));

            yes.click();

            browser.sleep(2000);

            expect(browser.getCurrentUrl()).toEqual("http://localhost:8100/#/menu/events");

            var tick = element.all(protractor.By.css('.typcn.typcn-tick-outline.status'));

            expect(tick.first().isDisplayed()).toBeTruthy();
        });
    });
    
    it('Should have an slider on home page when we suign up for an events events', function () {
        browser.get('/#/');
        
        browser.sleep(4000);

        var pagination = element(protractor.By.css('.swiper-pagination'));
        
        expect(pagination.isDisplayed()).toBeTruthy();
    });

    it('Should get an Cancel button to cancel the registration the events', function () {
        var button = element(protractor.By.id('cancel'));

        browser.actions().mouseMove(button).perform();

        button.click().then(function () {
            var text = element(protractor.By.css('.popup .popup-body'));

            expect(text.getText()).toEqual('Are you sure you want to cancel your registration?');

            var yes = element(protractor.By.xpath('.//*[.="Yes"]'));

            yes.click();

            browser.sleep(2000);

            expect(browser.getCurrentUrl()).toEqual("http://localhost:8100/#/menu/events");

        });
    });

});