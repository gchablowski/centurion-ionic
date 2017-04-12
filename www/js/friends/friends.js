'use strict';
angular.module('friends', ['ionic', 'ngResource', 'ngStorage', 'ngCordova', 'angular.filter'])

        .config(function ($stateProvider, $urlRouterProvider, $httpProvider) {

            $stateProvider
                    .state('menu.friends', {
                        cache: false,
                        url: '/friends',
                        views: {
                            "content": {
                                templateUrl: 'templates/friends/friends-ctrl.html',
                                controller: 'FriendsCtrl as ctrl',
                            }
                        },
                        resolve: {
                            FriendsServ: 'FriendsServ',
                            datasets: ['FriendsServ', function (FriendsServ) {
                                    return FriendsServ.friends().$promise;
                                }]
                        },
                        authenticate: true
                    })
                    .state('menu.friend', {
                        cache: false,
                        url: '/friend/:id',
                        views: {
                            "content": {
                                templateUrl: 'templates/friends/friend-ctrl.html',
                                controller: 'FriendCtrl as ctrl',
                            }
                        },
                        resolve: {
                            FriendsServ: 'FriendsServ',
                            datasets: ['FriendsServ', '$stateParams', function (FriendsServ, $stateParams) {
                                    return FriendsServ.user({id: $stateParams.id}).$promise;
                                }]
                        },
                        authenticate: true
                    })
                    .state('menu.chats', {
                        cache: false,
                        url: '/chats',
                        views: {
                            "content": {
                                templateUrl: 'templates/friends/chats-ctrl.html',
                                controller: 'ChatsCtrl as ctrl',
                            }
                        },
                        resolve: {
                            FriendsServ: 'FriendsServ',
                            datasets: ['FriendsServ', function (FriendsServ) {
                                    return FriendsServ.conversations().$promise;
                                }]
                        },
                        authenticate: true
                    })
                    .state('menu.users', {
                        cache: false,
                        url: '/users',
                        views: {
                            "content": {
                                templateUrl: 'templates/friends/users-ctrl.html',
                                controller: 'FriendsListCtrl as ctrl'
                            }
                        },
                        resolve: {
                            FriendsServ: 'FriendsServ',
                            datasets: ['FriendsServ', function (FriendsServ) {
                                    return FriendsServ.users().$promise;
                                }]
                        },
                        authenticate: true
                    });
            // if none of the above states are matched, use this as the fallback
            $urlRouterProvider.otherwise('/login');
        });
