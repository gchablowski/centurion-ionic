'use strict';
angular.module('main')
        .controller('AccountCtrl', ["$scope", "$localStorage", 'UserServ', "$state", function ($scope, $localStorage, UserServ, $state) {

                var $this = this;
                $scope.user = $localStorage.user;

                $this.succes = function(){
                    $localStorage.$reset();
                    $state.go('login');
                };

                $scope.logout = function () {
                    UserServ.logout({}, $this.succes);
                };

            }]);