'use strict';
angular.module('main')
        .controller('LoginCtrl', ['$scope', 'LoginServ', '$state', '$localStorage', function ($scope, LoginServ, $state, $localStorage) {
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

                $this.success = function (data) {

                    if (data.error) {
                        $scope.appMessage.title = 'Invalid Details';
                        $scope.appMessage.content = data.error;
                        $scope.appMessage.show = true;
                        return false;
                    }

                    $localStorage.token = data.token;
                    $localStorage.user = data.user;
                    $localStorage.stats = data.stats;

                    $this.redirect(data.user);

                };

                $this.error = function () {
                    $scope.appMessage.title = 'Invalid Details';
                    $scope.appMessage.content = "We encouter a problem to log you in";
                    $scope.appMessage.show = true;
                };
                
                //redirect user if he is already logged
                if ($localStorage.token) {
                    $this.redirect($localStorage.user);
                }

                //process login form submit
                $scope.processLogin = function () {

                    LoginServ.login({}, $scope.loginData, $this.success, $this.error);
                };
            }]);