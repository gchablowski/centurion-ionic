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
                    update: {method: 'POST', params: {action: 'update'}, isArray: false}
                });
            }]);