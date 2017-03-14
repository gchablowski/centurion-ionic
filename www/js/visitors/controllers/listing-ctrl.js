'use strict';
angular.module('visitors')
        .controller('ListingCtrl', ["$scope", "datasets", function ($scope, datasets) {
                $scope.listing = datasets.listing;
       
            }]);
