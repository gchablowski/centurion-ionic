'use strict';
describe('module: main, controller: PasswordCtrl', function () {

    // instantiate controller
    var PasswordCtrl, $localStorageMock, datasetsMock, scope, UserServMock;

    // load the controller's module
    beforeEach(module('main'));
    // load all the templates to prevent unexpected $http requests from ui-router
    beforeEach(module('ngHtml2Js'));

    // define a mock of service called
    beforeEach(inject(function ($state, $ionicPopup) {
        UserServMock = {password: function () {
                return true;
            }};

        $localStorageMock = {user: 1};

        spyOn($ionicPopup, 'alert').and.callThrough();
        spyOn($state, 'go');
        spyOn(UserServMock, 'password').and.callThrough();

    }));

    // instantiate controller
    beforeEach(inject(function ($controller, $rootScope) {

        scope = $rootScope.$new();
        PasswordCtrl = $controller('PasswordCtrl', {
            $scope: scope,
            datasets: datasetsMock,
            $localStorage: $localStorageMock,
            UserServ: UserServMock
        });
    }));

    it('should define a $scope.updateData', function () {
        expect(scope.updateData).toEqual(1);
    });

    it('should define a $this.showAlert function that call $ionicPopup for displaying error', inject(function ($ionicPopup) {
        PasswordCtrl.showAlert("title", "template");
        expect($ionicPopup.alert).toHaveBeenCalledWith({title: 'title', template: 'template'});
    }));

    it('should define a this.success function that call $this.showAlert if there an error', function () {
        spyOn(PasswordCtrl, "showAlert").and.callThrough();
        var data = {error: "error"};
        PasswordCtrl.success(data);
        expect(PasswordCtrl.showAlert).toHaveBeenCalledWith('Error', 'error');
    });

    it('should define a this.success function that call localStorage and store the user data', function () {
        var data = {'user': '2'};
        PasswordCtrl.success(data);
        expect($localStorageMock.user).toEqual(data.user);
    });

    it('should define a this.success function that call $this.showAlert to show a messagee of validation', inject(function ($state) {
        spyOn(PasswordCtrl, "showAlert").and.callThrough();
        var data = {'user': 2};
        PasswordCtrl.success(data);
        expect(PasswordCtrl.showAlert).toHaveBeenCalledWith('Password Updated', 'Your password has been updated');
    }));

    it('should define a this.success function that got to profile if the data.user.membership_id is present in the data', inject(function ($state) {
        var data = {'user': 2};
        PasswordCtrl.success(data);
        expect($state.go).toHaveBeenCalledWith('account');
    }));

    it('should define a scope.passwordUpdate function that call UserServ.password for submit the update form', function () {
        scope.updateData = {data: 1};
        scope.passwordUpdate();
        expect(UserServMock.password).toHaveBeenCalledWith({}, scope.updateData, jasmine.any(Function));
    });
});