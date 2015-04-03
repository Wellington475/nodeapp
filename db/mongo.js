var mongojs = require('mongojs');
var db = mongojs('nodeapp');

module.exports = db;