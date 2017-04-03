'use strict';
angular.module('main')
        .controller('BookingsCtrl', ["$scope", "datasets", function ($scope, datasets) {

                $scope.concat = datasets.courses.concat(datasets.listings);
                $scope.bookings = datasets.bookings;

            }]);