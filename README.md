Requirements: nodeJS and MongoDB


# requirements node, mongodb
# Have at least 10 gigs free
mkdir ~/data
mongod --dbpath ~/data
cd asteroids
npm install


# copy your downloaded json data for asteroids to the right spot
cp <path to your download of properies.json> ./public/data/


# Run the import, this takes a few minutes
node planetsimport.js



# process takes a few minutes, it should import just over 600,000 asteroids


# let’s try a simple query in the mongo console

# connect to the db created by the import script
> use planetsdb



# should be something over 650,000

> db.planetscollection.count()  



# searches by name

> db.planetscollection.find({name:"Ceres"}).pretty()


# how many asteroids have an absolute magnitude less than 1.0 (answer: 4)

> db.planetscollection.find({absolute_magnitude: {$lt: 1.0}}).count()  


# lets look at them
> db.planetscollection.find({absolute_magnitude: {$lt: 1.0}}).pretty()


# let’s try some mapReduce!  compute average absolute_magnitude for the entire database.


var map = function () {
     var planet = this;
     emit(planet.designation, {count:1, abs_magnitude: planet.absolute_magnitude});
}


var reduce = function (key,values) {
     var reducedVal = {count:0, abs_magnitude: 0};
     values.forEach(function(value){
          reducedVal.count += value.count;
          reducedVal.abs_magnitude += value.abs_magnitude;
     });
     return reducedVal;
}


var finalize =  function (key,value) {
     value.average = value.abs_magnitude / value.count;
     return value;
}


# operation takes about 2 minutes on a modern macbook pro
> db.planetscollection.mapReduce(map, reduce, {out: "asteroids_ave_example", finalize: finalize})
