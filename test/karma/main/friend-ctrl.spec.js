'use strict';
describe('module: main, controller: FriendCtrl', function () {

    // instantiate controller
    var FriendCtrl, datasetsMock, scope, UserServMock;

    // load the controller's module
    beforeEach(module('main'));
    // load all the templates to prevent unexpected $http requests from ui-router
    beforeEach(module('ngHtml2Js'));

    // define a mock of service called
    beforeEach(inject(function ($state, $ionicPopup) {

        datasetsMock = {
            user: 1,
            friend: 2
        };

        UserServMock = {
            import: function () {
                return true;
            },
            approve: function () {
                return true;
            },
            deny: function () {
                return true;
            }
        };

        spyOn($ionicPopup, 'alert').and.callThrough();
        spyOn($state, 'go');
        spyOn(UserServMock, 'import').and.callThrough();
        spyOn(UserServMock, 'approve').and.callThrough();
        spyOn(UserServMock, 'deny').and.callThrough();

    }));

    // instantiate controller
    beforeEach(inject(function ($controller, $rootScope) {

        scope = $rootScope.$new();
        FriendCtrl = $controller('FriendCtrl', {
            $scope: scope,
            datasets: datasetsMock,
            UserServ: UserServMock
        });
    }));

    it('should populate $scope.user with dataset.user', function () {
        expect(scope.user).toEqual(1);
    });

    it('should populate $scope.friend with dataset.friend', function () {
        expect(scope.friend).toEqual(2);
    });

    it('should define a $this.showAlert function that call $ionicPopup', inject(function ($ionicPopup) {
        FriendCtrl.showAlert("a");
        expect($ionicPopup.alert).toHaveBeenCalledWith({title: 'Error', template: 'a'});
    }));

    it('should define a this.success function that call $this.showAlert for displaying an error if there an error on the answer of the server', function () {
        spyOn(FriendCtrl, 'showAlert');
        var data = {error: "error"};
        FriendCtrl.success(data);
        expect(FriendCtrl.showAlert).toHaveBeenCalledWith('error');
    });

    it('should define a this.success function that got to profile if the data.user.membership_id is present in the data', inject(function ($state) {
        var data = {token: "1", 'user': {membership_id: 2}, stats: '3'};
        FriendCtrl.success(data);
        expect($state.go).toHaveBeenCalledWith('menu.friends');
    }));

    it('should define a this.error function that call $this.showAlert for displaying an error', function () {
        spyOn(FriendCtrl, 'showAlert');
        FriendCtrl.error();
        expect(FriendCtrl.showAlert).toHaveBeenCalledWith("We encouter a problem.");
    });
});

