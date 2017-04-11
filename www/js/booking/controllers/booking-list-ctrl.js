'use strict';
angular.module('booking')
        .controller('BookingListCtrl', ["$scope", "datasets", function ($scope, datasets) {
                
                $scope.posts =  (datasets.courses && datasets.listings && datasets.courses.concat(datasets.listings));

            }]);