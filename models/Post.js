// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const postSchema = new Schema({
//     title: {
//         type: String,
//     },

//     User: {
//         type: Schema.Types.ObjectId,
//         ref: 'User'
//     },

//     content: {
//         type: String,
//     },
    
//     create_date: {
//         type: Date,
//         default: Date.now,
//     },

//     City: {
//         type: Schema.Types.ObjectId,
//         ref: 'City'
//     },

//     likeCount: {
//         type: Number,
//         default: 0
//     }

// });

// const Post = mongoose.model('Post', postSchema); // collection name 

// module.exports = Post;

const mongoose = require('mongoose');
const Schema = mongoose.Schema;



// const Comment = require('./Comment');
const postSchema = new Schema({
    username: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    parks: {
        type: Schema.Types.ObjectId,
        ref: 'Parks'
    },
    // comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
    comments: [{
        text: String,
        postedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    }]
});

// { title: 'Hello',
//   content: 'New Post',
//   comments: [1]
// }

// var Comment  = mongoose.model('Comment', commentSchema);

const Post = mongoose.model('Post', postSchema)
module.exports =  Post;