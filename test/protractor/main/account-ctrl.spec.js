'use strict';

describe('news list page', function () {

    beforeAll(function () {
        browser.get('/#/account');
    });

    it('Should have a title', function () {
        expect(browser.getTitle()).toEqual('Account');
    });

  
    it('should allow me to logout', function () {
        var logout = element(protractor.By.css('#logout'));

        logout.click();

        expect(browser.getCurrentUrl()).toEqual("http://localhost:8100/#/login");

    });

});
