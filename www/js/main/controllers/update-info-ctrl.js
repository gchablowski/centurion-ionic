'use strict';
angular.module('main')
        .controller('UpdateInfoCtrl', ["$scope", "$localStorage", "UserServ", "$ionicPopup", "$state", "$httpParamSerializer", function ($scope, $localStorage, UserServ, $ionicPopup, $state) {

                var $this = this;
                $scope.updateData = $localStorage.user;

                $this.success = function (data) {
                    if (data.error) {
                        $ionicPopup.alert({
                            title: 'Error',
                            template: data.error
                        });
                        return false;
                    }

                    $localStorage.user = data.user;
                    $state.go('account');
                };

                $scope.processUpdate = function () {
                    UserServ.updateInfo({}, $scope.updateData, $this.success);
                };

            }]);