var express = require ('express');
var bodyParser = require('body-parser');
var path = require('path');
//routing the movies


var routes1 = require('./routes/movie');
var routes2 = require('./routes/cateogry');
var app = express();
var mongoose = require('mongoose');


//connecting to mongoose
mongoose.connect('mongodb://localhost/imdb');
var db = mongoose.connection;
db.on('error', console .error.bind(console, 'connection error'));
db.once('open', function(){
  console.log("db connection open");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//setting up jade template
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));


// middleware route
app.use('/', routes1);
app.use('/cateogry', routes2);

app.use('/public', express.static(__dirname + "/public"));
// listening to the server
app.listen(3000);
console.log("server is running");



//exporting the app
module.exports = app;
