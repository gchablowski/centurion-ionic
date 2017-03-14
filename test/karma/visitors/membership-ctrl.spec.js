'use strict';

describe('module: visitors, controller: MembershipCtrl', function () {

    // instantiate controller
    var HomeCtrl, MainServMock, scope;

    // load the controller's module
    beforeEach(module('visitors'));
    // load all the templates to prevent unexpected $http requests from ui-router
    beforeEach(module('ngHtml2Js'));
    
    // define a mock of service called
    beforeEach(function () {

        MainServMock = {
            memberships: function () {
                var datas = {data: 1};
                return datas;
            }
        };

        spyOn(MainServMock, 'memberships').and.callThrough();

    });
    
    // instantiate controller
    beforeEach(inject(function ($controller, $rootScope) {

        scope = $rootScope.$new();

        HomeCtrl = $controller('MembershipCtrl', {
            $scope: scope,
            MainServ: MainServMock
        });

    }));
    
    it('should call the MainServ service and populate $scope.datas ', function () {
        expect(MainServMock.memberships).toHaveBeenCalled();
        expect(scope.memberships).toEqual({data: 1});
    });

});

