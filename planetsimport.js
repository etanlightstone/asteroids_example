var fs = require('fs');
var path = require('path');
var readline = require('readline');
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/planetsdb');


var filePath = path.join(__dirname + '/public/data/properties.json');
var rd = readline.createInterface({
    input: fs.createReadStream(filePath),
    output: process.stdout,
    terminal: false
});


var lineCount = 1;
rd.on('line', function(line) {
  var planet = JSON.parse(line.substring(0, line.length - 1));  // remove last comma as array
  var collection = db.get('planetscollection');
  collection.insert(planet.property);
  console.log("inserted asteroid: " + lineCount);
  //console.log(planet);
  lineCount += 1;



});
