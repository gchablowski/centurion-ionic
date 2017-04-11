'use strict';
angular.module('booking')
        .controller('BookingStatusCtrl', ["$scope", "datasets", "$ionicPopup", "BookingServ", "$state", function ($scope, datasets, $ionicPopup, BookingServ, $state) {

                var $this = this;
                $scope.booking = datasets.booking;

                $this.showAlert = function (title, template) {
                    $ionicPopup.alert({
                        title: title,
                        template: template
                    });
                };

                $this.success = function (data) {
                    if (data.error) {
                        $this.showAlert('Error', data.error);
                        return false;
                    }

                    if (data.booking.status == "Cancelled") {
                        $state.go('menu.bookings');
                        return false;
                    }

                    $scope.booking = data.booking;
                };

                $this.error = function () {
                    $ionicPopup.alert({
                        title: "An error occured",
                        template: "We can't proceed. Please try again."
                    });
                };

                $this.showCancel = function () {

                    var cancelPopup = $ionicPopup.confirm({
                        title: "Cancel",
                        template: "Are you sure you want to cancel this booking?",
                        buttons: [
                            {text: 'No'},
                            {text: 'Yes',
                                onTap: function () {
                                    return true;
                                }
                            }
                        ]});

                    cancelPopup.then(function (data) {
                        if (data) {
                            BookingServ.bookingCancel({id: $scope.booking.id}, {}, $this.success, $this.error);
                        }
                    });
                };

                $scope.reschedule = function () {
                    BookingServ.bookingReschedule({id: $scope.booking.id}, {}, $this.success, $this.error);
                };

                $scope.messageCancelAppear = function () {
                    if ($scope.booking.today) {
                        $this.showAlert("Cancelation Policy", "To cancel within 24 hours please call the club. Thank you");
                        return false;
                    }
                    $this.showCancel();
                };

            }]);