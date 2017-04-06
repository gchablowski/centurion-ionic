'use strict';
angular.module('main')
        .filter("groupDataset", ["$filter", function ($filter) {
                return function (obj, groupParam, concatParam, orderList) {

                    if (!obj) {
                        return [];
                    }
                    
                    var result = new Array();

                    obj = $filter('groupBy')(obj, groupParam);
                    
                    if (obj[concatParam[0]] && obj[concatParam[1]]) {
                        obj[concatParam[0]] = obj[concatParam[0]].concat(obj[concatParam[1]]);
                        delete obj[concatParam[1]];
                    }
                    
                    if (obj[concatParam[1]] && !obj[concatParam[0]]) {
                        obj[concatParam[0]] = obj[concatParam[1]];
                        delete obj[concatParam[1]];
                    }

                    var order = function (result, obj, orderList) {

                        if (orderList.length == 0) {
                            console.log(result);
                            return result;
                        }

                        result.push(obj[orderList[0]] || []);
                        orderList.shift();

                        return order(result, obj, orderList);
                    };

                    return order(result, obj, orderList);
                };
            }]);


