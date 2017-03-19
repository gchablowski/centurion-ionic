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

        $httpBackend.when('GET', 'https://centurion.back9solutions.com/visitors/memberships').respond(200, {data: 1});
        var result = MainServ.memberships();
        $httpBackend.expectGET('https://centurion.back9solutions.com/visitors/memberships');
        $httpBackend.flush();
        expect(result.data).toEqual(1);
    });

    it('should send a request to get the listings', function () {

        $httpBackend.when('GET', 'https://centurion.back9solutions.com/visitors/listings').respond(200, {data: 1});
        var result = MainServ.listings();
        $httpBackend.expectGET('https://centurion.back9solutions.com/visitors/listings');
        $httpBackend.flush();
        expect(result.data).toEqual(1);
    });

    it('should send a request to get the listing with an id', function () {

        $httpBackend.when('GET', 'https://centurion.back9solutions.com/visitors/listing/1').respond(200, {data: 1});
        var result = MainServ.listing({id: 1});
        $httpBackend.expectGET('https://centurion.back9solutions.com/visitors/listing/1');
        $httpBackend.flush();
        expect(result.data).toEqual(1);
    });

    it('should send a request to get the reciprocals', function () {

        $httpBackend.when('GET', 'https://centurion.back9solutions.com/visitors/reciprocal').respond(200, {data: 1});
        var result = MainServ.reciprocals();
        $httpBackend.expectGET('https://centurion.back9solutions.com/visitors/reciprocal');
        $httpBackend.flush();
        expect(result.data).toEqual(1);
    });

    it('should send a request to get the reciprocal', function () {

        $httpBackend.when('GET', 'https://centurion.back9solutions.com/visitors/listing/1').respond(200, {data: 1});
        var result = MainServ.reciprocal({id: 1});
        $httpBackend.expectGET('https://centurion.back9solutions.com/visitors/listing/1');
        $httpBackend.flush();
        expect(result.data).toEqual(1);
    });

    it('should send a request to get the gallery', function () {

        $httpBackend.when('GET', 'https://centurion.back9solutions.com/visitors/gallery').respond(200, {data: 1});
        var result = MainServ.gallery();
        $httpBackend.expectGET('https://centurion.back9solutions.com/visitors/gallery');
        $httpBackend.flush();
        expect(result.data).toEqual(1);
    });

    it('should send a request POST to send the contacts', function () {

        $httpBackend.when('GET', 'https://centurion.back9solutions.com/visitors/contacts').respond(200, {data: 1});
        var result = MainServ.contacts();
        $httpBackend.expectGET('https://centurion.back9solutions.com/visitors/contacts');
        $httpBackend.flush();
        expect(result.data).toEqual(1);
    });

    it('should send a request POST to send the contact', function () {

        $httpBackend.when('GET', 'https://centurion.back9solutions.com/visitors/contact/1').respond(200, {data: 1});
        var result = MainServ.contact({id: 1});
        $httpBackend.expectGET('https://centurion.back9solutions.com/visitors/contact/1');
        $httpBackend.flush();
        expect(result.data).toEqual(1);
    });

    it('should send a request POST to send the contactPost', function () {

        $httpBackend.when('POST', 'https://centurion.back9solutions.com/visitors/contact/1').respond(200, {data: 1});
        var result = MainServ.contactPost({id: 1});
        $httpBackend.expectPOST('https://centurion.back9solutions.com/visitors/contact/1');
        $httpBackend.flush();
        expect(result.data).toEqual(1);
    });

});