'use strict';
angular.module('main')
        .factory('UserServ', ['Config', '$resource',
            function (Config, $resource) {
                return $resource(Config.ENV.SERVER_URL + '/app/:action/:id', {id: '@id'}, {
                    logout: {method: 'POST', params: {action: 'logout'}, isArray: false},
                    updateInfo: {method: 'POST', params: {action: 'update'}, headers: {'Content-Type': 'application/json'}, isArray: false},
                    password: {method: 'POST', params: {action: 'password'}, headers: {'Content-Type': 'application/json'}, isArray: false}
                });
            }]);