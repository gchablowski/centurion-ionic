'use strict';
angular.module('main', ['ionic', 'ngResource', 'ngStorage', 'ksSwiper', 'ngCordova'])

        .config(function ($stateProvider, $urlRouterProvider, $httpProvider) {

            //include the interceptor for login 
            $httpProvider.interceptors.push('AuthInterceptorServ');
            //include the interceptor for the spinner
            $httpProvider.interceptors.push('LoaderInjectorServ');

            $stateProvider
                    .state('home', {
                        cache: false,
                        url: '/',
                        templateUrl: 'templates/main/home-ctrl.html',
                        controller: 'HomeCtrl as ctrl',
                        resolve: {
                            UserServ: 'UserServ',
                            datasets: ['UserServ', function (UserServ) {
                                    return UserServ.profile().$promise;
                                }]
                        },
                        authenticate: true
                    })
                    .state('menu.news', {
                        cache: false,
                        url: '/news',
                        views: {
                            "content": {
                                templateUrl: 'templates/main/news-tpl.html',
                                controller: 'ListCtrl as ctrl'
                            }
                        },
                        resolve: {
                            UserServ: 'UserServ',
                            datasets: ['UserServ', function (UserServ) {
                                    return UserServ.posts().$promise;
                                }]
                        },
                        authenticate: true
                    })
                    .state('menu.newsItem', {
                        cache: false,
                        url: '/news-item/:id',
                        views: {
                            "content": {
                                templateUrl: 'templates/main/news-item-tpl.html',
                                controller: 'ListCtrl as ctrl'
                            }
                        },
                        resolve: {
                            UserServ: 'UserServ',
                            datasets: ['UserServ', '$stateParams', function (UserServ, $stateParams) {
                                    return UserServ.post({id: $stateParams.id}).$promise;
                                }]
                        },
                        authenticate: true
                    })
                    .state('menu.events', {
                        cache: false,
                        url: '/events',
                        views: {
                            "content": {
                                templateUrl: 'templates/main/events-tpl.html',
                                controller: 'ListCtrl as ctrl'
                            }
                        },
                        resolve: {
                            UserServ: 'UserServ',
                            datasets: ['UserServ', '$stateParams', function (UserServ) {
                                    return UserServ.events().$promise;
                                }]
                        },
                        authenticate: true
                    })
                    .state('menu.eventsItem', {
                        cache: false,
                        url: '/event/:id',
                        views: {
                            "content": {
                                templateUrl: 'templates/main/event-tpl.html',
                                controller: 'EventCtrl as ctrl'
                            }
                        },
                        resolve: {
                            UserServ: 'UserServ',
                            datasets: ['UserServ', '$stateParams', function (UserServ, $stateParams) {
                                    return UserServ.event({id: $stateParams.id}).$promise;
                                }]
                        },
                        authenticate: true
                    })
                    .state('account', {
                        cache: false,
                        url: '/account',
                        templateUrl: 'templates/main/account-ctrl.html',
                        controller: 'AccountCtrl as ctrl',
                        authenticate: true
                    })
                    .state('login', {
                        cache: false,
                        url: '/login',
                        templateUrl: 'templates/main/login-ctrl.html',
                        controller: 'LoginCtrl as ctrl'
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
