'use strict';
describe('module: main, controller: NewsCtrl', function () {

    // instantiate controller
    var NewsCtrl, datasetsMock, scope;

    // load the controller's module
    beforeEach(module('main'));
    // load all the templates to prevent unexpected $http requests from ui-router
    beforeEach(module('ngHtml2Js'));

    // define a mock of service called
    beforeEach(inject(function () {

        datasetsMock = {
            posts: 1
        };

    }));

    // instantiate controller
    beforeEach(inject(function ($controller, $rootScope) {

        scope = $rootScope.$new();
        NewsCtrl = $controller('NewsCtrl', {
            $scope: scope,
            datasets: datasetsMock
        });
    }));

    it('should define a $scope.loginData', function () {
        expect(scope.posts).toEqual(1);
    });

});

