'use strict';
angular.module('main')
        .controller('EventCtrl', ["$scope", "datasets", "UserServ", "$ionicPopup", "$state", "$stateParams", "$cordovaSocialSharing", function ($scope, datasets, UserServ, $ionicPopup, $state, $stateParams, $cordovaSocialSharing) {

                var $this = this;
                var id = $stateParams.id;
                $scope.event = datasets.event;
                $this.success = function () {
                    $state.go("menu.events");
                }

                $scope.showConfirm = function (type) {
                    var template = type ? "Are you sure you want to enter the " + $scope.event.title : "Are you sure you want to cancel your registration?";

                    var confirmPopup = $ionicPopup.confirm({
                        title: $scope.event.title,
                        template: template,
                        buttons: [
                            {text: 'No'},
                            {text: 'Yes',
                                onTap: function () {
                                    return true;
                                }
                            }
                        ]});

                    confirmPopup.then(function () {
                        if (type) {
                            UserServ.registration({id: id}, {}, $this.success);
                        } else if (!type) {
                            UserServ.cancelRegistration({id: $scope.event.registrations[0].id}, {}, $this.success);
                        }
                    });
                };

                var formattedDate = $filter('date')(new Date($scope.event.date), 'longDate');
                var message = 'Checkout the ' + $scope.event.title + ' on the ' + formattedDate + ' at the Centurion Club. Go to http://www.centurionclub.co.uk for more';

                $scope.share = function (type) {
                    if (type == 1) {
                        $cordovaSocialSharing.shareViaFacebook(message, null, null);
                    } else if (type == 2) {
                        $cordovaSocialSharing.shareViaTwitter(message, null, null);
                    } else if (type == 3) {
                        $cordovaSocialSharing.shareViaSMS(message, null);
                    }
                };
            }]);