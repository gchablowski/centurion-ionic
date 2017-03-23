'use strict';
describe('module: visitors, controller: MennuCtrl', function () {

    // instantiate controller
    var MenuCtrl, scope, $stateMock, $rootScopeMock, $localStorageMock;

    // load the controller's module
    beforeEach(module('visitors'));
    // load all the templates to prevent unexpected $http requests from ui-router
    beforeEach(module('ngHtml2Js'));

    // define a mock of service called
    var spy = 0;
    beforeEach(inject(function () {

        $stateMock = {
            current: {
                data: {
                    buttonHome: 1
                }
            },
            go: function () {
                return true;
            }
        };

        spyOn($stateMock, 'go');
        if (spy == 3) {
            $localStorageMock = {
                user: 1
            };
        } else {
            $localStorageMock = {};
        }
        spy++;
    }));

    // instantiate controller
    beforeEach(inject(function ($controller, $rootScope) {
        $rootScopeMock = $rootScope;
        scope = $rootScope.$new();
        MenuCtrl = $controller('MenuCtrl', {
            $scope: scope,
            $state: $stateMock,
            $localStorage: $localStorageMock
        });
    }));

    it('should call $state.current.data.buttonHome and populate $scope.home', function () {
        expect(scope.home).toEqual(1);
    });

    it("should call the $this.eventFn function and not populate $scope.home if toState.data doesn't exist", function () {

        $rootScopeMock.$broadcast('$stateChangeStart',
                {}, // toState
                {}, // toParams                   
                {}, // fromState
                {}  // fromParams
        );
        expect(scope.home).toEqual(1);
    });

    it('should call the $this.eventFn function and populate $scope.home if toState.data exist', function () {

        $rootScopeMock.$broadcast('$stateChangeStart',
                {data: {
                        buttonHome: 2
                    }}, // toState
                {}, // toParams                   
                {}, // fromState
                {}  // fromParams
        );
        expect(scope.home).toEqual(2);
    });
    
    it('should define a $scope.gotoHome function that go to visitor if $localStorage.user is defined ', function () {
        scope.gotoHome();
        expect($stateMock.go).toHaveBeenCalledWith('home');
    });

    it('should define a $scope.gotoHome function that go to visitor if $localStorage.user is not defined ', function () {
        scope.gotoHome();
        expect($stateMock.go).toHaveBeenCalledWith('visitors');
    });

});

