'use strict';

angular.module("main")
    .directive("loader", ['$rootScope', '$ionicLoading', function($rootScope, $ionicLoading) {
            return function($rootScope, element) {
                $rootScope.$on("loader_show", function() {
                    return $ionicLoading.show();
                });
                return $rootScope.$on("loader_hide", function() {
                    return $ionicLoading.hide() ;
                });
            };
        }]);