'use strict';
angular.module('visitors', ['ionic', 'ngResource'])

        .config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
         
            $stateProvider

                    .state('visitors', {
                        url: '/visitors',
                        templateUrl: 'templates/visitors/index.html',
                        controller: 'HomeCtrl as ctrl'
                    })
                    .state('membership', {
                        url: '/membership',
                        templateUrl: 'templates/visitors/membership.html',
                        controller: 'MembershipCtrl as ctrl'
                    });
            // if none of the above states are matched, use this as the fallback
            $urlRouterProvider.otherwise('/visitors');
        });
