'use strict';
angular.module('visitors')
        .controller('MembershipCtrl', ["$scope", "MainServ", function ($scope, MainServ) {
               
                        $scope.memberships = MainServ.memberships();
        
            }]);
        