'use strict';
angular.module('visitors')
        .factory('MainServ', ['Config', '$resource',
            function (Config, $resource) {
                return $resource(Config.ENV.SERVER_URL + '/visitors/:action/:id', {id: '@id'}, {
                    memberships: {method: 'GET', params: {action: 'memberships'}, isArray: false},
                    listings: {method: 'GET', params: {action: 'listings'}, isArray: false},
                    reciprocals: {method: 'GET', params: {action: 'reciprocal'}, isArray: false},
                    reciprocal: {method: 'GET', params: {action: 'listing'}, isArray: false}
                });
            }]);