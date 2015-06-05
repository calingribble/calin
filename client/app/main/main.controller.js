'use strict';

angular.module('calinioApp')
  .controller('MainCtrl', function ($scope, $http, socket) {
    $scope.skills = [];

    $http.get('/api/skills').success(function(skills) {
      $scope.skills = skills;
      socket.syncUpdates('skill', $scope.skills);
    });

    $scope.addSkill = function() {
      if($scope.newSkill === '') {
        return;
      }
      $http.post('/api/skills', { name: $scope.newSkill });
      $scope.newSkill = '';
    };

    $scope.deleteSkill = function(skill) {
      $http.delete('/api/skills/' + skill._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('skill');
    });

    //////////////////////////////

    $scope.awesomeThings = [];

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      socket.syncUpdates('thing', $scope.awesomeThings);
    });

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });

    /////////////////////////////

    $scope.getUserIp = function() {
      $http.get('http://ipinfo.io/json')
      .success(function(res){
        $scope.userIp = res.ip;
      });;
    };

    $scope.getUserIp();
  });
