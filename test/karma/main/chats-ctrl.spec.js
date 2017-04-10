'use strict';
describe('module: main, controller: ChatsCtrl', function () {

    // instantiate controller
    var ChatsCtrl, datasetsMock, scope;

    // load the controller's module
    beforeEach(module('main'));
    // load all the templates to prevent unexpected $http requests from ui-router
    beforeEach(module('ngHtml2Js'));

    // define a mock of service called
    beforeEach(inject(function () {
        
            datasetsMock = {
                conversations: 1
            };
        
    }));

    // instantiate controller
    beforeEach(inject(function ($controller, $rootScope) {

        scope = $rootScope.$new();
        ChatsCtrl = $controller('ChatsCtrl', {
            $scope: scope,
            datasets: datasetsMock
        });
    }));

    it('should call the datasets service and populate $scope.chats with dataset.conversations', function () {
        expect(scope.chats).toEqual(1);
    });

});

