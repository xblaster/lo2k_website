'use strict';

/**
 * @ngdoc function
 * @name lo2kWebsiteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the lo2kWebsiteApp
 */
angular.module('lo2kWebsiteApp')
    .controller('MainCtrl', function($scope, GooglSpreadsheet, $location, $timeout) {



        GooglSpreadsheet.get().then(function(data) {
            $scope.projects = data;

            console.log($scope.projects);

            $scope.loading = false;

        })




        $scope.goTo = function(project) {
          console.log("goto");

          var offset = $('#'+project.id).offset();
          $('#'+project.id).css("position", "absolute");
          $('#'+project.id).offset(offset);

        

          TweenMax.to($('#'+project.id+" p"), 1 , {
            y : "300px",
            delay: 0.2
          })

          TweenMax.to($('#'+project.id+" h3"), 1 , {
            y : "-300px"
          })

          TweenMax.to($('#'+project.id+" p"), 1 , {
            y : "300px",
            delay: 0.2
          })

          TweenMax.to($('#'+project.id+" p"), 1 , {
            y : "300px",
            delay: 0.2
          })

          TweenMax.to($('#'+project.id), 0.5 , {
            "z-index": 1000,

            left: 0,
            right: 0,
            "padding-top": 0,
            "margin-top": 0,
            height: "100%",
            width: "100%",
            delay: 0.6
          })


            /*$("#"+project.id+" .md-ripple-container").one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
                function(e) {
                    console.log("end animation");
                    $location.path('/projects/' + project.id + '/view');
                });*/

        }
    });