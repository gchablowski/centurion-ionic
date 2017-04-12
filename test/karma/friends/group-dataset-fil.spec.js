'use strict';

describe('module: friends, filter: grouptDataset', function () {

    // load the filter's module
    beforeEach(module('friends'));
    // load all the templates to prevent unexpected $http requests from ui-router
    beforeEach(module('ngHtml2Js'));

    // initialize a new instance of the filter before each test
    var $filter;
    beforeEach(inject(function (_$filter_) {
        $filter = _$filter_('groupDataset');
    }));


    it('should return an array formated', function () {
        var data = [
            {
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
            }
        ]

        expect($filter(data, 'pivot.status', ['Accepted', 'Approved'], ['Requested', 'Pending', 'Accepted'])).toEqual(
                [
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
});
