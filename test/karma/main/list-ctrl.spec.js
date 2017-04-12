'use strict';
describe('module: main, controller: ListCtrl', function () {

    // instantiate controller
    var ListCtrl, datasetsMock, scope, spy;

    // load the controller's module
    beforeEach(module('main'));
    // load all the templates to prevent unexpected $http requests from ui-router
    beforeEach(module('ngHtml2Js'));

    // define a mock of service called
    beforeEach(inject(function () {
        
            datasetsMock = {
                users: 1
            };
        
    }));

    // instantiate controller
    beforeEach(inject(function ($controller, $rootScope) {

        scope = $rootScope.$new();
        ListCtrl = $controller('ListCtrl', {
            $scope: scope,
            datasets: datasetsMock
        });
    }));

    it('should call the datasets service and populate $scope.posts with dataset.users if it exist', function () {
        expect(scope.posts).toEqual(1);
    });

});

