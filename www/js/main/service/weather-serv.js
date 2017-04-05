'use strict';
angular.module('main')
        .factory('WeatherServ', ['Config', '$resource',
            function (Config, $resource) {
                return $resource(Config.ENV.WEATHER_URL, {}, {
                    'query':  {method:'GET', isArray:false}
                });
            }]);