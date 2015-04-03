var express = require('express'),
	router = express.Router();

var ApiControl = require('../controllers/apiControllers');

router.get ('/users', ApiControl.findAll.bind(ApiControl));
router.get ('/users/:id', ApiControl.findOne.bind(ApiControl));
router.post('/users', ApiControl.create.bind(ApiControl));
router.put ('/users/:id', ApiControl.update.bind(ApiControl));
router.delete('/users/:id', ApiControl.delete.bind(ApiControl));

module.exports = router