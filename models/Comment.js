const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  content: {
    type: String,
  }
  // image: {
  //   type: String,
  // },
  // description: {
  //   type: String,
  // },
  // location: {
  //   type: String,
  // },
});

const Comment = mongoose.model('Comment', commentSchema); // collection name 

module.exports = Comment;