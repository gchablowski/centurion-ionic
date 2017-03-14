'use strict';

describe('club finder List page', function () {

    beforeEach(function () {
        browser.get('/#/membership');
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

});