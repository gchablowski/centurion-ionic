'use strict';
angular.module('visitors')
        .controller('MembershipCtrl', ["$scope", "$window", "$location", "MainServ", function ($scope, $window, $location, MainServ) {
                $scope.memberships = MainServ.memberships();

                $scope.dropdownMore = function () {
                    $('.read-more-info').toggleClass('show-info');
                    $('.read-more').toggleClass('dissapear');
                }

                $scope.dropdown = function (event) {
                    $(event.target).parent().siblings('.hidden-info').toggleClass('show-info');
                }
            }]);
        