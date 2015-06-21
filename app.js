// required modules
var express = require('express');

var app = express();

// define routes
app.get('/', function(req, res, next) {
  res.send('Wellcome to sever.');
});

app.listen(8000);
console.log('Listening on port 8000');
