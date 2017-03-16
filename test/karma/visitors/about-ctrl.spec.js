'use strict';
describe('module: visitors, controller: AboutCtrl', function () {

    // instantiate controller
    var AboutCtrl, datasetsMock, scope;

    // load the controller's module
    beforeEach(module('visitors'));
    // load all the templates to prevent unexpected $http requests from ui-router
    beforeEach(module('ngHtml2Js'));

    // define a mock of service called
    beforeEach(function () {

        datasetsMock = {
            gallery: {data: 1},
            video1: {data: 2},
            video2: {data: 3}
        };

    });

    // instantiate controller
    beforeEach(inject(function ($controller, $rootScope) {

        scope = $rootScope.$new();
        AboutCtrl = $controller('AboutCtrl', {
            $scope: scope,
            datasets: datasetsMock
        });
    }));

    it('should call the datasets service and populate $scope.gallery with dataset.gallery if it exist', function () {
        expect(scope.gallery).toEqual({data: 1});
    });

    it('should call the datasets service and populate $scope.video1 with dataset.video1 if it exist', function () {
        expect(scope.video1).toEqual({data: 2});
    });

    it('should call the datasets service and populate $scope.video2 with dataset.video2 if it exist', function () {
        expect(scope.video2).toEqual({data: 3});
    });
    
    it( 'should open do an $window.opn event when $scope.launchMap is called', inject( function( $window ) {
        spyOn( $window, 'open' ).and.callFake( function() {
            return true;
        } );
        scope.launchMap();
        expect( $window.open ).toHaveBeenCalled();
        expect( $window.open ).toHaveBeenCalledWith( 'maps:q=51.741901,-0.407283', '_system' );
    } ) );
    
});

