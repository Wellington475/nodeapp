function homesController(){

}

homesController.prototype.index = function(req, res) {
	res.render('homes/index', {title:"Express"})
};

module.exports = new homesController();