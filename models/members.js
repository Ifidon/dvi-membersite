var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// var passportLocalMongoose = require('passport-local-mongoose');


var member = new Schema({
	photourl: {
		type: String
	},

	fname: {
		type: String,
		required: true
	},

	lname: {
		type: String,
		required: true
	},

	role: {
		type: String
	},

	bio: {
		type: String
	} 
}, {
		timstamps: true,
});

module.exports = mongoose.model('Member', member);