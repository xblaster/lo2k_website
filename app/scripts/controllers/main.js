'use strict';

/**
 * @ngdoc function
 * @name lo2kWebsiteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the lo2kWebsiteApp
 */
angular.module('lo2kWebsiteApp')
  .controller('MainCtrl', function ($scope,GooglSpreadsheet) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    GooglSpreadsheet.get().then(function(data) {
    	$scope.projects = data;
    	$scope.loading = false;

	  })
});
