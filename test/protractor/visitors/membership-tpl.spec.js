'use strict';

describe('membership page', function () {

    beforeEach(function () {
        browser.get('/#/menu/membership');
    });

    it('Should have a title', function () {
        expect(browser.getTitle()).toEqual('Membership');
    });

    it('Should have a main text', function () {
        var elements = element.all(protractor.By.css('.membership-text')).first();
        expect(elements.getText()).toContain("The Club will provide golfers");
    });

    it('Should have some toggle that show informations when clicked', function () {
        var elements = element.all(protractor.By.css('.dropdown-title')).first();

        elements.click();

        var info = element.all(protractor.By.css('.show-info'));
        expect(info.getText()).toEqual(['Senate Membership is available by purchasing a share in Centurion Golf PLC, which is by invitation only. A limited number are available and all details are contained within our prospectus which is subject to its own terms and conditions.']);
    });

    it('should allow me to go to the contact page when I click on Join page link', function () {
        var elements = element.all(protractor.By.css('#contact'));

        elements.click();

        expect(browser.getCurrentUrl()).toEqual("http://localhost:8100/#/menu/contact");
    });

    it('should allow me to go to the reciprocals page when I click on Reciprocal', function () {
        var elements = element.all(protractor.By.css('#reciprocals'));

        elements.click();

        expect(browser.getCurrentUrl()).toEqual("http://localhost:8100/#/menu/reciprocals");
    });

});