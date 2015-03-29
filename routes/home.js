module.exports = function (app){
	var homeControl = app.controllers.home;
	app.get('/', homeControl.index);
	app.get('/signup', homeControl.signup);
}