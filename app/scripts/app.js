'use strict';

angular.module('globalPomodoroApp', [
  'ngResource'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'pomodoroCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
