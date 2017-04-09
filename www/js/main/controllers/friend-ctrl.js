'use strict';
angular.module('main')
        .controller('FriendCtrl', ["$scope", "datasets", "$ionicPopup", "$state", "UserServ", function ($scope, datasets, $ionicPopup, $state, UserServ) {

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
                    UserServ.import({}, {'name': name, 'email': email}, $this.success, $this.error);
                };

                $scope.friendAccept = function (id) {
                    UserServ.approve({id: id}, {}, $this.success, $this.error);
                };

                $scope.friendDeny = function (id) {
                    UserServ.deny({id: id}, {}, $this.success, $this.error);
                };

            }]);