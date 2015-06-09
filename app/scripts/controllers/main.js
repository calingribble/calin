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
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.skills = [
      { "name" : "Less/CSS", "rating" : 4 },
      { "name" : "Git", "rating" : 3 },
      { "name" : "Vim", "rating" : 3 },
      { "name" : "Mongoose", "rating" : 3 },
      { "name" : "MongoDB", "rating" : 3 },
      { "name" : "Javascript", "rating" : 4 },
      { "name" : "HTML", "rating" : 4 },
      { "name" : "ExpressJS", "rating" : 3 },
      { "name" : "NodeJS", "rating" : 3 },
      { "name" : "AngularJS", "rating" : 4 },
      { "name" : "Ruby on Rails", "rating" : 2}
    ];

    $scope.getNumber = function(num) {
      return new Array(num);
    }
  });
