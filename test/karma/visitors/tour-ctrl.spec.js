'use strict';
describe('module: visitors, controller: TourCtrl', function () {

    // instantiate controller
    var TourCtrl, datasetsMock, MainServMock, scope;

    // load the controller's module
    beforeEach(module('visitors'));
    // load all the templates to prevent unexpected $http requests from ui-router
    beforeEach(module('ngHtml2Js'));

    // define a mock of service called
    beforeEach(inject(function ($ionicPopup) {

        datasetsMock = {
            contact: {data: 1},
        };

        MainServMock = {
            contactPost: function () {
                var datas = {data: 1};
                return datas;
            }
        };

        spyOn(MainServMock, 'contactPost').and.callThrough();
        spyOn($ionicPopup, 'alert').and.callThrough();

    }));

    // instantiate controller
    beforeEach(inject(function ($controller, $rootScope) {

        scope = $rootScope.$new();
        TourCtrl = $controller('TourCtrl', {
            $scope: scope,
            datasets: datasetsMock,
            MainServ: MainServMock
        });
    }));

    it('should define scope.appMessage', function () {
        expect(scope.appMessage).toEqual({});
    });

    it('should define scope.formData', function () {
        expect(scope.formData).toEqual({});
    });

    it('should define scope.contact and populate it with datasets.contact', function () {
        expect(scope.contact).toEqual({data: 1});
    });
    
    it('should define a $this.showAlert function that call $ionicPopup', inject(function ($ionicPopup) {
        TourCtrl.showAlert("a", "b");
        expect($ionicPopup.alert).toHaveBeenCalledWith({ title: 'a', template: 'b' });
    }));

    it('should define a scope.sendForm function that call a $this.showAlert function', function () {
        spyOn(TourCtrl, 'showAlert');
        scope.sendForm();
        expect(TourCtrl.showAlert).toHaveBeenCalledWith('Terms and Conditions', 'Please accept the terms and conditions');
    });

    it('should define a scope.sendForm function that call MainServ.contactPost if $scope.formData is filled', function () {
        scope.formData.terms = true;
        scope.formData.name = "aaa";
        scope.formData.email = "aaa@aa.com";
        scope.formData.message = "Lorem ipsum";
        scope.contact.id = 1;
        scope.sendForm();
        expect(MainServMock.contactPost).toHaveBeenCalledWith({id: 1}, {name: "aaa", email: "aaa@aa.com", message: "Lorem ipsum"}, jasmine.any(Function));
    });

    it('should define a $this.success function that call create an error message when there an error', function () {
        spyOn(TourCtrl, 'showAlert');
        var error = {error: "error"};
        TourCtrl.success(error);
        expect(TourCtrl.showAlert).toHaveBeenCalledWith('Invalid Details', 'error');
    });

    it('should define a $this.success function that call create an validation message when there a validation', function () {
        spyOn(TourCtrl, 'showAlert');
        var success = {name: "name"};
        TourCtrl.success(success);
        expect(TourCtrl.showAlert).toHaveBeenCalledWith('Sent!', 'Thank you for your enquiry, we will get back to you as soon as possible!');
    });

});

