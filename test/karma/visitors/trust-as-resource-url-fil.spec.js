'use strict';

describe('module: main, filter: trustAsResourceUrl', function () {

    // load the filter's module
    beforeEach(module('visitors'));
    // load all the templates to prevent unexpected $http requests from ui-router
    beforeEach(module('ngHtml2Js'));

    // initialize a new instance of the filter before each test
    var $filter;
    beforeEach(inject(function (_$filter_) {
        $filter = _$filter_('trustAsResourceUrl');
    }));

    it('should call $sce.trustAsResourceUrl(val)', inject(function ($sce) {
        spyOn($sce,'trustAsResourceUrl').and.callThrough();
        var text = 'text';
        $filter(text);
        expect($sce.trustAsResourceUrl).toHaveBeenCalledWith('text');
    }));

});
