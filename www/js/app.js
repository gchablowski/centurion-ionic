'use strict';

angular.module('centurion', [
    // load your modules here
    'main',
    'visitors'
])
        .config(function ($ionicConfigProvider) {
            $ionicConfigProvider.backButton.text(' ').icon('typcn typcn-chevron-left-outline').previousTitleText(false);
        })
        .run(function ($ionicPlatform) {
            $ionicPlatform.ready(function () {
                // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                // for form inputs)
                if (window.cordova && window.cordova.plugins.Keyboard) {
                    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                    cordova.plugins.Keyboard.disableScroll(true);

                }
                if (window.StatusBar) {
                    // org.apache.cordova.statusbar required
                    StatusBar.styleDefault();
                }
            });
        });