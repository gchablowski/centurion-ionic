'use strict';
angular.module('main', ['ionic', 'ngResource', 'ngStorage', 'ksSwiper', 'ngCordova', 'validation.match', 'angular.filter'])

        .config(function ($stateProvider, $urlRouterProvider, $httpProvider) {

            //include the interceptor for login 
            $httpProvider.interceptors.push('AuthInterceptorServ');
            //include the interceptor for the spinner
            $httpProvider.interceptors.push('LoaderInjectorServ');

            $stateProvider
                    .state('menu.friends', {
                        cache: false,
                        url: '/friends',
                        views: {
                            "content": {
                                templateUrl: 'templates/main/friends-ctrl.html',
                                controller: 'FriendsCtrl as ctrl',
                            }
                        },
                        resolve: {
                            UserServ: 'UserServ',
                            datasets: ['UserServ', function (UserServ) {
                                    return UserServ.friends().$promise;
                                }]
                        },
                        authenticate: true
                    })
                    .state('menu.friend', {
                        cache: false,
                        url: '/friend/:id',
                        views: {
                            "content": {
                                templateUrl: 'templates/main/friend-ctrl.html',
                                controller: 'FriendCtrl as ctrl',
                            }
                        },
                        resolve: {
                            UserServ: 'UserServ',
                            datasets: ['UserServ', '$stateParams', function (UserServ, $stateParams) {
                                    return UserServ.user({id: $stateParams.id}).$promise;
                                }]
                        },
                        authenticate: true
                    })
                    .state('menu.chats', {
                        cache: false,
                        url: '/chats',
                        views: {
                            "content": {
                                templateUrl: 'templates/main/chats-ctrl.html',
                                controller: 'ChatsCtrl as ctrl',
                            }
                        },
                        resolve: {
                            UserServ: 'UserServ',
                            datasets: ['UserServ', function (UserServ) {
                                    return UserServ.conversations().$promise;
                                }]
                        },
                        authenticate: true
                    })
                    .state('menu.users', {
                        cache: false,
                        url: '/users',
                        views: {
                            "content": {
                                templateUrl: 'templates/main/users-ctrl.html',
                                controller: 'ListCtrl as ctrl'
                            }
                        },
                        resolve: {
                            WeatherServ: 'UserServ',
                            datasets: ['UserServ', function (UserServ) {
                                    return UserServ.users().$promise;
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
                    .state('menu.updateInfo', {
                        cache: false,
                        url: '/update',
                        views: {
                            "content": {
                                templateUrl: 'templates/main/update-info-ctrl.html',
                                controller: 'UpdateInfoCtrl as ctrl',
                            }
                        },
                        authenticate: true
                    })
                    .state('menu.password', {
                        cache: false,
                        url: '/password',
                        views: {
                            "content": {
                                templateUrl: 'templates/main/password-ctrl.html',
                                controller: 'PasswordCtrl as ctrl',
                            }
                        },
                        authenticate: true
                    })
                    .state('menu.photo', {
                        cache: false,
                        url: '/photo',
                        views: {
                            "content": {
                                templateUrl: 'templates/main/photo-ctrl.html',
                                controller: 'PhotoCtrl as ctrl',
                            }
                        },
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
