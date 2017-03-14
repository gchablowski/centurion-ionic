'use strict';
angular.module('visitors', ['ionic', 'ngResource'])

        .config(function ($stateProvider, $urlRouterProvider) {

            $stateProvider

                    .state('visitors', {
                        url: '/visitors',
                        templateUrl: 'templates/visitors/home-ctrl.html',
                        controller: 'HomeCtrl as ctrl'
                    })
                    .state('membership', {
                        url: '/membership',
                        templateUrl: 'templates/visitors/membership-ctrl.html',
                        controller: 'MembershipCtrl as ctrl'
                    })
                    .state('contact', {
                        url: '/contact',
                        templateUrl: 'templates/visitors/contact-tpl.html',
                        controller: 'ListingsCtrl as ctrl',
                        resolve: {
                            MainServ: 'MainServ',
                            datasets: function (MainServ) {
                                return MainServ.listings().$promise;
                            }
                        }
                    });
            // if none of the above states are matched, use this as the fallback
            $urlRouterProvider.otherwise('/visitors');
        });
