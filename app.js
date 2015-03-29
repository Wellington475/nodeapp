var express = require('express'),
    load = require('express-load'),
    bodyParser = require('body-parser'),
    http = require('http'),
    path = require('path'),
    mongoose = require('mongoose'),
    errorHandler = require('errorhandler');

var app = express();


// connect mongoose
mongoose.connect('mongodb://localhost/users', function (err){
	if(err){
		console.log("Erro ao Conectar MongoDB: "+err);
	}
});

// all environments
app.set('port', process.env.PORT || 4242);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(bodyParser());
app.use(express.static(path.join(__dirname, 'public')));

if ('development' == app.get('env')) {
  app.use(errorHandler());
}

load('models').then('controllers').then('routes').into(app);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});