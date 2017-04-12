'use strict';
angular.module('friends')
        .factory('FriendsServ', ['ConfigFriends', '$resource',
            function (Config, $resource) {
                return $resource(Config.ENV.SERVER_URL + '/app/:action/:id', {id: '@id'}, {
                    friends: {method: 'GET', params: {action: 'friends'}, isArray: false},
                    user: {method: 'GET', params: {action: 'user'}, isArray: false},
                    import: {method: 'POST', params: {action: 'import'}, headers: {'Content-Type': 'application/json'}, isArray: false},
                    approve: {method: 'POST', params: {action: 'approve'}, headers: {'Content-Type': 'application/json'}, isArray: false},
                    deny: {method: 'POST', params: {action: 'deny'}, headers: {'Content-Type': 'application/json'}, isArray: false},
                    users: {method: 'GET', params: {action: 'users'}, isArray: false},
                    conversations: {method: 'GET', params: {action: 'conversations'}, isArray: false}
                });
            }]);