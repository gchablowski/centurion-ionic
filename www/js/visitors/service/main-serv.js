'use strict';
angular.module('visitors')
        .factory('MainServ', ['Config', '$resource',
            function (Config, $resource) {
                return $resource(Config.ENV.SERVER_URL + '/visitors/:action', {}, {
                    memberships: {method: 'GET', params: {action: 'memberships'}, isArray: false}
                });
            }]);