'use strict';
describe('module: main, controller: UpdateInfoCtrl', function () {

    // instantiate controller
    var UpdateInfoCtrl, $localStorageMock, datasetsMock, scope, UserServMock;

    // load the controller's module
    beforeEach(module('main'));
    // load all the templates to prevent unexpected $http requests from ui-router
    beforeEach(module('ngHtml2Js'));

    // define a mock of service called
    beforeEach(inject(function ($state, $ionicPopup) {
        UserServMock = {updateInfo: function () {
                return true;
            }};
        
        $localStorageMock = {user: 1};
        
        spyOn($ionicPopup, 'alert').and.callThrough();
        spyOn($state, 'go');
        spyOn(UserServMock, 'updateInfo').and.callThrough();

    }));

    // instantiate controller
    beforeEach(inject(function ($controller, $rootScope) {

        scope = $rootScope.$new();
        UpdateInfoCtrl = $controller('UpdateInfoCtrl', {
            $scope: scope,
            datasets: datasetsMock,
            $localStorage: $localStorageMock,
            UserServ: UserServMock
        });
    }));

    it('should define a $scope.updateData', function () {
        expect(scope.updateData).toEqual(1);
    });

    it('should define a this.success function that call $ionicPopup for displaying an error if there an error on the answer of the server', inject(function ($ionicPopup) {

        var data = {error: "error"};
        UpdateInfoCtrl.success(data);
        expect($ionicPopup.alert).toHaveBeenCalledWith({title: 'Error', template: 'error'});
    }));

    it('should define a this.success function that call localStorage and store the user data', function () {
        var data = {'user': '2'};
        UpdateInfoCtrl.success(data);
        expect($localStorageMock.user).toEqual(data.user);
    });

    it('should define a this.success function that got to profile if the data.user.membership_id is present in the data', inject(function ($state) {
        var data = {'user': 2};
        UpdateInfoCtrl.success(data);
        expect($state.go).toHaveBeenCalledWith('account');
    }));

    it('should define a scope.processUpdate function that call UserServ.updateInfo for submit the update form', function () {
        scope.updateData = {data: 1};
        scope.processUpdate();
        expect(UserServMock.updateInfo).toHaveBeenCalledWith({}, scope.updateData, jasmine.any(Function));
    });
});

