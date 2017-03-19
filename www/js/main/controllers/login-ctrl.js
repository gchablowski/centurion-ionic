'use strict';
angular.module('main')
        .controller('LoginCtrl', ['$scope', 'LoginServ', '$state', '$localForage', function ($scope, LoginServ, $state, $localForage) {
                var $this = this;
                $scope.loginData = {};
                $scope.appMessage = {};

                $this.success = function (data) {

                    if (data.error) {
                        $scope.appMessage.title = 'Invalid Details';
                        $scope.appMessage.content = data.error;
                        $scope.appMessage.show = true;
                        return false;
                    }

                    $localForage.setItem('token', data.token);
                    $localForage.setItem('user', data.user);
                    $localForage.setItem('stats', data.stats);

                    if (data.user.membership_id) {
                        $state.go('profile');
                    }
                    
                    $state.go('member');

                };

                $this.error = function (data) {
                    $scope.appMessage.title = 'Invalid Details';
                    $scope.appMessage.content = "We encouter a problem to log you in";
                    $scope.appMessage.show = true;
                };

                $scope.processLogin = function () {
                    LoginServ.login({}, $scope.loginData, $this.success, $this.error);
                };
            }]);