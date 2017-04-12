'use strict';
angular.module('members', ['ionic', 'ngResource', 'ngStorage', 'ksSwiper', 'ngCordova', 'validation.match', 'angular.filter'])

        .config(function ($stateProvider, $urlRouterProvider) {

            $stateProvider
                    .state('home', {
                        cache: false,
                        url: '/',
                        templateUrl: 'templates/members/home-ctrl.html',
                        controller: 'HomeCtrl as ctrl',
                        resolve: {
                            MembersServ: 'MembersServ',
                            datasets: ['MembersServ', function (MembersServ) {
                                    return MembersServ.profile().$promise;
                                }]
                        },
                        authenticate: true
                    })
                    .state('menu.news', {
                        cache: false,
                        url: '/news',
                        views: {
                            "content": {
                                templateUrl: 'templates/members/news-tpl.html',
                                controller: 'MembersListCtrl as ctrl'
                            }
                        },
                        resolve: {
                            MembersServ: 'MembersServ',
                            datasets: ['MembersServ', function (MembersServ) {
                                    return MembersServ.posts().$promise;
                                }]
                        },
                        authenticate: true
                    })
                    .state('menu.newsItem', {
                        cache: false,
                        url: '/news-item/:id',
                        views: {
                            "content": {
                                templateUrl: 'templates/members/news-item-tpl.html',
                                controller: 'MembersListCtrl as ctrl'
                            }
                        },
                        resolve: {
                            MembersServ: 'MembersServ',
                            datasets: ['MembersServ', '$stateParams', function (MembersServ, $stateParams) {
                                    return MembersServ.post({id: $stateParams.id}).$promise;
                                }]
                        },
                        authenticate: true
                    })
                    .state('menu.events', {
                        cache: false,
                        url: '/events',
                        views: {
                            "content": {
                                templateUrl: 'templates/members/events-tpl.html',
                                controller: 'MembersListCtrl as ctrl'
                            }
                        },
                        resolve: {
                            MembersServ: 'MembersServ',
                            datasets: ['MembersServ', '$stateParams', function (MembersServ) {
                                    return MembersServ.events().$promise;
                                }]
                        },
                        authenticate: true
                    })
                    .state('menu.eventsItem', {
                        cache: false,
                        url: '/event/:id',
                        views: {
                            "content": {
                                templateUrl: 'templates/members/event-ctrl.html',
                                controller: 'EventCtrl as ctrl'
                            }
                        },
                        resolve: {
                            MembersServ: 'MembersServ',
                            datasets: ['MembersServ', '$stateParams', function (MembersServ, $stateParams) {
                                    return MembersServ.event({id: $stateParams.id}).$promise;
                                }]
                        },
                        authenticate: true
                    })
                    .state('menu.weather', {
                        cache: false,
                        url: '/weather',
                        views: {
                            "content": {
                                templateUrl: 'templates/members/weather-ctrl.html',
                                controller: 'MembersListCtrl as ctrl'
                            }
                        },
                        resolve: {
                            WeatherServ: 'WeatherServ',
                            datasets: ['WeatherServ', function (WeatherServ) {
                                    return WeatherServ.query().$promise;
                                }]
                        },
                        authenticate: true
                    });
            // if none of the above states are matched, use this as the fallback
            $urlRouterProvider.otherwise('/login');
        });
