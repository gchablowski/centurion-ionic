'use strict';
angular.module('visitors', ['ionic', 'ngResource', 'ksSwiper', 'ngMap', 'ngStorage'])

        .config(function ($stateProvider, $urlRouterProvider) {

            $stateProvider

                    .state('visitors', {
                        cache: false,
                        url: '/visitors',
                        templateUrl: 'templates/visitors/home-tpl.html',
                        controller: 'ListingCtrl as ctrl',
                        resolve: {
                            datasets: [function () {
                                    return {};
                                }]
                        }
                    })
                    .state("menu", {
                        url: "/menu",
                        abstract: true,
                        templateUrl: "templates/visitors/menu-ctrl.html",
                        controller: "MenuCtrl as ctrl",
                        data: {
                            buttonHome: true
                        }
                    })
                    .state('menu.membership', {
                        cache: false,
                        url: '/membership',
                        views: {
                            "content": {
                                templateUrl: "templates/visitors/membership-tpl.html",
                                controller: 'ListingCtrl as ctrl'
                            }
                        },
                        resolve: {
                            MainServ: 'MainServ',
                            datasets: ['MainServ', function (MainServ) {
                                    return MainServ.memberships().$promise;
                                }]
                        }
                    })
                    .state('menu.contact', {
                        cache: false,
                        url: '/contact',
                        views: {
                            "content": {
                                templateUrl: 'templates/visitors/contact-tpl.html',
                                controller: 'ListingCtrl as ctrl'
                            }
                        },
                        resolve: {
                            MainServ: 'MainServ',
                            datasets: ['MainServ', function (MainServ) {
                                    return MainServ.listings().$promise;
                                }]
                        }
                    })
                    .state('menu.contactus', {
                        cache: false,
                        url: '/contact-item/:id',
                        data: {
                            buttonHome: false
                        },
                        views: {
                            "content": {
                                templateUrl: 'templates/visitors/contact-item-tpl.html',
                                controller: 'ListingCtrl as ctrl'
                            }
                        },
                        resolve: {
                            MainServ: 'MainServ',
                            datasets: ['MainServ', '$stateParams', function (MainServ, $stateParams) {
                                    return MainServ.listing({id: $stateParams.id}).$promise;
                                }]
                        }
                    })
                    .state('menu.reciprocals', {
                        cache: false,
                        url: '/reciprocals',
                        views: {
                            "content": {
                                templateUrl: 'templates/visitors/reciprocals-tpl.html',
                                controller: 'ListingCtrl as ctrl'
                            }
                        },
                        resolve: {
                            MainServ: 'MainServ',
                            datasets: ['MainServ', function (MainServ) {
                                    return MainServ.reciprocals().$promise;
                                }]
                        }
                    })
                    .state('menu.reciprocal', {
                        cache: false,
                        url: '/reciprocal/:id',
                        data: {
                            buttonHome: false
                        },
                        views: {
                            "content": {
                                templateUrl: 'templates/visitors/reciprocal-tpl.html',
                                controller: 'ListingCtrl  as ctrl',
                            }
                        },
                        resolve: {
                            MainServ: 'MainServ',
                            datasets: ['MainServ', '$stateParams', function (MainServ, $stateParams) {
                                    return MainServ.reciprocal({id: $stateParams.id}).$promise;
                                }]
                        }
                    })
                    .state('menu.about', {
                        cache: false,
                        url: '/about',
                        views: {
                            "content": {
                                templateUrl: 'templates/visitors/about-ctrl.html',
                                controller: 'AboutCtrl as ctrl'
                            }
                        },
                        resolve: {
                            MainServ: 'MainServ',
                            datasets: ['MainServ', function (MainServ) {
                                    return MainServ.gallery().$promise;
                                }]
                        }
                    })
                    .state('menu.visitors-booking', {
                        cache: false,
                        url: '/visitors-booking',
                        views: {
                            "content": {
                                templateUrl: 'templates/visitors/booking-tpl.html',
                                controller: 'ListingCtrl as ctrl',
                            }
                        },
                        resolve: {
                            MainServ: 'MainServ',
                            datasets: ['MainServ', function (MainServ) {
                                    return MainServ.contacts().$promise;
                                }]
                        }
                    })
                    .state('menu.tour', {
                        cache: false,
                        url: '/tour/:id',
                        views: {
                            "content": {
                                templateUrl: 'templates/visitors/tour-ctrl.html',
                                controller: 'TourCtrl as ctrl',
                            }
                        },
                        resolve: {
                            MainServ: 'MainServ',
                            datasets: ['MainServ', '$stateParams', function (MainServ, $stateParams) {
                                    return MainServ.contact({id: $stateParams.id}).$promise;
                                }]
                        }
                    })
                    .state('menu.terms', {
                        cache: false,
                        url: '/terms',
                        data: {
                            buttonHome: false
                        },
                        views: {
                            "content": {
                                templateUrl: 'templates/visitors/terms-tpl.html',
                                controller: 'ListingCtrl as ctrl',
                            }
                        },
                        resolve: {
                            MainServ: 'MainServ',
                            datasets: ['MainServ', '$stateParams', function (MainServ) {
                                    return MainServ.page({id: 9}).$promise;
                                }]
                        }
                    });
            // if none of the above states are matched, use this as the fallback
            $urlRouterProvider.otherwise('/login');
        });
