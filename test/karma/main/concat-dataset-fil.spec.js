'use strict';

describe('module: main, filter: concatDataset', function () {

    // load the filter's module
    beforeEach(module('main'));
    // load all the templates to prevent unexpected $http requests from ui-router
    beforeEach(module('ngHtml2Js'));

    // initialize a new instance of the filter before each test
    var $filter;
    beforeEach(inject(function (_$filter_) {
        $filter = _$filter_('concatDataset');
    }));

 
    it('should return an array formated', function () {
        var data = [[{id:1, bookings: [{id: 11},{id: 12}]}], [{id:2, bookings: [{id: 21},{id: 22}]}]];
        expect($filter(data, "bookings")).toEqual([ { id: 2, bookings: [ { id: 21 }, { id: 22 } ] }, { id: 21 }, { id: 22 }, { id: 1, bookings: [ { id: 11 }, { id: 12 } ] }, { id: 11 }, { id: 12 } ]);
    });
});
