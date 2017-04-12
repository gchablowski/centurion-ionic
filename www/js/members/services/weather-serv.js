'use strict';
angular.module('members')
        .factory('WeatherServ', ['ConfigMembers', '$resource',
            function (Config, $resource) {
                return $resource(Config.ENV.WEATHER_URL, {}, {
                    'query':  {method:'GET', isArray:false}
                });
            }]);