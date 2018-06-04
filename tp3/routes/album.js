var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Album = require('../models/Album.js');

// GET home page 
router.get('/', function(req, res, next) {
	Album.find(function(err, prodcuts){
		if(err) return next(err);
		res.json(prodcuts);
	});
});

// GET SINGLE ALBUM BY ID
router.get('/:id', function(req, res, next){
	Album.findById(req.params.id, function(err, post){
		if (err) return next(err);
		res.json(post);
	});
});

// SAVE ALBUM
router.post('/', function(req, res, next){
	Album.create(req.body, function(err, post){
		if (err) return next(err);
		res.json(post);
	});
});

//UPDATE ALBUM
router.put('/id', function(req, res, next){
	Album.findByIdAndUpdate(req.params.id, req.body, function(err, post){
		if (err) return netx(err);
		res.json(post);
	});
});

//DELTE ALBUM
router.delete('/id', function(req, res, next){
	Album.findByIdAndRemove(req.params.id, req.body, function(err, post){
		if (err) return next(err);
		res.json(post);
	});
});

module.exports = router;

