var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// var passportLocalMongoose = require('passport-local-mongoose');


var member = new Schema({
	photourl: {
		type: String,
		// default: '/images/defaultuser.jpg'
	},

	photo: {
		data: Buffer,
		contentType: String,
	},

	fname: {
		type: String,
		required: true
	},

	lname: {
		type: String,
		required: true
	},

	oname: {
		type: String
	},

	dob: {
		type: Date
	},

	phone: {
		type: String
	},

	role: {
		type: String
	},

	occupation: {
		type: String
	},

	addresses: {
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
		badate: Date,
		fcdate: Date,
		mcdate: Date,
		dvidate: Date
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