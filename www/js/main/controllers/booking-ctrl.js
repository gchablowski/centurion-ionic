'use strict';
angular.module('main')
        .controller('BookingsCtrl', ["$scope", "datasets", function ($scope, datasets) {

                $scope.courses = datasets.courses;
                $scope.listings = datasets.listings;
                $scope.concat = datasets.courses.concat(datasets.listings); 

            }]);