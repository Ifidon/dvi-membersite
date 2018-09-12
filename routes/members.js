var express = require('express');
var router = express.Router();
var Member = require('../models/members');


var multer = require('multer');

var storage = multer.diskStorage({
	destination: (rea, file, cb) => {
		cb(null, 'public/images/members');
	},

	// filename: (req, file, cb) => {
	// 	cb(null, file.originalname)
	// }
});

var imageFileFilter = (req, file, cb, err) => {
	if(!file.originalname.match(/\.(jpg|jpeg|png|gif|JPG|JPEG|PNG|GIF)$/)) {
		return cb(new Error('Only Image files allowed!'))
		next(err)
		
	}
	cb(null, true)
};

var upload = multer({
	storage: storage,
	fileFilter: imageFileFilter
});


/* GET users listing. */
router.get('/', function(req, res, next) {
	Member.find()
	.then((members) => {
		res.render('members', { title: 'DVI - Members List', members});
	})
	.catch((error) => {
		next(error)
	})
});

router.get('/registration', function(req, res, next){
	res.render('registration', {title: 'DVI - New Member Registration'})
});

router.post('/registration', upload.single('photo'), function(req, res, next) {
 	Member.create(req.body)
 	.then((member) => {
 		member.set({"photourl": req.file.path.slice(6)});
 		member.save()
 		res.redirect('/')
 	})
 	.catch((error) => {
		next(error)
	})
 });

router.get('/:_id', function(req, res, next) {
	Member.findOne(req.params)
	.then((member) => {
		res.render('memberview', {member, title: "Profile: " + member.fname + " " + member.lname})
	})
	.catch((error) => {
		next(error)
	})
});



module.exports = router;
