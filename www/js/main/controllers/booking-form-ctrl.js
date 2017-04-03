'use strict';
angular.module('main')
        .controller('BookingFormCtrl', ["$scope", "datasets", "$localStorage", "$filter", 'UserServ', '$ionicPopup', '$state', function ($scope, datasets, $localStorage, $filter, UserServ, $ionicPopup, $state) {

                var $this = this;
                $scope.listing = datasets.listing;
                $scope.user = $localStorage.user;
                $scope.formData = {};

                $scope.minDate = $filter('date')(new Date(), 'yyyy-MM-dd');

                $this.success = function (data) {
                    if (data.error) {
                        $ionicPopup.alert({
                            title: 'Invalid Details',
                            template: data.error
                        });
                        return false;
                    }

                    $state.go('menu.bookings');

                };

                $scope.submitForm = function () {
                    $scope.formData.fulldate = $filter('date')($scope.formData.date, 'yyyy-MM-dd') + ' ' + $filter('date')($scope.formData.time, 'h:mm:00');
                    UserServ.bookingformPost({id: $scope.listing.id}, $scope.formData, $this.success);
                };

            }]);