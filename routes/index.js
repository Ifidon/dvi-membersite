var express = require('express');
var router = express.Router();

var Member = require('../models/members');

/* GET home page. */
router.get('/', function(req, res, next) {
	Member.find()
	.then((members) => {
		res.render('index', { title: 'Dunamis Voice International', members});
	})
	.catch((error) => {
		next(error)
	})
});


module.exports = router;