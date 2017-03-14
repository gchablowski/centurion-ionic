'use strict';

describe('module: visitors, controller: MembershipCtrl', function () {

    // instantiate controller
    var ReciprocalsCtrl, MainServMock, scope;

    // load the controller's module
    beforeEach(module('visitors'));
    // load all the templates to prevent unexpected $http requests from ui-router
    beforeEach(module('ngHtml2Js'));
    
    // define a mock of service called
    beforeEach(function () {

        MainServMock = {
            reciprocals: function () {
                var datas = {data: 1};
                return datas;
            }
        };

        spyOn(MainServMock, 'reciprocals').and.callThrough();

    });
    
    // instantiate controller
    beforeEach(inject(function ($controller, $rootScope) {

        scope = $rootScope.$new();

        ReciprocalsCtrl = $controller('ReciprocalsCtrl', {
            $scope: scope,
            MainServ: MainServMock
        });

    }));
    
    it('should call the MainServ service and populate $scope.listings', function () {
        expect(MainServMock.reciprocals).toHaveBeenCalled();
        expect(scope.listings).toEqual({data: 1});
    });

});

