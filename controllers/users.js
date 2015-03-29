module.exports = function (app){
	
	var Usuario = app.models.usuarios;

	var UserControllers = {
		insert: function (req, res){
			var model = new Usuario(req.body);
			model.save(function (err, data){
				if(err){
					console.log("Erro create: "+err);
				}
				res.redirect('/');
			});
		}
	}
	return UserControllers;
}