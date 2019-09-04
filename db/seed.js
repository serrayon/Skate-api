
const db = require('../models');

const parkList = require('./parks.json');


// Remove all parks
db.Parks.deleteMany((err, result) => {
	if (err) return console.log(err);
	console.log('Successfully deleted all parks.');

	parkList.forEach(book => {
		db.Parks.create(book, (error, createdPark) => {
			if (error) return console.log(error);
			console.log(createdPark);
		});
	});
});

	
