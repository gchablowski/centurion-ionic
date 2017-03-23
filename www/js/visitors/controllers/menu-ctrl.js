'use strict';
angular.module('visitors')
        .controller('MenuCtrl', ['$scope', '$state', '$rootScope', '$localStorage', function ($scope, $state, $rootScope, $localStorage) {
                var $this = this;
                $scope.home = $state.current.data.buttonHome;

                $this.eventFn = function (event, toState) {

                    if (toState.data) {
                        $scope.home = toState.data.buttonHome;
                    }
                };

                $rootScope.$on('$stateChangeStart', $this.eventFn);

                $scope.gotoHome = function () {
                    var url = $localStorage.user ? 'home' : 'visitors';
                    $state.go(url);
                };

            }]);
