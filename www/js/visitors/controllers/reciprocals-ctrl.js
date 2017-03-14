'use strict';
angular.module('visitors')
        .controller('ReciprocalsCtrl', ["$scope", "MainServ", function ($scope, MainServ) {
               
                        $scope.listings = MainServ.reciprocals();
        
            }]);
        