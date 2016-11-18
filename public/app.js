/**
 * Module dependencies.
 */

var http = require('http');
var express = require('express');

var app = express();
var server = app.listen(8080);

app.set('views', __dirname );
app.set('view engine', 'ejs');
app.use(express.static(__dirname));

app.get('/', function (req, res) {
  res.render('index');
});


console.log("Express server listening on port 8080");