var express = require('express');

var mongo = require('mongodb');
var monk = require('monk');
var db = monk('mongodb://localhost:27017/planetsdb');
var app = express();
var planetsDB = db.get('planetscollection');



app.get('/planets/list/:from/:total', function(req, res){
  planetsDB.find({},{skip:parseInt(req.params.from), limit:parseInt(req.params.total)},function(e,docs){
      res.json(docs);
  });

});


app.get('/planets/:name', function(req, res){
  planetsDB.find({name: req.params.name},function(e,docs){
        res.json(docs[0]);
    });
});

app.get('/userlist', function(req, res) {
    //var db = req.db;
    var collection = db.get('usercollection');
    collection.find({},{},function(e,docs){
        res.json(docs);
    });
});

// var server = app.listen(80, function() {
//     console.log('Listening on port %d', server.address().port);
// });

var port = Number(process.env.PORT || 3000);
app.listen(port, function() {
  console.log("Listening on " + port);
});

app.use(express.static(__dirname + '/public'));
