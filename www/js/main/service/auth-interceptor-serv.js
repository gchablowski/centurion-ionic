"use strict";
angular.module("main")
        .factory("AuthInterceptorServ", ["$localStorage", "$q", "$location", function ($localStorage, $q, $location) {
                return {
                    request: function (config) {
                        config.data = config.data || {};

                        if ($localStorage.token) {
                            config.headers = {"X-Auth-Token": ""+$localStorage.token+""};
                        }

                        return config || $q.when(config);
                    },
                    responseError: function (rejection) {
                  
                        if (rejection.status === 401) {
                            $localStorage.$reset();
                            $location.path('#/login');
                        }
                        return $q.reject(rejection);
                    }
                };
            }]);

        