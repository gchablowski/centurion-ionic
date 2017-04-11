'use strict';

describe('module: booking, service: BookingServ', function () {
    var $httpBackend, BookingServ;
    // load the service's module
    beforeEach(module('booking'));
    // load all the templates to prevent unexpected $http requests from ui-router
    beforeEach(module('ngHtml2Js'));

    beforeEach(inject(function ($injector, _BookingServ_) {
        // Set up the mock http service responses
        $httpBackend = $injector.get('$httpBackend');
        BookingServ = _BookingServ_;

    }));

    it('is defined', inject(function (BookingServ) {
        expect(BookingServ).toBeDefined();
    }));


    it('should send a request to GET the bookings', function () {

        $httpBackend.when('GET', 'https://centurion.back9solutions.com/app/bookings').respond(200, {data: 1});
        var result = BookingServ.bookings();
        $httpBackend.expectGET('https://centurion.back9solutions.com/app/bookings');
        $httpBackend.flush();
        expect(result.data).toEqual(1);
    });

    it('should send a request to POST to bookingform', function () {

        $httpBackend.when('POST', 'https://centurion.back9solutions.com/app/bookingform/1').respond(200, {data: 1});
        var result = BookingServ.bookingformPost({id: 1});
        $httpBackend.expectPOST('https://centurion.back9solutions.com/app/bookingform/1');
        $httpBackend.flush();
        expect(result.data).toEqual(1);
    });

    it('should send a request to POST to booking-cancel', function () {

        $httpBackend.when('POST', 'https://centurion.back9solutions.com/app/booking-cancel/1').respond(200, {data: 1});
        var result = BookingServ.bookingCancel({id: 1});
        $httpBackend.expectPOST('https://centurion.back9solutions.com/app/booking-cancel/1');
        $httpBackend.flush();
        expect(result.data).toEqual(1);
    });

    it('should send a request to POST to booking-reschedule', function () {

        $httpBackend.when('POST', 'https://centurion.back9solutions.com/app/booking-reschedule/1').respond(200, {data: 1});
        var result = BookingServ.bookingReschedule({id: 1});
        $httpBackend.expectPOST('https://centurion.back9solutions.com/app/booking-reschedule/1');
        $httpBackend.flush();
        expect(result.data).toEqual(1);
    });
});