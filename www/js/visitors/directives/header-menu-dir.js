'use strict';
angular.module('visitors')
        .directive('headermenu', function () {
            return {
                restrict: 'A',
                templateUrl: "../../../templates/visitors/header-menu-dir.html",
                scope: {
                    title: "=",
                    home: "=",
                    back: "="
                },
                link: function postLink(scope, element, attrs) {
                }
            };
        });
