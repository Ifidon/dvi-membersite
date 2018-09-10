var express = require('express');
var router = express.Router();

var Member = require('../models/members');

/* GET home page. */
router.get('/', function(req, res, next) {
	Member.find()
	.then((members) => {
		res.render('index', { title: 'GroupName', members});
	})
});


module.exports = router;