'use strict';
angular.module('main')
        .controller('HomeCtrl', ["$scope", "datasets", "$localStorage", function ($scope, datasets, $localStorage) {
             
                $scope.user = $localStorage.user;
                $scope.points = datasets.points;
                $scope.posts = datasets.posts;
                $scope.events = datasets.events;
                $scope.bookings = datasets.bookings;
                $scope.booking_next = datasets.booking_next;

                $scope.pending = datasets.pending;
                $scope.unread = datasets.unread;

/*TODO
                Pusher.subscribe('chat_' + $rootScope.user.id, 'new_message', function (data) {
                    $scope.unread += 1;
                });

                Pusher.subscribe('chat_' + $rootScope.user.id, 'friend_request', function (data) {
                    $scope.pending += 1;
                });
*/

            }]);