'use strict';
angular.module('visitors')
        .controller('TourCtrl', ["$scope", "datasets", "MainServ", "$ionicPopup", function ($scope, datasets, MainServ, $ionicPopup) {

                var $this = this;
                $scope.appMessage = {};
                $scope.formData = {};

                $scope.contact = datasets.contact;

                $this.showAlert = function (title, template) {
                    $ionicPopup.alert({
                        title: title,
                        template: template
                    });
                };

                $this.success = function (data) {

                    if (data.error) {
                        $this.showAlert('Invalid Details', data.error);
                    } else {
                        $this.showAlert('Sent!', 'Thank you for your enquiry, we will get back to you as soon as possible!');
                    }
                };

                $scope.sendForm = function () {

                    if (!$scope.formData.terms) {
                        $this.showAlert('Terms and Conditions', 'Please accept the terms and conditions');
                        return false;
                    }

                    delete $scope.formData.terms;
                    MainServ.contactPost({id: $scope.contact.id}, $scope.formData, $this.success);
                };
            }]);
