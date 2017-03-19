'use strict';
angular.module('visitors')
        .controller('TourCtrl', ["$scope", "datasets", "MainServ", function ($scope, datasets, MainServ) {

                var $this = this;
                $scope.appMessage = {};
                $scope.formData = {};

                $scope.contact = datasets.contact;

                $this.success = function (data) {

                    if (data.error) {
                        $scope.appMessage.title = 'Invalid Details';
                        $scope.appMessage.content = data.error;
                        $scope.appMessage.show = true;
                    } else {
                        $scope.appMessage.title = 'Sent!';
                        $scope.appMessage.content = 'Thank you for your enquiry, we will get back to you as soon as possible!';
                        $scope.appMessage.show = true;
                    }
                };

                $scope.sendForm = function () {

                    if (!$scope.formData.terms) {
                        $scope.appMessage.title = 'Terms and Conditions';
                        $scope.appMessage.content = 'Please accept the terms and conditions';
                        $scope.appMessage.show = true;
                        return false;
                    }

                    if (!$scope.formData.name && !$scope.formData.email && !$scope.formData.message) {
                        $scope.appMessage.title = 'Invalid Details';
                        $scope.appMessage.content = 'Please ensure all require fields are filled';
                        $scope.appMessage.show = true;
                        return false;
                    }

                    delete $scope.formData.terms;
                    MainServ.contactPost({id: $scope.contact.id}, $scope.formData, $this.success);
                };
            }]);
