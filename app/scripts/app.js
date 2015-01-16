'use strict';

/**
 * @ngdoc overview
 * @name v10App
 * @description
 * # v10App
 *
 * Main module of the application.
 */
angular
  .module('lo2kWebsiteApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })     
      .otherwise({
        redirectTo: '/'
      });
  });
