'use strict';
describe('module: main, controller: EventCtrl', function () {

    // instantiate controller
    var EventCtrl, datasetsMock, scope, UserServMock, $stateParamsMock, $cordovaSocialSharingMock;

    // load the controller's module
    beforeEach(module('main'));
    // load all the templates to prevent unexpected $http requests from ui-router
    beforeEach(module('ngHtml2Js'));

    // define a mock of service called
    beforeEach(inject(function ($state, $ionicPopup, $q) {
        var deferred = $q.defer();
        deferred.resolve(true);

        UserServMock = {
            registration: function () {
                return true;
            },
            cancelRegistration: function () {
                return true;
            }
        };

        $stateParamsMock = {id: 1};

        datasetsMock = {
            event: {
                title: "a",
                registrations: [{id: 1}]
            }
        };
        
        $cordovaSocialSharingMock = {
            shareViaFacebook: function () {
                return true;
            },
            shareViaTwitter: function () {
                return true;
            },
            shareViaSMS: function () {
                return true;
            }
        };
        
        spyOn($state, "go");
        spyOn($ionicPopup, 'confirm').and.callFake(function () {
            return deferred.promise
        });
        ;
        spyOn(UserServMock, 'registration').and.callThrough();
        spyOn(UserServMock, 'cancelRegistration').and.callThrough();
        spyOn($cordovaSocialSharingMock, 'shareViaFacebook').and.callThrough();
        spyOn($cordovaSocialSharingMock, 'shareViaTwitter').and.callThrough();
        spyOn($cordovaSocialSharingMock, 'shareViaSMS').and.callThrough();
    }));

    // instantiate controller
    beforeEach(inject(function ($controller, $rootScope) {

        scope = $rootScope.$new();
        EventCtrl = $controller('EventCtrl', {
            $scope: scope,
            datasets: datasetsMock,
            UserServ: UserServMock,
            $stateParams: $stateParamsMock,
            $cordovaSocialSharing: $cordovaSocialSharingMock
        });
    }));

    it('should define a $scope.event and call dataset to get event data', function () {
        expect(scope.event).toEqual({
            title: "a",
            registrations: [{id: 1}]
        });
    });

    it('should define a $this.success function that call $state.go("menu.events");', inject(function ($state) {
        EventCtrl.success();
        expect($state.go).toHaveBeenCalledWith("menu.events");
    }));

    it('should define a $scope.showConfirm function that call $ionicPopup with registration sentence if type = true', inject(function ($ionicPopup) {
        scope.showConfirm(true);
        expect($ionicPopup.confirm).toHaveBeenCalledWith({title: 'a', template: 'Are you sure you want to enter the a', buttons: [{text: 'No'}, {text: 'Yes', onTap: jasmine.any(Function)}]});
    }));

    it('should define a $scope.showConfirm function that call UserServ.registration() if type = true', function () {
        scope.showConfirm(true);
        scope.$digest();
        expect(UserServMock.registration).toHaveBeenCalledWith({id: 1}, {}, jasmine.any(Function));
    });

    it('should define a $scope.showConfirm function that call $ionicPopup with cancel sentence if type = true', inject(function ($ionicPopup) {
        scope.showConfirm(false);
        expect($ionicPopup.confirm).toHaveBeenCalledWith({title: 'a', template: 'Are you sure you want to cancel your registration?', buttons: [{text: 'No'}, {text: 'Yes', onTap: jasmine.any(Function)}]});
    }));

    it('should define a $scope.showConfirm function that call UserServ.registration() if type = true', function () {
        scope.showConfirm(false);
        scope.$digest();
        expect(UserServMock.cancelRegistration).toHaveBeenCalledWith({id: 1}, {}, jasmine.any(Function));
    });

    it('should define a $scope.share function that call $cordovaSocialSharing.shareViaFacebook if type = 1', function () {
        scope.share(1);
        expect($cordovaSocialSharingMock.shareViaFacebook).toHaveBeenCalledWith('Checkout the a on the Invalid Date at the Centurion Club. Go to http://www.centurionclub.co.uk for more', null, null);
    });

    it('should define a $scope.share function that call $cordovaSocialSharing.shareViaFacebook if type = 2', function () {
        scope.share(2);
        expect($cordovaSocialSharingMock.shareViaTwitter).toHaveBeenCalledWith('Checkout the a on the Invalid Date at the Centurion Club. Go to http://www.centurionclub.co.uk for more', null, null);
    });
    
        it('should define a $scope.share function that call $cordovaSocialSharing.shareViaSMS if type = 3', function () {
        scope.share(3);
        expect($cordovaSocialSharingMock.shareViaSMS).toHaveBeenCalledWith('Checkout the a on the Invalid Date at the Centurion Club. Go to http://www.centurionclub.co.uk for more', null);
    });
});

