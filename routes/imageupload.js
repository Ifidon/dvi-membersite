var express = require('express');
var router = express.Router();
var Person = require('../models/images')

var fs = require('fs');
var path = require('path');

router.get('/', function(req, res, next) {
	res.render('image')
})

router.post('/', function(req, res, next) {
	// fs.readFile(req.body.pic, 'base64', function(err, file) {
	// 	if (err) {
	// 		res.send(err)
	// 	}
	// 	res.send(file)
	// })
	Person.create({name: req.body.name, image: {
		data: new Buffer(req.body.pic),
		contentType: 'image/jpg'
	}})
	.then((person) => {
		res.contentType(person.image.contentType)
		res.send(person.image.data)
		console.log(res)
	});
})

// var multer = require('multer');

// var storage = multer.diskStorage({
// 	destination: (rea, file, cb) => {
// 		cb(null, 'public/images');
// 	},

// 	filename: (req, file, cb) => {
// 		cb(null, file.originalname)
// 	}
// });

// var imageFileFilter = (req, file, cb, err) => {
// 	if(!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
// 		return cb(new Error('Only Image files allowed!'))
// 		next(err)
		
// 	}
// 	cb(null, true)
// };

// var upload = multer({
// 	storage: storage,
// 	fileFilter: imageFileFilter
// });

// router.post('/', upload.single('photo'), function(req, res, next) {
// 	res.send('Image file uploaded with details' + req.file.path)
// });

module.exports = router;
