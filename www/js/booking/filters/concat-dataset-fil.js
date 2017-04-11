'use strict';
angular.module('booking')
        .filter("concatDataset", ["$filter", function ($filter) {
                return function (obj, key) {
                    if (obj.length == 1) {
                        return obj[0];
                    }

                    obj[0] = obj[0].length == 1 ? obj[0].concat(obj[0][0][key]) : obj[0];
                    obj[1] = obj[1].concat(obj[1][0][key]);
                    obj[1] = obj[1].concat(obj[0]);
                    obj.shift();

                    return  $filter('concatDataset')(obj, key);
                }
            }]);


