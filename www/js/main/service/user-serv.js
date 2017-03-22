'use strict';
angular.module('main')
        .factory('UserServ', ['Config', '$resource',
            function (Config, $resource) {
                return $resource(Config.ENV.SERVER_URL + '/app/:action/:id', {id: '@id'}, {
                   profile: {method: 'GET', params: {action: 'profile'}, isArray: false},
                   load: {method: 'GET', params: {action: 'load'}, isArray: false},
                   posts: {method: 'GET', params: {action: 'posts'}, isArray: false},
                   post: {method: 'GET', params: {action: 'post'}, isArray: false}
                });
            }]);