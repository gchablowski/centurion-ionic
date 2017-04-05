'use strict';

//create to test $cordovaCamera call
var Camera = {
    DestinationType: {DATA_URL: ""},
    PictureSourceType: {SAVEDPHOTOALBUM: ""}
};
describe('module: main, controller: PhotoCtrl', function () {

    // instantiate controller
    var PhotoCtrl, $localStorageMock, datasetsMock, scope, UserServMock, $cordovaCameraMock;

    // load the controller's module
    beforeEach(module('main'));
    // load all the templates to prevent unexpected $http requests from ui-router
    beforeEach(module('ngHtml2Js'));

    // define a mock of service called
    beforeEach(inject(function ($state, $ionicPopup, $q) {


        UserServMock = {
            updateInfo: function () {
                return true;
            }};

        spyOn(UserServMock, 'updateInfo').and.callThrough();

        $localStorageMock = {
            user: {
                avatar: "",
                avatar_new: ""
            }
        };
        $cordovaCameraMock = {
            getPicture: function () {
                return true;
            }
        };

        var deferred = $q.defer();
        deferred.resolve(true);
        spyOn($cordovaCameraMock, 'getPicture').and.callFake(function () {
            return deferred.promise;
        });

        spyOn($ionicPopup, 'alert').and.callThrough();
        spyOn($state, 'go');
        spyOn(ionic.Platform, 'ready').and.callThrough();

    }));

    // instantiate controller
    beforeEach(inject(function ($controller, $rootScope) {

        scope = $rootScope.$new();
        PhotoCtrl = $controller('PhotoCtrl', {
            $scope: scope,
            datasets: datasetsMock,
            $localStorage: $localStorageMock,
            UserServ: UserServMock,
            $cordovaCamera: $cordovaCameraMock
        });
    }));

    it('should define a $scope.user', function () {
        expect(scope.user).toEqual({avatar: '', avatar_new: ''});
    });

    it('should define a this.success function that call $ionicPopup for displaying an error if there an error on the answer of the server', inject(function ($ionicPopup) {

        var data = {error: "error"};
        PhotoCtrl.success(data);
        expect($ionicPopup.alert).toHaveBeenCalledWith({title: 'Error', template: 'error'});
    }));

    it('should define a this.success function that call localStorage and store the user data', function () {
        var data = {'user': '2'};
        PhotoCtrl.success(data);
        expect($localStorageMock.user).toEqual(data.user);
    });

    it('should define a this.success function that got to profile if the data.user.membership_id is present in the data', inject(function ($state) {
        var data = {'user': 2};
        PhotoCtrl.success(data);
        expect($state.go).toHaveBeenCalledWith('home');
    }));

    it('should define a this.error function that call $ionicPopup.alert', inject(function ($ionicPopup) {
        PhotoCtrl.error();
        expect($ionicPopup.alert).toHaveBeenCalledWith({ title: 'An error occured', template: "We can't proceed. Please try again." });
    }));

    it('should define a this.changeImage function that populate $scope.user.avatar', function () {
        var data = 1;
        PhotoCtrl.changeImage(data);
        expect(scope.user.avatar).toEqual("data:image/jpeg;base64,1");
    });

    it('should define a this.changeImage function that populate $scope.user.avatar', function () {
        var data = 1;
        PhotoCtrl.changeImage(data);
        expect(scope.user.avatar_new).toEqual("data:image/jpeg;base64,1");
    });

    it('should define a this.camera function that call $cordovaCamera.getPicture', function () {
        var data = {'user': '2'};
        PhotoCtrl.camera();
        expect($cordovaCameraMock.getPicture).toHaveBeenCalledWith({quality: 50, destinationType: '', sourceType: '', targetWidth: 400, targetHeight: 400});
    });

    it('should define a $scope.uploadAvatar function that call ionic.Platform.ready', function () {
        scope.uploadAvatar();
        expect(ionic.Platform.ready).toHaveBeenCalled();
    });

    it('should define a $scope.changeAvatar function that call UserServ.updateInfo for submit the image if $scope.user.avatar_new is defined', function () {
        scope.user.avatar_new = 1;
        scope.changeAvatar();
        expect(UserServMock.updateInfo).toHaveBeenCalledWith({}, scope.user, jasmine.any(Function), jasmine.any(Function));
    });

});

