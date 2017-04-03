'use strict';
angular.module('main')
        .filter("dateFormat", ["$filter", function ($filter) {
                return function (text, format) {
 
                    if (!text) {
                        return '';
                    }
                    
                    var tempdate = text;
                    
                    if (typeof text == 'string') {
                       tempdate = new Date(text.replace(/-/g, "/"));
                    }
                    
                    return $filter('date')(tempdate, format);
                }
            }]);


