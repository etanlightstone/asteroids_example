var asteroidsApp = angular.module('asteroidsApp', ['ngResource']);

asteroidsApp.controller('PlanetsController',  function($scope, Planet, User, SinglePlanet) {
  $scope.planets = Planet.query();
  $scope.planetkeys = "Desn    H   G   Epoch     M   Peri   Node   Incl  e   n     a   zero Reference #Obs #Opp  Arc  rms  Perts1 Perts2  Computer hex para Name bignum".split(/\s{1,}/);
  
  $scope.users = User.query();
  
  // $scope.singleplanet = [];
  //    var singleplanets = SinglePlanet.query({designation: '00001'}, function(){
  //      for (var planet in singleplanets) {
  //         $scope.singleplanet.push(planet);
  //       }
  //    });
 
  $scope.singleplanet = SinglePlanet.query({designation: '00001'});
});