'use strict';
describe('module: main, controller: LoginCtrl', function () {

    // instantiate controller
    var LoginCtrl, LoginServMock, $localStorageMock, scope;

    // load the controller's module
    beforeEach(module('main'));
    // load all the templates to prevent unexpected $http requests from ui-router
    beforeEach(module('ngHtml2Js'));

    // define a mock of service called
    beforeEach(inject(function ($state, $ionicPopup) {

        $localStorageMock = {token: 0, user: 0};

        LoginServMock = {
            login: function () {
                var datas = {data: 1};
                return datas;
            }
        };

        spyOn(LoginServMock, 'login').and.callThrough();
        spyOn($ionicPopup, 'alert').and.callThrough();
        spyOn($state, 'go');

    }));

    // instantiate controller
    beforeEach(inject(function ($controller, $rootScope) {

        scope = $rootScope.$new();
        LoginCtrl = $controller('LoginCtrl', {
            $scope: scope,
            LoginServ: LoginServMock,
            $localStorage: $localStorageMock
        });
    }));

    it('should define a $scope.loginData', function () {
        expect(scope.loginData).toEqual({});
    });

    it('should define a $scope.appMessage', function () {
        expect(scope.appMessage).toEqual({});
    });

    it('should define a scope.processLogin function that call LoginServ.login for submit the login form', function () {
        scope.loginData = {data: 1};
        scope.processLogin();
        expect(LoginServMock.login).toHaveBeenCalledWith({}, scope.loginData, jasmine.any(Function), jasmine.any(Function));
    });

    it('should define a $this.showAlert function that call $ionicPopup', inject(function ($ionicPopup) {
        LoginCtrl.showAlert("a", "b");
        expect($ionicPopup.alert).toHaveBeenCalledWith({title: 'a', template: 'b'});
    }));

    it('should define a this.success function that call $this.showAlert for displaying an error if there an error on the answer of the server', function () {
        spyOn(LoginCtrl, 'showAlert');
        var data = {error: "error"};
        LoginCtrl.success(data);
        expect(LoginCtrl.showAlert).toHaveBeenCalledWith('Invalid Details', 'error');
    });
   

    it('should define a this.success function that call localStorage and store the user data', function () {
        var data = {token: "1", 'user': '2', stats: '3'};
        LoginCtrl.success(data);
        expect($localStorageMock.token).toEqual(data.token);
        expect($localStorageMock.user).toEqual(data.user);
        expect($localStorageMock.stats).toEqual(data.stats);
    });

    it('should define a this.success function that got to profile if the data.user.membership_id is present in the data', inject(function ($state) {
        var data = {token: "1", 'user': {membership_id: 2}, stats: '3'};
        LoginCtrl.success(data);
        expect($state.go).toHaveBeenCalledWith('home');
    }));
    
     it('should define a this.error function that call $this.showAlert for displaying an error', function () {
        spyOn(LoginCtrl, 'showAlert');
        LoginCtrl.error();
        expect(LoginCtrl.showAlert).toHaveBeenCalledWith('Invalid Details', "We encouter a problem to log you in");
    });

    /* TODO
     it('should define a this.success function that got to profile if the data.user.membership_id is present in the data', inject(function ($state) {
     var data = {token: "1", 'user': '2', stats: '3'};
     LoginCtrl.success(data);
     expect($state.go).toHaveBeenCalledWith('member');
     }));
     */
});

