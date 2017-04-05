'use strict';
angular.module('main')
.constant('Config', {

  ENV: {
    'SERVER_URL': 'https://centurion.back9solutions.com',
    'WEATHER_URL': "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22st%20albans%2C%20gb%22)%20%20and%20u%3D'c'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys"
  }

});