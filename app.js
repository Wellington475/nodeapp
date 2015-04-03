var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');

var homesRoutes = require('./core/homes/routes/homesRoutes')
    ,apiRoutes = require('./core/api/routes/apiRoutes');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(methodOverride('X-HTTP-Method'));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(methodOverride('X-Method-Override'));
app.use(methodOverride('_method'));

app.set('views', __dirname+'/core/views');
app.set('view engine', 'jade');
app.use(express.static(__dirname+'/core/public'));

app.use('/', homesRoutes);
app.use('/api/', apiRoutes);

var server = app.listen(4242, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Server app listening at http://%s:%s', host, port);

});

module.exports = app;