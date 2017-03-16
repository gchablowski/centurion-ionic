'use strict';
angular.module('visitors')
        .controller('AboutCtrl', ['$scope', '$window', 'datasets', function ($scope, $window, datasets) {

                $scope.gallery = datasets.gallery;
                $scope.video1 = datasets.video1;
                $scope.video2 = datasets.video2;


                $scope.launchMap = function () {
                    $window.open('maps:q=51.741901,-0.407283', '_system');
                };

            }]);
