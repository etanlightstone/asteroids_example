var asteroidsApp = angular.module('asteroidsApp', ['ngResource']);

asteroidsApp.controller('PlanetsController',  function($scope, $http) {

  $scope.singleplanet =  {};
  $http.get('/planets/Ceres').
    success(function(data, status, headers, config) {
      $scope.singleplanet = data;
    });


  $scope.$watch('planetName', function (value) {
    $http.get('/planets/' + value).
      success(function(data, status, headers, config) {
        $scope.singleplanet = data;
        searchStarted = false;
    });


  });



});
