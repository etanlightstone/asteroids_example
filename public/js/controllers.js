var asteroidsApp = angular.module('asteroidsApp', ['ngResource']);

asteroidsApp.controller('PlanetsController',  function($scope, Planet, User) {
  $scope.planets = Planet.query();
  $scope.users = User.query();

});