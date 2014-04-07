'use strict';

angular.module('angualrjsApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
     /* .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })*/
       
       .when('/', {
        templateUrl: 'views/projectlist.html',
        controller: 'ProjectCtrl'
      })

        .when('/projectDetail/:id', {
        templateUrl: 'views/project-goals_01.htm',
        controller: 'ProjectDetailCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
