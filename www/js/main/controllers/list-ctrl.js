'use strict';
angular.module('main')
        .controller('ListCtrl', ["$scope", "datasets", function ($scope, datasets) {
                
                $scope.posts = datasets.posts || datasets.post || datasets.events || datasets.users || (datasets.courses && datasets.listings && datasets.courses.concat(datasets.listings)) || datasets.query.results.channel;

            }]);