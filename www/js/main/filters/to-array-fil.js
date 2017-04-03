'use strict';
angular.module('main')
        .filter("toArray", [function () {
                return function (obj) {
                    var result = [];
                    angular.forEach(obj, function (val, key) {
                        result.push(val);
                    });
                    return result;
                };
            }]);

