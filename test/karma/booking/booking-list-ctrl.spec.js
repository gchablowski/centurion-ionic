'use strict';
describe('module: booking, controller: BookingListCtrl', function () {

    // instantiate controller
    var BookingListCtrl, datasetsMock, scope, spy;

    // load the controller's module
    beforeEach(module('booking'));
    // load all the templates to prevent unexpected $http requests from ui-router
    beforeEach(module('ngHtml2Js'));

    // define a mock of service called
    beforeEach(inject(function () {

        datasetsMock = {
            courses: [3],
            listings: [4]
        };

    }));

    // instantiate controller
    beforeEach(inject(function ($controller, $rootScope) {

        scope = $rootScope.$new();
        BookingListCtrl = $controller('BookingListCtrl', {
            $scope: scope,
            datasets: datasetsMock
        });
    }));


    it('should call the datasets service and populate $scope.posts with a concatenation of dataset.courses and dataset.listings if it exist', function () {
        expect(scope.posts).toEqual([3, 4]);
    });

});

