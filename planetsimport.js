var fs = require('fs');
var path = require('path');
var readline = require('readline');
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/planetsdb');


var filePath = path.join(__dirname + '/public/data/mp_properties.json');
var rd = readline.createInterface({
    input: fs.createReadStream(filePath),
    output: process.stdout,
    terminal: false
});


var lineCount = 1;
rd.on('line', function(line) {

  if (line.length < 5) {  // sad way to detect the end, but I'm in a rush :)
    console.log("all done!");
    process.exit(code=0)
  } else {
    var planet = JSON.parse(line);
    var collection = db.get('planetscollection');
    collection.insert(planet.mp_property);
    console.log("inserted asteroid: " + lineCount);
    lineCount += 1;

  }

});
