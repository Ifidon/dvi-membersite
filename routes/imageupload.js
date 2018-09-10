var express = require('express');
var router = express.Router();

var multer = require('multer');

var storage = multer.diskStorage({
	destination: (rea, file, cb) => {
		cb(null, 'public/images');
	},

	filename: (req, file, cb) => {
		cb(null, file.originalname)
	}
});

var imageFileFilter = (req, file, cb, err) => {
	if(!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
		return cb(new Error('Only Image files allowed!'))
		next(err)
		
	}
	cb(null, true)
};

var upload = multer({
	storage: storage,
	fileFilter: imageFileFilter
});

router.post('/', upload.single('photo'), function(req, res, next) {
	res.send('Image file uploaded with details' + req.file.path)
});

module.exports = router;
