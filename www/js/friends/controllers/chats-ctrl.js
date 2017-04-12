'use strict';
angular.module('friends')
        .controller('ChatsCtrl', ["$scope", "datasets", function ($scope, datasets) {

                $scope.chats = datasets.conversations;

                /*
                 Pusher.subscribe('chat_' + $rootScope.user.id, 'new_message', function (data) {
                 for(i = 0; i < $scope.chats.length; i++){
                 if($scope.chats[i].conversation_id === data.conversation_id) {
                 $scope.chats[i].unread += 1; 
                 };  
                 }
                 });*/

            }]);