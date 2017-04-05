'use strict';
angular.module('main')
        .controller('AccountCtrl', ["$scope", "$localStorage", 'UserServ', "$state", "$ionicPopup", function ($scope, $localStorage, UserServ, $state, $ionicPopup) {
                var $this = this;
                $scope.user = $localStorage.user;

                $this.success = function(){
                    $localStorage.$reset({});
                    $state.go('login');
                };
                
                 $this.error = function () {
                    $ionicPopup.alert({
                        title: "An error occured",
                        template: "We can't proceed. Please try again."
                    });
                };

                $scope.logout = function () {
                    UserServ.logout({}, $this.success, $this.error);
                };

            }]);