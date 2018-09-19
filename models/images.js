var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var person = new Schema({
	name: {
		type: String
	},

	image: {
		data: Buffer,
		contentType: String
	}
});

var Person = mongoose.model('Person', person);

module.exports = Person;