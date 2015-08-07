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
    'ngTouch',
    'ngMaterial'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })     
      .when('/projects/:id/view', {
        templateUrl: 'views/projects/view.html',
        controller: 'ProjectsViewCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('orange');
});;
