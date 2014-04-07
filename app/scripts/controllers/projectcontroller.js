'use strict';

angular.module('angualrjsApp')
  .controller('ProjectCtrl', function($scope, $http) {
      $http({
          url: 'data/data.json',
          method: 'get',
          dataType: 'json'
      })
          .success(function(data) {
              $scope.projects = data;
          })
          .error(function(response) {

          });
  })


  .controller('ProjectDetailCtrl', function($scope, $http, $routeParams, $filter) {
      $http({
          url: 'data/data.json',
          method: 'get',
          dataType: 'json'
      })
          .success(function(data) {
              $scope.project = $filter('filter')(data, {id: Number($routeParams.id)})[0];
          })
          .error(function(response) {

          });
  });