'use strict';

describe('module: visitors, service: MainServ', function () {
    var $httpBackend, MainServ;
    // load the service's module
    beforeEach(module('visitors'));
    // load all the templates to prevent unexpected $http requests from ui-router
    beforeEach(module('ngHtml2Js'));

    beforeEach(inject(function ($injector, _MainServ_) {
        // Set up the mock http service responses
        $httpBackend = $injector.get('$httpBackend');
        MainServ = _MainServ_;

    }));

    it('is defined', inject(function (MainServ) {
        expect(MainServ).toBeDefined();
    }));

    it('should send a request to get the menbership', function () {
  
        $httpBackend.when('GET', 'https://centurion.back9solutions.com/visitors/memberships').respond(200, {data:1});
        var result = MainServ.memberships();
        $httpBackend.expectGET('https://centurion.back9solutions.com/visitors/memberships');
        $httpBackend.flush();
        expect(result.data).toEqual(1);
    });
    
     it('should send a request to get the listings', function () {
  
        $httpBackend.when('GET', 'https://centurion.back9solutions.com/visitors/listings').respond(200, {data:1});
        var result = MainServ.listings();
        $httpBackend.expectGET('https://centurion.back9solutions.com/visitors/listings');
        $httpBackend.flush();
        expect(result.data).toEqual(1);
    });


});