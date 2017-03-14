'use strict';

describe('module: main, filter: bobfilter', function () {

  // load the filter's module
  beforeEach(module('visitors'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // initialize a new instance of the filter before each test
  var $filter;
  beforeEach(inject(function (_$filter_) {
    $filter = _$filter_('nl2br');
  }));

  it('should return a text with <br/>:"', function () {
    var text = '\n\r';
    expect($filter(text)).toBe('<br />');
  });

});
