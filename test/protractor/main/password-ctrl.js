'use strict';

describe('password page', function () {

    beforeAll(function () {
        browser.get('/#/login');
        var email = element(protractor.By.model('loginData.email'));
        var password = element(protractor.By.model('loginData.password'));

        email.sendKeys('bob@bob.com');
        password.sendKeys('bob');

        var form = element(protractor.By.css('.login-form'));

        form.submit().then(function () {
            browser.sleep(2000);
            browser.get('/#/menu/update');
        });
    });

    afterAll(function () {

        browser.get('/#/menu/password');

        var old = element.all(protractor.By.name('old'));

        old.sendKeys("bab");

        var new1 = element.all(protractor.By.name('new1'));

        new1.sendKeys("bob");

        var new2 = element.all(protractor.By.name('new2'));

        new2.sendKeys("bob");

        var form = element.all(protractor.By.id('update-password'));

        form.submit().then(function () {
            element(protractor.By.css('.popup-buttons .button')).click().then(function () {
                element(protractor.By.id('logout')).click().then(function () {
                    browser.sleep(2000);
                });
            });
        });
    });

    beforeEach(function () {
        browser.get('/#/menu/password');
    });

    afterEach(function () {

        browser.get('/#/menu/password');

        var old = element.all(protractor.By.name('old'));

        old.clear();

        var new1 = element.all(protractor.By.name('new1'));

        new1.clear();

        var new2 = element.all(protractor.By.name('new2'));

        new2.clear();

    });

    it('Should have a title', function () {
        expect(browser.getTitle()).toEqual('Change Password');
    });

    it("should show me an error message if I don't enter a old password", function () {

        var old = element.all(protractor.By.name('old'));

        old.click();

        var new1 = element.all(protractor.By.name('new1'));

        new1.click();

        var message = element(protractor.By.id('old-require'));

        expect(message.isDisplayed()).toBe(true);
    });

    it("should show me an error message if the old password and the new one are the same", function () {

        var old = element.all(protractor.By.name('old'));

        old.sendKeys("bab");

        var new1 = element.all(protractor.By.name('new1'));

        new1.sendKeys("bab");

        var message = element(protractor.By.id('old-match'));

        expect(message.isDisplayed()).toBe(true);
    });

    it("should show me an error message if I don't enter a new password in the New password input", function () {

        var new1 = element.all(protractor.By.name('new1'));

        new1.click();

        var old = element.all(protractor.By.name('old'));

        old.click();

        var message = element(protractor.By.id('new1-require'));

        expect(message.isDisplayed()).toBe(true);
    });

    it("should show me an error message if I don't enter a confirm password", function () {

        var new2 = element.all(protractor.By.name('new2'));

        new2.click();

        var old = element.all(protractor.By.name('old'));

        old.click();

        var message = element(protractor.By.id('new2-require'));

        expect(message.isDisplayed()).toBe(true);
    });

    it("should show me an error message if the news password and the confirm passsword doesn't match", function () {

        var new1 = element.all(protractor.By.name('new1'));

        new1.click();
        new1.sendKeys("bab");

        var new2 = element.all(protractor.By.name('new2'));

        new2.click();
        new2.sendKeys("blab");

        var old = element.all(protractor.By.name('old'));

        old.click();

        var message = element(protractor.By.id('new2-match'));

        expect(message.isDisplayed()).toBe(true);
    });

    it("should allow me to change my password", function () {

        var old = element.all(protractor.By.name('old'));

        old.sendKeys("bob");

        var new1 = element.all(protractor.By.name('new1'));

        new1.sendKeys("bab");

        var new2 = element.all(protractor.By.name('new2'));

        new2.sendKeys("bab");

        var form = element.all(protractor.By.id('update-password'));

        form.submit().then(function () {
            browser.sleep(5000);
            expect(browser.getCurrentUrl()).toEqual("http://localhost:8100/#/account");

            var popup = element(protractor.By.css('.popup'));

            expect(popup.isDisplayed()).toBe(true);
        });

    });

});