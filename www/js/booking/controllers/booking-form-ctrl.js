'use strict';
angular.module('booking')
        .controller('BookingFormCtrl', ["$scope", "datasets", "$localStorage", "$filter", 'BookingServ', '$ionicPopup', '$state', function ($scope, datasets, $localStorage, $filter, BookingServ, $ionicPopup, $state) {

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
                
                 $this.error = function () {
                    $ionicPopup.alert({
                        title: "An error occured",
                        template: "We can't proceed. Please try again."
                    });
                };

                $scope.submitForm = function () {
                    $scope.formData.fulldate = $filter('date')($scope.formData.date, 'yyyy-MM-dd') + ' ' + $filter('date')($scope.formData.time, 'h:mm:00');
                    BookingServ.bookingformPost({id: $scope.listing.id}, $scope.formData, $this.success, $this.error);
                };

            }]);