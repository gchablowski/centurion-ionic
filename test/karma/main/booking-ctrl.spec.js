'use strict';
describe('module: main, controller: BookingsCtrl', function () {

    // instantiate controller
    var BookingsCtrl, datasetsMock, scope, spy;

    // load the controller's module
    beforeEach(module('main'));
    // load all the templates to prevent unexpected $http requests from ui-router
    beforeEach(module('ngHtml2Js'));

    // define a mock of service called
    beforeEach(inject(function () {
        
            datasetsMock = {
                courses: new Array({data:1}),
                listings: new Array({data:2})
            };

    }));

    // instantiate controller
    beforeEach(inject(function ($controller, $rootScope) {

        scope = $rootScope.$new();
        BookingsCtrl = $controller('BookingsCtrl', {
            $scope: scope,
            datasets: datasetsMock
        });
    }));

    it('should call the datasets service and populate $scope.courses  with dataset.course', function () {
        expect(scope.courses ).toEqual(new Array({data:1}));
    });

    it('should call the datasets service and populate $scope.listings with dataset.listings', function () {
        expect(scope.listings).toEqual(new Array({data:2}));
    });
    
    it('should populate $scope.concat with a concatenation of dataset.course and dataset.listings', function () {
        expect(scope.concat).toEqual(new Array({data:1}, {data:2}));
    });

});

