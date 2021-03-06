
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var project = require('./routes/project');
// Example route
var login = require('./routes/login');
var signup = require('./routes/signup');
var home = require('./routes/home');
var mycloset = require('./routes/mycloset');
var viewcloset = require('./routes/viewcloset');
var tops = require('./routes/tops');
var outfits = require('./routes/outfits');

var viewoutfits = require('./routes/viewoutfits');
var createoutfit = require('./routes/createoutfit');
var category = require ('./routes/category');
var settings = require('./routes/settings');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', index.view);
app.get('/login', login.view);
app.get('/project/:name', project.viewProject);
app.get('/signup', signup.view);
app.get('/home', home.view);
app.get('/mycloset', mycloset.view);
app.get('/viewcloset', viewcloset.view);
app.get('/tops', tops.view);
app.get('/outfits', outfits.view);

app.get('/viewoutfits', viewoutfits.view);
app.get('/createoutfit', createoutfit.view);
app.get('/category', category.view);
app.get('/settings', settings.view); 

// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
