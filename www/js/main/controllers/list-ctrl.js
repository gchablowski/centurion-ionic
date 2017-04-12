'use strict';
angular.module('main')
        .controller('ListCtrl', ["$scope", "datasets", function ($scope, datasets) {
                
                $scope.posts = datasets.users;

            }]);