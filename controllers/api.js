module.exports = function (app){
	
	var Usuario = app.models.usuarios;

	var ApiControllers = {
		find: function (req, res){
			Usuario.find(function (err, data){
				if(err){
					console.log("Erro find: "+err);
				}
				res.json(data);
			})
		},
		insert: function (req, res){
			var model = new Usuario(req.body);

			model.save(function (err, data){
				if(err){
					console.log("Erro create: "+err);
				}
			 	res.json(data);
			});
		},
		update: function (req, res){
			Usuario.findById(req.params.id, function (err, data){
				if(err){
					console.log("Erro update: "+err);
				}
				var model = data;
				model.name =  req.body.name;
				model.age = req.body.age;
				model.login = req.body.login;
				model.save(function (err){
					res.json({"Message update": true});
				});
			});
		},
		show: function (req, res){
			Usuario.findById(req.params.id, function (err, data){
				if(err){
					console.log("Erro show: "+err);
				}
				res.json(data);
			})
		},
		remove: function (req, res){
			Usuario.remove({_id: req.params.id}, function (err, data){
				if(err){
					console.log("Erro remove: "+err);
				}
					res.json({"Message remove": true});
			});
		}
	}
	return ApiControllers;
}