asteroidsApp.factory('Planet', function($resource){
  // was $resource('planets/:planetID.json', {}, {
  var planets = $resource('planets/index', {}, {
        query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
      });
  return planets;
});

asteroidsApp.factory('User', function($resource){
  // was $resource('planets/:planetID.json', {}, {
  var people = $resource('userlist', {}, {
        query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
      });
  return people;
});