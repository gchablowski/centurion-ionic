'use strict';
describe('module: main, controller: LoginCtrl', function () {

    // instantiate controller
    var LoginCtrl, LoginServMock, $localStorageMock, scope;

    // load the controller's module
    beforeEach(module('main'));
    // load all the templates to prevent unexpected $http requests from ui-router
    beforeEach(module('ngHtml2Js'));

    // define a mock of service called
    beforeEach(inject(function ($state) {

        $localStorageMock = {token: 0, user: 0};

        LoginServMock = {
            login: function () {
                var datas = {data: 1};
                return datas;
            }
        };

        spyOn(LoginServMock, 'login').and.callThrough();

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

    it('should define a this.success function that call error if there an error on the answer of the server', function () {
        var data = {error: "error"};
        LoginCtrl.success(data);
        expect(scope.appMessage.title).toEqual('Invalid Details');
        expect(scope.appMessage.content).toEqual("error");
        expect(scope.appMessage.show).toEqual(true);
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

    /* TODO
     it('should define a this.success function that got to profile if the data.user.membership_id is present in the data', inject(function ($state) {
     var data = {token: "1", 'user': '2', stats: '3'};
     LoginCtrl.success(data);
     expect($state.go).toHaveBeenCalledWith('member');
     }));
     */
});

