// const express = require('express');
// const router = express.Router();
// const ctrl = require('../controllers');
// const authRequired = require('../middleware/authRequired');

// // create a post, request body need a city id, url params are usually for get request 
// router.post('/', authRequired, ctrl.posts.createPost)

// // delete a post
// router.delete('/:id', authRequired, ctrl.posts.deletePost)

// // post index -- get all post
// router.get('/userposts/:userId', authRequired, ctrl.posts.userPosts)

// // router.get('/cityposts/:cityId', authRequired, ctrl.posts.cityPosts)










const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');
const authRequired = require('../middleware/authRequired')

router.get('/:id', ctrl.post.show);
router.get('/', ctrl.post.index);
// router.post('/', authRequired, ctrl.post.create);
// router.post('/', ctrl.post.create);
router.put('/:id', authRequired, ctrl.post.edit);
router.delete('/:id', authRequired, ctrl.post.deletePost);

module.exports = router;