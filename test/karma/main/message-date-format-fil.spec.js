'use strict';

describe('module: main, filter: messageDateFormat', function () {

  // load the filter's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // initialize a new instance of the filter before each test
  var $filter;
  beforeEach(inject(function (_$filter_) {
    $filter = _$filter_('messageDateFormat');
  }));

  it('should return a date formated <br/>:"', function () {
    var date = '2015-03-08 15:17:27';
    expect($filter(date)).toBe('3:17PM 8 Mar');
  });

});
