'use strict';

describe('module: main, service: LoginServ', function () {
    var $httpBackend, LoginServ;
    // load the service's module
    beforeEach(module('main'));
    // load all the templates to prevent unexpected $http requests from ui-router
    beforeEach(module('ngHtml2Js'));

    beforeEach(inject(function ($injector, _LoginServ_) {
        // Set up the mock http service responses
        $httpBackend = $injector.get('$httpBackend');
        LoginServ = _LoginServ_;

    }));

    it('is defined', inject(function (LoginServ) {
        expect(LoginServ).toBeDefined();
    }));

    it('should send the login request', function () {

        $httpBackend.when('POST', 'https://centurion.back9solutions.com/applogin/login').respond(200, {data: 1});
        var result = LoginServ.login({id: 1});
        $httpBackend.expectPOST('https://centurion.back9solutions.com/applogin/login');
        $httpBackend.flush();
        expect(result.data).toEqual(1);
    });
});