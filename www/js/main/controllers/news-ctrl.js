'use strict';
angular.module('main')
        .controller('NewsCtrl', ["$scope", "datasets", function ($scope, datasets) {

                $scope.posts = datasets.posts;

                $scope.sortDate = function (event) {
                    var date = new Date(event.created_at);
                    return date;
                };

            }]);