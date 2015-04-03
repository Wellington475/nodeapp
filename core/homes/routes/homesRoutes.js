var express = require('express'),
	router = express.Router();

var homesControl = require('../controllers/homesControllers');

router.get ('/', homesControl.index);
module.exports = router