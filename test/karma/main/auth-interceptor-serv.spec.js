'use strict';

describe('module: main, service: AuthInterceptorServ', function () {
    var location;

    // load the service's module
    beforeEach(module('main'));
    // load all the templates to prevent unexpected $http requests from ui-router
    beforeEach(module('ngHtml2Js'));

    var spy = 0;
    beforeEach(inject(function ($location, $localStorage) {
        spy++;

        $localStorage.token =  1;

        location = $location;

        spyOn(location, "path");
    }));


    it('is defined', inject(function (AuthInterceptorServ) {
        expect(AuthInterceptorServ).toBeDefined();
    }));


    it('should have a handler for request', inject(function (AuthInterceptorServ) {
        spyOn(AuthInterceptorServ, "request");
        AuthInterceptorServ.request({});
        expect(AuthInterceptorServ.request).toHaveBeenCalledWith({});
    }));


    it('should have a handler for request that return config if $localStorage.token is defined', inject(function (AuthInterceptorServ) {
        var data = AuthInterceptorServ.request({headers:{}});

        expect(data).toEqual({ headers: {"X-Auth-Token": 1}, data: {} });
    }));


    it('should have a handler for responseError', inject(function (AuthInterceptorServ) {
        spyOn(AuthInterceptorServ, "responseError");
        AuthInterceptorServ.responseError({});
        expect(AuthInterceptorServ.responseError).toHaveBeenCalledWith({});
    }));
    
        it('should have a handler for response that call $location.path("login") if response.status === 401', inject(function (AuthInterceptorServ) {
        AuthInterceptorServ.responseError({status: 401});
        expect(location.path).toHaveBeenCalledWith("/login");
    }));


    it('should have a handler for response that call $localStorage.$reset() if response.status === 401', inject(function (AuthInterceptorServ, $localStorage) {
        spyOn($localStorage,"$reset");
        AuthInterceptorServ.responseError({status: 401});
        expect($localStorage.$reset).toHaveBeenCalled();
    }));

});
