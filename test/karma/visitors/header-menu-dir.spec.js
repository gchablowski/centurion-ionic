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
    expect(element.html()).toContain('<a ng-click="gotoBack()" class="back-button"><span class="typcn typcn-chevron-left-outline"></span></a>');
    expect(element.html()).toContain('<a ng-hide="!home" ui-sref="visitors" class="home-button" href="#/visitors">');

  }));
  
  it('should hide the home menu if home is false', inject(function ($compile) {
    element = angular.element("<div headermenu title=\"'Membership'\" home=\"false\" back=\"'visitors'\"></div>");
    element = $compile(element)($rootScope);
    $rootScope.$digest();
    expect(element.html()).toContain('<a ng-hide="!home" ui-sref="false" class="home-button ng-hide">');

  }));
});
