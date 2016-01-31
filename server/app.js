var express = require('express');
var serveStatic = require('serve-static');
var MongoClient = require('mongodb').MongoClient;
var app = express();

app.use(serveStatic(__dirname + '/../app'));

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});

var url = 'mongodb://localhost:27017/dashboard';
MongoClient.connect(url, function(err, db) {
  if (err) {
    console.log(err);
  }
  // Get the documents collection
  var collection = db.collection('users');

  //Create some users
  var user1 = {
    name: {
      first: 'Wendy',
      last: 'Peralta'
    },
    roles: ['admin', 'volunteer'],
    shifts: [{
      name: 'Morning',
      time: {
        start: new Date('Feb 06, 2016 10:00:00'),
        end: new Date('Feb 06, 2016 13:00:00'),
      }
    }, {
      name: 'Afternoon',
      time: {
        start: new Date('Feb 06, 2016 13:00:00'),
        end: new Date('Feb 06, 2016 17:00:00')
      }
    }]
  };
  
  var user2 = {
    name: {
      first: 'Emil',
      last: 'Guareno'
    },
    roles: ['admin', 'volunteer'],
    shifts: [{
      name: 'Morning',
      time: {
        start: new Date('Feb 06, 2016 10:00:00'),
        end: new Date('Feb 06, 2016 13:00:00'),
      }
    }, {
      name: 'Afternoon',
      time: {
        start: new Date('Feb 06, 2016 13:00:00'),
        end: new Date('Feb 06, 2016 17:00:00')
      }
    }]
  };

  // Insert some users
  collection.insert([user1, user2], function(err, result) {
    if (err) {
      console.log(err);
    } else {
      console.log('Inserted %d documents into the "users" collection. The documents inserted with "_id" are:', result.length);
    }
    //Close connection
    db.close();
  });
});