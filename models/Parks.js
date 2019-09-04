const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cityParks = new Schema({
  name: {
    type: String,
  },
  image: {
    type: String,
  },
  description: {
    type: String,
  },
  location: {
    type: String,
  },
});

const Parks = mongoose.model('City', cityParks); // collection name 

module.exports = Parks;