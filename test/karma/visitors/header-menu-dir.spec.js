'use strict';

describe('module: visitors, directive: headermenu', function () {

  // load the directive's module
  beforeEach(module('visitors'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  var element,
    $rootScope;

  beforeEach(inject(function (_$rootScope_) {
    $rootScope = _$rootScope_.$new();
  }));

  it('should create an header menu', inject(function ($compile) {
    element = angular.element("<div headermenu title=\"'Membership'\" home=\"'visitors'\" back=\"'visitors'\"></div>");
    element = $compile(element)($rootScope);
    $rootScope.$digest();
    expect(element.html()).toContain("Membership");
    expect(element.html()).toContain('<a ui-sref="visitors" class="back-button" href="#/visitors">');
    expect(element.html()).toContain('<a ng-hide="!visitors" ui-sref="visitors" class="home-button ng-hide" href="#/visitors">');

  }));
});
