'use strict';
angular.module('main')
        .filter("messageDateFormat", ["$filter", function ($filter) {
                return function (text) {
                    var tempdate = new Date(text.replace(/-/g, "/"));
                    return $filter('date')(tempdate, "h:mma d MMM");
                }
            }]);


