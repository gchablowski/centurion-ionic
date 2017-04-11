'use strict';
angular.module('booking')
        .factory('BookingServ', ['ConfigBooking', '$resource',
            function (Config, $resource) {
                return $resource(Config.ENV.SERVER_URL + '/app/:action/:id', {id: '@id'}, {
                    bookings: {method: 'GET', params: {action: 'bookings'}, isArray: false},
                    booking: {method: 'GET', params: {action: 'booking'}, isArray: false},
                    bookingform: {method: 'GET', params: {action: 'bookingform'}, isArray: false},
                    bookingformPost: {method: 'POST', params: {action: 'bookingform'}, headers: {'Content-Type': 'application/json'}, isArray: false},
                    bookingCancel: {method: 'POST', params: {action: 'booking-cancel'}, headers: {'Content-Type': 'application/json'}, isArray: false},
                    bookingReschedule: {method: 'POST', params: {action: 'booking-reschedule'}, headers: {'Content-Type': 'application/json'}, isArray: false}
                });
            }]);