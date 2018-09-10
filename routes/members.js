var express = require('express');
var router = express.Router();
var Member = require('../models/members');


var multer = require('multer');

var storage = multer.diskStorage({
	destination: (rea, file, cb) => {
		cb(null, 'public/images');
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
		res.render('members', { title: 'Member List', members});
	})
});

router.get('/registration', function(req, res, next){
	res.render('registration', {title: 'New Member Registration'})
});

router.post('/registration', upload.single('photo'), function(req, res, next) {
 	Member.create(req.body)
 	.then((member) => {
 		member.set({"photourl": req.file.path.slice(6)});
 		member.save()
 		res.redirect('/')
 	})
 });

module.exports = router;
