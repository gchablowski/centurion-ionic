'use strict';

describe('update info page', function () {

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

        browser.get('/#/menu/update');

        var name = element.all(protractor.By.name('name'));

        name.clear().then(function () {
            name.sendKeys("bob");
        });

        var email = element.all(protractor.By.name('email'));

        email.clear().then(function () {
            email.sendKeys("bob@bob.com");

            var form = element.all(protractor.By.id('update-info'));

            form.submit().then(function () {
                element(protractor.By.id('logout')).click().then(function () {
                    browser.sleep(2000);
                });
            });

        });
    });

    beforeEach(function () {
        browser.get('/#/menu/update');
    });

    it('Should have a title', function () {
        expect(browser.getTitle()).toEqual('Update Info');
    });

    it("should show me an error message if I don't enter a name", function () {

        var name = element.all(protractor.By.name('name'));

        name.click();

        name.sendKeys("");

        name.clear().then(function () {
            var email = element.all(protractor.By.name('email'));

            email.click();

            var message = element(protractor.By.id('name-require'));

            expect(message.isDisplayed()).toBe(true);
        });
    });

    it("should show me an error message if I don't enter a mail less than 2 characters", function () {

        var name = element.all(protractor.By.name('name'));

        name.clear().then(function () {
            name.sendKeys("a");

            var email = element.all(protractor.By.name('email'));

            email.click();

            var message = element(protractor.By.id('name-valid'));

            expect(message.isDisplayed()).toBe(true);
        });
    });

    it("should show me an error message if I don't enter an email", function () {

        var email = element.all(protractor.By.name('email'));

        email.clear().then(function () {
            email.sendKeys("");

            var name = element.all(protractor.By.name('name'));

            name.sendKeys("aaa");

            name.click();

            var message = element(protractor.By.id('email-require'));

            expect(message.isDisplayed()).toBe(true);
        });
    });

    it("should show an error when I don't fill the email properly", function () {

        var email = element.all(protractor.By.name('email'));

        email.clear().then(function () {
            email.sendKeys("aaa");

            var name = element.all(protractor.By.name('name'));

            name.sendKeys("aaa");

            name.click();

            var message = element(protractor.By.id('email-valid'));

            expect(message.isDisplayed()).toBe(true);
        });
    });

    it("should allow me to change my name and email", function () {
        var name = element.all(protractor.By.name('name'));

        name.clear().then(function () {
            name.sendKeys("aaa");
        });

        var email = element.all(protractor.By.name('email'));

        email.clear().then(function () {
            email.sendKeys("aaa@aaa.com");

            var form = element.all(protractor.By.id('update-info'));

            form.submit().then(function () {
                browser.sleep(5000);
                expect(browser.getCurrentUrl()).toEqual("http://localhost:8100/#/account");
            })
        });
    });

});
