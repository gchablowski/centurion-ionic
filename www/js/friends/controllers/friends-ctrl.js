'use strict';
angular.module('friends')
        .controller('FriendsCtrl', ["$scope", "datasets", "$cordovaSocialSharing", "$filter", function ($scope, datasets, $cordovaSocialSharing, $filter) {

                $scope.follow = $filter('groupDataset')(datasets.follow, 'pivot.status', ['Accepted', 'Approved'], ['Requested', 'Pending', 'Accepted']);

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