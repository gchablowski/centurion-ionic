'use strict';
angular.module('visitors')
        .controller('ListingsCtrl', ["$scope", "datasets", function ($scope, datasets) {
                $scope.listings = datasets.listings;
            }]);
