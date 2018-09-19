var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var passport = require('passport');

var mongoose = require('mongoose');
mongoose.promise = require('bluebird');

// var url = 'mongodb://localhost:27017/mp'

var url = process.env.MONGO_URI || 'mongodb://e_fidon:truand11ape@cluster0-shard-00-00-3rkmw.mongodb.net:27017,cluster0-shard-00-01-3rkmw.mongodb.net:27017,cluster0-shard-00-02-3rkmw.mongodb.net:27017/mp?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true';

var connect = mongoose.connect(url, {useNewUrlParser: true});

connect.then((db) => {
	console.log('Connection Successful')
});

var index = require('./routes/index');
var users = require('./routes/users');
// var uploads = require('./routes/imageupload');
var members = require('./routes/members');

var compression = require('compression');
var helmet = require('helmet');

var app = express();

app.use(helmet())

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(compression());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
// app.use('/uploads', uploads);
app.use('/members', members);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
