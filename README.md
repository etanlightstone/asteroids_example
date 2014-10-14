Requirements: nodeJS and MongoDB


# requirements node, mongodb
# Have at least 10 gigs free
```javascript
mkdir ~/data
mongod --dbpath ~/data
cd asteroids
npm install
```

# copy your downloaded json data for asteroids to the right spot
```javascript
cp <path to your download of properies.json> ./public/data/
```

# Run the import, this takes a few minutes
```javascript
node planetsimport.js
```
process takes a few minutes, it should import just over 600,000 asteroids


# let’s try a simple query in the mongo console

connect to the db created by the import script
```javascript
bash$ mongo
> use planetsdb
```


# should be something over 650,000
```javascript
> db.planetscollection.count()  
```

# searches by name
```javascript
> db.planetscollection.find({name:"Ceres"}).pretty()
```

# how many asteroids have an absolute magnitude less than 1.0 (answer: 4)
```javascript
> db.planetscollection.find({absolute_magnitude: {$lt: 1.0}}).count()  
```

# lets look at them
```javascript
> db.planetscollection.find({absolute_magnitude: {$lt: 1.0}}).pretty()
```

# let’s try some mapReduce!  compute average absolute_magnitude for the entire database.

```javascript
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
```

Now we run the operation. (Takes about 2 minutes on a modern macbook pro)
```javascript
> db.planetscollection.mapReduce(map, reduce, {out: "asteroids_ave_example", finalize: finalize})
```
