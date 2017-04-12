'use strict';
angular.module('friends')
        .controller('FriendCtrl', ["$scope", "datasets", "$ionicPopup", "$state", "FriendsServ", function ($scope, datasets, $ionicPopup, $state, FriendsServ) {

                var $this = this;
                $scope.user = datasets.user;
                $scope.friend = datasets.friend;

                $this.showAlert = function (template) {
                    $ionicPopup.alert({
                        title: 'Error',
                        template: template
                    });
                };

                $this.success = function (data) {
                    if (data.error) {
                        $this.showAlert(data.error);
                        return false;
                    }

                    $state.go('menu.friends');
                };

                $this.error = function () {
                    $this.showAlert("We encouter a problem.");
                };

                $scope.friendRequest = function (email, name) {
                    FriendsServ.import({}, {'name': name, 'email': email}, $this.success, $this.error);
                };

                $scope.friendAccept = function (id) {
                    FriendsServ.approve({id: id}, {}, $this.success, $this.error);
                };

                $scope.friendDeny = function (id) {
                    FriendsServ.deny({id: id}, {}, $this.success, $this.error);
                };

            }]);