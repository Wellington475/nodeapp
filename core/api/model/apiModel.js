var mongo = require('../../../db/mongo'),
	db = mongo.collection('users');

function ApiModel() {

}

ApiModel.prototype.create = function(data, callback) {
	db.save(data, callback);
};

ApiModel.prototype.findOne = function(_id, callback) {
	db.findOne({ "_id": mongo.ObjectId(_id) }, callback);
};

ApiModel.prototype.findAll = function(callback) {
	db.find({}, callback);
};

ApiModel.prototype.update = function(data, _id, callback) {
	db.update(data, callback);
};

ApiModel.prototype.delete = function(_id, callback) {
	db.remove({ _id: _id }, callback);
};

module.exports = new ApiModel();