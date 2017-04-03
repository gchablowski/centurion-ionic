'use strict';

describe('module: main, filter: dateFormat', function () {

    // load the filter's module
    beforeEach(module('main'));
    // load all the templates to prevent unexpected $http requests from ui-router
    beforeEach(module('ngHtml2Js'));

    // initialize a new instance of the filter before each test
    var $filter;
    beforeEach(inject(function (_$filter_) {
        $filter = _$filter_('toArray');
    }));

    it('should return an array"', function () {
        var values = {name: 'misko', gender: 'male'};
        expect($filter(values)).toEqual( [ 'misko', 'male' ]);
    });

});
