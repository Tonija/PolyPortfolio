'use strict';

var appPoly = angular.module('appPoly', ['ngRoute', 'flipCard']);

appPoly.config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      console.log("appPoly config js");

      $routeProvider.
        when('/home', {
          templateUrl: './Partials/Home.html'
        }).
        when('/interior', {
           
          templateUrl: './Partials/Interior.html'
        }).
        when('/art', {
        	templateUrl: './Partials/Art.html'
        }).
        when('/about', {
        	templateUrl: './Partials/About.html'
        }).
        otherwise('/home');
    }
  ]);
