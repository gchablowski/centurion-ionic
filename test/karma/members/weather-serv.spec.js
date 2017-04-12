'use strict';

describe('module: members, service: WeatherServ', function () {
    var $httpBackend, WeatherServ;
    // load the service's module
    beforeEach(module('members'));
    // load all the templates to prevent unexpected $http requests from ui-router
    beforeEach(module('ngHtml2Js'));

    beforeEach(inject(function ($injector, _WeatherServ_) {
        // Set up the mock http service responses
        $httpBackend = $injector.get('$httpBackend');
        WeatherServ = _WeatherServ_;

    }));

    it('is defined', inject(function (WeatherServ) {
        expect(WeatherServ).toBeDefined();
    }));

    it('should send a request to get the yahoo forecast data', function () {

        $httpBackend.when('GET', "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22st%20albans%2C%20gb%22)%20%20and%20u%3D'c'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys").respond(200, {data: 1});
        var result = WeatherServ.query();
        $httpBackend.expectGET("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22st%20albans%2C%20gb%22)%20%20and%20u%3D'c'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys");
        $httpBackend.flush();
        expect(result.data).toEqual(1);
    });

});