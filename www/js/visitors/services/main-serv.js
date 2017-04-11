'use strict';
angular.module('visitors')
        .factory('MainServ', ['ConfigVisitors', '$resource',
            function (Config, $resource) {
                return $resource(Config.ENV.SERVER_URL + '/visitors/:action/:id', {id: '@id'}, {
                    memberships: {method: 'GET', params: {action: 'memberships'}, isArray: false},
                    listings: {method: 'GET', params: {action: 'listings'}, isArray: false},
                    listing: {method: 'GET', params: {action: 'listing'}, isArray: false},
                    reciprocals: {method: 'GET', params: {action: 'reciprocal'}, isArray: false},
                    reciprocal: {method: 'GET', params: {action: 'listing'}, isArray: false},
                    gallery: {method: 'GET', params: {action: 'gallery'}, isArray: false},
                    contacts: {method: 'GET', params: {action: 'contacts'}, isArray: false},
                    contact: {method: 'GET', params: {action: 'contact'}, isArray: false},
                    contactPost: {method: 'POST', params: {action: 'contact'}},
                    page: {method: 'GET', params: {action: 'page'}}
                });
            }]);