'use strict';
angular.module('booking', ['ionic', 'ngResource', 'ngStorage'])

        .config(function ($stateProvider, $urlRouterProvider) {

            $stateProvider
                    .state('menu.bookings', {
                        cache: false,
                        url: '/bookings',
                        views: {
                            "content": {
                                templateUrl: 'templates/booking/bookings-tpl.html',
                                controller: 'BookingsCtrl as ctrl'
                            }
                        },
                        resolve: {
                            BookingServ: 'BookingServ',
                            datasets: ['BookingServ', function (BookingServ) {
                                    return BookingServ.bookings().$promise;
                                }]
                        },
                        authenticate: true
                    })
                    .state('menu.booking-status', {
                        cache: false,
                        url: '/bookings/status/:id',
                        views: {
                            "content": {
                                templateUrl: 'templates/booking/booking-status-ctrl.html',
                                controller: 'BookingStatusCtrl as ctrl'
                            }
                        },
                        resolve: {
                            BookingServ: 'BookingServ',
                            datasets: ['BookingServ', '$stateParams', function (BookingServ, $stateParams) {
                                    return BookingServ.booking({id: $stateParams.id}).$promise;
                                }]
                        },
                        authenticate: true
                    })
                    .state('menu.new-booking', {
                        cache: false,
                        url: '/new-booking',
                        views: {
                            "content": {
                                templateUrl: 'templates/booking/new-booking-tpl.html',
                                controller: 'BookingListCtrl as ctrl'
                            }
                        },
                        resolve: {
                            BookingServ: 'BookingServ',
                            datasets: ['BookingServ', function (BookingServ) {
                                    return BookingServ.bookings().$promise;
                                }]
                        },
                        authenticate: true
                    })
                    .state('menu.golf-booking', {
                        cache: false,
                        url: '/golf-booking/:id',
                        views: {
                            "content": {
                                templateUrl: 'templates/booking/golf-booking-tpl.html',
                                controller: 'BookingFormCtrl as ctrl'
                            }
                        },
                        resolve: {
                            BookingServ: 'BookingServ',
                            datasets: ['BookingServ', '$stateParams', function (BookingServ, $stateParams) {
                                    return BookingServ.bookingform({id: $stateParams.id}).$promise;
                                }]
                        },
                        authenticate: true
                    })
                    .state('menu.restaurant-booking', {
                        cache: false,
                        url: '/restaurant-booking/:id',
                        views: {
                            "content": {
                                templateUrl: 'templates/booking/restaurant-booking-tpl.html',
                                controller: 'BookingFormCtrl as ctrl'
                            }
                        },
                        resolve: {
                            BookingServ: 'BookingServ',
                            datasets: ['BookingServ', '$stateParams', function (BookingServ, $stateParams) {
                                    return BookingServ.bookingform({id: $stateParams.id}).$promise;
                                }]
                        },
                        authenticate: true
                    });
                    
            // if none of the above states are matched, use this as the fallback
            $urlRouterProvider.otherwise('/login');
        })
        .run(function ($rootScope, $state, $localStorage) {
            $rootScope.$on("$stateChangeStart", function (event, toState, toParams, fromState, fromParams) {

                if (toState.authenticate && !$localStorage.token) {
                    // User isn’t authenticated
                    $state.transitionTo("login");
                    event.preventDefault();
                }
            });

            $rootScope.$on("$stateChangeError", function () {
                $state.go('login');
            });

        });
