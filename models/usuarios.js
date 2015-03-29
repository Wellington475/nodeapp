module.exports = function (){
	var mongoose  = require('mongoose'),
		Schema	  = mongoose.Schema;

	var UsersSchema = new Schema({
		name: String,
		age: Number,
		login: String,
		pass: String,
		date_cad: {type: Date, default: Date.now}
	});

	return  mongoose.model('Usuarios', UsersSchema);
}