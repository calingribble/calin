'use strict';

/**
 * @ngdoc function
 * @name calinioApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the calinioApp
 */
angular.module('calinioApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
