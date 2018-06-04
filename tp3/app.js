// Dependencies

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');

var album = require('./routes/album');
var app = express();

var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/mean-angular5', { useMongoClient: true, promiseLibrary: require('bluebird')})
	.then(() => console.log('connection succesful'))
		.catch((err) => console.error(err));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/albums', express.static(path.join(__dirname, 'dist')));
app.use('/album', album);

// catch 404 and forward to error handler
app.use(function(requires, response, next){
	var error = new Error('Not Found');
	err.status = 404;
	next(error);
});

// error handler
app.use(function(error, requires, response, next){
	// set locals, only provideinf error in development
	response.locals.message = error.message;
	response.locals.error = requires.app.get('env') === 'development' ? err : {};

	// render the error page
	response.status(error.status || 500);
	response.render('error');
});

module.exports = app;
