'use strict';
angular.module('main')
        .controller('HomeCtrl', ["$scope", "datasets", "$localStorage", "$cordovaInAppBrowser", function ($scope, datasets, $localStorage, $cordovaInAppBrowser) {

                var $this = this;
                $scope.user = $localStorage.user;
                $scope.points = datasets.points;
                $scope.posts = datasets.posts;
                $scope.events = datasets.events;
                $scope.bookings = datasets.bookings;
                $scope.booking_next = datasets.booking_next;

                $scope.pending = datasets.pending;
                $scope.unread = datasets.unread;

                $this.inAppBrowser = function (url) {
                    var options = {
                        location: 'no',
                        clearcache: 'yes',
                        toolbar: 'yes'
                    };

                    $cordovaInAppBrowser.open(url, '_blank', options).then(function (event) {
                        console.log("bob");
                    });
                };


                $scope.launchTwitter = function () {
                    ionic.Platform.ready(function () {
                        $this.inAppBrowser('https://twitter.com/CenturionClub');
                    });
                };

                $scope.launchFacebook = function () {
                    ionic.Platform.ready(function () {
                        $this.inAppBrowser('https://www.facebook.com/CenturionClub.co.uk');
                    });
                };


                /*TODO
                 Pusher.subscribe('chat_' + $rootScope.user.id, 'new_message', function (data) {
                 $scope.unread += 1;
                 });
                 
                 Pusher.subscribe('chat_' + $rootScope.user.id, 'friend_request', function (data) {
                 $scope.pending += 1;
                 });
                 */

            }]);