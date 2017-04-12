'use strict';

describe('module: main, service: UserServ', function () {
    var $httpBackend, UserServ;
    // load the service's module
    beforeEach(module('main'));
    // load all the templates to prevent unexpected $http requests from ui-router
    beforeEach(module('ngHtml2Js'));

    beforeEach(inject(function ($injector, _UserServ_) {
        // Set up the mock http service responses
        $httpBackend = $injector.get('$httpBackend');
        UserServ = _UserServ_;

    }));

    it('is defined', inject(function (UserServ) {
        expect(UserServ).toBeDefined();
    }));

    it('should send a request to POST the logout', function () {

        $httpBackend.when('POST', 'https://centurion.back9solutions.com/app/logout').respond(200, {data: 1});
        var result = UserServ.logout();
        $httpBackend.expectPOST('https://centurion.back9solutions.com/app/logout');
        $httpBackend.flush();
        expect(result.data).toEqual(1);
    });

    it('should send a request to POST to update info', function () {

        $httpBackend.when('POST', 'https://centurion.back9solutions.com/app/update').respond(200, {data: 1});
        var result = UserServ.updateInfo();
        $httpBackend.expectPOST('https://centurion.back9solutions.com/app/update');
        $httpBackend.flush();
        expect(result.data).toEqual(1);
    });

    it('should send a request to POST password', function () {

        $httpBackend.when('POST', 'https://centurion.back9solutions.com/app/password').respond(200, {data: 1});
        var result = UserServ.password();
        $httpBackend.expectPOST('https://centurion.back9solutions.com/app/password');
        $httpBackend.flush();
        expect(result.data).toEqual(1);
    });

});