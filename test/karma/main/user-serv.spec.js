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

    it('should send a request to GET the posts', function () {

        $httpBackend.when('GET', 'https://centurion.back9solutions.com/app/posts').respond(200, {data: 1});
        var result = UserServ.posts();
        $httpBackend.expectGET('https://centurion.back9solutions.com/app/posts');
        $httpBackend.flush();
        expect(result.data).toEqual(1);
    });

    it('should send a request to GET the post', function () {

        $httpBackend.when('GET', 'https://centurion.back9solutions.com/app/post/1').respond(200, {data: 1});
        var result = UserServ.post({id: 1});
        $httpBackend.expectGET('https://centurion.back9solutions.com/app/post/1');
        $httpBackend.flush();
        expect(result.data).toEqual(1);
    });

    it('should send a request to POST the logout', function () {

        $httpBackend.when('POST', 'https://centurion.back9solutions.com/app/logout').respond(200, {data: 1});
        var result = UserServ.logout();
        $httpBackend.expectPOST('https://centurion.back9solutions.com/app/logout');
        $httpBackend.flush();
        expect(result.data).toEqual(1);
    });

    it('should send a request toGET the events', function () {

        $httpBackend.when('GET', 'https://centurion.back9solutions.com/app/events').respond(200, {data: 1});
        var result = UserServ.events();
        $httpBackend.expectGET('https://centurion.back9solutions.com/app/events');
        $httpBackend.flush();
        expect(result.data).toEqual(1);
    });

    it('should send a request to get the event', function () {

        $httpBackend.when('GET', 'https://centurion.back9solutions.com/app/event/1').respond(200, {data: 1});
        var result = UserServ.event({id: 1});
        $httpBackend.expectGET('https://centurion.back9solutions.com/app/event/1');
        $httpBackend.flush();
        expect(result.data).toEqual(1);
    });

    it('should send a request to POST the registration', function () {

        $httpBackend.when('POST', 'https://centurion.back9solutions.com/app/registration/1').respond(200, {data: 1});
        var result = UserServ.registration({id: 1});
        $httpBackend.expectPOST('https://centurion.back9solutions.com/app/registration/1');
        $httpBackend.flush();
        expect(result.data).toEqual(1);
    });

    it('should send a request to POST to cancel the registration', function () {

        $httpBackend.when('POST', 'https://centurion.back9solutions.com/app/cancel-registration/1').respond(200, {data: 1});
        var result = UserServ.cancelRegistration({id: 1});
        $httpBackend.expectPOST('https://centurion.back9solutions.com/app/cancel-registration/1');
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

    it('should send a request to POST to update info', function () {

        $httpBackend.when('POST', 'https://centurion.back9solutions.com/app/password').respond(200, {data: 1});
        var result = UserServ.password();
        $httpBackend.expectPOST('https://centurion.back9solutions.com/app/password');
        $httpBackend.flush();
        expect(result.data).toEqual(1);
    });

    it('should send a request to GET the bookings', function () {

        $httpBackend.when('GET', 'https://centurion.back9solutions.com/app/bookings').respond(200, {data: 1});
        var result = UserServ.bookings();
        $httpBackend.expectGET('https://centurion.back9solutions.com/app/bookings');
        $httpBackend.flush();
        expect(result.data).toEqual(1);
    });

    it('should send a request to POST to bookingform', function () {

        $httpBackend.when('POST', 'https://centurion.back9solutions.com/app/bookingform/1').respond(200, {data: 1});
        var result = UserServ.bookingformPost({id: 1});
        $httpBackend.expectPOST('https://centurion.back9solutions.com/app/bookingform/1');
        $httpBackend.flush();
        expect(result.data).toEqual(1);
    });

    it('should send a request to POST to booking-cancel', function () {

        $httpBackend.when('POST', 'https://centurion.back9solutions.com/app/booking-cancel/1').respond(200, {data: 1});
        var result = UserServ.bookingCancel({id: 1});
        $httpBackend.expectPOST('https://centurion.back9solutions.com/app/booking-cancel/1');
        $httpBackend.flush();
        expect(result.data).toEqual(1);
    });

    it('should send a request to POST to booking-reschedule', function () {

        $httpBackend.when('POST', 'https://centurion.back9solutions.com/app/booking-reschedule/1').respond(200, {data: 1});
        var result = UserServ.bookingReschedule({id: 1});
        $httpBackend.expectPOST('https://centurion.back9solutions.com/app/booking-reschedule/1');
        $httpBackend.flush();
        expect(result.data).toEqual(1);
    });

    it('should send a request to GET the friends', function () {

        $httpBackend.when('GET', 'https://centurion.back9solutions.com/app/friends').respond(200, {data: 1});
        var result = UserServ.friends();
        $httpBackend.expectGET('https://centurion.back9solutions.com/app/friends');
        $httpBackend.flush();
        expect(result.data).toEqual(1);
    });

    it('should send a request to GET the user', function () {

        $httpBackend.when('GET', 'https://centurion.back9solutions.com/app/user/1').respond(200, {data: 1});
        var result = UserServ.user({id: 1});
        $httpBackend.expectGET('https://centurion.back9solutions.com/app/user/1');
        $httpBackend.flush();
        expect(result.data).toEqual(1);
    });

    it('should send a request to POST to import', function () {

        $httpBackend.when('POST', 'https://centurion.back9solutions.com/app/import').respond(200, {data: 1});
        var result = UserServ.import();
        $httpBackend.expectPOST('https://centurion.back9solutions.com/app/import');
        $httpBackend.flush();
        expect(result.data).toEqual(1);
    });

    it('should send a request to POST to approve', function () {

        $httpBackend.when('POST', 'https://centurion.back9solutions.com/app/approve/1').respond(200, {data: 1});
        var result = UserServ.approve({id: 1});
        $httpBackend.expectPOST('https://centurion.back9solutions.com/app/approve/1');
        $httpBackend.flush();
        expect(result.data).toEqual(1);
    });

    it('should send a request to POST to deny', function () {

        $httpBackend.when('POST', 'https://centurion.back9solutions.com/app/deny/1').respond(200, {data: 1});
        var result = UserServ.deny({id: 1});
        $httpBackend.expectPOST('https://centurion.back9solutions.com/app/deny/1');
        $httpBackend.flush();
        expect(result.data).toEqual(1);
    });
    
    it('should send a request to Get conversations', function () {

        $httpBackend.when('GET', 'https://centurion.back9solutions.com/app/conversations').respond(200, {data: 1});
        var result = UserServ.conversations();
        $httpBackend.expectGET('https://centurion.back9solutions.com/app/conversations');
        $httpBackend.flush();
        expect(result.data).toEqual(1);
    });
});