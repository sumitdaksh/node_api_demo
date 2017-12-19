require('rootpath')();
var path = require('path');
var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
var config = require('config.json');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use( function(req, res, next){
    var now = new Date();
    console.log(now +" "+ req.method +" "+ req.url);
    console.log(req.headers);
    console.log(req.body);
    console.log(req.params);
    next()
}); 


// routes
app.use('/api/users', require('./controllers/users.controller'));

// start server
var port = process.env.NODE_ENV === 'production' ? 80 : 4001;
var server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});
