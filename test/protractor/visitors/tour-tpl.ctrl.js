'use strict';

describe('contact page', function () {

    beforeEach(function () {
        browser.get('/#/menu/tour/4');
    });

    it('Should have a title', function () {
        expect(browser.getTitle()).toEqual('Galvin at Centurion');
    });

    it('Should get a form', function () {
        var elements = element.all(protractor.By.css('form'));
        expect(elements.count()).toEqual(1);
    });


    it("should show an error when I don't fill the name", function () {
        var name = element(protractor.By.name('name'));

        name.click();

        var email = element.all(protractor.By.name('email'));

        email.click();

        var message = element(protractor.By.id('name-require'));

        expect(message.isDisplayed()).toBe(true);

    });

    it("should show an error when I don't fill the email", function () {

        var email = element.all(protractor.By.name('email'));

        email.click();

        var name = element(protractor.By.name('name'));

        name.click();

        var message = element(protractor.By.id('email-require'));

        expect(message.isDisplayed()).toBe(true);

    });

    it("should show an error when I don't fill the email properly", function () {

        var email = element.all(protractor.By.name('email'));

        email.sendKeys("aaa");

        var name = element(protractor.By.name('name'));

        name.click();

        var message = element(protractor.By.id('email-valid'));

        expect(message.isDisplayed()).toBe(true);

    });

    it("should show an error when I don't fill the message", function () {

        var message = element.all(protractor.By.name('message'));

        message.click();

        var name = element(protractor.By.name('name'));

        name.click();

        var messagerequired = element(protractor.By.id('message-require'));

        expect(messagerequired.isDisplayed()).toBe(true);

    });


    it('should show an error when I submit without filling terms and conditions', function () {

        element(protractor.By.name('name')).sendKeys("aaa");
        element(protractor.By.name('email')).sendKeys("aaa@aa.com");
        element(protractor.By.name('message')).sendKeys("aaa");

        var form = element.all(protractor.By.css('.booking-form'));

        form.submit().then(function () {
            var message = element.all(protractor.By.css('.popup'));
            var title = element.all(protractor.By.css('.popup-head h3'));

            expect(message.count()).toEqual(1);
            expect(title.getText()).toEqual(['Terms and Conditions']);
        });
    });

    /*TODO test the form when it will work*/

});