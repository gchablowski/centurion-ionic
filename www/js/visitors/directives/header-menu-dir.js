'use strict';
angular.module('visitors')
        .directive('headermenu', ['$window', function ($window) {
                return {
                    restrict: 'A',
                    templateUrl: "templates/visitors/header-menu-dir.html",
                    scope: {
                        title: "=",
                        home: "="
                    },
                    link: function postLink(scope, element, attrs) {
                        scope.gotoBack = function () {
                             $window.history.back();
                        };
                    }
                };
            }]);
