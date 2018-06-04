var mongoose = require('mongoose');

var AlbumSchema = new mongoose.Schema({
	bandName: String,
	title: String,
	year: String,
	description: String,
	tracks: [{ 
		title: String,
		author: String,
		duration: String
	}],
});

module.exports = mongoose.model('Album', AlbumSchema);

