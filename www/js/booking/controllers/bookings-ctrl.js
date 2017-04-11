'use strict';
angular.module('booking')
        .controller('BookingsCtrl', ["$scope", "datasets", "$filter", function ($scope, datasets, $filter) {

                //create a list that is flat for the collection-repeat
                $scope.lists = $filter('concatDataset')([datasets.listings, datasets.courses], "bookings");
                $scope.bookings = datasets.bookings;

            }]);