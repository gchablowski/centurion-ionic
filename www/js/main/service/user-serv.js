'use strict';
angular.module('main')
        .factory('UserServ', ['Config', '$resource',
            function (Config, $resource) {
                return $resource(Config.ENV.SERVER_URL + '/app/:action/:id', {id: '@id'}, {
                    profile: {method: 'GET', params: {action: 'profile'}, isArray: false},
                    load: {method: 'GET', params: {action: 'load'}, isArray: false},
                    posts: {method: 'GET', params: {action: 'posts'}, isArray: false},
                    post: {method: 'GET', params: {action: 'post'}, isArray: false},
                    logout: {method: 'POST', params: {action: 'logout'}, isArray: false},
                    events: {method: 'GET', params: {action: 'events'}, isArray: false},
                    event: {method: 'GET', params: {action: 'event'}, isArray: false},
                    registration: {method: 'POST', params: {action: 'registration'}, isArray: false},
                    cancelRegistration: {method: 'POST', params: {action: 'cancel-registration'}, isArray: false},
                    updateInfo: {method: 'POST', params: {action: 'update'}, headers: {'Content-Type': 'application/json'}, isArray: false},
                    password: {method: 'POST', params: {action: 'password'}, headers: {'Content-Type': 'application/json'}, isArray: false},
                    bookings: {method: 'GET', params: {action: 'bookings'}, isArray: false},
                    booking: {method: 'GET', params: {action: 'booking'}, isArray: false},
                    bookingform: {method: 'GET', params: {action: 'bookingform'}, isArray: false},
                    bookingformPost: {method: 'POST', params: {action: 'bookingform'}, headers: {'Content-Type': 'application/json'}, isArray: false},
                    bookingCancel: {method: 'POST', params: {action: 'booking-cancel'}, headers: {'Content-Type': 'application/json'}, isArray: false},
                    bookingReschedule: {method: 'POST', params: {action: 'booking-reschedule'}, headers: {'Content-Type': 'application/json'}, isArray: false},
                    friends: {method: 'GET', params: {action: 'friends'}, isArray: false},
                    user: {method: 'GET', params: {action: 'user'}, isArray: false},
                    import: {method: 'POST', params: {action: 'import'}, headers: {'Content-Type': 'application/json'}, isArray: false},
                    approve: {method: 'POST', params: {action: 'approve'}, headers: {'Content-Type': 'application/json'}, isArray: false},
                    deny: {method: 'POST', params: {action: 'deny'}, headers: {'Content-Type': 'application/json'}, isArray: false},
                    users: {method: 'GET', params: {action: 'users'}, isArray: false}
                });
            }]);