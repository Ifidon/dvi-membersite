var express = require('express');
var router = express.Router();

var Member = require('../models/members');

var fs = require('fs')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;



router.get('/registration', function(req, res, next) {
	res.render('registration')
})

router.post('/registration', function(req, res, next) {
	Member.create(req.body)
	.then((member) => {
		member.photo.data = fs.readFileSync(req.body.photo)
		console.log(member)
		console.log(req.url)
	})
})