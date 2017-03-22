'use strict';

describe('module; main, Service: LoaderInjectorServ', function () {
    var $rootScope, $q;

    // load the service's module
    beforeEach(module('main'));
    // load all the templates to prevent unexpected $http requests from ui-router
    beforeEach(module('ngHtml2Js'));

    var spy = 0;
    beforeEach(inject(function (_$rootScope_, _$q_) {
        spy++;

        $rootScope = _$rootScope_;
        spyOn($rootScope, "$broadcast");

        $q = _$q_;
        spyOn($q, "when");
        spyOn($q, "reject");
    }));

    it('should contain a LoaderInjectorServ service', inject(function (LoaderInjectorServ) {
        expect(LoaderInjectorServ).not.toEqual(null);
    }));

    it('should contain a LoaderInjectorServ service that define a request method that call $rootScope.$broadcast("loader_show") if enabledForView', inject(function (LoaderInjectorServ) {
        LoaderInjectorServ.request({});
        expect($rootScope.$broadcast).toHaveBeenCalledWith("loader_show");
    }));

    it('should contain a LoaderInjectorServ service that define a request method that not call $rootScope.$broadcast("loader_show") if enabledForView == false', inject(function (LoaderInjectorServ) {
        LoaderInjectorServ.disable();
        LoaderInjectorServ.request({});
        expect($rootScope.$broadcast).not.toHaveBeenCalledWith("loader_show");
    }));

    it('should contain a LoaderInjectorServ service that define a request method that return config if it\'s send', inject(function (LoaderInjectorServ) {
        var spinner = LoaderInjectorServ.request({});
        expect(spinner).toEqual({});
    }));

    it('should contain a LoaderInjectorServ service that define a request method that call $q.when(config) if config is false', inject(function (LoaderInjectorServ) {
        var spinner = LoaderInjectorServ.request(false);
        expect($q.when).toHaveBeenCalled();
    }));

    it('should contain a LoaderInjectorServ service that define a response method that call $rootScope.$broadcast("loader_hide"); if(--numLoadings) === 0', inject(function (LoaderInjectorServ) {
        LoaderInjectorServ.request({});
        LoaderInjectorServ.response({});
        expect($rootScope.$broadcast).toHaveBeenCalledWith("loader_hide");
    }));

    it('should contain a LoaderInjectorServ service that define a response method that call not $rootScope.$broadcast("loader_hide"); if(--numLoadings) !== 0', inject(function (LoaderInjectorServ) {
        LoaderInjectorServ.response({});
        expect($rootScope.$broadcast).not.toHaveBeenCalledWith("loader_hide");
    }));

    it('should contain a LoaderInjectorServ service that define a response method that return response if defined', inject(function (LoaderInjectorServ) {
        var spinner = LoaderInjectorServ.response({});
        expect(spinner).toEqual({});
    }));

    it('should contain a LoaderInjectorServ service that define a response method that return $q.when if false', inject(function (LoaderInjectorServ) {
        var spinner = LoaderInjectorServ.response(false);
        expect($q.when).toHaveBeenCalled();
    }));

    it('should contain a LoaderInjectorServ service that define a responseError method that call $rootScope.$broadcast("loader_hide"); if (!(--numLoadings))', inject(function (LoaderInjectorServ) {
        LoaderInjectorServ.request({});
        LoaderInjectorServ.responseError(false);
        expect($rootScope.$broadcast).toHaveBeenCalledWith("loader_hide");
    }));

    it('should contain a LoaderInjectorServ service that define a responseError method that return $q.reject(response)', inject(function (LoaderInjectorServ) {
        LoaderInjectorServ.request({});
        LoaderInjectorServ.responseError({});
        expect($q.reject).toHaveBeenCalledWith({});
    }));

    it('should contain a LoaderInjectorServ service that define a disable method that return false', inject(function (LoaderInjectorServ) {
        var spinner = LoaderInjectorServ.disable();
        expect(spinner).toEqual(false);
    }));

});
