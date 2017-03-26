'use strict';
angular.module('visitors')
        .controller('AboutCtrl', ['$scope', '$window', 'datasets', '$ionicModal', function ($scope, $window, datasets, $ionicModal) {
                $scope.modalcontent = '';
                $scope.gallery = datasets.gallery;
                $scope.video1 = datasets.video1;
                $scope.video2 = datasets.video2;

                $scope.launchMap = function () {
                    $window.open('maps:q=51.741901,-0.407283', '_system');
                };

                $ionicModal.fromTemplateUrl('templates/visitors/about-modal-ctrl.html', {
                    scope: $scope,
                    animation: 'zoom-in'
                }).then(function (modal) {
                    $scope.modal = modal;
                });

                $scope.openModal = function (content) {
                    $scope.modalcontent = content;
                    $scope.modal.show();
                };
                $scope.closeModal = function () {
                    $scope.modal.hide();
                };

            }]);
