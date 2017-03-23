'use strict';
angular.module('visitors')
        .controller('MenuCtrl', ['$scope', '$state', '$rootScope', '$localStorage', function ($scope, $state, $rootScope, $localStorage) {

                $scope.home = $state.current.data.buttonHome;

                $rootScope.$on('$stateChangeStart', function (event, toState) {

                    if (toState.data) {
                        $scope.home = toState.data.buttonHome;
                    }
                })

                $scope.gotoHome = function () {
                    var url = $localStorage.user ? 'home' : 'visitors';
                    $state.go(url);
                };

            }]);
