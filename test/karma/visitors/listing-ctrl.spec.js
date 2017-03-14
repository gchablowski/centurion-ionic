'use strict';

describe('module: visitors, controller: ListingCtrl', function () {

    // instantiate controller
    var ListingCtrl, datasetsMock, scope;

    // load the controller's module
    beforeEach(module('visitors'));
    // load all the templates to prevent unexpected $http requests from ui-router
    beforeEach(module('ngHtml2Js'));
    
    // define a mock of service called
    beforeEach(function () {

        datasetsMock = {
            listing: {data: 1}
        };

    });
    
    // instantiate controller
    beforeEach(inject(function ($controller, $rootScope) {

        scope = $rootScope.$new();

        ListingCtrl = $controller('ListingCtrl', {
            $scope: scope,
            datasets: datasetsMock
        });

    }));
    
    it('should call the datasets service and populate $scope.listing', function () {
        expect(scope.listing).toEqual({data: 1});
    });

});

