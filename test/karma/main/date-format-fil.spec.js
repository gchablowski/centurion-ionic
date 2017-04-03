'use strict';

describe('module: main, filter: dateFormat', function () {

    // load the filter's module
    beforeEach(module('main'));
    // load all the templates to prevent unexpected $http requests from ui-router
    beforeEach(module('ngHtml2Js'));

    // initialize a new instance of the filter before each test
    var $filter;
    beforeEach(inject(function (_$filter_) {
        $filter = _$filter_('dateFormat');
    }));

    it("should return '' if the data send is false", function () {
        var date = false;
        expect($filter(date, "h:mma d MMM")).toBe('');
    });
    
    it("should return return date if the data is a date", function () {
        var date = new Date(2017, 10, 1);
        expect($filter(date, "h:mma d MMM")).toBe("12:00AM 1 Nov");
    });

    it('should return a date formated"', function () {
        var date = '2015-03-08 15:17:27';
        expect($filter(date, "h:mma d MMM")).toBe('3:17PM 8 Mar');
    });

});
