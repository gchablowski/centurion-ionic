'use strict';
angular.module('main')
        .filter("dateFormat", ["$filter", function ($filter) {
                return function (text, format) {
                    var tempdate = new Date(text.replace(/-/g, "/"));
                    return $filter('date')(tempdate, format);
                }
            }]);


