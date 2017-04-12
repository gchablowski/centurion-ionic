'use strict';
angular.module('members')
        .controller('MembersListCtrl', ["$scope", "datasets", function ($scope, datasets) {

                $scope.posts = datasets.posts || datasets.post || datasets.events || (datasets.query.results && datasets.query.results.channel);

            }]);