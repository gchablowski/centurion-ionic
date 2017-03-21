'use strict';
angular.module('visitors')
        .directive('headermenu', ['$window', "$localStorage", "$state", function ($window, $localStorage, $state) {
                return {
                    restrict: 'A',
                    templateUrl: "templates/visitors/header-menu-dir.html",
                    scope: {
                        title: "=",
                        home: "=",
                        homeUser: "="
                    },
                    link: function postLink(scope, element, attrs) {


                        scope.gotoHome = function () {
                            var link = ($localStorage.user && scope.homeUser) || scope.home;
                            $state.go(link);
                        };

                        scope.gotoBack = function () {
                            $window.history.back();
                        };
                    }
                };
            }]);
