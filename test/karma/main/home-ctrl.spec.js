'use strict';
describe('module: main, controller: HomeCtrl', function () {

    // instantiate controller
    var HomeCtrl, $localStorageMock, datasetsMock, scope;

    // load the controller's module
    beforeEach(module('main'));
    // load all the templates to prevent unexpected $http requests from ui-router
    beforeEach(module('ngHtml2Js'));

    // define a mock of service called
    beforeEach(inject(function () {

        $localStorageMock = {user: 1};
        datasetsMock = {
            points: 2,
            posts: 3,
            events: 4,
            bookings: 5,
            booking_next: 6,
            pending: 7,
            unread: 8
        };

    }));

    // instantiate controller
    beforeEach(inject(function ($controller, $rootScope) {

        scope = $rootScope.$new();
        HomeCtrl = $controller('HomeCtrl', {
            $scope: scope,
            datasets: datasetsMock,
            $localStorage: $localStorageMock
        });
    }));

    it('should define a $scope.user', function () {
        expect(scope.user).toEqual(1);
    });

    it('should define a $scope.points', function () {
        expect(scope.points).toEqual(2);
    });

    it('should define a $scope.posts', function () {
        expect(scope.posts).toEqual(3);
    });

    it('should define a $scope.events', function () {
        expect(scope.events).toEqual(4);
    });

    it('should define a $scope.bookings', function () {
        expect(scope.bookings).toEqual(5);
    });

    it('should define a $scope.booking_next', function () {
        expect(scope.booking_next).toEqual(6);
    });

    it('should define a $scope.pending', function () {
        expect(scope.pending).toEqual(7);
    });

    it('should define a $scope.unread', function () {
        expect(scope.unread).toEqual(8);
    });

});
