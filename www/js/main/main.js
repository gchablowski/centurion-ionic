angular.module('main', ['ionic', 'LocalForageModule'])

        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                    .state('profile', {
                        url: '/',
                        templateUrl: 'templates/main/profile-ctrl.html',
                        controller: 'ProfileCtrl as ctrl'
                    })
                    .state('member', {
                        url: '/member',
                        templateUrl: 'templates/main/profile-ctrl.html',
                        controller: 'ProfileCtrl as ctrl'
                    })
                    .state('login', {
                        url: '/login',
                        templateUrl: 'templates/main/login-ctrl.html',
                        controller: 'LoginCtrl as ctrl'
                    });
            // if none of the above states are matched, use this as the fallback
            $urlRouterProvider.otherwise('/login');
        });
