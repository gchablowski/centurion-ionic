'use strict';
angular.module('main')
        .controller('LoginCtrl', ['$scope', 'LoginServ', '$state', '$localStorage', "$ionicPopup", function ($scope, LoginServ, $state, $localStorage, $ionicPopup) {
                var $this = this;
                $scope.loginData = {};
                $scope.appMessage = {};


                //helper function
                $this.redirect = function (user) {
                    if (user.membership_id) {
                        $state.go('home');
                    }
                    //TODO
                    //$state.go('member');
                };

                $this.showAlert = function (title, template) {
                    $ionicPopup.alert({
                        title: title,
                        template: template
                    });

                };

                $this.success = function (data) {

                    if (data.error) {
                        $this.showAlert('Invalid Details', data.error);
                        return false;
                    }

                    $localStorage.token = data.token;
                    $localStorage.user = data.user;
                    $localStorage.stats = data.stats;

                    $this.redirect(data.user);

                };

                $this.error = function () {
                    $this.showAlert('Invalid Details', "We encouter a problem to log you in");
                };

                //redirect user if he is already logged
                if ($localStorage.token) {
                    $this.redirect($localStorage.user);
                    return false;
                }

                //process login form submit
                $scope.processLogin = function () {
                    $localStorage.$reset({});
                    LoginServ.login({}, $scope.loginData, $this.success, $this.error);
                };

            }]);