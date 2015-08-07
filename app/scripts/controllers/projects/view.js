'use strict';

/**
 * @ngdoc function
 * @name lo2kWebsiteApp.controller:ProjectsViewCtrl
 * @description
 * # ProjectsViewCtrl
 * Controller of the lo2kWebsiteApp
 */
angular.module('lo2kWebsiteApp')
  .controller('ProjectsViewCtrl', function ($scope, $routeParams, GooglSpreadsheet) {

    	$scope.id = $routeParams.id;

	 GooglSpreadsheet.get().then(function(data) {
        $scope.project = data[$scope.id];

      
	  })
  });
