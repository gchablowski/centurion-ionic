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

  it('should return a date formated"', function () {
    var date = '2015-03-08 15:17:27';
    expect($filter(date, "h:mma d MMM")).toBe('3:17PM 8 Mar');
  });

});
