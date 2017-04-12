'use strict';
describe('module: friends, controller: FriendsCtrl', function () {

    // instantiate controller
    var FriendsCtrl, datasetsMock, scope, $cordovaSocialSharingMock;

    // load the controller's module
    beforeEach(module('friends'));
    // load all the templates to prevent unexpected $http requests from ui-router
    beforeEach(module('ngHtml2Js'));

    // define a mock of service called
    beforeEach(inject(function () {

        datasetsMock = {
            follow: [{
                    "id": 103,
                    "pivot": {
                        "status": "Accepted"
                    }
                },
                {
                    "id": 122,
                    "pivot": {
                        "status": "Denied"
                    }
                },
                {
                    "id": 104,
                    "pivot": {
                        "status": "Approved"
                    }
                },
                {
                    "id": 121,
                    "pivot": {
                        "status": "Requested"
                    }
                }]
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

        spyOn($cordovaSocialSharingMock, 'shareViaFacebook').and.callThrough();
        spyOn($cordovaSocialSharingMock, 'shareViaTwitter').and.callThrough();
        spyOn($cordovaSocialSharingMock, 'shareViaSMS').and.callThrough();

    }));

    // instantiate controller
    beforeEach(inject(function ($controller, $rootScope) {

        scope = $rootScope.$new();
        FriendsCtrl = $controller('FriendsCtrl', {
            $scope: scope,
            datasets: datasetsMock,
            $cordovaSocialSharing: $cordovaSocialSharingMock
        });
    }));

    it('should populate $scope.follow with dataset.listings filtered with groupDataset', function () {
        expect(scope.follow).toEqual([
            [
                {
                    "id": 121,
                    "pivot": {
                        "status": "Requested"
                    }
                }
            ],
            [],
            [
                {
                    "id": 103,
                    "pivot": {
                        "status": "Accepted",
                    }
                },
                {
                    "id": 104,
                    "pivot": {
                        "status": "Approved"
                    }
                }
            ]
        ]);
    });

    it('should define a $scope.share function that call $cordovaSocialSharing.shareViaFacebook if type = 1', function () {
        scope.share(1);
        expect($cordovaSocialSharingMock.shareViaFacebook).toHaveBeenCalledWith('Download the new Centurion Club app! http://centurion.back9solutions.com/download', null, null);
    });

    it('should define a $scope.share function that call $cordovaSocialSharing.shareViaFacebook if type = 2', function () {
        scope.share(2);
        expect($cordovaSocialSharingMock.shareViaTwitter).toHaveBeenCalledWith('Download the new Centurion Club app! http://centurion.back9solutions.com/download', null, null);
    });

    it('should define a $scope.share function that call $cordovaSocialSharing.shareViaSMS if type = 3', function () {
        scope.share(3);
        expect($cordovaSocialSharingMock.shareViaSMS).toHaveBeenCalledWith('Download the new Centurion Club app! http://centurion.back9solutions.com/download', null);
    });

});

