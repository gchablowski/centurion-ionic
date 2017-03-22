'use strict';
angular.module('main', ['ionic', 'ngResource', 'ngStorage', 'ksSwiper'])

        .config(function ($stateProvider, $urlRouterProvider, $httpProvider) {

            //include the interceptor for login 
            $httpProvider.interceptors.push('AuthInterceptorServ');
            //include the interceptor for the spinner
            $httpProvider.interceptors.push('LoaderInjectorServ');

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
                        url: '/news',
                        templateUrl: 'templates/main/news-tpl.html',
                        controller: 'NewsCtrl as ctrl',
                        resolve: {
                            UserServ: 'UserServ',
                            datasets: ['UserServ', function (UserServ) {
                                    return UserServ.posts().$promise;
                                }]
                        }
                    })
                    .state('newsItem', {
                        url: '/news-item/:id',
                        templateUrl: 'templates/main/news-item-tpl.html',
                        controller: 'NewsCtrl as ctrl',
                        resolve: {
                            UserServ: 'UserServ',
                            datasets: ['UserServ', '$stateParams', function (UserServ, $stateParams) {
                                    return UserServ.post({id: $stateParams.id}).$promise;
                                }]
                        }
                    })
                    .state('account', {
                        url: '/account',
                        templateUrl: 'templates/main/account-ctrl.html',
                        controller: 'AccountCtrl as ctrl'
                    })
                    .state('login', {
                        url: '/login',
                        templateUrl: 'templates/main/login-ctrl.html',
                        controller: 'LoginCtrl as ctrl'
                    });
            // if none of the above states are matched, use this as the fallback
            $urlRouterProvider.otherwise('/login');
        });
