'use strict';
describe('module: booking, controller: BookingStatusCtrl', function () {

    // instantiate controller
    var BookingStatusCtrl, datasetsMock, scope, BookingServMock;

    // load the controller's module
    beforeEach(module('booking'));
    // load all the templates to prevent unexpected $http requests from ui-router
    beforeEach(module('ngHtml2Js'));

    // define a mock of service called
    beforeEach(inject(function ($state, $ionicPopup, $q) {

        BookingServMock = {
            bookingReschedule: function () {
                return true;
            },
            bookingCancel: function () {
                return true;
            }
        };

        spyOn(BookingServMock, 'bookingReschedule').and.callThrough();
        spyOn(BookingServMock, 'bookingCancel').and.callThrough();

        datasetsMock = {
            booking: {id: 1, today: false}
        };

        var deferred = $q.defer();
        deferred.resolve(true);

        spyOn($ionicPopup, 'confirm').and.callFake(function () {
            return deferred.promise
        });
        spyOn($ionicPopup, 'alert').and.callThrough();
        spyOn($state, "go");

    }));

    // instantiate controller
    beforeEach(inject(function ($controller, $rootScope) {

        scope = $rootScope.$new();
        BookingStatusCtrl = $controller('BookingStatusCtrl', {
            $scope: scope,
            datasets: datasetsMock,
            BookingServ: BookingServMock
        });
    }));

    it('should call the datasets service and populate $scope.booking with dataset.booking', function () {
        expect(scope.booking).toEqual({id: 1, today: false});
    });

    it('should define a $this.showAlert function that call $ionicPopup', inject(function ($ionicPopup) {
        BookingStatusCtrl.showAlert("a", "b");
        expect($ionicPopup.alert).toHaveBeenCalledWith({title: 'a', template: 'b'});
    }));

    it('should define a this.success function that call $this.showAlert for displaying an error if there an error on the answer of the server', function () {
        spyOn(BookingStatusCtrl, 'showAlert');
        var data = {error: "error"};
        BookingStatusCtrl.success(data);
        expect(BookingStatusCtrl.showAlert).toHaveBeenCalledWith('Error', 'error');
    });

    it('should define a $this.success function that call $state.go("menu.bookings") if data.booking.status = "Cancelled"', inject(function ($state) {
        var data = {booking: {status: "Cancelled"}};
        BookingStatusCtrl.success(data);
        expect($state.go).toHaveBeenCalledWith("menu.bookings");
    }));

    it('should define a $this.success function that put data in $scope.booking', inject(function ($state) {
        var data = {booking: {status: "read"}};
        BookingStatusCtrl.success(data);
        expect(scope.booking).toEqual({status: 'read'});
    }));

    it('should define a this.error function that call $ionicPopup.alert', inject(function ($ionicPopup) {
        BookingStatusCtrl.error();
        expect($ionicPopup.alert).toHaveBeenCalledWith({ title: 'An error occured', template: "We can't proceed. Please try again." });
    }));

    it('should define a this.showCancel function that call $ionicPopup', inject(function ($ionicPopup) {
        BookingStatusCtrl.showCancel();
        expect($ionicPopup.confirm).toHaveBeenCalledWith({title: 'Cancel', template: 'Are you sure you want to cancel this booking?', buttons: [{text: 'No'}, {text: 'Yes', onTap: jasmine.any(Function)}]});
    }));

    it('should define a this.showCancel function that call BookingServ.bookingCancel()', function () {
        BookingStatusCtrl.showCancel();
        scope.$digest();
        expect(BookingServMock.bookingCancel).toHaveBeenCalledWith({id: 1}, {}, jasmine.any(Function), jasmine.any(Function));
    });

    it('should define a $scope.reschedule function that call BookingServ.bookingReschedule()', function () {
        scope.reschedule();
        scope.$digest();
        expect(BookingServMock.bookingReschedule).toHaveBeenCalledWith({id: 1}, {}, jasmine.any(Function), jasmine.any(Function));
    });

    it('should define a $scope.messageCancelAppear function that call this.showCancel() if $scope.booking.today =true', function () {
        scope.booking.today = true;
        spyOn(BookingStatusCtrl, 'showAlert');
        scope.messageCancelAppear();
        scope.$digest();
        expect(BookingStatusCtrl.showAlert).toHaveBeenCalledWith('Cancelation Policy', 'To cancel within 24 hours please call the club. Thank you');
    });

    it('should define a $scope.messageCancelAppear function that call this.showCancel() if $scope.booking.today =true', function () {
        spyOn(BookingStatusCtrl, 'showCancel');
        scope.messageCancelAppear();
        scope.$digest();
        expect(BookingStatusCtrl.showCancel).toHaveBeenCalled();
    });

});

