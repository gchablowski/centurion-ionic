'use strict';
angular.module('main')
        .controller('PasswordCtrl', ["$scope", "$localStorage", "UserServ", "$ionicPopup", "$state", function ($scope, $localStorage, UserServ, $ionicPopup, $state) {

                var $this = this;
                $scope.updateData = $localStorage.user;

                $this.showAlert = function (title, template) {
                    $ionicPopup.alert({
                        title: title,
                        template: template
                    });
                };

                $this.success = function (data) {
                    if (data.error) {
                        $this.showAlert('Error', data.error);
                        return false;
                    }

                    $localStorage.user = data.user;
                    $this.showAlert('Password Updated', 'Your password has been updated');
                    $state.go('account');

                };
                
                $this.error = function () {
                    $this.showAlert('Invalid Details', "We encouter a problem to change your password in");
                };

                $scope.passwordUpdate = function () {
                    UserServ.password({}, $scope.updateData, $this.success, $this.error);
                };

            }]);