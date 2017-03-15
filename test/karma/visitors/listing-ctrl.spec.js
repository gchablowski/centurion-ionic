'use strict';
describe('module: visitors, controller: ListingCtrl', function () {

    // instantiate controller
    var ListingCtrl, datasetsMock, scope;
    
    // load the controller's module
    beforeEach(module('visitors'));
    // load all the templates to prevent unexpected $http requests from ui-router
    beforeEach(module('ngHtml2Js'));
    
    // define a mock of service called
    var spy = 0;
    beforeEach(function () {
        if (spy == 0) {
            datasetsMock = {listing: {data: 1}};
        } else if (spy == 1) {
            datasetsMock = {listings: {data: 2}};
        } else {
            datasetsMock = {memberships: {data: 3}};
        }
        spy++;
    });
    
    // instantiate controller
    beforeEach(inject(function ($controller, $rootScope) {

        scope = $rootScope.$new();
        ListingCtrl = $controller('ListingCtrl', {
            $scope: scope,
            datasets: datasetsMock
        });
    }));
    
    it('should call the datasets service and populate $scope.listing with dataset.listing if it exist', function () {
        expect(scope.listing).toEqual({data: 1});
    });
    
    it('should call the datasets service and populate $scope.listing with dataset.listings if it exist', function () {
        expect(scope.listing).toEqual({data: 2});
    });
    
    it('should call the datasets service and populate $scope.listing with dataset.memberships if it exist', function () {
        expect(scope.listing).toEqual({data: 3});
    });
});

