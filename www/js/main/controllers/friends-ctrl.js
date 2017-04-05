'use strict';
angular.module('main')
        .controller('FriendsCtrl', ["$scope", "datasets", "$cordovaSocialSharing", function ($scope, datasets, $cordovaSocialSharing) {

                var tmp = {};
                for (i = 0; i < datasets.data.follow.length; i++) {
                    var letter = datasets.data.follow[i].name.charAt(0);
                    if (tmp[ letter] == undefined) {
                        tmp[ letter] = []
                    }
                    tmp[ letter].push(datasets.data.follow[i]);
                }


                $scope.follow = datasets.data.follow;
                $scope.pending = datasets.data.pending;
                $scope.requested = datasets.data.requested;


                $scope.share = function (type) {
                    var message = 'Download the new Centurion Club app! http://centurion.back9solutions.com/download';

                    if (type == 1) {
                        $cordovaSocialSharing.shareViaFacebook(message, null, null);
                    } else if (type == 2) {
                        $cordovaSocialSharing.shareViaTwitter(message, null, null);
                    } else if (type == 3) {
                        $cordovaSocialSharing.shareViaSMS(message, null);
                    }
                };
            }]);