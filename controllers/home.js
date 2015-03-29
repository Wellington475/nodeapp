module.exports = function (app){
	var HomeControllers = {
		index: function (req, res){
			res.render('index', {title: 'Express'});
		},
		signup: function (req, res){
			res.render('signup', {title: 'Express'});
		}
	}
	return HomeControllers;
}