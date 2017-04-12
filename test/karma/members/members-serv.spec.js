'use strict';

describe('module: members, service: MembersServ', function () {
    var $httpBackend, MembersServ;
    // load the service's module
    beforeEach(module('members'));
    // load all the templates to prevent unexpected $http requests from ui-router
    beforeEach(module('ngHtml2Js'));

    beforeEach(inject(function ($injector, _MembersServ_) {
        // Set up the mock http service responses
        $httpBackend = $injector.get('$httpBackend');
        MembersServ = _MembersServ_;

    }));

    it('is defined', inject(function (MembersServ) {
        expect(MembersServ).toBeDefined();
    }));

    it('should send a request to get the profile', function () {

        $httpBackend.when('GET', 'https://centurion.back9solutions.com/app/profile').respond(200, {data: 1});
        var result = MembersServ.profile();
        $httpBackend.expectGET('https://centurion.back9solutions.com/app/profile');
        $httpBackend.flush();
        expect(result.data).toEqual(1);
    });

    it('should send a request to GET the posts', function () {

        $httpBackend.when('GET', 'https://centurion.back9solutions.com/app/posts').respond(200, {data: 1});
        var result = MembersServ.posts();
        $httpBackend.expectGET('https://centurion.back9solutions.com/app/posts');
        $httpBackend.flush();
        expect(result.data).toEqual(1);
    });

    it('should send a request to GET the post', function () {

        $httpBackend.when('GET', 'https://centurion.back9solutions.com/app/post/1').respond(200, {data: 1});
        var result = MembersServ.post({id: 1});
        $httpBackend.expectGET('https://centurion.back9solutions.com/app/post/1');
        $httpBackend.flush();
        expect(result.data).toEqual(1);
    });

    it('should send a request toGET the events', function () {

        $httpBackend.when('GET', 'https://centurion.back9solutions.com/app/events').respond(200, {data: 1});
        var result = MembersServ.events();
        $httpBackend.expectGET('https://centurion.back9solutions.com/app/events');
        $httpBackend.flush();
        expect(result.data).toEqual(1);
    });

    it('should send a request to get the event', function () {

        $httpBackend.when('GET', 'https://centurion.back9solutions.com/app/event/1').respond(200, {data: 1});
        var result = MembersServ.event({id: 1});
        $httpBackend.expectGET('https://centurion.back9solutions.com/app/event/1');
        $httpBackend.flush();
        expect(result.data).toEqual(1);
    });

    it('should send a request to POST the registration', function () {

        $httpBackend.when('POST', 'https://centurion.back9solutions.com/app/registration/1').respond(200, {data: 1});
        var result = MembersServ.registration({id: 1});
        $httpBackend.expectPOST('https://centurion.back9solutions.com/app/registration/1');
        $httpBackend.flush();
        expect(result.data).toEqual(1);
    });

    it('should send a request to POST to cancel the cancelRegistration', function () {

        $httpBackend.when('POST', 'https://centurion.back9solutions.com/app/cancel-registration/1').respond(200, {data: 1});
        var result = MembersServ.cancelRegistration({id: 1});
        $httpBackend.expectPOST('https://centurion.back9solutions.com/app/cancel-registration/1');
        $httpBackend.flush();
        expect(result.data).toEqual(1);
    });

});