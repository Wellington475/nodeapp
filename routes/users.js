module.exports = function (app){
	var UsersControl = app.controllers.users;
	
	app.post('/users/insert', UsersControl.insert);
}