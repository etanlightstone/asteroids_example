asteroidsApp.factory('Planet', function($resource){
  // was $resource('planets/:planetID.json', {}, {
  var planets = $resource('planets/list/0/20', {}, {
        query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
      });
  return planets;
});

asteroidsApp.factory('SinglePlanet', function($resource){
  // was $resource('planets/:planetID.json', {}, {
  var planet = $resource('planets/:designation', {designation: '@desn'}, {
        query: {method:'GET', params:{phoneId:'phones'}, isArray:false}
      });
  return planet;
});


asteroidsApp.factory('User', function($resource){
  // was $resource('planets/:planetID.json', {}, {
  var people = $resource('userlist', {}, {
        query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
      });
  return people;
});