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

	dob: {
		type: Date
	},

	phone: {
		type: String
	},

	occupation: {
		type: String
	},

	address: {
		home: String,
		office: String
	},

	state: {
		type: String
	},

	lga: {
		type: String
	},

	htown: {
		type: String
	},

	nok: {
		name: String,
		add: String,
		phone: String
	},

	questions: {
		q1: String,
		q2: String,
		q3: String
	},

	dates: {
		badate: String,
		fcdate: String,
		mcdate: String,
		dvidate: String
	},

	dvireason: {
		type: String
	},

	whistory: {
		lpw: String,
		lpwreason: String
	},

	addinfo: {
		type: String
	} 
}, {
		timstamps: true,
});

module.exports = mongoose.model('Member', member);