'use strict';

angular.module("main")
        .factory('LoaderInjectorServ', ['$q', '$rootScope', function ($q, $rootScope) {

                var numLoadings = 0;
                var enabledForView = true;

                return {
                    request: function (config) {
                        
                        // Show loader
                        if (enabledForView) {
                            numLoadings++;
                            $rootScope.$broadcast("loader_show");
                        }
                        return config || $q.when(config);

                    },
                    response: function (response) {

                        if ((--numLoadings) === 0) {
                            // Hide loader
                            $rootScope.$broadcast("loader_hide");
                            //Reactivate loader
                            enabledForView = true;
                        }

                        return response || $q.when(response);

                    },
                    responseError: function (response) {

                        if (!(--numLoadings)) {
                            // Hide loader
                            $rootScope.$broadcast("loader_hide");
                            //Reactivate loader
                            enabledForView = true;
                        }

                        return $q.reject(response);
                    },
                    disable: function () {
                        // For view with a pull-to-refresh directive
                        return enabledForView = false;
                    }
                };
            }]);

