'use strict';
angular.module('main', ['ionic', 'ngResource', 'ngStorage', 'ksSwiper'])

        .config(function ($stateProvider, $urlRouterProvider, $httpProvider) {

            //include the interceptor for login 
            $httpProvider.interceptors.push('AuthInterceptorServ');

            $stateProvider
                    .state('home', {
                        url: '/',
                        templateUrl: 'templates/main/home-ctrl.html',
                        controller: 'HomeCtrl as ctrl',
                        resolve: {
                            UserServ: 'UserServ',
                            datasets: ['UserServ', function (UserServ) {
                                    return UserServ.profile().$promise;
                                }]
                        }
                    })
                    .state('news', {
                        url: 'news',
                        templateUrl: 'templates/main/news-ctrl.html',
                        controller: 'NewsCtrl as ctrl',
                        resolve: {
                            UserServ: 'UserServ',
                            datasets: ['UserServ', function (UserServ) {
                                    return UserServ.posts().$promise;
                                }]
                        }
                    })
                    .state('login', {
                        url: '/login',
                        templateUrl: 'templates/main/login-ctrl.html',
                        controller: 'LoginCtrl as ctrl'
                    });
            // if none of the above states are matched, use this as the fallback
            $urlRouterProvider.otherwise('/login');
        });
