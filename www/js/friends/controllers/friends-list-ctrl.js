'use strict';
angular.module('friends')
        .controller('FriendsListCtrl', ["$scope", "datasets", function ($scope, datasets) {
                
                $scope.posts = datasets.users;

            }]);