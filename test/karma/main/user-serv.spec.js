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

    it('should send a request to get the profile', function () {

        $httpBackend.when('GET', 'https://centurion.back9solutions.com/app/profile').respond(200, {data: 1});
        var result = UserServ.profile();
        $httpBackend.expectGET('https://centurion.back9solutions.com/app/profile');
        $httpBackend.flush();
        expect(result.data).toEqual(1);
    });

    it('should send a request to get the load', function () {

        $httpBackend.when('GET', 'https://centurion.back9solutions.com/app/load').respond(200, {data: 1});
        var result = UserServ.load();
        $httpBackend.expectGET('https://centurion.back9solutions.com/app/load');
        $httpBackend.flush();
        expect(result.data).toEqual(1);
    });

    it('should send a request to get the posts', function () {

        $httpBackend.when('GET', 'https://centurion.back9solutions.com/app/posts').respond(200, {data: 1});
        var result = UserServ.posts();
        $httpBackend.expectGET('https://centurion.back9solutions.com/app/posts');
        $httpBackend.flush();
        expect(result.data).toEqual(1);
    });
    
    it('should send a request to get the post', function () {

        $httpBackend.when('GET', 'https://centurion.back9solutions.com/app/post/1').respond(200, {data: 1});
        var result = UserServ.post({id: 1});
        $httpBackend.expectGET('https://centurion.back9solutions.com/app/post/1');
        $httpBackend.flush();
        expect(result.data).toEqual(1);
    });
    
        it('should send a request to get the events', function () {

        $httpBackend.when('GET', 'https://centurion.back9solutions.com/app/events').respond(200, {data: 1});
        var result = UserServ.events();
        $httpBackend.expectGET('https://centurion.back9solutions.com/app/events');
        $httpBackend.flush();
        expect(result.data).toEqual(1);
    });
});