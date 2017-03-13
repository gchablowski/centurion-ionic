'use strict';

describe('club finder List page', function () {

    beforeEach(function () {
        browser.get('/#/visitors');
    });

    it('Should have a title', function () {
        expect(browser.getTitle()).toEqual('visitor');
    });
 
});