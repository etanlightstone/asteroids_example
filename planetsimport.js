var fs = require('fs');
var path = require('path');
var readline = require('readline');
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/planetsdb');

var filePath = path.join(__dirname + '/MPCORB.DAT');
var rd = readline.createInterface({
    input: fs.createReadStream(filePath),
    output: process.stdout,
    terminal: false
});
// fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
//     if (!err){
//     console.log('received data: ' + data);
// 
//     }else{
//         console.log(err);
//     }
// 
// });
var keys = "Desn    H   G   Epoch     M   Peri   Node   Incl  e   n     a   zero Reference #Obs #Opp  Arc  rms  Perts1 Perts2  Computer hex para Name bignum".split(/\s{1,}/);
var reachedGoodies = false;

rd.on('line', function(line) {
    if (reachedGoodies) {
      //console.log(line);
      var row = line.split(/\s{1,}/);
      var planet = {};
      for (var i=0;i<row.length; i++) {
        planet[keys[i]] = row[i];
      }
      var collection = db.get('planetscollection');
      collection.insert(planet);
      //console.log(planet);
    }
    if (line.indexOf('----------------------') != -1) {
      console.log("GOODIES FOUND!");
      reachedGoodies = true;
    }
    
});