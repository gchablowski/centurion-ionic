'use strict';
angular.module('main')
        .controller('NewsCtrl', ["$scope", "datasets", function ($scope, datasets) {
                
                $scope.posts = datasets.posts || datasets.post;

            }]);