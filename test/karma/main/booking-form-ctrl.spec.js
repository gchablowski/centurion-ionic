'use strict';
describe('module: main, controller: BookingFormCtrl', function () {

    // instantiate controller
    var BookingFormCtrl, datasetsMock, scope, $localStorageMock, UserServMock;

    // load the controller's module
    beforeEach(module('main'));
    // load all the templates to prevent unexpected $http requests from ui-router
    beforeEach(module('ngHtml2Js'));

    // define a mock of service called
    beforeEach(inject(function ($state, $ionicPopup) {

        datasetsMock = {
            listing: {id: 1}
        };

        $localStorageMock = {
            user: 1
        };

        UserServMock = {
            bookingformPost: function () {
                return true;
            }
        };

        spyOn($state, 'go');
        spyOn($ionicPopup, 'alert').and.callThrough();
        spyOn(UserServMock, 'bookingformPost').and.callThrough();
    }));

    // instantiate controller
    beforeEach(inject(function ($controller, $rootScope) {

        scope = $rootScope.$new();
        BookingFormCtrl = $controller('BookingFormCtrl', {
            $scope: scope,
            datasets: datasetsMock,
            $localStorage: $localStorageMock,
            UserServ: UserServMock
        });
    }));

    it('should populate $scope.listing with dataset.listings', function () {
        expect(scope.listing).toEqual({id: 1});
    });

    it('should define a $scope.user', function () {
        expect(scope.user).toEqual(1);
    });

    it('should define a $scope.minDate', inject(function ($filter) {
        var date = $filter('date')(new Date(), 'yyyy-MM-dd');
        expect(scope.minDate).toEqual(date);
    }));

    it('should define a this.success function that call $ionicPopup.alert', inject(function ($ionicPopup) {
        var data = {error: "error"};
        BookingFormCtrl.success(data);
        expect($ionicPopup.alert).toHaveBeenCalledWith({title: 'Invalid Details', template: 'error'});
    }));

    it('should define a this.success function that call localStorage and store the user data', inject(function ($state) {
        var data = {data: 1};
        BookingFormCtrl.success(data);
        expect($state.go).toHaveBeenCalledWith('menu.bookings');
    }));
    
        it('should define add fulldate key in $scope.formData', inject(function ($filter) {
        scope.formData = {date: new Date(), time: new Date()};
        scope.submitForm();
        expect(scope.formData.fulldate).toEqual($filter('date')(scope.formData.date, 'yyyy-MM-dd') + ' ' + $filter('date')(scope.formData.time, 'h:mm:00'));
    }));
    
    it('should define a $scope.submitForm function that call UserServ.bookingformPost', function () {
        scope.formData = {date: new Date(), time: new Date()};
        scope.submitForm();
        expect(UserServMock.bookingformPost).toHaveBeenCalledWith({ id: 1 }, scope.formData, jasmine.any(Function));
    });
    
});

