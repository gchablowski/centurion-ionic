'use strict';
angular.module('visitors', ['ionic', 'ngResource', 'ksSwiper', 'ngMap'])

        .config(function ($stateProvider, $urlRouterProvider) {

            $stateProvider

                    .state('visitors', {
                        url: '/visitors',
                        templateUrl: 'templates/visitors/home-tpl.html',
                        controller: 'ListingCtrl as ctrl',
                        resolve: {
                            datasets: [function () {
                                    return {};
                                }]
                        }
                    })
                    .state('membership', {
                        url: '/membership',
                        templateUrl: 'templates/visitors/membership-tpl.html',
                        controller: 'ListingCtrl as ctrl',
                        resolve: {
                            MainServ: 'MainServ',
                            datasets: ['MainServ', function (MainServ) {
                                    return MainServ.memberships().$promise;
                                }]
                        }
                    })
                    .state('contact', {
                        url: '/contact',
                        templateUrl: 'templates/visitors/contact-tpl.html',
                        controller: 'ListingCtrl as ctrl',
                        resolve: {
                            MainServ: 'MainServ',
                            datasets: ['MainServ', function (MainServ) {
                                    return MainServ.listings().$promise;
                                }]
                        }
                    })
                    .state('contactus', {
                        url: '/contact-item/:id',
                        templateUrl: 'templates/visitors/contact-item-tpl.html',
                        controller: 'ListingCtrl as ctrl',
                        resolve: {
                            MainServ: 'MainServ',
                            datasets: ['MainServ', '$stateParams', function (MainServ, $stateParams) {
                                    return MainServ.listing({id: $stateParams.id}).$promise;
                                }]
                        }
                    })
                    .state('reciprocals', {
                        url: '/reciprocals',
                        templateUrl: 'templates/visitors/reciprocals-tpl.html',
                        controller: 'ListingCtrl as ctrl',
                        resolve: {
                            MainServ: 'MainServ',
                            datasets: ['MainServ', function (MainServ) {
                                    return MainServ.reciprocals().$promise;
                                }]
                        }
                    })
                    .state('reciprocal', {
                        url: '/reciprocal/:id',
                        templateUrl: 'templates/visitors/reciprocal-tpl.html',
                        controller: 'ListingCtrl  as ctrl',
                        resolve: {
                            MainServ: 'MainServ',
                            datasets: ['MainServ', '$stateParams', function (MainServ, $stateParams) {
                                    return MainServ.reciprocal({id: $stateParams.id}).$promise;
                                }]
                        }
                    })
                    .state('about', {
                        url: '/about',
                        templateUrl: 'templates/visitors/about-ctrl.html',
                        controller: 'AboutCtrl as ctrl',
                        resolve: {
                            MainServ: 'MainServ',
                            datasets: ['MainServ', function (MainServ) {
                                    return MainServ.gallery().$promise;
                                }]
                        }
                    })
                    .state('visitors-booking', {
                        url: '/visitors-booking',
                        templateUrl: 'templates/visitors/booking-tpl.html',
                        controller: 'ListingCtrl as ctrl',
                        resolve: {
                            MainServ: 'MainServ',
                            datasets: ['MainServ', function (MainServ) {
                                    return MainServ.contacts().$promise;
                                }]
                        }
                    })
                    .state('tour', {
                        url: '/tour/:id',
                        templateUrl: 'templates/visitors/tour-ctrl.html',
                        controller: 'TourCtrl as ctrl',
                        resolve: {
                            MainServ: 'MainServ',
                            datasets: ['MainServ', '$stateParams', function (MainServ, $stateParams) {
                                    return MainServ.contact({id: $stateParams.id}).$promise;
                                }]
                        }
                    });
            // if none of the above states are matched, use this as the fallback
            $urlRouterProvider.otherwise('/visitors');
        });
