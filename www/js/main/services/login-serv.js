'use strict';
angular.module('main')
        .factory('LoginServ', ['Config', '$resource',
            function (Config, $resource) {
                return $resource(Config.ENV.SERVER_URL + '/applogin/:action', {}, {
                   login: {method: 'POST', params: {action: 'login'}, isArray: false}
                });
            }]);