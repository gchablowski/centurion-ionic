'use strict';

describe('module: friends, service: FriendsServ', function () {
    var $httpBackend, FriendsServ;
    // load the service's module
    beforeEach(module('friends'));
    // load all the templates to prevent unexpected $http requests from ui-router
    beforeEach(module('ngHtml2Js'));

    beforeEach(inject(function ($injector, _FriendsServ_) {
        // Set up the mock http service responses
        $httpBackend = $injector.get('$httpBackend');
        FriendsServ = _FriendsServ_;

    }));

    it('is defined', inject(function (FriendsServ) {
        expect(FriendsServ).toBeDefined();
    }));


    it('should send a request to GET the friends', function () {

        $httpBackend.when('GET', 'https://centurion.back9solutions.com/app/friends').respond(200, {data: 1});
        var result = FriendsServ.friends();
        $httpBackend.expectGET('https://centurion.back9solutions.com/app/friends');
        $httpBackend.flush();
        expect(result.data).toEqual(1);
    });

    it('should send a request to GET the user', function () {

        $httpBackend.when('GET', 'https://centurion.back9solutions.com/app/user/1').respond(200, {data: 1});
        var result = FriendsServ.user({id: 1});
        $httpBackend.expectGET('https://centurion.back9solutions.com/app/user/1');
        $httpBackend.flush();
        expect(result.data).toEqual(1);
    });

    it('should send a request to POST to import', function () {

        $httpBackend.when('POST', 'https://centurion.back9solutions.com/app/import').respond(200, {data: 1});
        var result = FriendsServ.import();
        $httpBackend.expectPOST('https://centurion.back9solutions.com/app/import');
        $httpBackend.flush();
        expect(result.data).toEqual(1);
    });

    it('should send a request to POST to approve', function () {

        $httpBackend.when('POST', 'https://centurion.back9solutions.com/app/approve/1').respond(200, {data: 1});
        var result = FriendsServ.approve({id: 1});
        $httpBackend.expectPOST('https://centurion.back9solutions.com/app/approve/1');
        $httpBackend.flush();
        expect(result.data).toEqual(1);
    });

    it('should send a request to POST to deny', function () {

        $httpBackend.when('POST', 'https://centurion.back9solutions.com/app/deny/1').respond(200, {data: 1});
        var result = FriendsServ.deny({id: 1});
        $httpBackend.expectPOST('https://centurion.back9solutions.com/app/deny/1');
        $httpBackend.flush();
        expect(result.data).toEqual(1);
    });
    
    it('should send a request to Get conversations', function () {

        $httpBackend.when('GET', 'https://centurion.back9solutions.com/app/conversations').respond(200, {data: 1});
        var result = FriendsServ.conversations();
        $httpBackend.expectGET('https://centurion.back9solutions.com/app/conversations');
        $httpBackend.flush();
        expect(result.data).toEqual(1);
    });
});