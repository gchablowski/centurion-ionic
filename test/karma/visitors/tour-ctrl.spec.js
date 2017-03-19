'use strict';
describe('module: visitors, controller: TourCtrl', function () {

    // instantiate controller
    var TourCtrl, datasetsMock, MainServMock, scope;

    // load the controller's module
    beforeEach(module('visitors'));
    // load all the templates to prevent unexpected $http requests from ui-router
    beforeEach(module('ngHtml2Js'));

    // define a mock of service called
    beforeEach(function () {

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

    });

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

    it('should define a scope.sendForm function that return an error message if scope.formData.terms = false', function () {
        scope.sendForm();
        expect(scope.appMessage.title).toEqual('Terms and Conditions');
        expect(scope.appMessage.content).toEqual('Please accept the terms and conditions');
        expect(scope.appMessage.show).toEqual(true);
    });

    it('should define a scope.sendForm function that return an error message if !$scope.formData.name && !$scope.formData.email && !$scope.formData.message', function () {
        scope.formData.terms = true;
        scope.sendForm();
        expect(scope.appMessage.title).toEqual('Invalid Details');
        expect(scope.appMessage.content).toEqual('Please ensure all require fields are filled');
        expect(scope.appMessage.show).toEqual(true);
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
        var error = {error: "error"};
        TourCtrl.success(error);
        expect(scope.appMessage.title).toEqual('Invalid Details');
        expect(scope.appMessage.content).toEqual("error");
        expect(scope.appMessage.show).toEqual(true);
    });

    it('should define a $this.success function that call create an validation message when there a validation', function () {
        var error = {name: "name"};
        TourCtrl.success(error);
        expect(scope.appMessage.title).toEqual('Sent!');
        expect(scope.appMessage.content).toEqual('Thank you for your enquiry, we will get back to you as soon as possible!');
        expect(scope.appMessage.show).toEqual(true);
    });

});

