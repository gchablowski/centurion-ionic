'use strict';
describe('module: main, controller: ListCtrl', function () {

    // instantiate controller
    var ListCtrl, datasetsMock, scope, spy;

    // load the controller's module
    beforeEach(module('main'));
    // load all the templates to prevent unexpected $http requests from ui-router
    beforeEach(module('ngHtml2Js'));

    // define a mock of service called
    spy = 0;
    beforeEach(inject(function () {
        if (spy == 0) {
            datasetsMock = {
                posts: 1
            };
        } else if (spy == 1) {
            datasetsMock = {
                post: 2
            };
        } else if (spy == 2) {
            datasetsMock = {
                events: 3
            };
        } else if (spy == 3) {
            datasetsMock = {
                courses: [3],
                listings: [4]
            };
        } else if (spy == 4) {
            datasetsMock = {
                query: {
                    results: {channel: 5}
                }
            };
        }
        spy++;
    }));

    // instantiate controller
    beforeEach(inject(function ($controller, $rootScope) {

        scope = $rootScope.$new();
        ListCtrl = $controller('ListCtrl', {
            $scope: scope,
            datasets: datasetsMock
        });
    }));

    it('should call the datasets service and populate $scope.posts with dataset.posts if it exist', function () {
        expect(scope.posts).toEqual(1);
    });

    it('should call the datasets service and populate $scope.posts with dataset.posts if it exist', function () {
        expect(scope.posts).toEqual(2);
    });

    it('should call the datasets service and populate $scope.posts with dataset.events if it exist', function () {
        expect(scope.posts).toEqual(3);
    });

    it('should call the datasets service and populate $scope.posts with a concatenation of dataset.courses and dataset.listings if it exist', function () {
        expect(scope.posts).toEqual([3, 4]);
    });

    it('should call the datasets service and populate $scope.posts with datasets.query.results.channel if it exist', function () {
        expect(scope.posts).toEqual(5);
    });

});

