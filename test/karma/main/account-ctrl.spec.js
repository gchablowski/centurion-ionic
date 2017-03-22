'use strict';
describe('module: main, controller: AccountCtrl', function () {

    // instantiate controller
    var AccountCtrl, $localStorageMock, scope, UserServMock;

    // load the controller's module
    beforeEach(module('main'));
    // load all the templates to prevent unexpected $http requests from ui-router
    beforeEach(module('ngHtml2Js'));

    // define a mock of service called
    beforeEach(inject(function ($state) {

        $localStorageMock = {user: 1};

        $localStorageMock = {
            user: 1,
            $reset: function () {
                return true;
            }
        };

        spyOn($localStorageMock, '$reset').and.callThrough();

        UserServMock = {
            logout: function () {
                return true;
            }
        };

        spyOn(UserServMock, 'logout').and.callThrough();

        spyOn($state, 'go');

    }));

    // instantiate controller
    beforeEach(inject(function ($controller, $rootScope) {

        scope = $rootScope.$new();
        AccountCtrl = $controller('AccountCtrl', {
            $scope: scope,
            UserServ: UserServMock,
            $localStorage: $localStorageMock
        });
    }));

    it('should define a $scope.user', function () {
        expect(scope.user).toEqual(1);
    });

    it('should define a scope.logout function that call UserServ.logout for login out', function () {
        scope.logout();
        expect(UserServMock.logout).toHaveBeenCalledWith({}, jasmine.any(Function));
    });

    it('should define a this.success function that call localStorage.$reset()', function () {
        AccountCtrl.success();
        expect($localStorageMock.$reset).toHaveBeenCalled();
    });

    it('should define a this.success function that call $state.go("login")', inject(function ($state) {
        AccountCtrl.success();
        expect($state.go).toHaveBeenCalledWith('login');
    }));

});

