var express = require('express');
var serveStatic = require('serve-static');
var MongoClient = require('mongodb').MongoClient;
var app = express();

app.use(serveStatic(__dirname + '/../app'));

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});
