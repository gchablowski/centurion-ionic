'use strict';
angular.module('main')
        .controller('PhotoCtrl', ["$scope", "$localStorage", "$cordovaCamera", "UserServ", "$state", "$ionicPopup", function ($scope, $localStorage, $cordovaCamera, UserServ, $state, $ionicPopup) {

                var $this = this;
                $scope.user = $localStorage.user;console.log($scope.user);

                $this.success = function (data) {
                    if (data.error) {
                        $ionicPopup.alert({
                            title: 'Error',
                            template: data.error
                        });
                        return false;
                    }
                    $localStorage.user = data.user;
                    $state.go('home');
                };
                
                 $this.error = function () {
                     $ionicPopup.alert({
                        title: "An error occured",
                        template: "We can't proceed. Please try again."
                    });
                };
                
                $this.changeImage = function (imageData) {
                    $scope.user.avatar = "data:image/jpeg;base64," + imageData;
                    $scope.user.avatar_new = $scope.user.avatar;
                };


                $this.camera = function () {
                    var options = {
                        quality: 50,
                        destinationType: Camera.DestinationType.DATA_URL,
                        sourceType: Camera.PictureSourceType.SAVEDPHOTOALBUM,
                        targetWidth: 400,
                        targetHeight: 400
                    };

                    $cordovaCamera.getPicture(options).then($this.changeImage);
                };

                $scope.uploadAvatar = function () {
                    ionic.Platform.ready($this.camera);
                };

                $scope.changeAvatar = function () {
                    if ($scope.user.avatar_new) {
                        UserServ.updateInfo({}, $scope.user, $this.success, $this.error);
                    }
                };

            }]);