// Node Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
// var methodOverride = require('method-override');

// Open Server
var PORT = process.env.PORT || 8080;
var app = express();

//Serve static content for the app from the "public" directory in the application directory.
// app.use(express.static(__dirname + '/public'));
//Static element
app.use(express.static('public'));

// Body Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Routes
var router = require('./controllers/hamburgersController.js');
app.use('/', router);


app.listen(PORT, function() 
{
  console.log("Server listening on: http://localhost:" + PORT);
});