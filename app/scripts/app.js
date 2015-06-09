'use strict';

/**
 * @ngdoc overview
 * @name calinioApp
 * @description
 * # calinioApp
 *
 * Main module of the application.
 */
angular
  .module('calinioApp', [
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
