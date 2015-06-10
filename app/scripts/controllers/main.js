'use strict';

/**
 * @ngdoc function
 * @name calinioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the calinioApp
 */
angular.module('calinioApp')
  .controller('MainCtrl', function ($scope) {
    $scope.skills = [
      { "name" : "Heroku", "rating" : 3 },
      { "name" : "Codeship", "rating" : 2 },
      { "name" : "Less/CSS", "rating" : 4 },
      { "name" : "Git", "rating" : 3 },
      { "name" : "Vim", "rating" : 3 },
      { "name" : "Mongoose", "rating" : 3 },
      { "name" : "MongoDB", "rating" : 3 },
      { "name" : "Javascript", "rating" : 3 },
      { "name" : "HTML", "rating" : 4 },
      { "name" : "ExpressJS", "rating" : 3 },
      { "name" : "NodeJS", "rating" : 3 },
      { "name" : "AngularJS", "rating" : 4 },
      { "name" : "Ruby on Rails", "rating" : 2 },
      { "name" : "ProtractorJS", "rating" : 3 }
    ];

    $scope.getArrayFromNumber = function(num) {
      return new Array(num);
    }
  });
