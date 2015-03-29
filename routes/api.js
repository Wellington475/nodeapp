module.exports = function (app){
	var ApiControl = app.controllers.api;
	
	app.get('/api/find', ApiControl.find);
	app.get('/api/show/:id', ApiControl.show);
	app.post('/api/insert', ApiControl.insert);
	app.put('/api/update/:id', ApiControl.update);
	app.delete('/api/delete/:id', ApiControl.remove);
}