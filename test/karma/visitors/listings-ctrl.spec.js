'use strict';

describe('module: visitors, controller: ListingsCtrl', function () {

    // instantiate controller
    var ListingsCtrl, datasetsMock, scope;

    // load the controller's module
    beforeEach(module('visitors'));
    // load all the templates to prevent unexpected $http requests from ui-router
    beforeEach(module('ngHtml2Js'));
    
    // define a mock of service called
    beforeEach(function () {

        datasetsMock = {
            listings: {data: 1}
        };

    });
    
    // instantiate controller
    beforeEach(inject(function ($controller, $rootScope) {

        scope = $rootScope.$new();

        ListingsCtrl = $controller('ListingsCtrl', {
            $scope: scope,
            datasets: datasetsMock
        });

    }));
    
    it('should call the datasets service and populate $scope.listings', function () {
        expect(scope.listings).toEqual({data: 1});
    });

});

