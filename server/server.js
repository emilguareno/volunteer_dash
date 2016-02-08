var express = require('express');
var serveStatic = require('serve-static');
var app = express();
var mongoose = require('mongoose');
var passport = require('passport');
var flash = require('connect-flash');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var configDB = require('./config/database.js');

// configuration ===============================================================
mongoose.connect(configDB.url); // connect to our database

require('./config/passport')(passport); // pass passport for configuration

app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({
  extended: true
}));
// required for passport
app.use(session({
  secret: 'thisismysecret'
})); // session secret

app.set('view engine', 'ejs'); // set up ejs for templating
app.set('views', __dirname + '/views');

app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// routes ======================================================================
require('./routes.js')(app, passport, serveStatic); // load our routes and pass in our app and fully configured passport
app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});